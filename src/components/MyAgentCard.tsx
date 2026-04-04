import Badge from './Badge'

type AgentStatus = 'active' | 'inactive' | 'working' | 'idle'

interface MyAgentCardProps {
  name: string
  role: string
  status: AgentStatus
  color: string
  colorMuted: string
  tasksToday?: number
  onClick?: () => void
}

const statusVariant: Record<AgentStatus, 'active' | 'default' | 'warning' | 'info'> = {
  active: 'active',
  working: 'warning',
  idle: 'info',
  inactive: 'default',
}

export default function MyAgentCard({ name, role, status, color, colorMuted, tasksToday, onClick }: MyAgentCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div
          style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-full)',
            background: colorMuted,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 700,
            color: color,
            fontFamily: "'Sora', sans-serif",
            flexShrink: 0,
          }}
        >
          {name.charAt(0)}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '20px',
              color: 'var(--text-primary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: '11px',
              lineHeight: '16px',
              color: 'var(--text-tertiary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            {role}
          </div>
        </div>
        <Badge variant={statusVariant[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      {tasksToday !== undefined && (
        <div
          style={{
            fontSize: '11px',
            color: 'var(--text-tertiary)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {tasksToday} tasks today
        </div>
      )}
    </div>
  )
}
