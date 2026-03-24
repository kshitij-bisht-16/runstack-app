import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Signup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Heading */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
          Create your account
        </h2>
        <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
          14-day free trial. No credit card required.
        </span>
      </div>

      {/* Fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <Input label="Full name" placeholder="Sarah Johnson" />
        <Input label="Work email" placeholder="you@company.com" type="email" />
        <div>
          <Input label="Password" placeholder="Create a strong password" type="password" />
          <span style={{ fontSize: '12px', color: 'var(--warning)', fontFamily: "'Sora', sans-serif", marginTop: '4px', display: 'block' }}>
            Strength: Medium
          </span>
        </div>
      </div>

      {/* Terms */}
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
        <input type="checkbox" style={{ accentColor: 'var(--brand-accent)' }} />
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
          I agree to the Terms of Service and Privacy Policy
        </span>
      </label>

      {/* Actions */}
      <Button fullWidth>Create Account</Button>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
        <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>or</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
      </div>

      <Button variant="ghost" fullWidth>Continue with Google</Button>

      {/* Login link */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
          Already have an account?
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
