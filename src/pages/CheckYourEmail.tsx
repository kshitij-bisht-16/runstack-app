import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Icon from '../components/Icon'

export default function CheckYourEmail() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', textAlign: 'center' }}>
      {/* Mail icon */}
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: 'var(--radius-full)',
          background: 'var(--success-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name="mail" size={32} color="var(--success)" />
      </div>

      {/* Heading */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
          Check your email
        </h2>
        <span
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            fontFamily: "'Sora', sans-serif",
            lineHeight: '22px',
          }}
        >
          We've sent a password reset link to{'\n'}you@company.com
        </span>
      </div>

      {/* Info banner */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 16px',
          borderRadius: 'var(--radius-md)',
          background: 'var(--bg-elevated)',
        }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--info)',
            flexShrink: 0,
          }}
        />
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif", textAlign: 'left' }}>
          Link expires in 15 minutes. Check spam if you don't see it.
        </span>
      </div>

      {/* Open email button */}
      <Button fullWidth>Open Email App</Button>

      {/* Resend */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
          Didn't receive it?
        </span>
        <button
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--brand-accent)',
            fontFamily: "'Sora', sans-serif",
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          Resend email
        </button>
      </div>

      {/* Back to sign in */}
      <Link
        to="/login"
        style={{
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--brand-accent)',
          fontFamily: "'Sora', sans-serif",
          textDecoration: 'none',
        }}
      >
        ← Back to sign in
      </Link>
    </div>
  )
}
