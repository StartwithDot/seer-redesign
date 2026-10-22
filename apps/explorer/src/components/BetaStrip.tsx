import { useState } from 'react';
export function BetaStrip() {
 const [dismissed, setDismissed] = useState(() => { try { return sessionStorage.getItem('explorer.beta') === '1'; } catch { return false; } });
 if (dismissed) return null;
 return <div className="beta-strip page" data-align><span>Note that this is a Beta version and can still be unstable</span><button aria-label="Close" onClick={() => { setDismissed(true); try { sessionStorage.setItem('explorer.beta', '1'); } catch { /* Storage is optional. */ } }}>×</button></div>;
}
