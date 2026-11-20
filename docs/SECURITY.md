# Prototype security boundaries

Never publish model keys, Supabase server/service-role keys, passwords, team codes, filled environment files or personal account/credential-helper configuration. Use ignored local settings or host-managed secrets.

## Implemented

- Shared team-code login issues an expiring HMAC-signed HttpOnly cookie, Secure on HTTPS and SameSite=Lax.
- Privileged routes check team access; write requests check Origin when present.
- Login, upload/analysis and submission limits.
- 5 MB photo limit and JPEG/PNG/WebP signature validation.
- Public API filtering and Supabase RLS keep pending/rejected observations and evidence out of public reads.
- Model instructions treat image text as evidence and ask for uncertainty. This is not a full prompt-injection security evaluation.

## Before production

The shared code grants both contribution and review without individual audit identities. Supabase server secrets bypass RLS. REST batches are sequential rather than transactional and review races need hardening. Add individual roles, atomic decisions, retention, rate-counter cleanup, image re-encoding/metadata removal, monitoring and a moderation process before public contribution.

The model provider receives submitted images. Avoid identifying/private photos without appropriate handling and consent. Photos do not prove location, age or authenticity.

Repository checks look for locally known secrets and common key patterns. They are not a complete security audit or a substitute for rotation after an actual exposure.
