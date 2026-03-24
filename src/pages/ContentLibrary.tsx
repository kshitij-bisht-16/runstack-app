import { useState } from 'react'
import Button from '../components/Button'

const filters = ['All', 'Brand Identity', 'Product Info', 'Tone of Voice', 'Target Audience']

const brandCards = [
  {
    category: 'Brand Identity',
    categoryColor: 'var(--agent-pixel)',
    files: '3 files',
    date: 'Mar 10, 2026',
    title: 'Craftertech Brand Guidelines',
    desc: 'Logo usage, color palette, typography and visual identity standards.',
    tags: ['Logo', 'Colors', 'Typography'],
  },
  {
    category: 'Product Info',
    categoryColor: 'var(--success)',
    files: '1 file',
    date: 'Mar 8, 2026',
    title: 'AI Platform Feature Overview',
    desc: 'Core features, pricing tiers, and technical capabilities of the platform.',
    tags: ['Features', 'Pricing', 'API'],
  },
  {
    category: 'Tone of Voice',
    categoryColor: 'var(--warning)',
    files: '2 files',
    date: 'Mar 5, 2026',
    title: 'Content Style Guide',
    desc: 'Writing tone, vocabulary preferences, and communication guidelines.',
    tags: ['Tone', 'Style', 'Copy'],
  },
  {
    category: 'Target Audience',
    categoryColor: 'var(--agent-spark)',
    files: '1 file',
    date: 'Mar 3, 2026',
    title: 'Ideal Customer Profile',
    desc: 'Demographics, pain points, and behavioral traits of our target users.',
    tags: ['ICP', 'Demographics', 'B2B'],
  },
]

export default function ContentLibrary() {
  const [activeTab, setActiveTab] = useState<'generated' | 'brand'>('brand')
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 32px' }}>
      {/* Topbar */}
      <div style={{ height: '82px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
            Content Library
          </h2>
          <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            Manage brand context and AI-generated content
          </span>
        </div>
        <Button>+ Add Brand Context</Button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)' }}>
        {(['generated', 'brand'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0 16px',
              height: '40px',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid var(--brand-accent)' : '2px solid transparent',
              color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-tertiary)',
              fontSize: '13px',
              fontWeight: activeTab === tab ? 600 : 400,
              fontFamily: "'Sora', sans-serif",
              cursor: 'pointer',
              width: '160px',
            }}
          >
            {tab === 'generated' ? 'Generated Content' : 'Brand Context'}
          </button>
        ))}
      </div>

      {/* Search + filter */}
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <input
          placeholder="Search brand context..."
          style={{
            width: '540px',
            height: '40px',
            padding: '0 14px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            fontSize: '13px',
            fontFamily: "'Sora', sans-serif",
            outline: 'none',
          }}
        />
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              height: '28px',
              padding: '0 12px',
              borderRadius: 'var(--radius-full)',
              border: `1px solid ${activeFilter === f ? 'var(--agent-pixel)' : '#262626'}`,
              background: activeFilter === f ? 'var(--agent-pixel)' : 'var(--bg-surface)',
              color: activeFilter === f ? 'var(--agent-pixel)' : 'var(--text-secondary)',
              fontSize: '12px',
              fontWeight: activeFilter === f ? 600 : 400,
              fontFamily: "'Sora', sans-serif",
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Brand context grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {brandCards.map((card) => (
          <div
            key={card.title}
            style={{
              width: '560px',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              cursor: 'pointer',
            }}
          >
            {/* Meta row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: card.categoryColor, fontFamily: "'Sora', sans-serif" }}>
                {card.category}
              </span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{card.files}</span>
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{card.date}</span>
              </div>
            </div>

            <span style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
              {card.title}
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
              {card.desc}
            </span>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {card.tags.map((tag) => (
                <span key={tag} style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Add card */}
        <div
          style={{
            width: '560px',
            height: '196px',
            background: 'var(--bg-base)',
            border: '1px solid #262626',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '32px', fontWeight: 700, color: 'var(--text-disabled)', fontFamily: "'Sora', sans-serif" }}>+</span>
          <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            Add Brand Context
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-disabled)', fontFamily: "'Sora', sans-serif" }}>
            Upload files, add URLs or paste text
          </span>
        </div>
      </div>
    </div>
  )
}
