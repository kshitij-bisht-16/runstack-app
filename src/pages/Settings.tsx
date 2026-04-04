import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Toggle from '../components/Toggle'
import Icon from '../components/Icon'

const settingsNav = [
  { section: 'ACCOUNT', items: ['Profile', 'Security & Password', 'Notifications'] },
  { section: 'WORKSPACE', items: ['API Keys', 'Integrations', 'Team & Members'] },
  { section: 'PREFERENCES', items: ['Appearance', 'Language & Region'] },
]

const notificationRows = [
  { title: 'AI Agent activity alerts', desc: 'Get notified when your agents complete tasks or need attention' },
  { title: 'Weekly usage summary', desc: 'Receive a weekly report of your AI credit usage and activity' },
  { title: 'Product updates & announcements', desc: 'Stay up to date with new features and releases' },
]

const securitySessions = [
  { device: 'MacBook Pro — Chrome', location: 'Mumbai, India  ·  Current session', active: true },
  { device: 'iPhone 14 — Safari', location: 'Mumbai, India  ·  2 hours ago', active: false },
  { device: 'Windows PC — Edge', location: 'Delhi, India  ·  3 days ago', active: false },
]

const notifSections = [
  {
    label: 'AI AGENTS',
    items: [
      { title: 'Agent completes a task', desc: 'Get notified when any of your agents finish a scheduled task' },
      { title: 'Agent encounters an error', desc: 'Be alerted immediately when an agent fails or gets stuck' },
      { title: 'Agent needs approval', desc: 'Approve or reject agent actions before they are executed' },
    ],
  },
  {
    label: 'BILLING',
    items: [
      { title: 'Payment processed', desc: 'Receive a receipt whenever a payment is charged' },
      { title: 'Credit low warning', desc: 'Get an alert when your AI credits drop below 20%' },
      { title: 'Plan renewal reminder', desc: 'Reminder 7 days before your plan renews' },
    ],
  },
  {
    label: 'PLATFORM',
    items: [
      { title: 'New feature announcements', desc: 'Stay informed about new Craftertech features and updates' },
      { title: 'Weekly usage digest', desc: 'Receive a weekly summary of your workspace activity' },
      { title: 'Security alerts', desc: 'Critical security notifications — cannot be disabled' },
    ],
  },
]

const apiKeys = [
  { name: 'Production Key', scope: 'Full Access', scopeColor: 'var(--brand-accent-light)', scopeBg: 'var(--brand-accent-bg-subtle)', created: 'Jan 12, 2025', lastUsed: '3 days ago', key: 'ct_live_sk_\u2022\u2022\u2022\u2022\u20223f9a' },
  { name: 'Analytics Read', scope: 'Read Only', scopeColor: 'var(--success)', scopeBg: 'var(--success-muted)', created: 'Feb 3, 2025', lastUsed: '1 day ago', key: 'ct_live_sk_\u2022\u2022\u2022\u2022\u20228c4d' },
  { name: 'Webhook Sender', scope: 'Write Only', scopeColor: 'var(--warning)', scopeBg: 'var(--warning-muted)', created: 'Mar 1, 2025', lastUsed: 'Today', key: 'ct_live_sk_\u2022\u2022\u2022\u2022\u20222e1f' },
]

const integrations: { name: string; desc: string; status: 'connected' | 'available' | 'coming_soon' }[] = [
  { name: 'Slack', desc: 'Post agent outputs to channels', status: 'connected' },
  { name: 'HubSpot', desc: 'Sync contacts and marketing data', status: 'connected' },
  { name: 'Zapier', desc: 'Automate workflows across 5000+ apps', status: 'available' },
  { name: 'Notion', desc: 'Export content directly to pages', status: 'available' },
  { name: 'Google Drive', desc: 'Save and access files seamlessly', status: 'available' },
  { name: 'Make', desc: 'Build advanced multi-step automations', status: 'coming_soon' },
  { name: 'Airtable', desc: 'Sync structured data to your bases', status: 'coming_soon' },
  { name: 'Webflow', desc: 'Publish AI-generated content to CMS', status: 'coming_soon' },
]

const teamMembers = [
  { name: 'Kshitij Shah', email: 'kshitij@craftertech.ai', initials: 'KS', role: 'Owner', roleBg: 'var(--brand-accent-bg-subtle)', roleColor: 'var(--brand-accent-light)', joined: 'Jan 10, 2025' },
  { name: 'Priya Menon', email: 'priya@craftertech.ai', initials: 'PM', role: 'Admin', roleBg: 'var(--success-muted)', roleColor: 'var(--success)', joined: 'Feb 3, 2025' },
  { name: 'Arjun Desai', email: 'arjun@craftertech.ai', initials: 'AD', role: 'Member', roleBg: 'var(--bg-elevated)', roleColor: 'var(--text-secondary)', joined: 'Feb 15, 2025' },
  { name: 'Sana Khan', email: 'sana@craftertech.ai', initials: 'SK', role: 'Member', roleBg: 'var(--bg-elevated)', roleColor: 'var(--text-secondary)', joined: 'Mar 1, 2025' },
  { name: 'Rohan Verma', email: 'rohan@craftertech.ai', initials: 'RV', role: 'Viewer', roleBg: 'var(--bg-elevated)', roleColor: 'var(--text-tertiary)', joined: 'Mar 18, 2025' },
]

const pendingInvites = [
  { email: 'design@agency.com', sent: 'Sent 2 days ago' },
  { email: 'content@startup.io', sent: 'Sent 1 week ago' },
]

const sectionLabel: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 600,
  color: 'var(--text-tertiary)',
  letterSpacing: '0.06em',
  fontFamily: "'Sora', sans-serif",
}

const divider = <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

export default function Settings() {
  const [activeItem, setActiveItem] = useState('Profile')
  const [selectedTheme, setSelectedTheme] = useState('dark')
  const [selectedDensity, setSelectedDensity] = useState('comfortable')
  const [selectedDateFormat, setSelectedDateFormat] = useState('MM/DD/YYYY')
  const [selectedTimeFormat, setSelectedTimeFormat] = useState('12-hour')
  const [selectedFirstDay, setSelectedFirstDay] = useState('Sunday')
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    'AI Agent activity alerts': true,
    'Weekly usage summary': true,
    'Product updates & announcements': false,
    'Authenticator App': false,
    'SMS Backup': false,
    'Agent completes a task': true,
    'Agent encounters an error': true,
    'Agent needs approval': true,
    'Payment processed': true,
    'Credit low warning': true,
    'Plan renewal reminder': false,
    'New feature announcements': true,
    'Weekly usage digest': true,
    'Security alerts': true,
    'Show sidebar labels': true,
    'Reduced motion': false,
    'High contrast text': false,
  })

  const toggle = (key: string) => setToggles((prev) => ({ ...prev, [key]: !prev[key] }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '0 32px' }}>
      {/* Topbar */}
      <div style={{ height: '98px', display: 'flex', alignItems: 'center', padding: '24px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Settings</h2>
          <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            Manage your account, preferences and integrations
          </span>
        </div>
      </div>

      {/* Content row */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Settings nav */}
        <div style={{ width: '200px', display: 'flex', flexDirection: 'column', gap: '2px', flexShrink: 0 }}>
          {settingsNav.map((section) => (
            <div key={section.section}>
              <div style={{ padding: '8px 12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
                  {section.section}
                </span>
              </div>
              {section.items.map((item) => {
                const active = activeItem === item
                return (
                  <button
                    key={item}
                    onClick={() => setActiveItem(item)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '200px',
                      height: '36px',
                      padding: '0 12px',
                      borderRadius: 'var(--radius-md)',
                      border: 'none',
                      cursor: 'pointer',
                      background: active ? 'var(--brand-accent-bg-subtle)' : 'transparent',
                      color: active ? 'var(--text-primary)' : '#8C8C8C',
                      fontSize: '13px',
                      fontWeight: active ? 600 : 400,
                      fontFamily: "'Sora', sans-serif",
                      textAlign: 'left',
                    }}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        {/* Content panel */}
        <div
          style={{
            flex: 1,
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {/* ==================== PROFILE ==================== */}
          {activeItem === 'Profile' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Profile</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                  Update your personal information and profile photo
                </span>
              </div>
              {divider}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '56px', height: '56px', borderRadius: '28px', background: 'var(--brand-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif",
                  }}
                >
                  KS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Kshitij Shah</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>kshitij@craftertech.ai</span>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--agent-pixel)', fontFamily: "'Sora', sans-serif", cursor: 'pointer', marginLeft: 'auto' }}>
                  Change Photo
                </span>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Input label="First Name" placeholder="Kshitij" />
                <Input label="Last Name" placeholder="Shah" />
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Input label="Email Address" placeholder="kshitij@craftertech.ai" />
                <Input label="Job Title" placeholder="Product Designer" />
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Input label="Company" placeholder="Craftertech AI" />
                <Input label="Timezone" placeholder="UTC+05:30 – India" />
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Input label="Language" placeholder="English (US)" />
                <div style={{ flex: 1 }} />
              </div>
              {divider}
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                Email Notifications
              </span>
              {notificationRows.map((row) => (
                <div key={row.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{row.title}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{row.desc}</span>
                  </div>
                  <Toggle checked={toggles[row.title] ?? false} onChange={() => toggle(row.title)} />
                </div>
              ))}
              {divider}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button>Save Changes</Button>
                  <Button variant="ghost">Discard</Button>
                </div>
                <Button variant="danger">Delete Account</Button>
              </div>
            </>
          )}

          {/* ==================== SECURITY ==================== */}
          {activeItem === 'Security & Password' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Security & Password</h3>
                <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                  Manage your password and account security settings
                </span>
              </div>
              {divider}
              <span style={sectionLabel}>CHANGE PASSWORD</span>
              <Input label="Current Password" type="password" placeholder="••••••••••••" />
              <Input label="New Password" type="password" placeholder="••••••••••••" />
              <span style={{ fontSize: '11px', color: 'var(--warning)', fontFamily: "'Sora', sans-serif" }}>Password strength: Medium</span>
              <Input label="Confirm New Password" type="password" placeholder="••••••••••••" />
              {divider}
              <span style={sectionLabel}>TWO-FACTOR AUTHENTICATION</span>
              {['Authenticator App', 'SMS Backup'].map((item) => (
                <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{item}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                      {item === 'Authenticator App' ? 'Use an authenticator app to generate one-time codes' : 'Receive a backup code via SMS if you lose access to your app'}
                    </span>
                  </div>
                  <Toggle checked={toggles[item] ?? false} onChange={() => toggle(item)} />
                </div>
              ))}
              {divider}
              <span style={sectionLabel}>ACTIVE SESSIONS</span>
              {securitySessions.map((s) => (
                <div key={s.device} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{s.device}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{s.location}</span>
                  </div>
                  {s.active ? (
                    <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--success)', fontFamily: "'Sora', sans-serif" }}>● Active</span>
                  ) : (
                    <Button variant="danger" style={{ height: '32px', fontSize: '12px' }}>Revoke</Button>
                  )}
                </div>
              ))}
              {divider}
              <div style={{ display: 'flex', gap: '12px' }}>
                <Button variant="ghost">Discard</Button>
                <Button>Update Password</Button>
              </div>
            </>
          )}

          {/* ==================== NOTIFICATIONS ==================== */}
          {activeItem === 'Notifications' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Notifications</h3>
                <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                  Control how and when you receive notifications
                </span>
              </div>
              {divider}
              <span style={sectionLabel}>DELIVERY CHANNELS</span>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['Email', 'In-App', 'SMS'].map((ch) => (
                  <span key={ch} style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{ch}</span>
                ))}
              </div>
              {divider}
              {notifSections.map((section) => (
                <div key={section.label} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <span style={sectionLabel}>{section.label}</span>
                  {section.items.map((item) => (
                    <div key={item.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{item.title}</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{item.desc}</span>
                      </div>
                      <Toggle checked={toggles[item.title] ?? false} onChange={() => toggle(item.title)} />
                    </div>
                  ))}
                  {divider}
                </div>
              ))}
              <div style={{ display: 'flex', gap: '12px' }}>
                <Button>Save Preferences</Button>
                <Button variant="ghost">Discard</Button>
              </div>
            </>
          )}

          {/* ==================== API KEYS ==================== */}
          {activeItem === 'API Keys' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>API Keys</h3>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                  Manage API keys for integrating with external services
                </span>
              </div>
              {divider}
              <div style={{ height: '8px' }} />

              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>3 keys active</span>
                <Button>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon name="add" size={16} color="#fff" />
                    + Create API Key
                  </span>
                </Button>
              </div>
              {divider}

              {/* Table header */}
              <div style={{ display: 'flex', alignItems: 'center', padding: '0 14px 0 14px' }}>
                <span style={{ width: '186px', fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>Name</span>
                <span style={{ width: '140px', fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>Scopes</span>
                <span style={{ width: '110px', fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>Created</span>
                <span style={{ width: '130px', fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>Last used</span>
                <span style={{ width: '130px', fontSize: '11px', fontWeight: 700, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>Key</span>
                <span style={{ flex: 1 }} />
              </div>

              {/* Table rows */}
              {apiKeys.map((k) => (
                <div
                  key={k.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 14px',
                    height: '52px',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <span style={{ width: '186px', fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{k.name}</span>
                  <span style={{ width: '140px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        height: '22px',
                        padding: '0 8px',
                        borderRadius: 'var(--radius-full)',
                        background: k.scopeBg,
                        color: k.scopeColor,
                        fontSize: '11px',
                        fontWeight: 700,
                        fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      {k.scope}
                    </span>
                  </span>
                  <span style={{ width: '110px', fontSize: '11px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>{k.created}</span>
                  <span style={{ width: '130px', fontSize: '11px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>{k.lastUsed}</span>
                  <span style={{ width: '130px', fontSize: '11px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>{k.key}</span>
                  <span style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="danger" style={{ height: '36px', fontSize: '12px' }}>Revoke</Button>
                  </span>
                </div>
              ))}
              {divider}

              {/* Warning */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 14px',
                  background: 'var(--brand-accent-bg-muted)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                  API keys are shown in full only at creation. Store them securely — they cannot be retrieved again.
                </span>
              </div>
            </>
          )}

          {/* ==================== INTEGRATIONS ==================== */}
          {activeItem === 'Integrations' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Integrations</h3>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                  Connect Craftertech with your favourite tools and platforms
                </span>
              </div>
              {divider}
              <div style={{ height: '8px' }} />

              {/* Integration cards grid — 2 per row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {integrations.map((intg) => (
                  <div
                    key={intg.name}
                    style={{
                      width: 'calc(50% - 8px)',
                      background: 'var(--bg-elevated)',
                      borderRadius: 'var(--radius-md)',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                    }}
                  >
                    {/* Top row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div
                          style={{
                            width: '32px', height: '32px', borderRadius: 'var(--radius-sm)',
                            background: 'var(--bg-hover)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '14px', fontWeight: 700, color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif",
                          }}
                        >
                          {intg.name.charAt(0)}
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{intg.name}</span>
                      </div>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          height: '20px',
                          padding: '0 8px',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '10px',
                          fontWeight: 700,
                          fontFamily: "'Sora', sans-serif",
                          background: intg.status === 'connected' ? 'var(--success-muted)' : intg.status === 'available' ? 'var(--brand-accent-bg-subtle)' : 'rgba(107, 107, 107, 0.12)',
                          color: intg.status === 'connected' ? 'var(--success)' : intg.status === 'available' ? 'var(--brand-accent-light)' : 'var(--text-tertiary)',
                        }}
                      >
                        {intg.status === 'connected' ? 'Connected' : intg.status === 'available' ? 'Available' : 'Coming Soon'}
                      </span>
                    </div>

                    {/* Description */}
                    <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{intg.desc}</span>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {intg.status === 'connected' && (
                        <>
                          <Button variant="ghost" style={{ height: '36px', fontSize: '12px' }}>Configure</Button>
                          <Button variant="secondary" style={{ height: '36px', fontSize: '12px' }}>Disconnect</Button>
                        </>
                      )}
                      {intg.status === 'available' && <Button style={{ height: '36px', fontSize: '12px' }}>Connect</Button>}
                      {intg.status === 'coming_soon' && <Button variant="secondary" style={{ height: '36px', fontSize: '12px' }}>Notify me</Button>}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ==================== TEAM & MEMBERS ==================== */}
          {activeItem === 'Team & Members' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Team & Members</h3>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                  Manage your team, roles and pending invitations
                </span>
              </div>
              {divider}
              <div style={{ height: '8px' }} />

              {/* Seat usage */}
              <div
                style={{
                  background: 'var(--bg-elevated)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '14px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Pro Plan · Team seats</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>5 / 10 seats used</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--bg-hover)', borderRadius: 'var(--radius-full)' }}>
                  <div style={{ width: '50%', height: '100%', background: 'var(--brand-accent-light)', borderRadius: 'var(--radius-full)' }} />
                </div>
              </div>
              {divider}

              {/* Invite member */}
              <span style={sectionLabel}>INVITE MEMBER</span>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-end' }}>
                <div style={{ flex: 1 }}>
                  <Input label="Email address" placeholder="colleague@company.com" />
                </div>
                <div style={{ width: '160px' }}>
                  <Input label="Role" placeholder="Member" />
                </div>
                <Button>Send Invite</Button>
              </div>
              {divider}

              {/* Members list */}
              <span style={sectionLabel}>MEMBERS</span>
              {teamMembers.map((m, i) => (
                <div key={m.email}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          width: '36px', height: '36px', borderRadius: 'var(--radius-full)',
                          background: 'var(--brand-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '12px', fontWeight: 700, color: 'var(--brand-accent-light)', fontFamily: "'Sora', sans-serif",
                        }}
                      >
                        {m.initials}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{m.name}</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{m.email}</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <span
                        style={{
                          display: 'inline-flex', alignItems: 'center', height: '22px', padding: '0 10px',
                          borderRadius: 'var(--radius-full)', background: m.roleBg, color: m.roleColor,
                          fontSize: '11px', fontWeight: 700, fontFamily: "'Sora', sans-serif",
                        }}
                      >
                        {m.role}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{m.joined}</span>
                      {m.role !== 'Owner' && <Button variant="danger" style={{ height: '36px', fontSize: '12px' }}>Remove</Button>}
                    </div>
                  </div>
                  {i < teamMembers.length - 1 && divider}
                </div>
              ))}
              {divider}

              {/* Pending invites */}
              <span style={sectionLabel}>PENDING INVITES</span>
              {pendingInvites.map((inv) => (
                <div
                  key={inv.email}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>{inv.email}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{inv.sent}</span>
                  </div>
                  <Button variant="secondary" style={{ height: '36px', fontSize: '12px' }}>Resend</Button>
                </div>
              ))}
            </>
          )}

          {/* ==================== APPEARANCE ==================== */}
          {activeItem === 'Appearance' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Appearance</h3>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                  Customise the look and feel of your workspace
                </span>
              </div>
              {divider}

              {/* Theme */}
              <span style={sectionLabel}>THEME</span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>Choose your preferred colour scheme</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {(['dark', 'light', 'system'] as const).map((theme) => {
                  const active = selectedTheme === theme
                  return (
                    <button
                      key={theme}
                      onClick={() => setSelectedTheme(theme)}
                      style={{
                        width: '120px',
                        padding: '14px 16px',
                        background: active ? 'var(--brand-accent)' : 'var(--bg-elevated)',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div
                        style={{
                          width: '88px', height: '48px',
                          background: theme === 'light' ? '#ffffff' : theme === 'dark' ? 'var(--bg-base)' : 'var(--bg-elevated)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                        }}
                      >
                        <div style={{ width: '40px', height: '3px', background: theme === 'light' ? '#ccc' : '#fff', borderRadius: '2px' }} />
                        <div style={{ width: '60px', height: '3px', background: theme === 'light' ? '#ccc' : '#fff', borderRadius: '2px' }} />
                        <div style={{ width: '30px', height: '3px', background: theme === 'light' ? '#ccc' : '#fff', borderRadius: '2px' }} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: active ? 'var(--brand-accent)' : 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                      </span>
                      {active && <div style={{ width: '8px', height: '8px', borderRadius: '4px', background: 'var(--brand-accent)' }} />}
                    </button>
                  )
                })}
              </div>
              {divider}

              {/* Density */}
              <span style={sectionLabel}>DENSITY</span>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>Adjust spacing and layout density</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                {(['comfortable', 'compact'] as const).map((density) => {
                  const active = selectedDensity === density
                  return (
                    <button
                      key={density}
                      onClick={() => setSelectedDensity(density)}
                      style={{
                        width: '120px',
                        padding: '14px 16px',
                        background: active ? 'var(--brand-accent)' : 'var(--bg-elevated)',
                        border: 'none',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div
                        style={{
                          width: '88px', height: '48px',
                          background: 'var(--bg-elevated)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '8px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: density === 'compact' ? '3px' : '6px',
                        }}
                      >
                        <div style={{ width: '40px', height: '3px', background: '#fff', borderRadius: '2px' }} />
                        <div style={{ width: '60px', height: '3px', background: '#fff', borderRadius: '2px' }} />
                        <div style={{ width: '30px', height: '3px', background: '#fff', borderRadius: '2px' }} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: active ? 'var(--brand-accent)' : 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                        {density.charAt(0).toUpperCase() + density.slice(1)}
                      </span>
                      {active && <div style={{ width: '8px', height: '8px', borderRadius: '4px', background: 'var(--brand-accent)' }} />}
                    </button>
                  )
                })}
              </div>
              {divider}

              {/* Sidebar */}
              <span style={sectionLabel}>SIDEBAR</span>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Show sidebar labels</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>Display text labels alongside icons in the sidebar</span>
                </div>
                <Toggle checked={toggles['Show sidebar labels'] ?? true} onChange={() => toggle('Show sidebar labels')} />
              </div>
              {divider}

              {/* Accessibility */}
              <span style={sectionLabel}>ACCESSIBILITY</span>
              {[
                { key: 'Reduced motion', desc: 'Minimise animations and transitions throughout the interface' },
                { key: 'High contrast text', desc: 'Increase text contrast for improved readability' },
              ].map((item) => (
                <div key={item.key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{item.key}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{item.desc}</span>
                  </div>
                  <Toggle checked={toggles[item.key] ?? false} onChange={() => toggle(item.key)} />
                </div>
              ))}
              {divider}
              <div style={{ display: 'flex', gap: '12px' }}>
                <Button>Save Preferences</Button>
                <Button variant="ghost">Discard</Button>
              </div>
            </>
          )}

          {/* ==================== LANGUAGE & REGION ==================== */}
          {activeItem === 'Language & Region' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Language & Region</h3>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                  Set your language, date format and regional preferences
                </span>
              </div>
              {divider}

              {/* Language */}
              <span style={sectionLabel}>LANGUAGE</span>
              <Input label="Interface language" placeholder="English (US)" />
              {divider}

              {/* Date & Time */}
              <span style={sectionLabel}>DATE & TIME</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>Date format</span>
                <div style={{ display: 'flex', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', width: 'fit-content', overflow: 'hidden' }}>
                  {['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setSelectedDateFormat(fmt)}
                      style={{
                        padding: '8px 16px', border: 'none', cursor: 'pointer',
                        background: selectedDateFormat === fmt ? 'var(--brand-accent)' : 'transparent',
                        color: selectedDateFormat === fmt ? 'var(--brand-accent)' : 'var(--text-secondary)',
                        fontSize: '12px', fontWeight: 600, fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>Time format</span>
                <div style={{ display: 'flex', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', width: 'fit-content', overflow: 'hidden' }}>
                  {['12-hour', '24-hour'].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setSelectedTimeFormat(fmt)}
                      style={{
                        padding: '8px 16px', border: 'none', cursor: 'pointer',
                        background: selectedTimeFormat === fmt ? 'var(--brand-accent)' : 'transparent',
                        color: selectedTimeFormat === fmt ? 'var(--brand-accent)' : 'var(--text-secondary)',
                        fontSize: '12px', fontWeight: 600, fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>First day of week</span>
                <div style={{ display: 'flex', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)', width: 'fit-content', overflow: 'hidden' }}>
                  {['Sunday', 'Monday'].map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedFirstDay(day)}
                      style={{
                        padding: '8px 16px', border: 'none', cursor: 'pointer',
                        background: selectedFirstDay === day ? 'var(--brand-accent)' : 'transparent',
                        color: selectedFirstDay === day ? 'var(--brand-accent)' : 'var(--text-secondary)',
                        fontSize: '12px', fontWeight: 600, fontFamily: "'Sora', sans-serif",
                      }}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              {divider}

              {/* Region */}
              <span style={sectionLabel}>REGION</span>
              <div style={{ display: 'flex', gap: '16px' }}>
                <Input label="Currency" placeholder="USD — US Dollar" />
                <Input label="Timezone" placeholder="UTC+05:30 — India Standard Time" />
              </div>
              {divider}
              <div style={{ display: 'flex', gap: '12px' }}>
                <Button>Save Preferences</Button>
                <Button variant="ghost">Discard</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
