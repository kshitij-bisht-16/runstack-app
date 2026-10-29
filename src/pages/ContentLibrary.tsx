import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Badge from '../components/Badge'
import Tag from '../components/Tag'

/* ── Filters ── */
const brandFilters = ['All', 'Brand Identity', 'Product Info', 'Tone of Voice', 'Target Audience']
const generatedFilters = ['All', 'Social Media', 'Blog Post', 'Ad Copy', 'Email']

/* ── Brand Context cards ── */
const brandCards = [
  {
    id: 'bc-1',
    category: 'Brand Identity',
    categoryColor: 'var(--agent-pixel)',
    files: '3 files',
    date: 'Mar 10, 2026',
    title: 'Craftertech Brand Guidelines',
    desc: 'Logo usage, color palette, typography and visual identity standards.',
    tags: ['Logo', 'Colors', 'Typography'],
  },
  {
    id: 'bc-2',
    category: 'Product Info',
    categoryColor: 'var(--success)',
    files: '1 file',
    date: 'Mar 8, 2026',
    title: 'AI Platform Feature Overview',
    desc: 'Core features, pricing tiers, and technical capabilities of the platform.',
    tags: ['Features', 'Pricing', 'API'],
  },
  {
    id: 'bc-3',
    category: 'Tone of Voice',
    categoryColor: 'var(--warning)',
    files: '2 files',
    date: 'Mar 5, 2026',
    title: 'Content Style Guide',
    desc: 'Writing tone, vocabulary preferences, and communication guidelines.',
    tags: ['Tone', 'Style', 'Copy'],
  },
  {
    id: 'bc-4',
    category: 'Target Audience',
    categoryColor: 'var(--agent-spark)',
    files: '1 file',
    date: 'Mar 3, 2026',
    title: 'Ideal Customer Profile',
    desc: 'Demographics, pain points, and behavioral traits of our target users.',
    tags: ['ICP', 'Demographics', 'B2B'],
  },
]

/* ── Generated Content cards ── */
const generatedCards = [
  {
    id: 'gc-1',
    contentType: 'Social media',
    agent: 'Spark',
    agentColor: 'var(--agent-spark)',
    date: 'Mar 10, 2026',
    status: 'Pending Review' as const,
    title: 'Launch Day Social Campaign',
    desc: '3 post variants for the product launch announcement.',
    tags: ['Caption', 'Hashtag', 'Thread'],
    variants: 3,
  },
  {
    id: 'gc-2',
    contentType: 'Social media',
    agent: 'Pixel',
    agentColor: 'var(--agent-pixel)',
    date: 'Mar 9, 2026',
    status: 'Approved' as const,
    title: 'Why AI Agents Are the Future',
    desc: 'Long-form blog post exploring autonomous AI workforce trends.',
    tags: ['AI', 'Trends', 'B2B'],
    variants: 1,
  },
  {
    id: 'gc-3',
    contentType: 'Social media',
    agent: 'Bolt',
    agentColor: 'var(--agent-bolt)',
    date: 'Mar 7, 2026',
    status: 'Needs Revision' as const,
    title: 'Q1 Performance Ad Variants',
    desc: '5 ad variations for LinkedIn and Meta campaigns.',
    tags: ['Ads', 'CTA', 'Performance'],
    variants: 5,
  },
  {
    id: 'gc-4',
    contentType: 'Social media',
    agent: 'Cleo',
    agentColor: 'var(--agent-cleo)',
    date: 'Mar 5, 2026',
    status: 'Edited' as const,
    title: 'March Newsletter — Product Updates',
    desc: 'Monthly newsletter covering new features and agent improvements.',
    tags: ['Email', 'Updates', 'Monthly'],
    variants: 2,
  },
]

type ModalState = 'none' | 'add' | 'uploading' | 'success'

const statusColors: Record<string, { bg: string; color: string }> = {
  'Pending Review': { bg: 'var(--warning-muted)', color: 'var(--warning)' },
  'Approved': { bg: 'var(--success-muted)', color: 'var(--success)' },
  'Needs Revision': { bg: 'var(--error-muted)', color: 'var(--error)' },
  'Edited': { bg: 'var(--info-muted)', color: 'var(--info)' },
}

export default function ContentLibrary() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'generated' | 'brand'>('brand')
  const [activeFilter, setActiveFilter] = useState('All')
  const [modal, setModal] = useState<ModalState>('none')
  const [selectedType, setSelectedType] = useState('Brand Identity')

  const filters = activeTab === 'brand' ? brandFilters : generatedFilters

  const handleSaveBrandContext = () => {
    setModal('uploading')
    setTimeout(() => setModal('success'), 2000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '0 32px', position: 'relative' }}>
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
        {activeTab === 'brand' ? (
          <Button onClick={() => setModal('add')}>+ Add Brand Context</Button>
        ) : (
          <Button size="sm">Export All</Button>
        )}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)' }}>
        {(['generated', 'brand'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => { setActiveTab(tab); setActiveFilter('All') }}
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
        <div style={{ position: 'relative', width: '540px' }}>
          <input
            placeholder={activeTab === 'brand' ? 'Search brand context...' : 'Search...'}
            style={{
              width: '100%',
              height: '40px',
              padding: '0 14px 0 36px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              fontSize: '13px',
              fontFamily: "'Sora', sans-serif",
              outline: 'none',
            }}
          />
          <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            <Icon name="search" size={16} color="var(--text-tertiary)" />
          </div>
        </div>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              height: '32px',
              padding: '0 14px',
              borderRadius: 'var(--radius-full)',
              border: activeFilter === f ? '1px solid var(--brand-accent)' : '1px solid var(--border-default)',
              background: activeFilter === f ? 'var(--brand-accent)' : 'transparent',
              color: activeFilter === f ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontSize: '12px',
              fontWeight: 600,
              fontFamily: "'Sora', sans-serif",
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* ── Brand Context Tab ── */}
      {activeTab === 'brand' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {brandCards.map((card) => (
            <div
              key={card.id}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                cursor: 'pointer',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
            >
              {/* Content area */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {/* Meta row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    height: '22px', padding: '0 8px', borderRadius: 'var(--radius-full)',
                    fontSize: '10px', fontWeight: 700, fontFamily: "'Sora', sans-serif",
                    color: card.categoryColor,
                    background: `${card.categoryColor}1F`,
                    whiteSpace: 'nowrap',
                  }}>
                    {card.category}
                  </span>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{card.files}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>{card.date}</span>
                  </div>
                </div>
                {/* Title */}
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                  {card.title}
                </span>
                {/* Description */}
                <span style={{ fontSize: '13px', lineHeight: '18px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                  {card.desc}
                </span>
                {/* Tags */}
                <div style={{ display: 'flex', gap: '4px' }}>
                  {card.tags.map((tag) => (
                    <span key={tag} style={{
                      display: 'inline-flex', alignItems: 'center',
                      height: '17px', padding: '0 8px', borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-elevated)',
                      fontSize: '10px', fontWeight: 500, color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action shelf */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginTop: '20px', padding: '12px 20px',
                background: 'var(--bg-base)', border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
              }}>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(`/content/brand/${card.id}`) }}
                  style={{
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    color: 'var(--brand-accent)', fontSize: '13px', fontWeight: 600, fontFamily: "'Sora', sans-serif",
                    display: 'flex', alignItems: 'center', gap: '2px',
                  }}
                >
                  View Details →
                </button>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button style={{
                    width: '28px', height: '28px', borderRadius: 'var(--radius-sm)',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon name="edit" size={16} color="var(--text-tertiary)" />
                  </button>
                  <button style={{
                    width: '28px', height: '28px', borderRadius: 'var(--radius-sm)',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon name="delete" size={16} color="var(--text-tertiary)" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add card */}
          <div
            onClick={() => setModal('add')}
            style={{
              background: 'transparent',
              border: '1px dashed var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              minHeight: '266px',
            }}
          >
            <span style={{ fontSize: '26px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>+</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
              Add Brand Context
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
              Upload files, add URLs or paste text
            </span>
          </div>
        </div>
      )}

      {/* ── Generated Content Tab ── */}
      {activeTab === 'generated' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {generatedCards.map((card) => (
            <div
              key={card.id}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-xl)',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                cursor: 'pointer',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
            >
              {/* Content area */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {/* Meta row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    height: '22px', padding: '0 8px', borderRadius: 'var(--radius-full)',
                    fontSize: '10px', fontWeight: 700, fontFamily: "'Sora', sans-serif",
                    color: 'var(--text-secondary)', background: 'var(--bg-elevated)',
                  }}>
                    {card.contentType}
                  </span>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    height: '22px', padding: '0 8px', borderRadius: 'var(--radius-full)',
                    fontSize: '10px', fontWeight: 700, fontFamily: "'Sora', sans-serif",
                    color: card.agentColor,
                    background: `${card.agentColor}1F`,
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: card.agentColor }} />
                    {card.agent}
                  </span>
                  <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                    {card.date}
                  </span>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    height: '22px', padding: '0 8px', borderRadius: 'var(--radius-full)',
                    fontSize: '10px', fontWeight: 700, fontFamily: "'Sora', sans-serif",
                    background: statusColors[card.status].bg,
                    color: statusColors[card.status].color,
                  }}>
                    {card.status}
                  </span>
                </div>
                {/* Title */}
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                  {card.title}
                </span>
                {/* Description */}
                <span style={{ fontSize: '13px', lineHeight: '18px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
                  {card.desc}
                </span>
                {/* Tags + variants */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {card.tags.map((tag) => (
                    <span key={tag} style={{
                      display: 'inline-flex', alignItems: 'center',
                      height: '17px', padding: '0 8px', borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-elevated)',
                      fontSize: '10px', fontWeight: 500, color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif",
                    }}>
                      {tag}
                    </span>
                  ))}
                  <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                    {card.variants} variant{card.variants !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Action shelf */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginTop: '20px', padding: '12px 20px',
                background: 'var(--bg-base)', border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
              }}>
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(`/content/generated/${card.id}`) }}
                  style={{
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    color: 'var(--brand-accent)', fontSize: '13px', fontWeight: 600, fontFamily: "'Sora', sans-serif",
                    display: 'flex', alignItems: 'center', gap: '2px',
                  }}
                >
                  View Details →
                </button>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <button style={{
                    width: '28px', height: '28px', borderRadius: 'var(--radius-sm)',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon name="edit" size={16} color="var(--text-tertiary)" />
                  </button>
                  <button style={{
                    width: '28px', height: '28px', borderRadius: 'var(--radius-sm)',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon name="delete" size={16} color="var(--text-tertiary)" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add card */}
          <div
            onClick={() => setModal('add')}
            style={{
              background: 'transparent',
              border: '1px dashed var(--border-default)',
              borderRadius: 'var(--radius-xl)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: 'pointer',
              minHeight: '266px',
            }}
          >
            <span style={{ fontSize: '26px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>+</span>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>
              Generate New Content
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
              Start a conversation with an AI agent
            </span>
          </div>
        </div>
      )}

      {/* ═══ MODALS ═══ */}

      {/* Overlay */}
      {modal !== 'none' && (
        <div
          onClick={() => setModal('none')}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {/* ── Add Brand Context Modal ── */}
            {modal === 'add' && (
              <div style={{
                width: '520px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
                    Add Brand Context
                  </h3>
                  <button onClick={() => setModal('none')} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                    <Icon name="close" size={20} color="var(--text-secondary)" />
                  </button>
                </div>

                {/* Context Type */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                    Context Type
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {[
                      { name: 'Brand Identity', color: 'var(--warning)' },
                      { name: 'Product Info', color: 'var(--success)' },
                      { name: 'Tone of Voice', color: 'var(--warning)' },
                      { name: 'Target Audience', color: 'var(--agent-spark)' },
                    ].map((t) => (
                      <button
                        key={t.name}
                        onClick={() => setSelectedType(t.name)}
                        style={{
                          height: '44px', borderRadius: 'var(--radius-md)',
                          background: selectedType === t.name ? 'var(--bg-overlay)' : 'var(--bg-elevated)',
                          border: selectedType === t.name ? '1px solid var(--brand-accent)' : '1px solid var(--border-default)',
                          color: 'var(--text-primary)', fontSize: '13px', fontWeight: 500, fontFamily: "'Sora', sans-serif",
                          cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', padding: '0 14px',
                        }}
                      >
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: t.color }} />
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Context Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Context Name</label>
                  <input
                    placeholder="e.g. Craftertech Brand Guidelines"
                    style={{
                      height: '40px', padding: '0 14px', borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                      color: 'var(--text-primary)', fontSize: '13px', fontFamily: "'Sora', sans-serif", outline: 'none',
                    }}
                  />
                </div>

                {/* Description */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Description</label>
                  <textarea
                    placeholder="Briefly describe what this context contains and how agents should use it..."
                    rows={3}
                    style={{
                      padding: '10px 14px', borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                      color: 'var(--text-primary)', fontSize: '13px', fontFamily: "'Sora', sans-serif",
                      outline: 'none', resize: 'none',
                    }}
                  />
                </div>

                {/* Upload Files */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Upload Files</label>
                  <div style={{
                    border: '1px dashed var(--border-default)', borderRadius: 'var(--radius-md)',
                    padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                    background: 'var(--bg-elevated)',
                  }}>
                    <Icon name="upload" size={20} color="var(--text-tertiary)" />
                    <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                      Drop files here or click to browse
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                      PDF, DOCX, TXT, PNG, JPG — max 25MB each
                    </span>
                  </div>
                </div>

                {/* URL */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Or add a URL</label>
                  <input
                    placeholder="https://yourwebsite.com/brand-guidelines"
                    style={{
                      height: '40px', padding: '0 14px', borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                      color: 'var(--text-primary)', fontSize: '13px', fontFamily: "'Sora', sans-serif", outline: 'none',
                    }}
                  />
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>Tags</label>
                  <input
                    placeholder="e.g. Logo, Colors, Voice (comma separated)"
                    style={{
                      height: '40px', padding: '0 14px', borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                      color: 'var(--text-primary)', fontSize: '13px', fontFamily: "'Sora', sans-serif", outline: 'none',
                    }}
                  />
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                  <Button variant="ghost" onClick={() => setModal('none')}>Cancel</Button>
                  <Button onClick={handleSaveBrandContext}>Save Brand Context</Button>
                </div>
              </div>
            )}

            {/* ── Uploading Modal ── */}
            {modal === 'uploading' && (
              <div style={{
                width: '480px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
              }}>
                {/* Spinner */}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  border: '3px solid var(--border-default)', borderTopColor: 'var(--brand-accent)',
                  animation: 'spin 1s linear infinite',
                }} />
                <Icon name="upload" size={20} color="var(--brand-accent)" />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
                  Processing Brand Context
                </h3>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif", textAlign: 'center' }}>
                  Analyzing your files and extracting brand information for your AI agents...
                </span>

                {/* Progress bar */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ height: '6px', borderRadius: 'var(--radius-full)', background: 'var(--bg-hover)', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '65%', borderRadius: 'var(--radius-full)', background: 'var(--brand-accent)', transition: 'width 0.5s' }} />
                  </div>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif", textAlign: 'center' }}>
                    65% — Extracting brand voice patterns
                  </span>
                </div>

                {/* Files */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-elevated)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)' }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>brand-guidelines.pdf</span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--success)', fontWeight: 500, fontFamily: "'Sora', sans-serif" }}>✓ Done</span>
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--bg-elevated)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-accent)' }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>tone-of-voice.docx</span>
                    </div>
                    <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>340 KB</span>
                  </div>
                </div>
              </div>
            )}

            {/* ── Success Modal ── */}
            {modal === 'success' && (
              <div style={{
                width: '480px', background: 'var(--bg-surface)', borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
              }}>
                {/* Success circle */}
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  border: '3px solid var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name="check" size={28} color="var(--success)" />
                </div>
                <Icon name="check" size={20} color="var(--success)" />
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
                  Brand Context Added!
                </h3>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif", textAlign: 'center' }}>
                  Your brand guidelines have been processed and are now available to all your AI agents.
                </span>

                {/* Summary */}
                <div style={{
                  width: '100%', borderRadius: 'var(--radius-md)', background: 'var(--bg-elevated)',
                  padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '10px',
                }}>
                  {[
                    ['Context', 'Craftertech Brand Guidelines'],
                    ['Type', 'Brand Identity'],
                    ['Files', '2 files processed'],
                  ].map(([label, value]) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>{label}</span>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>{value}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
                  <Button variant="ghost" fullWidth onClick={() => { setModal('none'); setModal('add') }}>Add Another</Button>
                  <Button fullWidth onClick={() => { setModal('none'); navigate('/content/brand/bc-1') }}>View Brand Context</Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Spinner animation */}
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}
