import Icon from './Icon'

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export default function SearchBar({ placeholder = 'Search...', value, onChange }: SearchBarProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        padding: '0 12px',
        gap: '8px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border-default)',
        transition: 'border-color 0.15s',
      }}
    >
      <Icon name="search" size={18} color="var(--text-tertiary)" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
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
    </div>
  )
}
