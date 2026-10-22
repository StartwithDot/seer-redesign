import { useEffect, useMemo, useState } from 'react';
import { organizations } from '../data/milestones';
import { orgAvatars } from '../data/avatars';
import { Avatar } from './Avatar';
import { MiniFork } from './ClosedStrip';
import { backToLanding } from '../router';
import './create.css';
const TOKENS = ['GNO', 'ETH', 'PNK', 'AAVE', 'USDS'] as const;
const NEW = '__new';
type Form = { org: string; newOrg: string; title: string; desc: string; token: string; metric: string; date: string };
const isConnected = () => !!document.querySelector('.sg-connect.sg-on');
const day = (offset: number) => { const d = new Date(Date.now() + offset * 864e5); return d.toISOString().slice(0, 10); };
function validate(f: Form) {
  const e: Partial<Record<keyof Form, string>> = {};
  if (f.org === NEW ? f.newOrg.trim().length < 2 : !f.org) e[f.org === NEW ? 'newOrg' : 'org'] = f.org === NEW ? 'Enter an organization name (2+ characters).' : 'Choose an organization.';
  if (f.title.trim().length < 4) e.title = 'Enter a proposal title (4+ characters).';
  if (f.desc.trim().length < 10) e.desc = 'Add a short description (10+ characters).';
  if (!f.token) e.token = 'Choose a collateral token.';
  if (f.metric.trim().length < 4) e.metric = 'Describe the success metric (4+ characters).';
  if (!f.date) e.date = 'Pick a closing date.'; else if (f.date < day(1)) e.date = 'Closing date must be tomorrow or later.';
  return e;
}
function Field({ id, label, error, hint, children }: { id: string; label: string; error?: string; hint?: string; children: React.ReactNode }) {
  return <div className="cm-field"><label htmlFor={id}>{label}</label>{children}<p className={error ? 'cm-error' : 'cm-hint'} id={`${id}-msg`} role={error ? 'alert' : undefined}>{error ?? hint ?? ''}</p></div>;
}
export function CreateMarket() {
  const [f, setF] = useState<Form>({ org: '', newOrg: '', title: '', desc: '', token: 'GNO', metric: 'GNO price in USDS', date: '' });
  const [touched, setTouched] = useState<Set<string>>(new Set()), [submitted, setSubmitted] = useState(false), [done, setDone] = useState<string | null>(null), [prompted, setPrompted] = useState(false);
  const errors = useMemo(() => validate(f), [f]);
  const set = (k: keyof Form, v: string) => setF(p => ({ ...p, [k]: v }));
  const show = (k: keyof Form) => (touched.has(k) || submitted) ? errors[k] : undefined;
  const blur = (k: keyof Form) => () => setTouched(t => new Set(t).add(k));
  const aria = (k: keyof Form) => ({ id: `cm-${k}`, 'aria-invalid': !!show(k), 'aria-describedby': `cm-${k}-msg`, onBlur: blur(k) });
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && !e.defaultPrevented && !document.querySelector('dialog[open]')) { e.preventDefault(); backToLanding(); } };
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => {
    if (!prompted) return;
    const t = window.setInterval(() => { if (isConnected()) setPrompted(false); }, 400); return () => clearInterval(t);
  }, [prompted]);
  const orgName = f.org === NEW ? f.newOrg.trim() : organizations.find(o => o.slug === f.org)?.name ?? '';
  const title = f.title.trim() || 'Your proposal';
  const closes = f.date ? new Date(f.date + 'T00:00:00Z').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : 'Not set';
  const valid = Object.keys(errors).length === 0;
  const steps = [!errors.org && !errors.newOrg, !errors.title && !errors.desc, !errors.token && !errors.metric, !errors.date];
  const submit = () => {
    setSubmitted(true);
    if (!valid) { document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(); return; }
    if (!isConnected()) { setPrompted(true); window.dispatchEvent(new Event('seer:connect')); return; }
    let h = 0; for (const c of JSON.stringify(f)) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    setDone('0x' + h.toString(16).padStart(8, '0') + 'a41c07e9d25b3f68c0e1');
  };
  const rows = [['If it passes', 'verdict-include'], ['If it fails', 'verdict-exclude']] as const;
  return <div className="create-page">
    <nav className="detail-breadcrumb" data-align aria-label="Breadcrumb"><button className="icon-button" aria-label="Back" onClick={backToLanding}>‹</button><a href="#/">Milestones</a><span>›</span><span aria-current="page">Create market</span></nav>
    <header data-align className="cm-head"><h1>Create a conditional market</h1><p>Two markets price the token: one if the proposal passes, one if it fails. The DAO still votes.</p></header>
    <div data-align className="cm-grid">
      {done ? <section className="card cm-success" aria-live="polite"><h2>Market submitted</h2><p>Demo only. Nothing was sent to the network.</p>
        <dl><div><dt>Organization</dt><dd>{orgName}</dd></div><div><dt>Proposal</dt><dd>{title}</dd></div><div><dt>Markets</dt><dd>2 (pass and fail)</dd></div><div><dt>Collateral</dt><dd>{f.token}</dd></div><div><dt>Closes</dt><dd>{closes}</dd></div><div><dt>Transaction</dt><dd className="cm-hash">{done.slice(0, 10)}...{done.slice(-6)}</dd></div></dl>
        <div className="cm-actions"><a className="button btn-bubbles button-primary cm-btn" href="#/">Back to milestones</a><button className="button cm-btn" onClick={() => { setDone(null); setSubmitted(false); }}>Create another</button></div></section>
      : <form className="cm-form" noValidate onSubmit={e => { e.preventDefault(); submit(); }}>
        <section className="card cm-step"><h2><span className="cm-num" data-ok={steps[0]}>1</span>Organization</h2>
          <Field id="cm-org" label="Organization" error={show('org')}><select {...aria('org')} value={f.org} onChange={e => set('org', e.target.value)}><option value="">Select an organization</option>{organizations.map(o => <option key={o.slug} value={o.slug}>{o.name}</option>)}<option value={NEW}>New organization</option></select></Field>
          {f.org === NEW && <Field id="cm-newOrg" label="New organization name" error={show('newOrg')}><input {...aria('newOrg')} value={f.newOrg} maxLength={40} onChange={e => set('newOrg', e.target.value)} /></Field>}
          {f.org && f.org !== NEW && <p className="cm-org"><Avatar avatar={orgAvatars[f.org]} size={20} />{orgName}</p>}
        </section>
        <section className="card cm-step"><h2><span className="cm-num" data-ok={steps[1]}>2</span>Proposal</h2>
          <Field id="cm-title" label="Proposal title" error={show('title')}><input {...aria('title')} value={f.title} maxLength={60} placeholder="GIP-154" onChange={e => set('title', e.target.value)} /></Field>
          <Field id="cm-desc" label="Short description" error={show('desc')} hint={`${f.desc.length}/160`}><textarea {...aria('desc')} value={f.desc} maxLength={160} rows={3} onChange={e => set('desc', e.target.value)} /></Field>
        </section>
        <section className="card cm-step"><h2><span className="cm-num" data-ok={steps[2]}>3</span>Collateral and metric</h2>
          <div className="cm-row"><Field id="cm-token" label="Collateral token" error={show('token')}><select {...aria('token')} value={f.token} onChange={e => setF(p => ({ ...p, token: e.target.value, metric: p.metric === `${p.token} price in USDS` ? `${e.target.value} price in USDS` : p.metric }))}>{TOKENS.map(t => <option key={t}>{t}</option>)}</select></Field>
          <Field id="cm-metric" label="Success metric" error={show('metric')}><input {...aria('metric')} value={f.metric} maxLength={60} onChange={e => set('metric', e.target.value)} /></Field></div>
        </section>
        <section className="card cm-step"><h2><span className="cm-num" data-ok={steps[3]}>4</span>Closing date</h2>
          <Field id="cm-date" label="Closing date" error={show('date')} hint="Markets close at 00:00 UTC."><input type="date" {...aria('date')} min={day(1)} value={f.date} onChange={e => set('date', e.target.value)} /></Field>
        </section>
        <section className="card cm-step"><h2><span className="cm-num" data-ok={valid}>5</span>Review</h2>
          <p className="cm-review">Creating {orgName ? <b>{orgName}</b> : 'a market'}: <b>{title}</b>, {f.token} collateral, closes <b>{closes}</b>.</p>
          {prompted && <p className="cm-error" role="status">Connect a wallet to continue.</p>}
          <div className="cm-actions"><button type="submit" className="button btn-bubbles button-primary cm-btn">Create market</button><a className="button button-secondary cm-btn" href="https://app.seer.pm/create-market" target="_blank" rel="noopener noreferrer">Open on seer.pm ↗</a></div>
        </section>
      </form>}
      <aside className="card cm-preview" aria-label="Preview"><h2>Preview</h2><p className="cm-sub">{orgName || 'Organization'} · {f.token}</p><MiniFork />
        {rows.map(([label, cls]) => <div key={label} className={`cm-market ${cls}`}><i /><div><b>{label}</b><span>{f.metric.trim() || 'Success metric'} · {title}</span></div><em>{f.token}</em></div>)}
        <dl><div><dt>Closes</dt><dd>{closes}</dd></div><div><dt>Collateral</dt><dd>{f.token}</dd></div></dl></aside>
    </div></div>;
}
