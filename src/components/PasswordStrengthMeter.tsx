type Strength = 'weak' | 'medium' | 'strong'

interface PasswordStrengthMeterProps {
  strength: Strength
}

const config: Record<Strength, { color: string; label: string; segments: number }> = {
  weak: { color: 'var(--error)', label: 'Weak', segments: 1 },
  medium: { color: 'var(--warning)', label: 'Medium', segments: 2 },
  strong: { color: 'var(--success)', label: 'Strong', segments: 3 },
}

export default function PasswordStrengthMeter({ strength }: PasswordStrengthMeterProps) {
  const c = config[strength]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ display: 'flex', gap: '4px' }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: '4px',
              borderRadius: 'var(--radius-full)',
              background: i < c.segments ? c.color : 'var(--bg-hover)',
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>
      <span
        style={{
          fontSize: '11px',
          fontWeight: 500,
          lineHeight: '16px',
          color: c.color,
          fontFamily: "'Sora', sans-serif",
        }}
      >
        {c.label}
      </span>
    </div>
  )
}
