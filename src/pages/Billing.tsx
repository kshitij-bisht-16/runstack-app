import Button from '../components/Button'
import Badge from '../components/Badge'

const invoices = [
  { date: 'Mar 1, 2026', desc: 'Free Plan — 100 credits/month', amount: '$0.00' },
  { date: 'Feb 1, 2026', desc: 'Free Plan — 100 credits/month', amount: '$0.00' },
  { date: 'Jan 1, 2026', desc: 'Free Plan — 100 credits/month', amount: '$0.00' },
  { date: 'Dec 1, 2025', desc: 'Free Plan — 100 credits/month', amount: '$0.00' },
  { date: 'Nov 1, 2025', desc: 'Free Plan — 100 credits/month', amount: '$0.00' },
  { date: 'Oct 1, 2025', desc: 'Free Plan — 100 credits/month', amount: '$0.00' },
]

const planDetails = [
  { label: 'Credits', value: '100 / mo' },
  { label: 'Agents', value: '1 active' },
  { label: 'Renews', value: 'Apr 1, 2026' },
]

export default function Billing() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 32px' }}>
      {/* Topbar */}
      <div style={{ height: '102px', display: 'flex', alignItems: 'center', padding: '24px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
            Billing & Credits
          </h2>
          <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            Track your AI credit usage and manage payment details
          </span>
        </div>
      </div>

      {/* Manage subscription */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
              CURRENT PLAN
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                Free Plan
              </span>
              <Badge variant="active">Active</Badge>
            </div>
          </div>

          {planDetails.map((d) => (
            <div key={d.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
                {d.label}
              </span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                {d.value}
              </span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <Button variant="danger" size="sm">Cancel Plan</Button>
          <Button size="sm">Upgrade Plan</Button>
        </div>
      </div>

      {/* Invoice panel */}
      <div
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
            Invoice History
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>Visa ···· 4242</span>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--agent-pixel)', fontFamily: "'Sora', sans-serif", cursor: 'pointer' }}>
              Update
            </span>
          </div>
        </div>

        {/* Table */}
        <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          {/* Column headers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 1fr 100px 80px 120px',
              padding: '12px 16px',
              background: 'var(--bg-elevated)',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            {['Date', 'Description', 'Amount', 'Status', ''].map((h) => (
              <span key={h || 'empty'} style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          {invoices.map((inv) => (
            <div
              key={inv.date}
              style={{
                display: 'grid',
                gridTemplateColumns: '140px 1fr 100px 80px 120px',
                padding: '14px 16px',
                borderBottom: '1px solid var(--border-subtle)',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>{inv.date}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{inv.desc}</span>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>{inv.amount}</span>
              <Badge variant="active">Paid</Badge>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--success)', fontFamily: "'Sora', sans-serif", cursor: 'pointer' }}>
                Download PDF
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
