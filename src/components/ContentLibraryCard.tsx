import Badge from './Badge'

interface ContentLibraryCardProps {
  title: string
  preview?: string
  type: string
  agentName?: string
  agentColor?: string
  date?: string
  onClick?: () => void
}

export default function ContentLibraryCard({ title, preview, type, agentName, agentColor, date, onClick }: ContentLibraryCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '16px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.15s',
        height: '100%',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Badge>{type}</Badge>
        {date && (
          <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
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
      {preview && (
        <div
          style={{
            fontSize: '12px',
            lineHeight: '18px',
            color: 'var(--text-secondary)',
            fontFamily: "'Sora', sans-serif",
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            flex: 1,
          }}
        >
          {preview}
        </div>
      )}
      {agentName && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: 'auto' }}>
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: 'var(--radius-full)',
              background: agentColor || 'var(--text-tertiary)',
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            {agentName}
          </span>
        </div>
      )}
    </div>
  )
}
