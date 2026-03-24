import { useLocation, useNavigate } from 'react-router-dom'

interface NavItem {
  label: string
  path: string
  icon: string
}

const sections: { title: string; items: NavItem[] }[] = [
  {
    title: 'WORKSPACE',
    items: [
      { label: 'Dashboard', path: '/dashboard', icon: '⊞' },
      { label: 'AI Agents', path: '/agents', icon: '🤖' },
      { label: 'Conversations', path: '/conversations', icon: '💬' },
      { label: 'Content Library', path: '/content', icon: '📁' },
    ],
  },
  {
    title: 'INSIGHTS',
    items: [
      { label: 'Analytics', path: '/analytics', icon: '📊' },
      { label: 'Billing', path: '/billing', icon: '🧾' },
    ],
  },
  {
    title: 'ACCOUNT',
    items: [
      { label: 'Settings', path: '/settings', icon: '⚙️' },
    ],
  },
]

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => location.pathname.startsWith(path)

  return (
    <aside
      style={{
        width: '240px',
        height: '100%',
        background: 'var(--bg-surface)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 0 20px 20px',
        gap: '4px',
        flexShrink: 0,
        borderRight: '1px solid var(--border-subtle)',
      }}
    >
      {/* Brand */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '12px' }}>
        <span
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            fontFamily: "'Sora', sans-serif",
            letterSpacing: '0.5px',
          }}
        >
          CRAFTERTECH
        </span>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 400,
            color: 'var(--text-tertiary)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          AI Workforce Platform
        </span>
      </div>

      {/* Divider */}
      <div style={{ width: '200px', height: '1px', background: '#242424' }} />

      <div style={{ height: '8px' }} />

      {sections.map((section, si) => (
        <div key={section.title}>
          {/* Section label */}
          <div style={{ padding: '0 12px', height: '24px', display: 'flex', alignItems: 'center' }}>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                lineHeight: '14px',
                color: 'var(--text-tertiary)',
                fontFamily: "'Sora', sans-serif",
                letterSpacing: '0.06em',
              }}
            >
              {section.title}
            </span>
          </div>

          <div style={{ height: '4px' }} />

          {/* Nav items */}
          {section.items.map((item) => {
            const active = isActive(item.path)
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: '200px',
                  height: '36px',
                  padding: '0 12px',
                  borderRadius: 'var(--radius-md)',
                  border: 'none',
                  cursor: 'pointer',
                  background: active ? 'var(--brand-accent)' : 'transparent',
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '13px',
                  fontWeight: active ? 600 : 400,
                  color: active ? 'var(--text-primary)' : '#8C8C8C',
                  transition: 'background 0.15s',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.background = 'var(--bg-hover)'
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.background = 'transparent'
                }}
              >
                <span style={{ fontSize: '14px', width: '16px', textAlign: 'center' }}>{item.icon}</span>
                {item.label}
              </button>
            )
          })}

          {/* Divider + spacer between sections */}
          {si < sections.length - 1 && (
            <>
              <div style={{ height: '12px' }} />
              <div style={{ width: '200px', height: '1px', background: '#242424' }} />
              <div style={{ height: '12px' }} />
            </>
          )}
        </div>
      ))}

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Divider */}
      <div style={{ width: '200px', height: '1px', background: '#242424' }} />
      <div style={{ height: '12px' }} />

      {/* User profile */}
      <div
        style={{
          width: '200px',
          height: '48px',
          padding: '0 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.04)',
          borderRadius: 'var(--radius-md)',
        }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '16px',
            background: '#2E2E2E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            color: 'var(--text-secondary)',
          }}
        >
          K
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Kshitij
          </span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 400,
              color: 'var(--text-tertiary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Pro Plan
          </span>
        </div>
      </div>
    </aside>
  )
}
