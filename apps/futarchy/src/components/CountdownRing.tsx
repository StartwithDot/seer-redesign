import { useEffect, useState } from 'react';
interface Props { endTimestamp: number; duration?: number }
export function CountdownRing({ endTimestamp, duration = ((6 * 24 + 15) * 60 + 58) * 60000 }: Props) {
  const [now, setNow] = useState(Date.now);
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(timer); }, []);
  const remaining = Math.max(0, endTimestamp - now), minutes = Math.floor(remaining / 60000);
  const days = Math.floor(minutes / 1440), hours = Math.floor(minutes / 60) % 24, fraction = Math.max(0, Math.min(1, 1 - remaining / duration));
  return <div className="countdown"><span>Open until</span><div className="countdown-dial"><svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54" fill="none" stroke="var(--nested)" strokeWidth="2" /><circle cx="60" cy="60" r="54" fill="none" stroke="var(--violet)" strokeWidth="2" strokeDasharray={2 * Math.PI * 54} strokeDashoffset={2 * Math.PI * 54 * (1 - fraction)} transform="rotate(-90 60 60)" /></svg><output aria-label="Remaining Time"><strong>{days} d</strong><span>{hours} h {minutes % 60} m</span></output></div></div>;
}
