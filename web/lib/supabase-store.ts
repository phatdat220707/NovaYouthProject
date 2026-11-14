import {env} from "cloudflare:workers";
const setting=(name:"SUPABASE_URL"|"SUPABASE_SECRET_KEY")=>env[name]||process.env[name]||"";
export const hasSupabase=()=>!!setting("SUPABASE_URL")&&!!setting("SUPABASE_SECRET_KEY");
const esc=encodeURIComponent;
async function request(path:string,method="GET",body?:unknown,extra:Record<string,string>={}){
 const key=setting("SUPABASE_SECRET_KEY");const headers:Record<string,string>={apikey:key,...extra};if(key.startsWith("eyJ"))headers.Authorization=`Bearer ${key}`;
 if(body!==undefined)headers["Content-Type"]="application/json";
 const response=await fetch(setting("SUPABASE_URL").replace(/\/$/,"")+path,{method,headers,body:body===undefined?undefined:JSON.stringify(body),signal:AbortSignal.timeout(15000)});
 if(!response.ok)throw new Error(`Database request failed (${response.status})`);
 if(response.status===204)return [];const value=await response.text();return value?JSON.parse(value):[];
}
const read=(table:string,filter="")=>request(`/rest/v1/${table}?select=*${filter?"&"+filter:""}`);
const insert=(table:string,data:unknown,ignore=false)=>request(`/rest/v1/${table}${ignore?"?on_conflict=id":""}`,"POST",data,{Prefer:`${ignore?"resolution=ignore-duplicates,":""}return=representation`});
const update=(table:string,id:unknown,data:unknown,filter="")=>request(`/rest/v1/${table}?id=eq.${esc(String(id))}${filter}`,"PATCH",data,{Prefer:"return=representation"});

// Compatibility boundary for the prototype's fixed, parameterized store calls.
// No SQL text is sent to Supabase and no arbitrary query execution is exposed.
class Statement{
 values:unknown[]=[];
 constructor(public sql:string){}
 bind(...values:unknown[]){this.values=values;return this;}
 async execute():Promise<any[]>{
  const q=this.sql.replace(/\s+/g," ").trim(),v=this.values;
  if(q.startsWith("SELECT * FROM facilities"))return read("facilities",q.includes("WHERE id=")?`id=eq.${esc(String(v[0]))}`:q.includes("WHERE status")?"status=not.in.(pending,rejected)":"");
  if(q.startsWith("SELECT * FROM observations"))return read("observations",q.includes("WHERE id=")?`id=eq.${esc(String(v[0]))}`:q.includes("WHERE state='approved'")?"state=eq.approved&order=created_at.desc":"order=created_at.desc");
  if(q.startsWith("SELECT object_key,content_type FROM photos")||q.startsWith("SELECT id FROM photos"))return read("photos",`id=eq.${esc(String(v[0]))}`);
  if(q.startsWith("SELECT id FROM observations"))return read("observations",`photo_id=eq.${esc(String(v[0]))}&state=eq.approved&limit=1`);
  if(q.startsWith("SELECT o.*,f.title")){
   const [obs,facilities,photos]=await Promise.all([read("observations","state=eq.pending&order=created_at.desc"),read("facilities"),read("photos")]);
   return obs.map((o:any)=>{const f=facilities.find((f:any)=>f.id===o.facility_id),p=photos.find((p:any)=>p.id===o.photo_id);return {...o,title:f?.title||"Untitled",lat:f?.lat,lng:f?.lng,assessment:p?JSON.stringify(p.assessment):null};});
  }
  if(q.startsWith("INSERT INTO attempts")){const count=await request("/rest/v1/rpc/bincheck_increment_attempt","POST",{attempt_id:v[0]});return [{count}];}
  if(q.startsWith("INSERT INTO photos"))return insert("photos",{id:v[0],object_key:v[1],content_type:v[2],assessment:JSON.parse(String(v[3])),created_at:v[4]});
  if(q.startsWith("INSERT INTO facilities"))return insert("facilities",{id:v[0],title:v[1],lat:v[2],lng:v[3],kind:v[4],status:v[5],photo_id:v[6],note:v[7],created_at:v[8],updated_at:v[9],demo:v[10]},true);
  if(q.startsWith("INSERT INTO observations"))return insert("observations",{id:v[0],facility_id:v[1],photo_id:v[2],report_type:v[3],note:v[4],state:"pending",created_at:v[5]});
  if(q.startsWith("UPDATE observations SET state=")){
   const result=await update("observations",v[3],{state:v[0],reviewed_at:v[1],review_note:v[2]},"&state=eq.pending");if(!result.length)throw Object.assign(new Error("This report has already been reviewed."),{status:409});return result;
  }
  if(q.startsWith("UPDATE facilities SET status='rejected'"))return update("facilities",v[0],{status:"rejected"},"&status=eq.pending");
  if(q.startsWith("UPDATE facilities SET status="))return update("facilities",v[4],{status:v[0],...(v[1]?{photo_id:v[1]}:{}),updated_at:v[2],note:v[3]});
  throw new Error("Unsupported store operation");
 }
 async first<T=Record<string,unknown>>():Promise<T|null>{return (await this.execute())[0]||null;}
 async all<T=Record<string,unknown>>():Promise<{results:T[]}>{return {results:await this.execute()};}
 async run(){await this.execute();return {success:true};}
}
export const supabaseDb={prepare:(sql:string)=>new Statement(sql),async batch(statements:any[]){const results=[];for(const statement of statements)results.push(await statement.run());return results;}};
export const supabaseBucket={
 async put(key:string,bytes:Uint8Array,options:{httpMetadata:{contentType:string}}){
  const secret=setting("SUPABASE_SECRET_KEY"),headers:Record<string,string>={apikey:secret,"Content-Type":options.httpMetadata.contentType,"x-upsert":"false"};if(secret.startsWith("eyJ"))headers.Authorization=`Bearer ${secret}`;
  const response=await fetch(setting("SUPABASE_URL")+`/storage/v1/object/bin-evidence/${key}`,{method:"POST",headers,body:bytes as BodyInit,signal:AbortSignal.timeout(20000)});if(!response.ok)throw new Error("Photo storage unavailable");
 },
 async get(key:string){const secret=setting("SUPABASE_SECRET_KEY"),headers:Record<string,string>={apikey:secret};if(secret.startsWith("eyJ"))headers.Authorization=`Bearer ${secret}`;const response=await fetch(setting("SUPABASE_URL")+`/storage/v1/object/authenticated/bin-evidence/${key}`,{headers,signal:AbortSignal.timeout(15000)});return response.ok?{body:response.body}:null;},
 async delete(key:string){return request("/storage/v1/object/bin-evidence","DELETE",{prefixes:[key]});}
};
