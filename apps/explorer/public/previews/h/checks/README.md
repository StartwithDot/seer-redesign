# Explorer H checks

Run from the workspace root:

```powershell
node apps/explorer/public/previews/h/checks/serve.mjs
# In another terminal, with the server running:
node apps/explorer/public/previews/h/checks/run.mjs
```

The application is static vanilla HTML/CSS/JS and needs no bundler. Serve the H folder through any static server at /previews/h/. The integration helper maps preserved site/explorer/previews/g to /previews/g/, app fixtures to /previews/data/ and serves the existing site folder for production-style paths. Its default port is5296. Nothing is deployed.

Browser checks use playwright-core and the installed Windows Chrome. Set CHROME_PATH and EXPLORER_ORIGIN when using another host. The lib resolves an installed playwright-core first, then the provided desktop runtime. The prompt's macOS Chrome path was adapted to this Windows workspace. Python/Pillow is used only to compose QA contact sheets, never to alter shipping imagery.

Run the seven suites sequentially. Concurrent screenshot capture changes the performance trace by competing for CPU; this caused the first noisy perf run. Reports remain in checks/results. Each assertion's data and errors are saved. Performance gates average >=55fps and p95 <=20ms; the report also exposes every interval >20ms and the maximum rather than claiming every host frame meets16.67ms.

parity compares actual observed G controls because the supplied live_controls_per_route.json was absent. It normalizes replaced decorative Unicode icons, verifies original fixture equality and unchanged G hashes, and exercises filtering, ordering, modes, storage, sheets, amount validation, simulated orders, charts, downloads, tabs, leaderboard pagination and Create. External protocol operations remain explicit handoffs.

alignment checks five viewport sizes in both themes, fixed tile slots and row offsets, hero action/control separation, long record text and document bounds. Intentional table overflow and brief-permitted tile/inspector title clamps retain full text via titles/accessibility. scroll-panel covers1440x900,1440x700,1100x800,390x844. Short panels correctly need no inner scroll. contrast uses computed foreground and composited backgrounds, including aria-hidden visual graph marks, across37 interactive states in both themes. Runtime checks reject external requests, page exceptions and HTTP errors.

Baseline began with250 captures and was expanded to 340 (34shared states ×5sizes ×2themes). Final matrix has156 captures (39states ×2sizes ×2themes), plus full pages. Agent mode is selected before opening the mobile sheet. History-point and score-explainer captures intentionally scroll to their named content; other state captures start at the document top. Quick trade captures scroll only its internal body to expose the named field and persistent action.

The files apply-design.mjs, finalize-foundation.mjs and enhance.mjs are retained as implementation history, with reviewed source extracts and style fragments. They are one-time authoring scripts and must not be reapplied over the finished app. Shipping runtime sources are the H root files, data and assets.

See ../UPSTREAM_INTEGRATION.md for repository adaptation and deployment. Historical screenshot/authoring commands refer to the original design workspace and are not required for this integration.
