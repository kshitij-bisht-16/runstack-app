interface AgentCardProps {
  name: string
  role: string
  status: 'active' | 'inactive' | 'working' | 'idle'
  provider: string
  color: string
  icon?: React.ReactNode
}

export default function AgentCard({ name, role, status, provider, color }: AgentCardProps) {
  const mutedColor = `${color}1F`

  return (
    <div
      style={{
        width: '100%',
        height: '180px',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-xl)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* Accent bar */}
      <div style={{ width: '100%', height: '2px', background: color }} />

      {/* Content */}
      <div
        style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          flex: 1,
        }}
      >
        {/* Icon wrapper */}
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--radius-md)',
            background: mutedColor,
            border: '1px solid var(--border-default)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '4px',
          }}
        >
          <span style={{ fontSize: '20px', color }}>{name.charAt(0)}</span>
        </div>

        {/* Agent name */}
        <span
          style={{
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
            color: 'var(--text-primary)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {name}
        </span>

        {/* Agent role */}
        <span
          style={{
            fontSize: '11px',
            fontWeight: 400,
            lineHeight: '16px',
            color: 'var(--text-tertiary)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {role}
        </span>
      </div>

      {/* Status row */}
      <div
        style={{
          padding: '18px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Status indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: status === 'active' || status === 'working' ? 'var(--success)' : 'var(--text-tertiary)',
            }}
          />
          <span
            style={{
              fontSize: '11px',
              fontWeight: 400,
              lineHeight: '16px',
              color: 'var(--text-tertiary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            {status === 'active' ? 'Active' : status === 'working' ? 'Working' : status === 'idle' ? 'Idle' : 'Inactive'}
          </span>
        </div>

        {/* Provider badge */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: '20px',
            padding: '0 8px',
            borderRadius: 'var(--radius-full)',
            background: `${color}1F`,
            color,
            fontSize: '10px',
            fontWeight: 700,
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {provider}
        </span>
      </div>
    </div>
  )
}
