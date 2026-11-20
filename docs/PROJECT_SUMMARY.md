# Project summary

**Product:** BinCheck HK
**Team:** David (Phat Dat Nguyen) and Biruk
**Event:** Nova Youth 2026, HKU Station, 14 November 2026
**Result:** Bronze, reported by the team. Certificate/results URL not attached; Shenzhen advancement unconfirmed.

## Delivered

English cream/orange/green interface, rules introduction, Leaflet map, GPS, straight-line distance estimates, public viewing, team-only photo uploads and facility changes, AI image assessment, review queue and shared evidence history. Supabase stores records/photos; Cloudflare-backed hosting serves the app.

The implemented use case is finding recorded disposal facilities. People avoiding secondhand smoke are a proposed second user group. Smoke detection, exposure mapping and smoke-aware routing are not implemented.

## Proposed funding and intended impact

A government health/environment body could support free public access. Cleaner streets and future reductions in unwanted smoke exposure are intended benefits, not measured outcomes. No funding, partner, paying customer or field-verified coverage is confirmed.

The pitch's roughly 11,000 figure is a dated FEHD count of public litter containers, not cigarette receptacles. It is an illustrative database-size scenario. Photos, traffic, AI and maintaining accurate records require separate budgeting. Competition notes retain source links and assumptions.

## Next steps

1. Check a small real facility dataset and replace simulated records only after field verification.
2. Observe realistic disposal-finding tasks and compare with existing maps/current behaviour.
3. Add individual contributor/reviewer accounts and transaction/concurrent-review protection.
4. Establish rechecks, expiry and moderation before enabling public contributions.
5. Evaluate any smoke-awareness extension separately using recent observations and suitable exposure measurements.

## Materials

The seven-slide [deck](presentation/BinCheck-HK-Pitch.pptx) targets five minutes including a demo. [Speaker notes](presentation/SPEAKER_NOTES.md) retain funding assumptions and dated sources. Earlier planning documents are in `archive/`; current code and architecture/setup docs take precedence where they differ.
