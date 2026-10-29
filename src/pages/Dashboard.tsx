import Button from '../components/Button'
import AgentCard from '../components/AgentCard'
import Icon from '../components/Icon'

const statCards = [
  { label: 'AI CREDITS', value: '1,247', change: '↑ 12% from last month', changeColor: 'var(--success)' },
  { label: 'ACTIVE CHATS', value: '38', change: 'This month', changeColor: 'var(--text-tertiary)' },
  { label: 'ASSETS CREATED', value: '214', change: '↑ 34 this week', changeColor: 'var(--success)' },
  { label: 'AGENTS RUNNING', value: '3', change: '↓ 1 paused', changeColor: 'var(--error)' },
]

const agents = [
  { name: 'Spark', role: 'Social Media Expert', status: 'active' as const, provider: 'Claude', color: 'var(--agent-spark)' },
  { name: 'Pixel', role: 'Copywriter', status: 'working' as const, provider: 'OpenAI', color: 'var(--agent-pixel)' },
  { name: 'Nova', role: 'Graphic Designer', status: 'idle' as const, provider: 'Gemini', color: 'var(--agent-nova)' },
]

const conversations = [
  { title: 'Launch campaign brief', desc: 'Spark generated 3 variants. Needs approval.', time: '2m ago', status: 'Action needed' },
  { title: 'Blog post optimization', desc: 'Pixel suggested tone changes for higher CTR.', time: '21m ago', status: 'Action needed' },
  { title: 'Ad creative review', desc: 'Nova exported 4 social-ready creatives.', time: '1h ago', status: 'Action needed' },
  { title: 'Weekly analytics summary', desc: 'Bolt compiled performance data across all channels.', time: '3h ago', status: 'Action needed' },
]

export default function Dashboard() {
  return (
    <div style={{ padding: '0 32px 32px 32px', display: 'flex', flexDirection: 'column' }}>
      {/* Topbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '102px',
          padding: '24px 0',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h2
            style={{
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '32px',
              color: 'var(--text-primary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Welcome back, Kshitij
          </h2>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 400,
              lineHeight: '18px',
              color: 'var(--text-tertiary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            Here's what's happening with your AI workforce
          </span>
        </div>
        <Button size="sm">Add Agent</Button>
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
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                lineHeight: '14px',
                color: 'var(--text-tertiary)',
                letterSpacing: '0.06em',
                fontFamily: "'Sora', sans-serif",
              }}
            >
              {card.label}
            </span>
            <span
              style={{
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '40px',
                color: 'var(--text-primary)',
                fontFamily: "'Sora', sans-serif",
              }}
            >
              {card.value}
            </span>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 400,
                lineHeight: '16px',
                color: card.changeColor,
                fontFamily: "'Sora', sans-serif",
              }}
            >
              {card.change}
            </span>
          </div>
        ))}
      </div>

      {/* Credit meter */}
      <div
        style={{
          marginTop: '16px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 700,
              color: 'var(--text-tertiary)',
              letterSpacing: '0.06em',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            AI CREDITS
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            847
          </span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 400,
              color: 'var(--text-tertiary)',
              fontFamily: "'Sora', sans-serif",
            }}
          >
            of 1000 remaining
          </span>
        </div>
        {/* Progress bar */}
        <div
          style={{
            width: '100%',
            height: '8px',
            background: 'var(--bg-elevated)',
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: '84.7%',
              height: '100%',
              background: 'var(--brand-accent)',
              borderRadius: 'var(--radius-full)',
            }}
          />
        </div>
      </div>

      {/* Bottom panels */}
      <div style={{ display: 'flex', gap: '16px', marginTop: '16px', flex: 1 }}>
        {/* Active AI Agents Panel */}
        <div
          style={{
            width: '452px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Panel header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                fontFamily: "'Sora', sans-serif",
              }}
            >
              Active AI Agents
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'var(--text-tertiary)',
                fontFamily: "'Sora', sans-serif",
                cursor: 'pointer',
              }}
            >
              View All →
            </span>
          </div>

          {/* Agent grid — 2 columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {agents.map((agent) => (
              <AgentCard key={agent.name} {...agent} />
            ))}
          </div>

          <Button fullWidth>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <Icon name="add" size={16} color="#fff" />
              Activate Your First Agent
            </span>
          </Button>
        </div>

        {/* Recent Conversations Panel */}
        <div
          style={{
            flex: 1,
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Panel header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                fontFamily: "'Sora', sans-serif",
              }}
            >
              Recent Conversations
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'var(--text-tertiary)',
                fontFamily: "'Sora', sans-serif",
                cursor: 'pointer',
              }}
            >
              View All →
            </span>
          </div>

          {/* Conversation list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
            {conversations.map((convo) => (
              <div
                key={convo.title}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: 'var(--bg-elevated)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {convo.title}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'var(--text-tertiary)',
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {convo.desc}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#505050',
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {convo.time}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 400,
                      color: 'var(--agent-spark)',
                      fontFamily: "'Sora', sans-serif",
                    }}
                  >
                    {convo.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Button variant="secondary" fullWidth>
            Start Conversation
          </Button>
        </div>
      </div>
    </div>
  )
}
