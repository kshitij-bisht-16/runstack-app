import { Link } from 'react-router-dom'
import Button from '../components/Button'

const font = "'Sora', sans-serif"

/* ── Data ── */

const stats = [
  { value: '2,400+', label: 'Active businesses' },
  { value: '38M+', label: 'Tasks completed' },
  { value: '99.7%', label: 'Uptime SLA' },
  { value: '6', label: 'Specialized agents' },
]

const problems = [
  { title: 'Hiring is slow and expensive', desc: 'A single full-time hire takes months and costs 5–10× more than an AI agent doing the same work around the clock.' },
  { title: 'Tools require constant babysitting', desc: 'Existing AI tools dump the output on you. You still have to review, edit, schedule, and publish — every single day, alone.' },
  { title: 'Agencies disappear after the brief', desc: 'Freelancers hand over a PDF and vanish. No iteration, no accountability, no memory of what worked last time.' },
]

const agents = [
  { name: 'Spark', role: 'Social Media', color: 'var(--agent-spark)', colorMuted: 'var(--agent-spark-muted)', desc: 'Drafts, schedules, and publishes across all platforms. Trends-aware and always on-brand.', icon: '⚡' },
  { name: 'Pixel', role: 'Copywriter', color: 'var(--agent-pixel)', colorMuted: 'var(--agent-pixel-muted)', desc: 'Long-form content, ad copy, emails, and landing pages. Learns your voice over time.', icon: '✍' },
  { name: 'Nova', role: 'Designer', color: 'var(--agent-nova)', colorMuted: 'var(--agent-nova-muted)', desc: 'Generates and scores the best image outputs across GPT-4o + Gemini. On-brand every time.', icon: '🎨' },
  { name: 'Bolt', role: 'Automation', color: 'var(--agent-bolt)', colorMuted: 'var(--agent-bolt-muted)', desc: 'Connects your tools, triggers workflows, and handles repetitive tasks 24/7 automatically.', icon: '⚙' },
  { name: 'Cleo', role: 'Customer Support', color: 'var(--agent-cleo)', colorMuted: 'var(--agent-cleo-muted)', desc: 'Responds to leads and customers on WhatsApp. Qualifies, nurtures, and escalates when needed.', icon: '💬' },
  { name: 'Atlas', role: 'Analytics', color: 'var(--info)', colorMuted: 'var(--info-muted)', desc: "Tracks performance, surfaces insights, and tells you what's working before you have to ask.", icon: '📊' },
]

const steps = [
  { num: '01', title: 'Subscribe', desc: 'Pick a plan and activate the agents you need. No setup fee, no onboarding call, no credit card required.' },
  { num: '02', title: 'Assign', desc: 'Give tasks via the dashboard or just message your agents on WhatsApp — exactly like you\'d work with a real team.' },
  { num: '03', title: 'Done', desc: 'Review, approve, and publish. Your agents learn your preferences over time and need less guidance with each task.' },
]

const features = [
  { title: 'Multi-model routing', desc: 'Auto-selects the best AI model (Claude, GPT-4o, Gemini) for each task — balancing speed, cost, and quality.', icon: '🔀' },
  { title: 'WhatsApp-native', desc: 'Your entire AI workforce is accessible from a single WhatsApp thread. No new apps, no context switching.', icon: '💬' },
  { title: 'Real-time credit meter', desc: 'Track credit usage per agent with live updates. Set limits and alerts before you hit them.', icon: '📊' },
  { title: 'Team collaboration', desc: 'Invite teammates, assign roles, and review AI output together with a full audit trail.', icon: '👥' },
  { title: 'Analytics & insights', desc: 'Understand what performs, which agents drive ROI, and where to double down.', icon: '📈' },
  { title: 'Agent marketplace', desc: 'Add specialists as you grow. Start with one agent, scale to a full AI department on demand.', icon: '🏪' },
]

const pricingPlans = [
  {
    tier: 'STARTER',
    price: '$0',
    period: '/mo',
    desc: 'Free forever. No card required.',
    cta: 'Get started free',
    ctaVariant: 'secondary' as const,
    features: ['1 active agent', '500 credits / month', 'Dashboard access', 'WhatsApp integration', 'Community support'],
    highlighted: false,
  },
  {
    tier: 'PRO',
    price: '$49',
    period: '/mo',
    desc: 'For growing businesses and teams.',
    cta: 'Start Pro trial',
    ctaVariant: 'primary' as const,
    features: ['All 6 agents', '10,000 credits / month', 'Team workspace — 5 seats', 'Analytics dashboard', 'Priority support', 'API access'],
    highlighted: true,
  },
  {
    tier: 'ENTERPRISE',
    price: 'Custom',
    period: '',
    desc: 'Tailored for larger organisations.',
    cta: 'Talk to sales',
    ctaVariant: 'secondary' as const,
    features: ['Unlimited agents', 'Unlimited credits', 'Unlimited team seats', 'Custom integrations', 'Dedicated success manager', 'SLA guarantee'],
    highlighted: false,
  },
]

/* ── Helpers ── */

const SectionLabel = ({ children }: { children: string }) => (
  <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', fontFamily: font, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
    {children}
  </span>
)

const Divider = () => (
  <div style={{ width: '100%', height: '1px', background: 'var(--border-subtle)' }} />
)

/* ── Page ── */

export default function LandingPage() {
  return (
    <div style={{ background: 'var(--bg-base)', color: 'var(--text-primary)', fontFamily: font, minHeight: '100vh' }}>

      {/* ═══ NAV ═══ */}
      <nav style={{ height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 72px', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'var(--brand-accent)' }} />
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>CrafterTech</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {['Agents', 'Features', 'Pricing', 'Docs'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none' }}>{item}</a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/login" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none' }}>Log in</Link>
          <Link to="/signup"><Button>Start free</Button></Link>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{ height: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '24px' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', height: '28px', padding: '0 14px', borderRadius: 'var(--radius-full)', border: '1px solid var(--brand-accent)', fontSize: '12px', color: 'var(--brand-accent-text)' }}>
          AI Workforce Platform — Now in Beta
        </span>
        <h1 style={{ fontSize: '48px', fontWeight: 800, lineHeight: '56px', margin: 0 }}>
          Your AI Workforce.<br />
          <span style={{ color: 'var(--brand-accent)' }}>Always On.</span>
        </h1>
        <p style={{ fontSize: '16px', lineHeight: '24px', color: 'var(--text-secondary)', maxWidth: '520px', margin: 0 }}>
          Deploy specialized AI agents that write, design, automate, and communicate — 24/7 via dashboard and WhatsApp.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <Link to="/signup"><Button>Start free — no card needed</Button></Link>
          <button style={{ height: '40px', padding: '0 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-default)', background: 'var(--bg-surface)', color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, fontFamily: font, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
            ▶  See it in action
          </button>
        </div>
      </section>

      <Divider />

      {/* ═══ STATS ═══ */}
      <section style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '80px', padding: '0 72px' }}>
        {stats.map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', fontWeight: 800, lineHeight: '48px' }}>{s.value}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </section>

      <Divider />

      {/* ═══ PROBLEM ═══ */}
      <section style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <SectionLabel>The Problem</SectionLabel>
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px', margin: 0, maxWidth: '600px' }}>
            Running a business shouldn't mean{'\n'}doing everything yourself
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, maxWidth: '560px' }}>
            Most founders try to do it all — and burn out. CrafterTech gives you the team you never had.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: '1296px' }}>
          {problems.map(p => (
            <div key={p.title} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '28px' }}>
              <span style={{ fontSize: '20px', fontWeight: 700, color: 'var(--error)' }}>✕</span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '16px 0 8px' }}>{p.title}</h3>
              <p style={{ fontSize: '13px', lineHeight: '18px', color: 'var(--text-secondary)', margin: 0 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══ AGENTS ═══ */}
      <section id="agents" style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <SectionLabel>Your Team</SectionLabel>
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px', margin: 0 }}>Meet your new team</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>Six specialists, always on, always aligned with your brand and goals.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: '1296px' }}>
          {agents.map(a => (
            <div key={a.name} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--bg-elevated)', borderRadius: '16px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: a.colorMuted, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
                {a.icon}
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 700 }}>{a.name}</div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>{a.role}</div>
              </div>
              <p style={{ fontSize: '13px', lineHeight: '18px', color: 'var(--text-secondary)', margin: 0 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══ HOW IT WORKS ═══ */}
      <section style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <SectionLabel>How It Works</SectionLabel>
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px', margin: 0 }}>Up and running in minutes</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: '1296px' }}>
          {steps.map(s => (
            <div key={s.num} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--brand-accent)' }}>{s.num}</span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, margin: 0 }}>{s.title}</h3>
              <p style={{ fontSize: '13px', lineHeight: '18px', color: 'var(--text-secondary)', margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══ FEATURES ═══ */}
      <section id="features" style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <SectionLabel>Platform</SectionLabel>
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px', margin: 0 }}>One platform. Every function.</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, maxWidth: '560px' }}>Everything you need to run your marketing, support, and operations — without growing your headcount.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: '1296px' }}>
          {features.map(f => (
            <div key={f.title} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>{f.icon}</span>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>{f.title}</h3>
              <p style={{ fontSize: '13px', lineHeight: '18px', color: 'var(--text-secondary)', margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══ PRICING ═══ */}
      <section id="pricing" style={{ padding: '80px 72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '48px' }}>
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <SectionLabel>Pricing</SectionLabel>
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px', margin: 0 }}>Simple, scalable pricing</h2>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>Start free, scale as your team grows. No contracts, no hidden fees.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', width: '100%', maxWidth: '1296px' }}>
          {pricingPlans.map(plan => (
            <div
              key={plan.tier}
              style={{
                background: 'var(--bg-surface)',
                border: plan.highlighted ? '1px solid var(--brand-accent)' : '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
              }}
            >
              {plan.highlighted && (
                <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', fontSize: '11px', fontWeight: 600, color: 'var(--brand-accent)', background: 'var(--bg-base)', padding: '2px 12px', borderRadius: 'var(--radius-full)', border: '1px solid var(--brand-accent)' }}>
                  Most popular
                </span>
              )}
              <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em' }}>{plan.tier}</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                <span style={{ fontSize: '40px', fontWeight: 800 }}>{plan.price}</span>
                {plan.period && <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{plan.period}</span>}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>{plan.desc}</p>
              <Button variant={plan.ctaVariant} fullWidth>{plan.cta}</Button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--success)' }}>•</span>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ padding: '120px 72px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '24px' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 800, lineHeight: '56px', margin: 0 }}>
          Your team is ready.<br />
          <span style={{ color: 'var(--brand-accent)' }}>Are you?</span>
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', margin: 0 }}>Start free today. No credit card, no onboarding call.</p>
        <Link to="/signup"><Button>Start free — no card needed</Button></Link>
      </section>

      <Divider />

      {/* ═══ FOOTER ═══ */}
      <footer style={{ height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 72px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'var(--brand-accent)' }} />
          <span style={{ fontSize: '12px', fontWeight: 600 }}>CrafterTech</span>
        </div>
        <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>© 2026 CrafterTech. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy', 'Terms', 'Docs'].map(l => (
            <a key={l} href="#" style={{ fontSize: '12px', color: 'var(--text-tertiary)', textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  )
}
