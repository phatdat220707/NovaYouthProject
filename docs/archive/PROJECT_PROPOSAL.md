> Archived competition planning document. See the root README and current docs for implemented scope.

# BinCheck HK Project Proposal

BinCheck HK is a web app that helps people find recorded cigarette-disposal facilities and understand the evidence behind each location. Our goal today is to demonstrate a complete experience using a clearly labelled simulated dataset and working community submissions.

## 1 The problem

Someone who wants to dispose of a cigarette butt properly needs to find a suitable receptacle. An ordinary rubbish-bin marker does not necessarily tell them whether a cigarette receptacle is present. A previously recorded facility may also have moved, disappeared, or had its ashtray covered.

Our hypothesis is that photographs, observation dates, and visible change reports will help users judge whether a recorded facility is worth visiting. We have not yet established how often people encounter this problem, whether they would use the app, or whether it would reduce litter.

The product supports proper disposal. A bin marker does not certify that smoking is permitted there. The current prototype does not detect smoke or provide routes that avoid secondhand smoke, and we will not claim those capabilities.

## 2 The proposed product

A user opens the website, allows location access or selects an area, and sees nearby recorded facilities. Each location includes a photograph, approximate location, facility type, observation date and source, unresolved change reports, and a directions link.

Our main distinction is the visibility of evidence and changes over time. Every simulated location will carry a demonstration label. Historical source photographs used as examples will retain their actual dates and attribution and will not be presented as photographs of fictional destinations.

## 3 The core user journey

### Find a facility

Select a nearby recorded point, inspect its evidence and status, and open directions. Distances in the initial list are straight-line estimates. An external mapping service supplies walking directions. Example destinations and routes remain clearly labelled in demonstration mode.

### Add a new facility

Upload a photo, share current GPS coordinates or place a pin manually, and allow AI to suggest what is visible. The user reviews that suggestion and submits the location. It is saved as pending until reviewed.

### Report a change

Select an existing facility, describe a removal, relocation or other change, and provide supporting evidence where available. A missing facility may require a wider scene photo and a note. AI cannot prove an object is absent from a cropped image.

### Review and update

AI proposes a category and explains the visible evidence. A reviewer can approve, reject or request clarification. Reviewed changes update the record while preserving previous observations. One unreviewed report does not permanently delete a facility.

## 4 The role of AI

AI assists with photographic evidence review. It attempts to distinguish a visible cigarette receptacle, an ordinary bin without a visible ashtray, a covered or obstructed receptacle, and an unrelated or unclear photo. It also drafts a short structured report.

The output includes the proposed category, visible evidence, and whether review is required. Unclear input stays unclear. An unavailable AI service does not prevent the user from submitting a report for manual review.

AI does not independently verify a photograph's location, age, authenticity, current facility availability, or permission to smoke. Submission time, claimed capture date and reviewer decision remain separate fields.

Image assessment accuracy is still being tested. A successful image API call does not demonstrate reliable bin classification.

## 5 Scope for today

| Essential prototype | Future development |
| --- | --- |
| Interactive map and location cards | Wider Hong Kong coverage |
| GPS with manual selection | Contributor reputation |
| Nearest recorded facilities | More advanced duplicate detection |
| External directions link | Organisation reporting dashboard |
| Photo submission and AI assessment | Maintenance integrations |
| Pending submission and review flow | Community verification improvements |
| Report history and persistent records | Institutional partnerships |

Start with 10 simulated map records. Additional points are optional after the complete journey works. All seeded coordinates, statuses and events will be identified as demonstration data and will not be represented as verified facilities.

The prototype will not depend on government location data. The future service will require community contributions and deliberate initial coverage building. Crowdsourcing does not remove the challenge of attracting contributors or maintaining accurate records.

## 6 What adding to the database means

Adding a facility means saving a structured record to a shared server database and saving the photo in file storage linked to that record. It does not mean appending a line to a file on David's laptop or storing the only copy in one browser.

A submission contains an ID, submitted coordinates, location note, photo reference, submission time, optional claimed capture date, AI assessment, and review state. Review decisions and later reports are retained as history.

New facilities are pending rather than publicly confirmed. Reviewed records can appear on the shared map. The hackathon version will use a controlled reviewer flow. A deployed public service would require appropriate contributor and reviewer permissions.

An optional JSON or CSV export is a separate feature. Exports do not replace the shared database. We will only claim cross-device persistence after testing it on separate sessions.

## 7 Evidence and validation

Today we will test functionality with simulated locations and test photographs. We will check location selection, evidence display, image assessment, submission, persistence, review, and status updates.

Historical public-source photos may be used for image assessment with attribution. They do not establish that facilities still exist at their photographed locations. Any source camera coordinates are also not a surveyed position of a bin.

User demand, willingness to contribute and willingness to pay remain unvalidated assumptions. Interviews and field testing are planned after the competition. We will not conduct user interviews during today's build window.

## 8 Customers and business model

Initial users are residents or visitors looking for cigarette-disposal facilities. Potential paying customers include property managers, commercial estate operators and environmental organisations maintaining facilities or conducting audits.

A possible paid service would provide facility registers, unresolved reports, observation history and inspection exports. The public map could remain free.

We have no confirmed paying customers or institutional partners. Revenue, procurement and organisation adoption are hypotheses for a later pilot, not dependencies for today's demonstration.

## 9 Competition and differentiation

Existing public-facility, recycling and smoking-location maps are relevant alternatives. SmokeSpot advertises Hong Kong smoking-location information. We should not claim to be the first app in this category.

Our proposed distinction is evidence about cigarette-disposal facilities and how those records change over time. The demo will show a contribution moving from pending to reviewed and an existing record receiving a change report without losing its history.

## 10 Team responsibilities and delivery plan

| Responsibility | Owner |
| --- | --- |
| Product implementation, map, AI connection and testing | David with his coding assistant |
| Refined problem, business case and presentation preparation | Biruk |
| Main pitch and business questions | Biruk |
| Live demonstration and technical questions | David |
| Final scope and rehearsal | Both |

The revised target is to freeze scope by 11:15, build the core journey by 12:15, and use 12:15 to 12:30 for fixes and a backup recording. During 12:30 to 13:30, arrange lunch and prepare the pitch and Q&A. The scheduled pitch-training period is 13:30 to 14:00, followed by presentations.

## 11 Demonstration and testing

The main demonstration should take about 75 seconds:

1. Open the labelled demonstration map and inspect one facility record.
2. Upload a photo and choose a location for a new submission.
3. Show the actual AI response and submit the record as pending.
4. Review it and show that the record persists after refresh.
5. Show an existing facility's change-report history.

Detailed history may be shown in Q&A if it would make the main demo too long. Test unrelated and unclear photographs, denied GPS access, model failure, refresh persistence, and reviewer decisions. A recorded fallback must show the functioning prototype. If connectivity prevents a live AI call, disclose that and show the recorded call rather than presenting a canned answer as live inference.

## 12 Judging criteria and pitch

| Criterion | Demonstration |
| --- | --- |
| Business feasibility | Working contribution workflow and a clearly labelled customer hypothesis |
| Communication | A specific problem and an understandable demonstration |
| AI application | Actual image assessment that assists review and handles uncertainty |
| Creativity | A focused approach to evidence and changing facility records |

Originality remains a weakness. Our case rests on execution, a useful workflow and honest evidence. Simulated points demonstrate functionality rather than actual city coverage or market validation.

Suggested opening: "Finding a bin is only useful if it is still there and has somewhere to dispose of a cigarette butt."

Allocate 45 seconds to the problem, 45 to the solution, 75 to the demo, 45 to the customer and business hypothesis, 45 to AI and differentiation, and 45 to limitations and the next pilot.

Measure submission completion, persistence, review history and image-assessment results on the actual test set. Do not claim existing litter reduction or reduced secondhand-smoke exposure. A later field pilot must assess those outcomes separately.

## References

- [SmokeSpot Hong Kong](https://getsmokespot.app/hongkong) for competitor positioning only. Its listed locations have not been independently verified by our team.
- [HKU Annie Lab on orange bins and smoking areas](https://annielab.org/2024/05/28/false-orange-rubbish-bins-in-hong-kong-do-not-indicate-the-only-smoking-areas/) for the distinction between disposal facilities and smoking permission. This older article is not our source for current penalty amounts or a complete statement of current law.
- Photo source pages, authors, dates and licences are recorded in `preparation/bin_research/historical_candidates.json`.

Government facility counts, relocation statistics and government data sources have been removed from the proposed problem and data plan. They are not necessary for the prototype to work.
