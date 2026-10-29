import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon, { type IconName } from './Icon'

interface NavItem {
  label: string
  path: string
  icon: IconName
}

const sections: { title: string; items: NavItem[] }[] = [
  {
    title: 'WORKSPACE',
    items: [
      { label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
      { label: 'AI Agents', path: '/agents', icon: 'smart_toy' },
      { label: 'Conversations', path: '/conversations', icon: 'chat' },
      { label: 'Content Library', path: '/content', icon: 'folder' },
    ],
  },
  {
    title: 'INSIGHTS',
    items: [
      { label: 'Analytics', path: '/analytics', icon: 'bar_chart' },
      { label: 'Billing', path: '/billing', icon: 'receipt' },
    ],
  },
  {
    title: 'ACCOUNT',
    items: [
      { label: 'Settings', path: '/settings', icon: 'settings' },
    ],
  },
]

function Spacer({ h }: { h: number }) {
  return <div style={{ width: '200px', height: `${h}px`, flexShrink: 0 }} />
}

function Divider() {
  return <div style={{ width: '200px', height: '1px', background: 'var(--border-default)', flexShrink: 0 }} />
}

function UserProfile() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative', flexShrink: 0 }}>
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: '56px',
            left: '0',
            width: '200px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            padding: '4px',
            zIndex: 10,
          }}
        >
          <button
            onClick={() => { navigate('/'); setOpen(false) }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              width: '100%',
              height: '36px',
              padding: '0 12px',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              cursor: 'pointer',
              background: 'transparent',
              fontFamily: "'Sora', sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              color: 'var(--error)',
              textAlign: 'left',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-hover)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
          >
            <Icon name="logout" size={16} color="var(--error)" />
            Log out
          </button>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '200px',
          height: '48px',
          padding: '0 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: 'rgba(255, 255, 255, 0.04)',
          border: 'none',
          cursor: 'pointer',
          borderRadius: 'var(--radius-md)',
          transition: 'background 0.15s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-hover)' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)' }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '16px',
            background: '#2E2E2E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="account_circle" size={32} color="var(--text-secondary)" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', textAlign: 'left', flex: 1 }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Kshitij
          </span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 400,
              color: 'var(--text-tertiary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Pro Plan
          </span>
        </div>
        <Icon name="chevron_down" size={16} color="var(--text-tertiary)" />
      </button>
    </div>
  )
}

export default function Sidebar() {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path: string) => location.pathname.startsWith(path)

  return (
    <aside
      style={{
        width: '240px',
        height: '100%',
        background: 'var(--bg-surface)',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 20px',
        gap: '4px',
        flexShrink: 0,
        borderRight: '1px solid var(--border-default)',
      }}
    >
      {/* Brand header — Figma "Frame 9" 200×36px (I321:11881;60:5124)
          Logo instance (I321:11881;1397:38151) = "Property 1=Logo, Property 2=Brand" (1362:33597)
          129×15px, centered horizontally (x:35.5 in 200px frame)
          Followed by 20px gap then Divider */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '36px' }}>
          <svg width="129" height="15" viewBox="0 0 129 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            {/* Fevicon icon — 27×15, brand-accent */}
            <path d="M8.33622 8.28859L13.5 3.16555L18.6637 8.28859L20.25 6.71141L13.5 0L6.74997 6.71141L8.33622 8.28859Z" fill="var(--brand-accent)"/>
            <path d="M15.0863 15L20.25 9.87696L25.4138 15L27 13.4228L20.25 6.71141L13.5 13.4228L15.0863 15Z" fill="var(--brand-accent)"/>
            <path d="M1.58625 15L6.75 9.87696L11.9138 15L13.5 13.4228L6.74997 6.71141L0 13.4228L1.58625 15Z" fill="var(--brand-accent)"/>
            {/* "Run" — 37×15, white, at x:33 */}
            <g transform="translate(33, 0)">
              <path d="M0 14.6609V0H2.85006V14.6609H0ZM8.9516 14.6609L4.45573 8.31782H7.647L12.2834 14.6609H8.9516ZM2.00709 9.79388V7.5H5.74027C6.26211 7.5 6.71036 7.39362 7.08501 7.18085C7.47305 6.96808 7.77411 6.66888 7.9882 6.28324C8.20229 5.89761 8.30933 5.45878 8.30933 4.96675C8.30933 4.46144 8.20229 4.01596 7.9882 3.63032C7.77411 3.24468 7.47305 2.94548 7.08501 2.73271C6.71036 2.51995 6.26211 2.41356 5.74027 2.41356H2.00709V0H5.4392C6.61669 0 7.63362 0.172872 8.48997 0.518616C9.35971 0.864361 10.0287 1.38963 10.4971 2.09441C10.9654 2.7992 11.1995 3.68351 11.1995 4.74734V5.06649C11.1995 6.14362 10.9587 7.02793 10.477 7.71941C10.0087 8.4109 9.34633 8.92952 8.48997 9.27527C7.63362 9.62101 6.61669 9.79388 5.4392 9.79388H2.00709Z" fill="white"/>
              <path d="M17.8791 15C16.6213 15 15.6445 14.5878 14.9487 13.7633C14.2663 12.9388 13.9251 11.7154 13.9251 10.0931V3.80984H16.7149V10.3324C16.7149 10.9973 16.9023 11.5293 17.2769 11.9282C17.6516 12.3138 18.16 12.5066 18.8023 12.5066C19.4446 12.5066 19.9664 12.3005 20.3678 11.8883C20.7826 11.4761 20.99 10.9176 20.99 10.2128V3.80984H23.7799V14.6609H21.5721V10.0532H21.7929C21.7929 11.1436 21.6524 12.0545 21.3714 12.7859C21.0904 13.5173 20.6689 14.0691 20.1069 14.4415C19.5449 14.8138 18.8425 15 17.9995 15H17.8791Z" fill="white"/>
              <path d="M26.9846 14.6609V3.82979H29.1924V8.47739H28.9917C28.9917 7.37367 29.1389 6.45612 29.4333 5.72473C29.7277 4.98005 30.1625 4.42154 30.7379 4.0492C31.3266 3.67686 32.0559 3.49069 32.9256 3.49069H33.046C34.344 3.49069 35.3274 3.90957 35.9965 4.74734C36.6655 5.57181 37 6.80851 37 8.45745V14.6609H34.2101V8.21809C34.2101 7.55319 34.0161 7.01463 33.6281 6.60239C33.2534 6.19016 32.7316 5.98404 32.0626 5.98404C31.3802 5.98404 30.8249 6.19681 30.3967 6.62234C29.9819 7.03457 29.7745 7.59308 29.7745 8.29787V14.6609H26.9846Z" fill="white"/>
            </g>
            {/* "Stack" — 55×15, white, at x:74 (33+41) */}
            <g transform="translate(74, 0)">
              <path d="M5.62104 15C4.40281 15 3.37659 14.8107 2.54238 14.4321C1.70816 14.0405 1.07257 13.5052 0.635594 12.8264C0.211865 12.1345 0 11.3577 0 10.4961H1.50954C1.50954 11.0444 1.64195 11.5601 1.90678 12.0431C2.18486 12.5131 2.62183 12.8982 3.2177 13.1984C3.82681 13.4856 4.62792 13.6292 5.62104 13.6292C6.5347 13.6292 7.28947 13.4987 7.88534 13.2376C8.49445 12.9765 8.94466 12.624 9.23598 12.1802C9.54053 11.7363 9.69281 11.2402 9.69281 10.6919C9.69281 10 9.41474 9.42559 8.85859 8.96867C8.31569 8.49869 7.49472 8.21802 6.39567 8.12663L4.72723 7.96997C3.48253 7.86553 2.48941 7.48694 1.74788 6.8342C1.0196 6.16841 0.655456 5.29373 0.655456 4.21018C0.655456 3.38773 0.85408 2.66319 1.25133 2.03655C1.64857 1.40992 2.21134 0.913838 2.93962 0.548303C3.68115 0.182768 4.56833 0 5.60117 0C6.64726 0 7.54106 0.189295 8.28259 0.567885C9.03736 0.93342 9.61336 1.44256 10.0106 2.0953C10.4079 2.74804 10.6065 3.50522 10.6065 4.36684H9.09694C9.09694 3.84465 8.97777 3.35509 8.73942 2.89817C8.50107 2.44125 8.12369 2.07572 7.60727 1.80157C7.09085 1.51436 6.42215 1.37076 5.60117 1.37076C4.81992 1.37076 4.17109 1.50131 3.65467 1.7624C3.15149 2.0235 2.7741 2.36945 2.52251 2.80026C2.28417 3.23107 2.16499 3.70104 2.16499 4.21018C2.16499 4.84987 2.39672 5.39164 2.86017 5.83551C3.32363 6.27937 3.99233 6.53394 4.86627 6.59922L6.5347 6.75587C7.51458 6.8342 8.34879 7.04961 9.03736 7.40209C9.73916 7.74151 10.2754 8.1919 10.6462 8.75326C11.017 9.30157 11.2023 9.94778 11.2023 10.6919C11.2023 11.5274 10.9706 12.2715 10.5072 12.9243C10.057 13.577 9.41474 14.0862 8.58052 14.4517C7.7463 14.8172 6.75981 15 5.62104 15Z" fill="white"/>
              <path d="M18.2985 14.7846C17.5702 14.7846 16.9412 14.6802 16.4116 14.4713C15.8819 14.2624 15.4714 13.9099 15.1801 13.4138C14.8888 12.9047 14.7431 12.2258 14.7431 11.3773V1.03786H16.1732V11.5927C16.1732 12.1932 16.3387 12.6567 16.6698 12.983C17.0008 13.2963 17.4709 13.453 18.08 13.453H19.9669V14.7846H18.2985ZM12.8562 5.42428V4.30809H19.9669V5.42428H12.8562Z" fill="white"/>
              <path d="M29.2018 14.6671V11.5535H28.9634V7.87206C28.9634 7.10183 28.7582 6.51436 28.3477 6.10966C27.9372 5.69191 27.3016 5.48303 26.4409 5.48303C26.0437 5.48303 25.6398 5.48956 25.2293 5.50261C24.8321 5.51567 24.4481 5.53525 24.0773 5.56136C23.7198 5.57441 23.402 5.59399 23.1239 5.6201V4.32768C23.4152 4.30157 23.7132 4.27546 24.0177 4.24935C24.3223 4.22324 24.6335 4.21018 24.9513 4.21018C25.2823 4.19713 25.6001 4.1906 25.9047 4.1906C26.9772 4.1906 27.8379 4.32115 28.4868 4.58224C29.1488 4.84334 29.6321 5.25457 29.9367 5.81593C30.2413 6.36423 30.3935 7.0953 30.3935 8.00914V14.6671H29.2018ZM25.6464 14.9413C24.9049 14.9413 24.2495 14.8107 23.6801 14.5496C23.1107 14.2885 22.6671 13.9099 22.3493 13.4138C22.0447 12.9178 21.8925 12.3172 21.8925 11.6123C21.8925 10.9204 22.0514 10.3329 22.3692 9.84987C22.7002 9.36684 23.1703 9.0013 23.7794 8.75326C24.4017 8.49217 25.1499 8.36162 26.0238 8.36162H29.1025V9.47781H25.9245C25.0903 9.47781 24.4481 9.68016 23.9979 10.0849C23.5609 10.4765 23.3424 10.9922 23.3424 11.6319C23.3424 12.2846 23.5741 12.8068 24.0376 13.1984C24.501 13.577 25.13 13.7663 25.9245 13.7663C26.4145 13.7663 26.8845 13.6815 27.3347 13.5117C27.785 13.329 28.1623 13.0287 28.4669 12.611C28.7714 12.1802 28.937 11.5927 28.9634 10.8486L29.4004 11.4556C29.3475 12.2258 29.1621 12.8721 28.8443 13.3943C28.5265 13.9034 28.0961 14.2885 27.5532 14.5496C27.0103 14.8107 26.3747 14.9413 25.6464 14.9413Z" fill="white"/>
              <path d="M38.5438 15C37.6566 15 36.8819 14.8499 36.2199 14.5496C35.571 14.2363 35.0281 13.8185 34.5912 13.2963C34.1542 12.7611 33.8231 12.1736 33.598 11.5339C33.3862 10.8943 33.2802 10.248 33.2802 9.5953V9.32115C33.2802 8.65535 33.3862 8.00914 33.598 7.38251C33.8231 6.74282 34.1542 6.16841 34.5912 5.65927C35.0281 5.13708 35.571 4.72585 36.2199 4.42559C36.8819 4.11227 37.6433 3.95561 38.504 3.95561C39.378 3.95561 40.1526 4.11227 40.8279 4.42559C41.5165 4.7389 42.0726 5.18277 42.4964 5.75718C42.9201 6.33159 43.1717 7.01044 43.2511 7.79373H41.821C41.7019 7.07572 41.3576 6.48172 40.7882 6.01175C40.2321 5.52872 39.4707 5.28721 38.504 5.28721C37.6698 5.28721 36.9746 5.4765 36.4185 5.85509C35.8756 6.22063 35.4651 6.72324 35.187 7.36292C34.909 7.98956 34.7699 8.68799 34.7699 9.45822C34.7699 10.2154 34.909 10.9204 35.187 11.5731C35.4651 12.2128 35.8822 12.7285 36.4384 13.1201C36.9945 13.4987 37.6963 13.688 38.5438 13.688C39.1926 13.688 39.7554 13.577 40.2321 13.3551C40.722 13.1201 41.1126 12.8068 41.4039 12.4151C41.7085 12.0235 41.8872 11.5927 41.9402 11.1227H43.3703C43.3173 11.906 43.0657 12.5914 42.6155 13.1789C42.1786 13.7533 41.6092 14.2037 40.9074 14.53C40.2056 14.8433 39.4177 15 38.5438 15Z" fill="white"/>
              <path d="M53.2521 14.6671L49.0214 9.8107H47.3133L52.2987 4.30809H53.8877L49.4187 9.22324L49.518 8.42037L55 14.6671H53.2521ZM46.1017 14.6671V0.372063H47.5914V14.6671H46.1017Z" fill="white"/>
            </g>
          </svg>
        </div>
        <Divider />
      </div>

      {/* spacer h:8 after brand */}
      <Spacer h={8} />

      {/* Flat list: section labels, spacers, nav items, dividers */}
      {sections.map((section, si) => {
        const elements: React.ReactNode[] = []

        /* Section label */
        elements.push(
          <div
            key={`label-${section.title}`}
            style={{ padding: '0 12px', height: '24px', display: 'flex', alignItems: 'center' }}
          >
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                lineHeight: '14px',
                color: 'var(--text-tertiary)',
                fontFamily: "'Sora', sans-serif",
                letterSpacing: '0.06em',
              }}
            >
              {section.title}
            </span>
          </div>
        )

        /* spacer h:4 after section label */
        elements.push(<Spacer key={`sp-after-label-${si}`} h={4} />)

        /* Nav items */
        section.items.forEach((item) => {
          const active = isActive(item.path)
          elements.push(
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '200px',
                height: '36px',
                padding: '0 12px',
                borderRadius: 'var(--radius-md)',
                border: 'none',
                cursor: 'pointer',
                background: active ? 'var(--bg-overlay)' : 'transparent',
                fontFamily: "'Sora', sans-serif",
                fontSize: '13px',
                lineHeight: '18px',
                fontWeight: active ? 600 : 400,
                color: active ? 'var(--text-primary)' : '#8C8C8C',
                transition: 'background 0.15s',
                textAlign: 'left',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.background = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.background = 'transparent'
              }}
            >
              <Icon name={item.icon} size={16} color={active ? 'var(--text-primary)' : '#8C8C8C'} />
              {item.label}
            </button>
          )
        })

        /* Divider + spacers between sections */
        if (si < sections.length - 1) {
          elements.push(<Spacer key={`sp-before-div-${si}`} h={12} />)
          elements.push(<Divider key={`div-${si}`} />)
          elements.push(<Spacer key={`sp-after-div-${si}`} h={12} />)
        }

        return elements
      })}

      {/* Flex spacer to push user profile to bottom */}
      <div style={{ flex: 1 }} />

      {/* spacer h:16 before bottom divider */}
      <Spacer h={16} />
      <Divider />
      <Spacer h={12} />

      {/* User profile with dropdown */}
      <UserProfile />
    </aside>
  )
}
