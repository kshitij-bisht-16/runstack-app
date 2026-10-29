import { useState } from 'react'
import Button from '../components/Button'
import Badge from '../components/Badge'

const agents = [
  { name: 'Spark', role: 'Social Media Expert', provider: 'Claude', status: 'active' as const, color: 'var(--agent-spark)' },
  { name: 'Pixel', role: 'Copywriter', provider: 'OpenAI', status: 'active' as const, color: 'var(--agent-pixel)' },
  { name: 'Nova', role: 'Graphic Designer', provider: 'Gemini', status: 'inactive' as const, color: 'var(--agent-nova)' },
  { name: 'Bolt', role: 'Ads Expert', provider: 'OpenAI', status: 'inactive' as const, color: 'var(--agent-bolt)' },
  { name: 'Cleo', role: 'Video Creator', provider: 'Claude', status: 'inactive' as const, color: 'var(--agent-cleo)' },
]

export default function AIAgents() {
  const [activeTab, setActiveTab] = useState<'my' | 'marketplace'>('my')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '32px' }}>
      {/* Topbar */}
      <div style={{ height: '102px', padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '4px', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
          AI Agents
        </h2>
        <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
          Manage and monitor your active AI workforce
        </span>
      </div>

      {/* Tabs */}
      <div
        style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          paddingLeft: '32px',
        }}
      >
        {(['my', 'marketplace'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0 16px',
              height: '44px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid var(--brand-accent)' : '2px solid transparent',
              color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-tertiary)',
              fontSize: '13px',
              fontWeight: activeTab === tab ? 600 : 400,
              fontFamily: "'Sora', sans-serif",
              cursor: 'pointer',
            }}
          >
            {tab === 'my' ? 'My Agents' : 'Marketplace'}
          </button>
        ))}
      </div>

      {/* Agent grid */}
      <div style={{ padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {agents.map((agent) => (
            <div
              key={agent.name}
              style={{
                width: '340px',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Accent bar */}
              <div style={{ height: '2px', background: agent.color }} />

              {/* Content */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                      {agent.name}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 400, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                      {agent.role} · {agent.provider}
                    </span>
                  </div>
                  <Badge variant={agent.status === 'active' ? 'active' : 'default'}>
                    {agent.status === 'active' ? 'Active' : 'Inactive'}
                  </Badge>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>Tag 1</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>Tag 2</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>+2 more</span>
                </div>

                {/* Action */}
                <Button variant={agent.status === 'active' ? 'secondary' : 'primary'} size="sm" fullWidth>
                  {agent.status === 'active' ? 'Deactivate' : 'Activate'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
