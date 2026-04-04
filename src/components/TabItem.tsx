interface TabItemProps {
  active?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export default function TabItem({ active = false, children, onClick }: TabItemProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: '36px',
        padding: '0 16px',
        borderRadius: 'var(--radius-md)',
        background: active ? 'var(--bg-elevated)' : 'transparent',
        border: active ? '1px solid var(--border-default)' : '1px solid transparent',
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontSize: '13px',
        fontWeight: 600,
        lineHeight: '18px',
        fontFamily: "'Sora', sans-serif",
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background 0.15s, color 0.15s',
      }}
    >
      {children}
    </button>
  )
}
