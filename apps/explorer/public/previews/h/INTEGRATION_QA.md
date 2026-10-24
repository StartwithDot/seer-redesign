# Combined integration ready for review

Date: 25/10/2026. Repository: https://github.com/StartwithDot/seer-redesign. Branch: codex/explorer-deep-integration. Base/current main: cebb9ad60ce06ceae9e33d6048d1fe446f77eb4f.

Landing protection: all701 other existing files are byte-identical. The only existing file changed is package-lock.json:43 added lines register Deep H and its vendored EF link. No existing package entry/version is changed or removed. Root npm ci --dry-run passes. The original working folder, its remote, completed Deep source and running previews remain untouched. Final source backup is recorded in LATEST_DEEP_BACKUP.txt outside this repository.

Allowed source/deployment additions:
- apps/explorer/public/previews/h/
- site/explorer/previews/h/
- apps/deep-h/
- site/deep/previews/h/

Preview links:
- http://127.0.0.1:5296/explorer/previews/h/index.html
- http://127.0.0.1:5296/deep/previews/h/index.html

## Current integration verification

| Check | Result | Cases |
|---|---|---:|
| Explorer open-trade | PASS | 5 |
| Explorer scroll-panel | PASS | 9 |
| Explorer dropdowns | PASS | 5 |
| Explorer parity | PASS | 44 |
| Explorer alignment | PASS | 13 |
| Explorer contrast | PASS | 74 |
| Explorer perf | PASS | 2 |
| Deep fixture/data parity | PASS |5 |
| Deep mock funds/CSV/Profile/Guide flows | PASS |16 |
| Deep deployed navigation | PASS |8 |
| Deep unintercepted route/theme/viewport network matrix | PASS |64 |
| Deep performance workloads | PASS |7 |
| Deep idle/settled animation checks | PASS |3 |
| Cross-product navigation/theme/viewport cases | PASS |4 |

259 current cases pass. Deep TypeScript/Vite production build passes with the inherited large-fixture chunk warning. All16 Deep fixture files equal upstream. All53 Deep application source/data files equal the completed original. The31 built Deep files match the static preview;90 Explorer runtime files match their source. Eight full screenshots, both products at1440x900 and390x844 in dark/light, were inspected. Evidence directory is recorded in checks/results/combined.json.

Explorer p95: 13.9ms, average 123.9fps; 2 host intervals exceeded20ms, max 27.9ms. Deep workload p95 range:7.1-14.0ms, with zero long tasks in the recorded workloads and zero continuing Canvas/RAF work in the three settled checks. These are headless Chrome measurements, not guarantees for every physical display/frame.

Deep network: no unexpected local/runtime errors across64 route cases. One external avatar URL failed and its designed fallback rendered; external service availability is not claimed. Financial activity remains local mock behavior; no live signatures/transactions were performed.

Historical standalone QA (including Deep's588 cases and Explorer's design captures) remains explicitly historical. Current integration results are listed above; missing screenshots/control inventories were not fabricated. Large historical screenshot archives and local build/dependency folders are excluded from the staged source.

## Scope and publication

New previews are linked to each other. Existing landing and production page entrypoints remain unchanged. Only preview-relative favicon/navigation paths, the Deep test harness base-path helper, packaging metadata and guards differ from the completed sources. No product calculation or fixture was rewritten.

The staged diff must pass node apps/explorer/public/previews/h/checks/protect-upstream.mjs. It permits additions only inside the four H directories plus the additive root lock registration; every old lock entry is checked for equality. No commits, pushes or deployments have occurred. Review the exact staged file list before publishing; never push from the old mixed checkout or force-push main.
