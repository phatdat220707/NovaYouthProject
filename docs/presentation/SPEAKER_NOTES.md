# BinCheck HK: five-minute pitch

SLIDE 1 — 20 seconds — Biruk
Imagine two people on the same Hong Kong street. One needs a place to dispose of a cigarette butt. The other wants to avoid breathing somebody else's smoke. BinCheck HK starts with better disposal information and a longer-term ambition for smoke-aware public spaces. We are David and Biruk.

The cover illustration is an existing BinCheck HK interface asset supplied in this chat. No measured environmental or health outcome is claimed.

SLIDE 2 — 35 seconds — Biruk
Our first user is an adult looking for a cigarette-disposal bin in an unfamiliar area. An ordinary bin marker may not tell them whether a cigarette tray is present or whether the record is current. Our second user wants to avoid secondhand smoke, including residents and visitors in places with frequent smoking. These are distinct needs. The disposal workflow works today. Recent smoking reports and avoidance options are a proposed extension, and we have not validated demand for either segment.

Bins alone do not establish that smoking is occurring nearby. Do not describe a disposal pin as a smoke hotspot or a safe-route indicator.

SLIDE 3 — 45 seconds — David
The core is a shared record supported by photographic evidence. A contributor uploads a photo and requests AI assessment. The model proposes what it can see, including uncertainty. A human reviewer decides whether to publish the observation. The database retains the photo and change history. This is more than a one-off image answer because the evidence becomes part of a persistent location record. We have tested the workflow, but not classification accuracy. A photograph cannot prove its age, location or present availability.

Image: historical 10 September 2012 photograph by Clément Bucco-Lechat, CC BY-SA 3.0. https://commons.wikimedia.org/wiki/File:Hong-Kong_bin.JPG
Product implementation and integration checks: supplied context and team tests.

SLIDE 4 — 75 seconds total — David demonstrates
SAY, about 10 seconds: Here is the deployed prototype. Every location in today's demo is labelled simulated. I will show how evidence becomes a reviewed record.

DEMO, about 55 seconds:
1. Show a map record and its photo or observation history.
2. Open Add facility / upload photo. Use a prepared photograph and coordinates. The team should already be signed in.
3. Show an actual saved AI assessment. If making a fresh request, explain any delay. Do not imply a cached result is fresh inference.
4. Submit for review. Approve a clearly labelled demo observation, then show the record and retained history on the map.

CLOSE, about 10 seconds: The tested contribution and review flow is live. Today's app neither detects smoke nor computes smoke-aware routes.

REHEARSAL: prepare the photo and a completed test record before pitching. Do not put the team code on the slides. If using a backup recording, identify it as recorded. If inference exceeds the demo budget, use the previously saved assessment, labelled accurately. Screenshot: team-supplied BinCheck HK screenshot, with simulated data; OSM attribution remains visible.
Live app: https://bincheck-hk-nova-david.lonehoop2.chatgpt.site/

SLIDE 5 — 55 seconds — Biruk
We see two paths to impact. First, easier disposal and clear rule information could support Hong Kong's environmental hygiene and anti-littering objectives. Hong Kong's official guidance includes cigarette butts in the HK$3,000 littering fixed penalty. We are not a government enforcement tool and do not claim endorsement. Second, sustained reductions in secondhand-smoke exposure could deliver meaningful long-term health benefits, especially where residents encounter smoking frequently. CDC identifies heart disease, stroke and lung cancer among the harms of secondhand smoke. That establishes why exposure matters; it does not prove BinCheck produces a health benefit. Our future smoke-awareness layer needs recent reports, field checks and exposure evaluation. A bin's position alone is insufficient.

Sources checked 14 November 2026:
Hong Kong ISD anti-littering announcement: https://www.isd.gov.hk/eng/tvapi/23_fh72.html
Hong Kong tobacco legislation guidance: https://www.taco.gov.hk/t/english/legislation/legislation_faq.html
CDC health problems caused by secondhand smoke: https://www.cdc.gov/tobacco/secondhand-smoke/health.html
Pilot outcomes remain unmeasured. We have no smoke sensors or exposure-aware routing in the prototype.

SLIDE 6 — 40 seconds — Biruk
Our proposed model is government funding, with free public access. A health or environmental body could support it for cleaner streets and long-term lung-health goals. COPD caused 991 deaths in Hong Kong in 2023, including 955 among people aged 65 and above. We have not yet measured a health benefit from our app. Citywide data need not mean expensive hosting: FEHD reported about 11,000 public litter containers. A compact database and compressed photographs could start on core paid hosting plans from about 30 US dollars a month. Traffic, AI calls and verification add costs. We have not secured funding.

FACTS AND SOURCES, checked 14 November 2026
1. FEHD Annual Report 2024, Chapter IV: about 11,100 public litter containers. Rounded to ~11,000 for a planning scenario. This is a dated public-container count, not a current census of all bins or of cigarette receptacles. The eligible cigarette-disposal subset still needs field verification.
https://www.fehd.gov.hk/english/publications/annualrpt/2024/4.html
2. CHP NCD Watch, June 2025, page 5, Table 1: 991 registered COPD deaths in 2023, including 955 in people aged 65+. The publication advises avoiding secondhand smoke. We do not assert a ranking among elderly causes of death or attribute all COPD deaths to secondhand smoke. This supports the public-health rationale, not a measured effect of BinCheck. Smoke-awareness features and exposure evaluation are future work. A bin pin alone does not show smoke exposure.
https://www.chp.gov.hk/files/pdf/ncd_watch_jun_2025_en.pdf
3. Supabase Pro starts at US$25/month, including a first project, 8 GB disk and 100 GB file storage. Cloudflare Workers Paid has a US$5 monthly minimum. The combined ~US$30/month is an illustrative core-hosting starting point within plan allowances, not a quote, current hosting bill or complete citywide operating budget.
https://supabase.com/pricing
https://developers.cloudflare.com/workers/platform/pricing/
4. Planning assumptions, not measurements or implemented compression guarantees: 11,000 records × 2 KB = ~22 MB of raw metadata; one compressed 200 KB photo per record = ~2.2 GB. Database indexes, history, more photos and smoking observations increase storage. Egress, dynamic traffic, AI analysis, maps, verification, moderation, maintenance and any procurement/security requirements need separate budgeting. The record count alone does not cap costs. Funding source does not change these usage costs.
5. Government health/environmental funding is the proposed model. No funder, scheme eligibility, endorsement, partnership, grant award or investment is confirmed. Property managers and estate operators are not proposed paying customers.


SLIDE 7 — 30 seconds — Biruk
Our next step is a focused pilot. First, replace simulated locations with checked facility records in one managed area. Test disposal tasks with the first group and co-design smoke-awareness information with the second. Only then should we trial reports and measure changes in exposure. We are seeking a pilot partner, not claiming a proven health intervention. BinCheck HK begins with a working disposal product and a clear route to test its broader public value. Thank you.

TOTAL TARGET: 20 + 35 + 45 + 75 + 55 + 40 + 30 = 300 seconds, including the demo. Rehearse once and shorten speech if the demo needs more time.

Q&A reminders:
- No interviews, field-verified coverage, paying customers or environmental/health outcomes yet.
- Smoke-avoidance features are proposed, not implemented.
- Bin location is not permission to smoke and does not measure smoke exposure.
- Community reports may be stale or subjective. A future layer needs dates, review, expiry and field validation.
- Use exposure-relevant measurements and appropriate field assessment. General PM2.5 readings alone do not isolate tobacco smoke.
- The model assists reviewers; image accuracy remains unvalidated.
Live app: https://bincheck-hk-nova-david.lonehoop2.chatgpt.site/
