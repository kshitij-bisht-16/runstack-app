interface CheckboxProps {
  checked: boolean
  disabled?: boolean
  onChange?: () => void
}

export default function Checkbox({ checked, disabled = false, onChange }: CheckboxProps) {
  return (
    <button
      onClick={disabled ? undefined : onChange}
      disabled={disabled}
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '4px',
        border: checked ? 'none' : `2px solid ${disabled ? 'var(--border-subtle)' : 'var(--border-default)'}`,
        background: checked ? 'var(--brand-accent)' : disabled ? 'var(--bg-elevated)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        padding: 0,
        flexShrink: 0,
        transition: 'background 0.15s, border-color 0.15s',
      }}
    >
      {checked && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  )
}
