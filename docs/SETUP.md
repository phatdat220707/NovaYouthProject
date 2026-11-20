# Local setup and hosting

## Database

Create a fresh Supabase project. Run [the root SQL](../supabase/setup.sql) in its SQL editor to create tables, policies, the rate-limit RPC and the private `bin-evidence` bucket. The root SQL and `web/supabase/setup.sql` match: run only one. Policy creation is intended for a new project, not repeat execution against existing data.

## Server configuration

From `web/`, copy `.dev.vars.example` to `.dev.vars`. On PowerShell:

```powershell
Copy-Item .dev.vars.example .dev.vars
```

| Setting | Purpose |
| --- | --- |
| `SUPABASE_URL` | Your project's Data API / Storage URL |
| `SUPABASE_SECRET_KEY` | Server-only secret or legacy service-role key |
| `TEAM_ACCESS_CODE` | Strong private code for contributor/reviewer access |
| `MODEL_API_KEY` | Vision gateway key; optional for manual-review fallback |

No real credentials are included. Current browser code calls the server and does not need the legacy root example's browser Supabase keys. The storage bucket is hardcoded as `bin-evidence`; `SUPABASE_STORAGE_BUCKET` is not currently read.

The competition source uses `https://zendigikey.shop/v1/chat/completions` with `claude-sonnet-5.5`. Provider availability/model naming have not been newly certified. To use another provider, adapt `assess()` in `web/lib/server.ts` for a compatible vision request. Keep credentials server-side. No personal API balance or purchase instructions belong in this repo.

## Install, run and verify

Requires Node.js 22.13+.

```sh
cd web
npm ci
npm run dev
```

Use the printed local URL, normally localhost:5173. Allow browser geolocation to test GPS. Demo coordinates stay simulated regardless of your location.

```sh
npx tsc --noEmit
npm run lint
npm run build
```

This is Vinext/Vite on Workers, not a stock `next dev` deployment. The persistent backend needs Supabase configuration or explicitly configured D1/R2 bindings.

## Hosting

The competition demo used Sites on Cloudflare-backed hosting. This repo does not include the original account/deployment credentials. The generic `.openai/hosting.json` has no project identifier or DB/storage bindings. Configure server secrets through your host. `npm run start` runs the built Worker locally; it does not publish a Site. Starter/runtime details are retained in `web/README.md`.

## Manual checks using your own test project

- All seed locations show Demo; details can be dismissed.
- GPS granted/denied paths explain the distance origin. Values are straight-line estimates.
- Anonymous visitors cannot upload, submit, review or read pending evidence.
- Team uploads under 5 MB accept JPEG/PNG/WebP; AI runs only on Analyze Photo.
- Pending new records stay hidden publicly, then appear after approval while retaining Demo.
- Change reports retain observation history.
- Disconnect after loading the list: Offline appears and writes pause. Offline map tiles are not expected.

Historical results and current reproducibility checks: [VALIDATION.md](VALIDATION.md).
