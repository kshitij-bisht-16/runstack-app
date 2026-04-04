interface CreditUsageChartProps {
  used: number
  total: number
  label?: string
}

export default function CreditUsageChart({ used, total, label = 'Credits Used' }: CreditUsageChartProps) {
  const pct = Math.min((used / total) * 100, 100)
  const color = pct > 90 ? 'var(--error)' : pct > 70 ? 'var(--warning)' : 'var(--brand-accent)'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span
          style={{
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontSize: '12px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {used.toLocaleString()} / {total.toLocaleString()}
        </span>
      </div>
      <div
        style={{
          height: '6px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--bg-hover)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${pct}%`,
            borderRadius: 'var(--radius-full)',
            background: color,
            transition: 'width 0.3s ease',
          }}
        />
      </div>
    </div>
  )
}
