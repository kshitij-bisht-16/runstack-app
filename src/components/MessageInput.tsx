import Icon from './Icon'

interface MessageInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSend?: () => void
}

export default function MessageInput({ placeholder = 'Type a message...', value, onChange, onSend }: MessageInputProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-default)',
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter' && onSend) onSend() }}
        style={{
          flex: 1,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          color: 'var(--text-primary)',
          fontSize: '13px',
          fontWeight: 400,
          lineHeight: '18px',
          fontFamily: "'Sora', sans-serif",
        }}
      />
      <button
        onClick={onSend}
        style={{
          width: '32px',
          height: '32px',
          borderRadius: 'var(--radius-sm)',
          background: 'var(--brand-accent)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0,
        }}
      >
        <Icon name="send" size={16} color="var(--text-primary)" />
      </button>
    </div>
  )
}
