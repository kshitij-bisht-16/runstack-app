import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

export default function ForgotPassword() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Back link */}
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

      {/* Heading */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
          Forgot your password?
        </h2>
        <span
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            fontFamily: "'Sora', sans-serif",
            lineHeight: '22px',
          }}
        >
          No worries, we'll send reset instructions{'\n'}to your registered email address.
        </span>
      </div>

      {/* Field */}
      <Input label="Email address" placeholder="you@company.com" type="email" />

      {/* Action */}
      <Button fullWidth>Send Reset Link</Button>

      {/* Login link */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
          Remember your password?
        </span>
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
          Sign in →
        </Link>
      </div>
    </div>
  )
}
