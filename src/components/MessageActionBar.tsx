import Icon, { IconName } from './Icon'

interface ActionItem {
  icon: IconName
  label: string
  onClick?: () => void
}

interface MessageActionBarProps {
  actions: ActionItem[]
}

export default function MessageActionBar({ actions }: MessageActionBarProps) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2px',
        padding: '4px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-default)',
      }}
    >
      {actions.map((action, i) => (
        <button
          key={i}
          onClick={action.onClick}
          title={action.label}
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '4px',
            background: 'transparent',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-hover)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
        >
          <Icon name={action.icon} size={14} color="var(--text-secondary)" />
        </button>
      ))}
    </div>
  )
}
