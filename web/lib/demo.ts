export type Assessment={category:string;evidence:string[];needs_review:boolean;error?:string};
export type Observation={id:string;facility_id:string;photo_id:string|null;report_type:string;note:string;state:string;created_at:string;reviewed_at:string|null;review_note:string|null;assessment?:Assessment};
export type Facility={id:string;title:string;lat:number;lng:number;kind:string;status:string;photo_id:string|null;note:string;created_at:string;updated_at:string;demo:number;history?:Observation[];pendingReports?:number};
export const CENTER:[number,number]=[22.2850,114.1370];
const places:[string,number,number,string,string][]=[
["Queen’s Road West",22.2868,114.1357,"Bin with ashtray","active"],
["Third Street",22.2850,114.1385,"Bin with ashtray","active"],
["Eastern Street",22.2866,114.1400,"Standalone receptacle","needs_review"],
["Centre Street",22.2857,114.1354,"Standalone receptacle","active"],
["Water Street",22.2867,114.1323,"Bin with ashtray","active"],
["Pok Fu Lam Road",22.2838,114.1352,"Bin with ashtray","unavailable"],
["Bonham Road",22.2836,114.1383,"Standalone receptacle","active"],
["Hill Road",22.2850,114.1306,"Bin with ashtray","active"],
["High Street",22.2842,114.1360,"Bin with ashtray","needs_review"],
["Western Street",22.2863,114.1339,"Standalone receptacle","active"]];
export const DEMO_FACILITIES:Facility[]=places.map(([title,lat,lng,kind,status],i)=>({id:`demo-${i+1}`,title,lat,lng,kind,status,photo_id:null,note:"Simulated facility. This point is not a verified real-world disposal location.",created_at:"2026-11-14T01:00:00.000Z",updated_at:"2026-11-14T01:00:00.000Z",demo:1}));
export const STATUS_LABEL:Record<string,string>={active:"Reviewed",needs_review:"Needs review",unavailable:"Reported unavailable",pending:"Pending review",rejected:"Not published"};
export const CATEGORY_LABEL:Record<string,string>={cigarette_receptacle_visible:"Cigarette receptacle visible",ordinary_bin:"Ordinary bin",covered_or_obstructed:"Covered or obstructed",irrelevant:"Unrelated image",unclear:"More evidence needed"};
export function distance(a:number,b:number,c:number,d:number){const r=Math.PI/180,x=(c-a)*r,y=(d-b)*r,q=Math.sin(x/2)**2+Math.cos(a*r)*Math.cos(c*r)*Math.sin(y/2)**2;return 6371000*2*Math.atan2(Math.sqrt(q),Math.sqrt(1-q));}
