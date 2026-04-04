import Badge from './Badge'

type AgentStatus = 'active' | 'inactive' | 'working' | 'idle'

interface AgentRowProps {
  name: string
  role: string
  status: AgentStatus
  tasksCompleted?: number
  onClick?: () => void
}

const statusVariant: Record<AgentStatus, 'active' | 'default' | 'warning' | 'info'> = {
  active: 'active',
  working: 'warning',
  idle: 'info',
  inactive: 'default',
}

export default function AgentRow({ name, role, status, tasksCompleted, onClick }: AgentRowProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        borderRadius: 'var(--radius-sm)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background 0.15s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-hover)' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--bg-elevated)',
          border: '1px solid var(--border-default)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--text-primary)',
          fontFamily: "'Sora', sans-serif",
          flexShrink: 0,
        }}
      >
        {name.charAt(0)}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
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
      {tasksCompleted !== undefined && (
        <span
          style={{
            fontSize: '12px',
            color: 'var(--text-secondary)',
            fontFamily: "'Sora', sans-serif",
            minWidth: '60px',
            textAlign: 'right',
          }}
        >
          {tasksCompleted} tasks
        </span>
      )}
    </div>
  )
}
