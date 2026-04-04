import { useLocation, useNavigate } from 'react-router-dom'
import Icon, { type IconName } from './Icon'

interface NavItem {
  label: string
  path: string
  icon: IconName
}

const sections: { title: string; items: NavItem[] }[] = [
  {
    title: 'WORKSPACE',
    items: [
      { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
      { label: 'AI Agents', path: '/agents', icon: 'smart_toy' },
      { label: 'Conversations', path: '/conversations', icon: 'chat' },
      { label: 'Content Library', path: '/content', icon: 'folder' },
    ],
  },
  {
    title: 'INSIGHTS',
    items: [
      { label: 'Analytics', path: '/analytics', icon: 'bar_chart' },
      { label: 'Billing', path: '/billing', icon: 'receipt' },
    ],
  },
  {
    title: 'ACCOUNT',
    items: [
      { label: 'Settings', path: '/settings', icon: 'settings' },
    ],
  },
]

function Spacer({ h }: { h: number }) {
  return <div style={{ width: '200px', height: `${h}px`, flexShrink: 0 }} />
}

function Divider() {
  return <div style={{ width: '200px', height: '1px', background: '#242424', flexShrink: 0 }} />
}

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
        padding: '20px',
        gap: '4px',
        flexShrink: 0,
        borderRight: '1px solid var(--border-subtle)',
      }}
    >
      {/* Brand header — Frame 9 in Figma (h:49 = brand h:36 + gap:12 + divider h:1) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', height: '36px', justifyContent: 'center' }}>
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
        <Divider />
      </div>

      {/* spacer h:8 after brand */}
      <Spacer h={8} />

      {/* Flat list: section labels, spacers, nav items, dividers */}
      {sections.map((section, si) => {
        const elements: React.ReactNode[] = []

        /* Section label */
        elements.push(
          <div
            key={`label-${section.title}`}
            style={{ padding: '0 12px', height: '24px', display: 'flex', alignItems: 'center' }}
          >
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
        )

        /* spacer h:4 after section label */
        elements.push(<Spacer key={`sp-after-label-${si}`} h={4} />)

        /* Nav items */
        section.items.forEach((item) => {
          const active = isActive(item.path)
          elements.push(
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
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.background = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.background = 'transparent'
              }}
            >
              <Icon name={item.icon} size={16} color={active ? 'var(--text-primary)' : '#8C8C8C'} />
              {item.label}
            </button>
          )
        })

        /* Divider + spacers between sections */
        if (si < sections.length - 1) {
          elements.push(<Spacer key={`sp-before-div-${si}`} h={12} />)
          elements.push(<Divider key={`div-${si}`} />)
          elements.push(<Spacer key={`sp-after-div-${si}`} h={12} />)
        }

        return elements
      })}

      {/* Flex spacer to push user profile to bottom */}
      <div style={{ flex: 1 }} />

      {/* spacer h:16 before bottom divider */}
      <Spacer h={16} />
      <Divider />
      <Spacer h={12} />

      {/* User profile */}
      <div
        style={{
          width: '200px',
          height: '48px',
          padding: '0 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          flexShrink: 0,
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
          <Icon name="account_circle" size={32} color="var(--text-secondary)" />
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
