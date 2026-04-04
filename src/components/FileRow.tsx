import Icon from './Icon'

interface FileRowProps {
  name: string
  type: string
  size?: string
  date?: string
  onClick?: () => void
}

export default function FileRow({ name, type, size, date, onClick }: FileRowProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 12px',
        borderRadius: 'var(--radius-sm)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background 0.15s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-hover)' }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
    >
      <Icon name="folder" size={18} color="var(--text-tertiary)" />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 500,
            lineHeight: '18px',
            color: 'var(--text-primary)',
            fontFamily: "'Sora', sans-serif",
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {name}
        </div>
      </div>
      <span
        style={{
          fontSize: '11px',
          color: 'var(--text-tertiary)',
          fontFamily: "'Sora', sans-serif",
          whiteSpace: 'nowrap',
        }}
      >
        {type}
      </span>
      {size && (
        <span
          style={{
            fontSize: '11px',
            color: 'var(--text-tertiary)',
            fontFamily: "'Sora', sans-serif",
            whiteSpace: 'nowrap',
            minWidth: '48px',
            textAlign: 'right',
          }}
        >
          {size}
        </span>
      )}
      {date && (
        <span
          style={{
            fontSize: '11px',
            color: 'var(--text-tertiary)',
            fontFamily: "'Sora', sans-serif",
            whiteSpace: 'nowrap',
            minWidth: '72px',
            textAlign: 'right',
          }}
        >
          {date}
        </span>
      )}
    </div>
  )
}
