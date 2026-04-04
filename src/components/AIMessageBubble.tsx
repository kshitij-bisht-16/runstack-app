interface AIMessageBubbleProps {
  message: string
  agentName?: string
  agentColor?: string
  time?: string
}

export default function AIMessageBubble({ message, agentName, agentColor = 'var(--text-secondary)', time }: AIMessageBubbleProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <div style={{ maxWidth: '70%' }}>
        {agentName && (
          <div
            style={{
              fontSize: '11px',
              fontWeight: 600,
              lineHeight: '16px',
              color: agentColor,
              fontFamily: "'Sora', sans-serif",
              marginBottom: '4px',
            }}
          >
            {agentName}
          </div>
        )}
        <div
          style={{
            padding: '10px 14px',
            borderRadius: '14px 14px 14px 4px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-primary)',
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: '20px',
            fontFamily: "'Sora', sans-serif",
          }}
        >
          {message}
          {time && (
            <div
              style={{
                fontSize: '10px',
                color: 'var(--text-tertiary)',
                marginTop: '4px',
              }}
            >
              {time}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
