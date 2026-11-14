declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    MODEL_API_KEY?: string;
    TEAM_ACCESS_CODE?: string;
    SUPABASE_URL?: string;
    SUPABASE_SECRET_KEY?: string;
  }
}
