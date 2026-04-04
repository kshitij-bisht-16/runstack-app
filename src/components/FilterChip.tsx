interface FilterChipProps {
  active?: boolean
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
}

export default function FilterChip({ active = false, disabled = false, children, onClick }: FilterChipProps) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: '32px',
        padding: '0 12px',
        borderRadius: 'var(--radius-full)',
        border: active ? 'none' : '1px solid var(--border-default)',
        background: active ? 'var(--brand-accent)' : 'var(--bg-elevated)',
        color: disabled ? 'var(--text-disabled)' : active ? 'var(--text-primary)' : 'var(--text-secondary)',
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '16px',
        fontFamily: "'Sora', sans-serif",
        cursor: disabled ? 'not-allowed' : 'pointer',
        whiteSpace: 'nowrap',
        transition: 'background 0.15s, border-color 0.15s',
      }}
    >
      {children}
    </button>
  )
}
