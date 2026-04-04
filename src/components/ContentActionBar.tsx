import Icon, { IconName } from './Icon'

interface ActionItem {
  icon: IconName
  label: string
  onClick?: () => void
}

interface ContentActionBarProps {
  actions: ActionItem[]
}

export default function ContentActionBar({ actions }: ContentActionBarProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '6px',
        borderRadius: 'var(--radius-md)',
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
            width: '32px',
            height: '32px',
            borderRadius: 'var(--radius-sm)',
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
          <Icon name={action.icon} size={16} color="var(--text-secondary)" />
        </button>
      ))}
    </div>
  )
}
