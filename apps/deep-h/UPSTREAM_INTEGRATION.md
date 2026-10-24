# Explorer and Deep upstream integration

Main: https://github.com/StartwithDot/seer-redesign
Base: cebb9ad60ce06ceae9e33d6048d1fe446f77eb4f
Branch: codex/explorer-deep-integration

This is an additive preview integration. Only four new directories are permitted: apps/explorer/public/previews/h/, site/explorer/previews/h/, apps/deep-h/, site/deep/previews/h/. Landing files, root package.json, shared EF and production entrypoints are untouched. One root lockfile update adds only the four Deep H workspace/link records; all existing dependency entries remain unchanged. Original local source remains in C:/Users/josep/Desktop/seer_design. Deep source/fixtures/tests/verification are backed up; the snapshot path and hashes are recorded outside this repository.

Preview URLs on the local static helper:
- http://127.0.0.1:5296/explorer/previews/h/index.html
- http://127.0.0.1:5296/deep/previews/h/index.html

Deep uses its package-lock and vendored EF with npm ci --workspaces=false --ignore-scripts --no-audit --no-fund from apps/deep-h, followed by npm run build --workspaces=false. Its dist output is mirrored only into site/deep/previews/h/. The root Vercel config already serves site, so it needs no edit. node_modules, generated local dist, large screenshots and failure artifacts are excluded from source additions.

Portability-only changes: Deep favicon is relative; Deep's own Apps link is relative; Explorer/Deep Apps entries link between the new previews. Explorer footer Deep link also targets the new preview. Deep's test harness go helper preserves a supplied deployment subpath rather than forcing the origin root; assertions remain unchanged. User-visible product data and financial/mock logic remain identical. All16 Deep JSON fixtures match existing upstream apps/deep byte-for-byte.

Historical Deep reports/VERIFICATION.md records its completed standalone QA, including588 copied cases. Historical Explorer FINAL_QA.md records its standalone design QA. This integration separately checks a clean build, current deployed routes, source data, both-product navigation and performance. New measurements are in each H app's reports/checks/results. A report describing a historical run is not substituted for a new result.

Do not stage the old mixed checkout. Use explicit allowed paths. Before publication, fetch current main, run apps/explorer/public/previews/h/checks/protect-upstream.mjs, review the exact added-file diff and keep commit/push separate from preparation. No commit, push, deployment or transaction is performed by these checks.

Final verification: see INTEGRATION_QA.md in either H app, or STATUS.md in the integration workspace. The permitted root lockfile update is required for root npm ci compatibility.
