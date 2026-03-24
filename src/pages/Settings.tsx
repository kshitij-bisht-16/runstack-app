import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Toggle from '../components/Toggle'

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

export default function Settings() {
  const [activeItem, setActiveItem] = useState('Profile')
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
            gap: '16px',
          }}
        >
          {activeItem === 'Profile' && (
            <>
              {/* Header */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Profile</h3>
                <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                  Update your personal information and profile photo
                </span>
              </div>

              <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

              {/* Avatar row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '28px',
                    background: 'var(--brand-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    fontFamily: "'Sora', sans-serif",
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

              {/* Form rows */}
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

              <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

              {/* Notifications section */}
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

              <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <Button>Save Changes</Button>
                  <Button variant="ghost">Discard</Button>
                </div>
                <Button variant="danger">Delete Account</Button>
              </div>
            </>
          )}

          {activeItem === 'Security & Password' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Security & Password</h3>
                <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                  Manage your password and account security settings
                </span>
              </div>
              <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

              {/* Change Password */}
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
                CHANGE PASSWORD
              </span>
              <Input label="Current Password" type="password" placeholder="••••••••••••" />
              <Input label="New Password" type="password" placeholder="••••••••••••" />
              <span style={{ fontSize: '11px', color: 'var(--warning)', fontFamily: "'Sora', sans-serif" }}>Password strength: Medium</span>
              <Input label="Confirm New Password" type="password" placeholder="••••••••••••" />

              <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

              {/* 2FA */}
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
                TWO-FACTOR AUTHENTICATION
              </span>
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

              <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

              {/* Active sessions */}
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
                ACTIVE SESSIONS
              </span>
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

              <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

              <div style={{ display: 'flex', gap: '12px' }}>
                <Button variant="ghost">Discard</Button>
                <Button>Update Password</Button>
              </div>
            </>
          )}

          {activeItem === 'Notifications' && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Notifications</h3>
                <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                  Control how and when you receive notifications
                </span>
              </div>
              <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

              {/* Delivery channels */}
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
                DELIVERY CHANNELS
              </span>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['Email', 'In-App', 'SMS'].map((ch) => (
                  <span key={ch} style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{ch}</span>
                ))}
              </div>

              <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

              {notifSections.map((section) => (
                <div key={section.label} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-tertiary)', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
                    {section.label}
                  </span>
                  {section.items.map((item) => (
                    <div key={item.title} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{item.title}</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{item.desc}</span>
                      </div>
                      <Toggle checked={toggles[item.title] ?? false} onChange={() => toggle(item.title)} />
                    </div>
                  ))}
                  <div style={{ height: '1px', background: 'var(--border-subtle)' }} />
                </div>
              ))}

              <div style={{ display: 'flex', gap: '12px' }}>
                <Button>Save Preferences</Button>
                <Button variant="ghost">Discard</Button>
              </div>
            </>
          )}

          {/* Placeholder for other settings pages */}
          {!['Profile', 'Security & Password', 'Notifications'].includes(activeItem) && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px' }}>
              <span style={{ fontSize: '14px', color: 'var(--text-disabled)', fontFamily: "'Sora', sans-serif" }}>
                {activeItem} — Coming soon
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
