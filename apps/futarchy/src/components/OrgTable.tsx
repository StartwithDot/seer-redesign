import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Avatar } from './Avatar';
import { orgAvatars } from '../data/avatars';
import { organizations } from '../data/milestones';
export function OrgTable({ loading, selectedOrg }: { loading: boolean; selectedOrg?: string }) {
  const [descending, setDescending] = useState(true), [query, setQuery] = useState('');
  const reduced = useReducedMotion();
  const sorted = organizations.filter(o => o.name.toLowerCase().includes(query.toLowerCase())).sort((a, b) => descending ? b.proposals - a.proposals : a.proposals - b.proposals);
  return <section data-align id="organizations" className="org-section" aria-labelledby="org-title"><div className="section-heading"><h2 id="org-title">Organizations</h2></div>
    <div className={`organizations-card card${loading ? ' skeleton is-loading' : ''}`} aria-busy={loading}>
      <input className="organization-search" aria-label="Search organizations" placeholder="Search" value={query} onChange={event => setQuery(event.target.value)} />
      <div className="organization-columns organization-head"><span>NAME</span><span>MARKET</span><span>ACTIVE</span><button aria-label="Sort proposals" onClick={() => setDescending(value => !value)}>PROPOSALS {descending ? '↓' : '↑'}</button><span>CHAIN</span><span>LIQUIDITY</span></div>
      <div className="organization-rows">{sorted.map(org => <motion.a key={org.slug} href={`#/org/${org.slug}`} className="organization-columns organization-row" aria-current={selectedOrg?.split(',').includes(org.slug) ? 'true' : undefined} data-org={org.slug} data-avatar={orgAvatars[org.slug]} layout={!reduced} transition={{ duration: .42, ease: [.2, .8, .2, 1] }}>
        <span className="organization-name"><Avatar avatar={orgAvatars[org.slug]} size={32} /><span>{org.name}</span><span className="org-chevron" aria-hidden="true">›</span></span>
        <span className="organization-market">{org.activeMarket && <span className="active-market"><i />ACTIVE MARKET</span>}</span><span>{org.active}</span><span>{org.proposals}</span><span className="organization-chain"><Avatar avatar={org.chain === 'Gnosis' ? 'GNO' : 'ETH'} size={16} />{org.chain === 'ETH' ? 'Ethereum' : org.chain}</span>
        <span className="organization-liquidity">{org.liquidity === null ? '-' : <><i><b style={{ width: `${Math.min(100, org.liquidity / 50000)}%` }} /></i><span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 1 }).format(org.liquidity)}</span></>}</span>
      </motion.a>)}</div><div className="org-count">{sorted.length} organizations</div>
    </div>
  </section>;
}
