# BinCheck HK

Nova Youth 2026 prototype by David and Biruk.

**Live demo: https://bincheck-hk-nova-david.lonehoop2.chatgpt.site** — public viewing; team access is required for contributions and reviews.

**Biruk: start with [the Supabase setup guide](docs/SUPABASE_SETUP.md), then run [supabase/setup.sql](supabase/setup.sql) once in the SQL Editor of a NEW Supabase project.**

## Current scope

- English introduction with a few sourced Hong Kong smoking-rule facts.
- Leaflet map with 10 clearly labelled simulated locations near Sai Ying Pun and HKU.
- Public read-only access. Team-only submissions, AI photo assessment and review.
- Shared team access code today; individual accounts are a future feature.
- Explicit Analyze Photo button. Saved results are reused.
- Every stage-demo submission stays labelled Demo after approval.
- Last loaded public location list remains available with an Offline label. Writes and AI calls pause offline.
- Labelled historical sample photo plus user uploads.

## Architecture

React and TypeScript frontend, Cloudflare-hosted server, Supabase PostgreSQL and private photo storage. The server keeps model credentials private and checks team permissions. Supabase Auth is planned for individual accounts.

Application source is available in `web/`. The complete Supabase submission and approval flow passed integration testing: pending records and photographs stay hidden from public visitors, and approved demo records become visible. The deployed application also passed homepage, Supabase connection, public map, team sign-in and protected-review checks.

## Run the application

Requires Node.js 22.13 or newer. From `web/`, run `npm ci`, copy `.dev.vars.example` to `.dev.vars`, fill the values privately, then run `npm run dev`. Open the exact Local URL printed by the server. Do not commit the filled secrets file.

The map includes 10 simulated seed points plus approved demo submissions. All remain labelled Demo. Individual accounts are not yet implemented.

## Supabase handoff

1. Create a new project named BinCheck HK in an available region near Hong Kong.
2. Run supabase/setup.sql once. Confirm it returns attempts, facilities, observations, photos and profiles.
3. Check that Storage contains the PRIVATE bucket bin-evidence.
4. Obtain the project URL, publishable key and server-only secret key from Connect / Settings > API Keys.
5. Copy .env.example to a local ignored configuration file and fill values privately. Configure deployed server secrets through the hosting platform.
6. Share only the project URL and setup status in GitHub. Transfer the secret key privately to David or add him to the Supabase project through your normal collaboration settings.

**Never commit a database password, Supabase secret/service-role key, model API key, team code, filled .env file or private configuration JSON.**

## Documents

- [Supabase setup](docs/SUPABASE_SETUP.md)
- [Implementation plan](docs/IMPLEMENTATION_PLAN.md)
- [Product proposal](docs/PROJECT_PROPOSAL.md)
