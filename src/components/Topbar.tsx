import Icon from './Icon'
import SearchBar from './SearchBar'

interface TopbarProps {
  title: string
  searchPlaceholder?: string
  onSearch?: (value: string) => void
  searchValue?: string
}

export default function Topbar({ title, searchPlaceholder, onSearch, searchValue }: TopbarProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        padding: '0 24px',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface)',
        flexShrink: 0,
      }}
    >
      <h1
        style={{
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '24px',
          color: 'var(--text-primary)',
          fontFamily: "'Sora', sans-serif",
          margin: 0,
        }}
      >
        {title}
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {onSearch && (
          <div style={{ width: '240px' }}>
            <SearchBar placeholder={searchPlaceholder} value={searchValue} onChange={onSearch} />
          </div>
        )}
        <button
          style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-md)',
            background: 'transparent',
            border: '1px solid var(--border-default)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Icon name="notifications" size={18} color="var(--text-secondary)" />
        </button>
      </div>
    </div>
  )
}
