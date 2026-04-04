interface AgentSelectorPillProps {
  name: string
  color: string
  colorMuted: string
  selected?: boolean
  onClick?: () => void
}

export default function AgentSelectorPill({ name, color, colorMuted, selected = false, onClick }: AgentSelectorPillProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        height: '36px',
        padding: '0 14px',
        borderRadius: 'var(--radius-full)',
        background: selected ? colorMuted : 'var(--bg-elevated)',
        border: selected ? `1px solid ${color}` : '1px solid var(--border-default)',
        cursor: 'pointer',
        transition: 'background 0.15s, border-color 0.15s',
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: 'var(--radius-full)',
          background: color,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: '12px',
          fontWeight: 600,
          lineHeight: '16px',
          color: selected ? color : 'var(--text-secondary)',
          fontFamily: "'Sora', sans-serif",
          whiteSpace: 'nowrap',
        }}
      >
        {name}
      </span>
    </button>
  )
}
