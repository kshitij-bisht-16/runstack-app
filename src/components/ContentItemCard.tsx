import Badge from './Badge'

interface ContentItemCardProps {
  title: string
  description?: string
  type: string
  date?: string
  agentName?: string
  onClick?: () => void
}

export default function ContentItemCard({ title, description, type, date, agentName, onClick }: ContentItemCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        padding: '16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={(e) => { if (onClick) e.currentTarget.style.borderColor = 'var(--border-default)' }}
      onMouseLeave={(e) => { if (onClick) e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Badge>{type}</Badge>
        {date && (
          <span
            style={{
              fontSize: '11px',
              color: 'var(--text-tertiary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            {date}
          </span>
        )}
      </div>
      <div
        style={{
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '20px',
          color: 'var(--text-primary)',
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {title}
      </div>
      {description && (
        <div
          style={{
            fontSize: '12px',
            lineHeight: '18px',
            color: 'var(--text-secondary)',
            fontFamily: "'Sora', sans-serif",
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </div>
      )}
      {agentName && (
        <span
          style={{
            fontSize: '11px',
            color: 'var(--text-tertiary)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          by {agentName}
        </span>
      )}
    </div>
  )
}
