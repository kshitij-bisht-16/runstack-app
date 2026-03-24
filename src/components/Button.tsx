import { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'disabled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  fullWidth?: boolean
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: 'var(--brand-accent)',
    color: 'var(--text-primary)',
    border: 'none',
  },
  secondary: {
    background: 'var(--bg-elevated)',
    color: 'var(--text-primary)',
    border: '1px solid var(--brand-accent-border)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)',
  },
  danger: {
    background: 'var(--error-muted)',
    color: 'var(--error)',
    border: '1px solid rgba(248, 113, 113, 0.25)',
  },
  disabled: {
    background: 'rgba(255, 255, 255, 0.08)',
    color: 'var(--text-disabled)',
    border: 'none',
    cursor: 'not-allowed',
  },
}

export default function Button({
  variant = 'primary',
  fullWidth = false,
  children,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const v = disabled ? 'disabled' : variant

  return (
    <button
      disabled={disabled || variant === 'disabled'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        height: '40px',
        padding: '0 18px',
        borderRadius: 'var(--radius-md)',
        fontFamily: "'Sora', sans-serif",
        fontSize: '13px',
        fontWeight: 600,
        lineHeight: '18px',
        cursor: v === 'disabled' ? 'not-allowed' : 'pointer',
        transition: 'background 0.15s, border-color 0.15s',
        width: fullWidth ? '100%' : undefined,
        ...variantStyles[v],
        ...style,
      }}
      onMouseEnter={(e) => {
        if (v === 'primary') e.currentTarget.style.background = 'var(--brand-accent-dark)'
        else if (v === 'secondary') e.currentTarget.style.background = 'var(--bg-hover)'
      }}
      onMouseLeave={(e) => {
        if (v === 'primary') e.currentTarget.style.background = 'var(--brand-accent)'
        else if (v === 'secondary') e.currentTarget.style.background = 'var(--bg-elevated)'
      }}
      {...props}
    >
      {children}
    </button>
  )
}
