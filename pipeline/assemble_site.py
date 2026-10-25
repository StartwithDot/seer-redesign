"""Usage: python3 pipeline/assemble_site.py  -> site/ (landing + all built apps wired together). Sources stay untouched; only the copies are rewritten.
Layout: site/index.html (landing), site/futarchy/, site/risk/, site/opportunity/, site/deep/, site/explorer/. Run after `npm run build -w apps/<app>`."""
import re, shutil, pathlib
R = pathlib.Path(__file__).resolve().parent.parent
S = R / "site"
LAND = R / "deliver/home4/master"
APPS = {"futarchy": "apps/futarchy", "risk": "apps/risk", "opportunity": "apps/opportunity", "deep": "apps/deep", "explorer": "apps/explorer"}
if S.exists(): shutil.rmtree(S)
S.mkdir()
for name in ["index.html", "style.css", "assets", "fonts", "vendor", "dist"]:
    p = LAND / name
    (shutil.copytree if p.is_dir() else shutil.copy)(p, S / name)
import subprocess, time
for name, src in APPS.items():
    d = R / src / "dist"
    for _ in range(12):
        if (d / "index.html").exists(): break
        time.sleep(5)
    if not (d / "index.html").exists(): subprocess.run(["npm", "run", "build", "-w", src], cwd=R, check=True)
    shutil.copytree(d, S / name)
    if name == "explorer":
        shutil.copytree(R / src / "public/previews", S / name / "previews", dirs_exist_ok=True)
        for f in ("seer-shell.js", "seer-shell.css", "seer-subbar.css"): shutil.copy(R / "packages/ef" / f, S / name / "previews/g" / f)
        for f in ("seer-shell.js", "seer-shell.css", "seer-subbar.css"): shutil.copy(R / "packages/ef" / f, S / name / "previews/v3" / f)
        (S / name / "index.html").write_text('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Seer Explorer</title><meta http-equiv="refresh" content="0;url=previews/v3/"><script>location.replace("previews/v3/");</script></head><body><a href="previews/g/">Open Explorer</a></body></html>')
# landing links -> local apps (Seer App is the explorer of all markets)
LOCAL = {"app": "explorer/", "explorer": "explorer/", "deep": "deep/", "futarchy": "futarchy/", "opportunity": "opportunity/", "risk": "risk/"}
def landing(t): return re.sub(r"https://(app|explorer|deep|futarchy|opportunity|risk)\.seer\.pm/?(?![\w./#?-])", lambda m: LOCAL[m.group(1)], t)
for f in [S / "index.html", S / "dist/app.js", S / "dist/bird.js", S / "dist/glass.js"]:
    f.write_text(landing(f.read_text()))
# in-app cross links -> sibling apps and landing (exact quoted literals only; API urls untouched)
SIB = {"futarchy": "../futarchy/", "risk": "../risk/", "opportunity": "../opportunity/", "deep": "../deep/", "explorer": "../explorer/", "app": "../explorer/"}
for name in APPS:
    for f in (S / name).rglob("*"):
        if f.suffix not in (".js", ".html"): continue
        t = f.read_text(errors="ignore"); o = t
        t = re.sub(r"([\"'`])https://(futarchy|risk|opportunity|deep|explorer|app)\.seer\.pm/?\1", lambda m: m.group(1) + SIB[m.group(2)] + m.group(1), t)
        t = re.sub(r"([\"'`])https://seer\.pm/?(#\w*)?\1", lambda m: m.group(1) + (SIB.get((m.group(2) or "#")[1:]) or "../") + m.group(1), t)
        if t != o: f.write_text(t)
(S / "start.command").write_text('#!/bin/sh\ncd "$(dirname "$0")"\n(sleep 1; open http://localhost:8800) &\npython3 -m http.server 8800\n')
(S / "start.command").chmod(0o755)
print("site ready:", S)
