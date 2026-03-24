import { useState } from 'react'

const statCards = [
  { label: 'AI CREDITS', value: '1,247', change: '↑ 12% from last month', changeColor: 'var(--success)' },
  { label: 'ACTIVE CHATS', value: '38', change: 'This month', changeColor: 'var(--text-tertiary)' },
  { label: 'ASSETS CREATED', value: '214', change: '↑ 34 this week', changeColor: 'var(--success)' },
  { label: 'AGENTS RUNNING', value: '3', change: '↓ 1 paused', changeColor: 'var(--error)' },
]

const agentConversations = [
  { name: 'Spark', count: '24 conversations', color: 'var(--agent-spark)', pct: 100 },
  { name: 'Pixel', count: '18 conversations', color: 'var(--agent-pixel)', pct: 75 },
  { name: 'Nova', count: '12 conversations', color: 'var(--agent-nova)', pct: 50 },
  { name: 'Bolt', count: '8 conversations', color: 'var(--agent-bolt)', pct: 33 },
  { name: 'Cleo', count: '4 conversations', color: 'var(--agent-cleo)', pct: 17 },
]

const topContent = [
  { rank: 1, title: 'Product Launch Post', agent: 'Spark', agentColor: 'var(--agent-spark)', metric: '2.4k impressions' },
  { rank: 2, title: 'Q4 Blog Post', agent: 'Pixel', agentColor: 'var(--agent-pixel)', metric: '1.8k views' },
  { rank: 3, title: 'Holiday Banner', agent: 'Nova', agentColor: 'var(--agent-nova)', metric: '1.2k clicks' },
  { rank: 4, title: 'Google Ad Campaign', agent: 'Bolt', agentColor: 'var(--agent-bolt)', metric: '890 conversions' },
]

export default function Analytics() {
  const [period, setPeriod] = useState('30 Days')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0 32px' }}>
      {/* Topbar */}
      <div style={{ height: '86px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Analytics</h2>
          <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            Track your AI workforce performance
          </span>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['7 Days', '30 Days', '90 Days'].map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              style={{
                height: '32px',
                padding: '0 12px',
                borderRadius: 'var(--radius-sm)',
                border: 'none',
                background: period === p ? 'var(--text-primary)' : 'transparent',
                color: period === p ? 'var(--text-inverse)' : 'var(--text-tertiary)',
                fontSize: '12px',
                fontWeight: 600,
                fontFamily: "'Sora', sans-serif",
                cursor: 'pointer',
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {statCards.map((card) => (
          <div
            key={card.label}
            style={{
              flex: 1,
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', letterSpacing: '0.06em', fontFamily: "'Sora', sans-serif" }}>
              {card.label}
            </span>
            <span style={{ fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
              {card.value}
            </span>
            <span style={{ fontSize: '11px', color: card.changeColor, fontFamily: "'Sora', sans-serif" }}>{card.change}</span>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {['Daily Credit Usage', 'Usage by Agent'].map((title) => (
          <div
            key={title}
            style={{
              flex: 1,
              height: '260px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{title}</span>
              <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif", cursor: 'pointer' }}>View details</span>
            </div>
            {/* Chart placeholder */}
            <div
              style={{
                flex: 1,
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-elevated)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '12px', color: 'var(--text-disabled)', fontFamily: "'Sora', sans-serif" }}>Chart placeholder</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* Conversations by Agent */}
        <div
          style={{
            flex: 1,
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
            Conversations by Agent
          </span>
          {agentConversations.map((a) => (
            <div key={a.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", width: '48px' }}>
                {a.name}
              </span>
              <div style={{ flex: 1, height: '8px', background: 'var(--bg-elevated)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                <div style={{ width: `${a.pct}%`, height: '100%', background: a.color, borderRadius: 'var(--radius-full)' }} />
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif", whiteSpace: 'nowrap' }}>
                {a.count}
              </span>
            </div>
          ))}
        </div>

        {/* Top Performing Content */}
        <div
          style={{
            flex: 1,
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
            Top Performing Content
          </span>
          {topContent.map((item) => (
            <div key={item.rank} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#3C3C3C', fontFamily: "'Sora', sans-serif", width: '24px' }}>
                {item.rank}
              </span>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                  {item.title}
                </span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: item.agentColor, fontFamily: "'Sora', sans-serif" }}>
                  by {item.agent}
                </span>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--success)', fontFamily: "'Sora', sans-serif" }}>
                {item.metric}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
