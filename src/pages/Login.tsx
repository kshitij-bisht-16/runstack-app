import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Heading */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
          Welcome back
        </h2>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
          Sign in to your CrafterTech account
        </span>
      </div>

      {/* Fields */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <Input label="Email Address" placeholder="you@company.com" type="email" />
        <div>
          <Input label="Password" placeholder="Enter Password" type="password" />
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
            <Link
              to="/forgot-password"
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--brand-accent)',
                fontFamily: "'Sora', sans-serif",
                textDecoration: 'none',
              }}
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>

      {/* Actions */}
      <Button fullWidth onClick={() => navigate('/dashboard')}>Sign In</Button>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
        <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>or</span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border-default)' }} />
      </div>

      <Button variant="ghost" fullWidth onClick={() => navigate('/dashboard')}>Continue with google</Button>

      {/* Signup link */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '4px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
          Don't have an account?
        </span>
        <Link
          to="/signup"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--brand-accent)',
            fontFamily: "'Sora', sans-serif",
            textDecoration: 'none',
          }}
        >
          Sign up free →
        </Link>
      </div>
    </div>
  )
}
