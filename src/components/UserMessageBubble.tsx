interface UserMessageBubbleProps {
  message: string
  time?: string
}

export default function UserMessageBubble({ message, time }: UserMessageBubbleProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div
        style={{
          maxWidth: '70%',
          padding: '10px 14px',
          borderRadius: '14px 14px 4px 14px',
          background: 'var(--brand-accent)',
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
              color: 'rgba(255,255,255,0.6)',
              marginTop: '4px',
              textAlign: 'right',
            }}
          >
            {time}
          </div>
        )}
      </div>
    </div>
  )
}
