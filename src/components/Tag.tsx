interface TagProps {
  children: React.ReactNode
}

export default function Tag({ children }: TagProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: '24px',
        padding: '0 8px',
        borderRadius: 'var(--radius-full)',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-default)',
        color: 'var(--text-secondary)',
        fontSize: '11px',
        fontWeight: 600,
        lineHeight: '16px',
        fontFamily: "'Sora', sans-serif",
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  )
}
