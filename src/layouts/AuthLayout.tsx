import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-base)' }}>
      {/* Brand panel */}
      <div
        style={{
          width: '560px',
          height: '100%',
          background: '#1E1B4B',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            fontFamily: "'Sora', sans-serif",
            marginBottom: '8px',
          }}
        >
          CrafterTech
        </span>
        <span
          style={{
            fontSize: '16px',
            fontWeight: 400,
            color: 'var(--brand-accent-light)',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          AI Workforce Platform
        </span>
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
  )
}
