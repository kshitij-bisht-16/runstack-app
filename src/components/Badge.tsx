type BadgeVariant = 'default' | 'active' | 'warning' | 'error' | 'info' | 'free-plan' | 'claude' | 'openai' | 'gemini'

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
}

const variantStyles: Record<BadgeVariant, { bg: string; color: string; dot: string }> = {
  default: {
    bg: 'var(--bg-elevated)',
    color: 'var(--text-secondary)',
    dot: '',
  },
  active: {
    bg: 'var(--success-muted)',
    color: 'var(--success)',
    dot: '● ',
  },
  warning: {
    bg: 'var(--warning-muted)',
    color: 'var(--warning)',
    dot: '● ',
  },
  error: {
    bg: 'var(--error-muted)',
    color: 'var(--error)',
    dot: '● ',
  },
  info: {
    bg: 'var(--info-muted)',
    color: 'var(--info)',
    dot: '● ',
  },
  'free-plan': {
    bg: 'var(--bg-elevated)',
    color: 'var(--text-primary)',
    dot: '',
  },
  claude: {
    bg: 'var(--agent-spark-muted)',
    color: 'var(--agent-spark)',
    dot: '',
  },
  openai: {
    bg: 'var(--agent-pixel-muted)',
    color: 'var(--agent-pixel)',
    dot: '',
  },
  gemini: {
    bg: 'var(--agent-nova-muted)',
    color: 'var(--agent-nova)',
    dot: '',
  },
}

export default function Badge({ variant = 'default', children }: BadgeProps) {
  const s = variantStyles[variant]

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        height: '24px',
        padding: '0 10px',
        borderRadius: 'var(--radius-full)',
        background: s.bg,
        color: s.color,
        fontSize: '11px',
        fontWeight: 600,
        lineHeight: '16px',
        fontFamily: "'Sora', sans-serif",
        whiteSpace: 'nowrap',
      }}
    >
      {s.dot}{children}
    </span>
  )
}
