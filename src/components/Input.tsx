import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  errorMessage?: string
}

export default function Input({
  label,
  error = false,
  errorMessage,
  style,
  ...props
}: InputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
      {label && (
        <label
          style={{
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '18px',
            color: 'var(--text-primary)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {label}
        </label>
      )}
      <input
        style={{
          height: '40px',
          padding: '0 14px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--bg-elevated)',
          border: `1px solid ${error ? 'var(--error)' : 'var(--border-default)'}`,
          color: 'var(--text-primary)',
          fontSize: '13px',
          fontWeight: 400,
          lineHeight: '18px',
          fontFamily: "'Sora', sans-serif",
          outline: 'none',
          transition: 'border-color 0.15s',
          width: '100%',
          ...style,
        }}
        onFocus={(e) => {
          if (!error) e.currentTarget.style.borderColor = 'var(--border-focus)'
        }}
        onBlur={(e) => {
          if (!error) e.currentTarget.style.borderColor = 'var(--border-default)'
        }}
        {...props}
      />
      {error && errorMessage && (
        <span
          style={{
            fontSize: '11px',
            fontWeight: 400,
            lineHeight: '16px',
            color: 'var(--error)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  )
}
