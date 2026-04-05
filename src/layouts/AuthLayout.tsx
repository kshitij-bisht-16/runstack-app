import { Outlet } from 'react-router-dom'
import DottedSurface from '../components/DottedSurface'

export default function AuthLayout() {
  return (
    <>
      <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-base)' }}>
        {/* Brand panel */}
        <div
          style={{
            width: '560px',
            height: '100%',
            background: '#4F46E5',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {/* Dotted surface background */}
          <DottedSurface />

          {/* Brand content */}
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              padding: '40px 44px',
            }}
          >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: 'var(--brand-accent)',
                }}
              />
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  fontFamily: "'Sora', sans-serif",
                  letterSpacing: '0.06em',
                }}
              >
                CRAFTERTECH
              </span>
            </div>

            {/* Main content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h1
                style={{
                  fontSize: '40px',
                  fontWeight: 800,
                  lineHeight: '48px',
                  color: 'var(--text-primary)',
                  fontFamily: "'Sora', sans-serif",
                  margin: 0,
                }}
              >
                Your AI workforce,
                <br />
                on autopilot.
              </h1>
              <span
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'var(--text-primary)',
                  fontFamily: "'Sora', sans-serif",
                  opacity: 0.8,
                }}
              >
                Activate AI agents that handle your
                <br />
                marketing while you focus on growth.
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['5000+ Teams', '50M+ tasks', 'SOC 2 Compliant'].map((label) => (
                  <span
                    key={label}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      height: '24px',
                      padding: '0 8px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--border-default)',
                      fontSize: '12px',
                      color: 'var(--text-primary)',
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span
                style={{
                  fontSize: '13px',
                  color: 'var(--text-primary)',
                  fontFamily: "'Sora', sans-serif",
                  opacity: 0.8,
                }}
              >
                "CrafterTech cut our content production time by 70%."
              </span>
              <span
                style={{
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                  fontFamily: "'Sora', sans-serif",
                  opacity: 0.6,
                }}
              >
                — Sarah K., Head of Growth at Velocity
              </span>
            </div>
          </div>
        </div>

        {/* Form panel */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-base)',
          }}
        >
          <div style={{ width: '400px' }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}
