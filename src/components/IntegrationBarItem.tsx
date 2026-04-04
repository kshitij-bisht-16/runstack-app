interface IntegrationBarItemProps {
  name: string
  icon?: string
  connected?: boolean
  onClick?: () => void
}

export default function IntegrationBarItem({ name, icon, connected = false, onClick }: IntegrationBarItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-surface)',
        border: `1px solid ${connected ? 'var(--success)' : 'var(--border-subtle)'}`,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.15s',
      }}
    >
      {icon && (
        <span style={{ fontSize: '20px', flexShrink: 0 }}>{icon}</span>
      )}
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 600,
            lineHeight: '18px',
            color: 'var(--text-primary)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {name}
        </div>
      </div>
      <span
        style={{
          fontSize: '11px',
          fontWeight: 500,
          color: connected ? 'var(--success)' : 'var(--text-tertiary)',
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {connected ? 'Connected' : 'Connect'}
      </span>
    </div>
  )
}
