# Validation record

## Portfolio cleanup, 20 November 2026

Checked the GitHub handoff checkout independently of the original deployment:

| Check | Result |
| --- | --- |
| `npm ci --prefer-offline --no-audit --no-fund` | Passed, 682 packages installed |
| `npx tsc --noEmit --incremental false` | Passed |
| `npm run build` | Passed, client / RSC / SSR Worker bundles generated |
| `npm run lint` | Failed: 16 errors and 367 warnings in the existing prototype/starter, including vendored Leaflet |
| Root vs web Supabase setup SQL | Byte-identical |
| Known local secret values and common key patterns | No matches in candidate public files, including XML inside the deck |

Lint is not claimed as passing. Current issues include explicit `any` types, state updates in effects, a non-hook handler named with a `use` prefix that triggers hook rules, and linting of minified vendor code. Typechecking/build success does not resolve that debt or prove runtime correctness. CI currently gates typechecking/build; it does not suppress or certify lint.

The static route classifier printed its existing Vinext limitation for `/`. This did not fail the build. A first built-preview launch hit restricted access to Wrangler's user configuration directory in this validation environment; it is not a build failure. A retry with a workspace-local `XDG_CONFIG_HOME` reached the server-ready state. The interrupted validation did not produce completed HTTP smoke-check results, so runtime acceptance is not claimed.

No production write, live AI assessment, new field study or public-deployment change was performed as part of this documentation cleanup. GitHub-hosted CI results must be read from the actual workflow run; a local pass is not a remote CI result.

## Historical competition checks, 14 November 2026

Local integration records from the competition report:

- Supabase submission/photo persistence.
- Pending-evidence visibility check passed.
- Approval made the demo record publicly readable.
- Demo labelling remained after approval.

These are historical integration results, not a fresh production retest. Raw records with live object identifiers and private API diagnostics are deliberately omitted from the public repo.

A separate synthetic image check tested two-colour reading. It was not a real-world bin-classification benchmark and must not be cited as classification accuracy.

## Not yet established

Field-verified coverage, model accuracy, sustained user demand, measured litter/health benefits, confirmed funding and production security. Manual acceptance steps for a separately configured backend are in SETUP.md.
