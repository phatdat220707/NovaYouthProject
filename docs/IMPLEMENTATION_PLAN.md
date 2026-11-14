# Current implementation decisions

This document supersedes backend and login details in earlier proposal drafts.

## Product

- BinCheck HK finds recorded cigarette-disposal facilities. It does not certify legally permitted smoking locations.
- English introduction with 3 or 4 concise smoking-rule facts and official sources, then Explore Map.
- Light cream background with orange and green accents.
- Anyone with the link can view the app. Only David and Biruk contribute and review today.
- Ten simulated locations around Sai Ying Pun and HKU, all clearly labelled Demo.
- New stage-demo submissions keep the Demo label after review.
- One shared team access code today. Individual accounts are a future feature.

## Technical architecture

- React and TypeScript, with the prepared Vinext starter.
- Leaflet 1.9.4 with OpenStreetMap-based tiles and attribution.
- Cloudflare hosts the website and protected server routes.
- Supabase PostgreSQL stores shared records; Supabase Storage stores photos in the private bin-evidence bucket.
- Supabase Auth is planned for future accounts, not an additional dependency for today's shared-code login.
- The server calls the model gateway after the user presses Analyze Photo. Save and reuse the result for that upload.
- No model or Supabase secret key is sent to the browser.
- The last successfully loaded public location list can be cached with an Offline label. AI and submissions pause while offline.
- A historical sample photo with its source and date is available alongside ordinary uploads.

## Core workflow

Introduction -> map -> team access -> photo and coordinates -> Analyze Photo -> pending submission -> team review -> approved labelled map record. Change reports preserve observation history.

Photos alone do not prove geographic location, freshness, authenticity, legal permission or present availability. Unclear input stays unclear. A failed AI call allows manual review rather than an invented result.

## Responsibilities

Biruk creates Supabase and prepares the business case, pitch and Q&A. David and his coding assistant implement the app, connect the backend, test and demonstrate it. No user interviews during today's build window.

## Current handoff status

This repo initially contains setup instructions, SQL and the product handoff. The working app is still being implemented. Existing local server code is being adapted from the earlier Cloudflare D1/R2 plan to Supabase. Do not claim the production database connection, image accuracy or cross-device flow is already tested.
