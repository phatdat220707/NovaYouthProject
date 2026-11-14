# BinCheck HK

Nova Youth 2026 prototype by David and Biruk.

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

This repository currently contains the setup package and implementation handoff. The complete application is still being built; the repository is not yet a runnable finished app.

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
