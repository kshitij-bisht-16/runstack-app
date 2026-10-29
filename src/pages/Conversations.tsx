import { useState } from 'react'
import Button from '../components/Button'

const conversationList = [
  { id: 1, title: 'Launch campaign brief', desc: 'Spark generated 3 variants. Needs approval.', time: '2m ago', status: 'Action needed' },
  { id: 2, title: 'Blog post optimization', desc: 'Pixel suggested tone changes for higher CTR.', time: '21m ago', status: 'Action needed' },
  { id: 3, title: 'Ad creative review', desc: 'Nova exported 4 social-ready creatives.', time: '1h ago', status: 'Action needed' },
  { id: 4, title: 'Weekly analytics summary', desc: 'Bolt compiled performance data across all channels.', time: '3h ago', status: 'Action needed' },
]

const chatMessages = [
  {
    sender: 'You',
    time: '2 min ago',
    text: 'Create 3 social media post variants for our new product launch. Focus on engagement and brand voice.',
    isUser: true,
  },
  {
    sender: 'Spark',
    time: 'Just now',
    text: "I've generated 3 variants for your product launch:\n\n1. Storytelling — builds emotional connection\n2. Question-driven — sparks conversation\n3. Bold statement — maximizes shares\n\nShall I refine any, or generate more options?",
    isUser: false,
    credits: '3 credits used',
  },
]

export default function Conversations() {
  const [selected, setSelected] = useState(1)

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* Conversation list panel */}
      <div
        style={{
          width: '470px',
          background: 'var(--bg-surface)',
          borderRight: '1px solid var(--border-subtle)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          flexShrink: 0,
        }}
      >
        {/* Header */}
        <div style={{ padding: '20px 20px 0 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Button fullWidth>+ New Conversation</Button>
          <input
            placeholder="Search conversations..."
            style={{
              height: '36px',
              padding: '0 12px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              color: 'var(--text-primary)',
              fontSize: '12px',
              fontFamily: "'Sora', sans-serif",
              outline: 'none',
              width: '100%',
            }}
          />
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border-subtle)' }} />

        {/* List */}
        <div style={{ flex: 1, overflow: 'auto', padding: '0 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {conversationList.map((convo) => (
            <div
              key={convo.id}
              onClick={() => setSelected(convo.id)}
              style={{
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: selected === convo.id ? 'var(--bg-elevated)' : 'transparent',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                  {convo.title}
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                  {convo.desc}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', flexShrink: 0, marginLeft: '12px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#505050', fontFamily: "'Sora', sans-serif" }}>{convo.time}</span>
                <span style={{ fontSize: '11px', color: 'var(--agent-spark)', fontFamily: "'Sora', sans-serif" }}>{convo.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--bg-base)',
        }}
      >
        {/* Chat topbar */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
            Spark – Social Media Expert
          </span>
          <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            97 credits
          </span>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflow: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {chatMessages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 400,
                  lineHeight: '20px',
                  color: msg.isUser ? 'var(--text-primary)' : '#DCDCDC',
                  fontFamily: "'Sora', sans-serif",
                  whiteSpace: 'pre-line',
                  maxWidth: '600px',
                }}
              >
                {msg.text}
              </p>
              {!msg.isUser && (
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  <Button variant="primary" size="sm">Approve All</Button>
                  <Button variant="ghost" size="sm">Edit Variants</Button>
                  <Button variant="ghost" size="sm">Regenerate</Button>
                </div>
              )}
              <span style={{ fontSize: '11px', color: '#3C3C3C', fontFamily: "'Sora', sans-serif" }}>
                {msg.isUser ? `You · ${msg.time}` : `Spark · ${msg.time} · ${msg.credits}`}
              </span>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <div
          style={{
            padding: '16px 24px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          <input
            placeholder="Type your message to Spark..."
            style={{
              width: '100%',
              height: '44px',
              padding: '0 16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontFamily: "'Sora', sans-serif",
              outline: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}
