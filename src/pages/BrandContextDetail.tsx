import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Icon from '../components/Icon'
import Badge from '../components/Badge'
import Tag from '../components/Tag'
import Toggle from '../components/Toggle'

/* ── Mock data ── */
const contextData = {
  title: 'Craftertech Brand Guidelines',
  description: 'Logo usage, color palette, typography and visual identity standards for the Craftertech AI Platform.',
  category: 'Brand Identity',
  categoryColor: 'var(--agent-pixel)',
  tags: ['Logo', 'Colors', 'Typography', 'Brand Identity'],
  addedDate: 'Mar 10, 2026',
  updatedDate: '2 days ago',
  files: [
    { name: 'brand-guidelines.pdf', type: 'PDF', typeColor: 'var(--error)', size: '2.4 MB', date: 'Mar 10, 2026' },
    { name: 'color-palette.png', type: 'PNG', typeColor: 'var(--success)', size: '840 KB', date: 'Mar 10, 2026' },
    { name: 'typography-guide.docx', type: 'DOCX', typeColor: 'var(--brand-accent)', size: '1.1 MB', date: 'Mar 10, 2026' },
  ],
  agents: [
    { name: 'Spark', role: 'Social Media Expert', color: 'var(--agent-spark)', status: 'Active' as const },
    { name: 'Pixel', role: 'Copywriter', color: 'var(--agent-pixel)', status: 'Active' as const },
    { name: 'Nova', role: 'Graphic Designer', color: 'var(--agent-nova)', status: 'Default' as const },
  ],
  activity: [
    { label: 'Context updated', user: 'Kshitij', time: '2 days ago', color: 'var(--brand-accent)' },
    { label: 'color-palette.png added', user: 'Kshitij', time: '5 days ago', color: 'var(--success)' },
    { label: 'Context created', user: 'Kshitij', time: 'Mar 10, 2026', color: 'var(--brand-accent)' },
  ],
  bodyText: 'This brand context package contains all visual identity standards for the Craftertech AI Platform. It includes logo specifications, color palette definitions, typography guidelines, and usage rules for maintaining brand consistency across all AI-generated content.',
  usageInstructions: 'Reference this context when generating any customer-facing content. Ensure all visual outputs comply with the color palette and typography rules defined in this guideline.',
}

export default function BrandContextDetail() {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(true)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0 40px 40px' }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '28px' }}>
        <button
          onClick={() => navigate('/content')}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--brand-accent-text-light)', fontSize: '13px', fontWeight: 500, fontFamily: "'Sora', sans-serif",
            display: 'flex', alignItems: 'center', gap: '4px',
          }}
        >
          ← Content Library
        </button>
        <span style={{ color: 'var(--text-tertiary)', fontSize: '13px', fontFamily: "'Sora', sans-serif" }}>/</span>
        <span style={{ color: 'var(--text-secondary)', fontSize: '13px', fontFamily: "'Sora', sans-serif" }}>
          {contextData.title}
        </span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, lineHeight: '40px', color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
            {contextData.title}
          </h1>
          <p style={{ fontSize: '14px', lineHeight: '20px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif", margin: 0, maxWidth: '600px' }}>
            {contextData.description}
          </p>
          {/* Tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif" }}>Tags:</span>
            {contextData.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            <button style={{
              background: 'transparent', border: '1px dashed var(--border-default)', borderRadius: 'var(--radius-full)',
              color: 'var(--text-tertiary)', fontSize: '11px', fontWeight: 600, fontFamily: "'Sora', sans-serif",
              height: '24px', padding: '0 10px', cursor: 'pointer',
            }}>
              + Add Tag
            </button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
          <Button variant="danger">Delete</Button>
          <Button variant="ghost">+ Add Files</Button>
          <Button>Edit Context</Button>
        </div>
      </div>

      {/* Status row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            height: '24px', padding: '0 10px', borderRadius: 'var(--radius-full)',
            fontSize: '11px', fontWeight: 600, fontFamily: "'Sora', sans-serif",
            color: contextData.categoryColor,
            background: `${contextData.categoryColor}1F`,
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: contextData.categoryColor }} />
            {contextData.category}
          </span>
          <Toggle checked={isActive} onChange={() => setIsActive(!isActive)} />
          <span style={{ fontSize: '13px', fontWeight: 500, color: isActive ? 'var(--text-primary)' : 'var(--warning)', fontFamily: "'Sora', sans-serif" }}>
            {isActive ? 'Active' : 'Paused'}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            {contextData.files.length} files
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>·</span>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            Added {contextData.addedDate}
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>·</span>
          <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
            Updated {contextData.updatedDate}
          </span>
        </div>
      </div>

      {/* Main content — 2 columns */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Left column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Uploaded Files */}
          <div style={{
            background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, lineHeight: '24px', color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
                Uploaded Files
              </h3>
              <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                {contextData.files.length} files
              </span>
            </div>

            {contextData.files.map((file) => (
              <div
                key={file.name}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '12px 16px', borderRadius: 'var(--radius-md)', background: 'var(--bg-elevated)',
                }}
              >
                {/* File type badge */}
                <div style={{
                  width: '40px', height: '40px', borderRadius: 'var(--radius-sm)',
                  background: `${file.typeColor}1F`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', fontWeight: 700, color: file.typeColor, fontFamily: "'Sora', sans-serif",
                }}>
                  {file.type}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                    {file.name}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                    {file.size}  ·  {file.date}
                  </div>
                </div>
                <Button variant="ghost" style={{ height: '36px', fontSize: '12px', padding: '0 14px' }}>Download</Button>
              </div>
            ))}
          </div>

          {/* Description */}
          <div style={{
            background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, lineHeight: '24px', color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
              Description
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
              {contextData.bodyText}
            </p>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
              Usage instructions for AI agents
            </h4>
            <p style={{ fontSize: '14px', lineHeight: '22px', color: 'var(--text-secondary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
              {contextData.usageInstructions}
            </p>
          </div>
        </div>

        {/* Right column */}
        <div style={{ width: '340px', display: 'flex', flexDirection: 'column', gap: '20px', flexShrink: 0 }}>
          {/* Agents using this */}
          <div style={{
            background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, lineHeight: '24px', color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
                Agents using this
              </h3>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '24px', height: '24px', borderRadius: 'var(--radius-full)',
                background: 'var(--info-muted)', color: 'var(--info)',
                fontSize: '11px', fontWeight: 700, fontFamily: "'Sora', sans-serif",
              }}>
                {contextData.agents.length}
              </span>
            </div>

            {contextData.agents.map((agent) => (
              <div key={agent.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: 'var(--radius-full)',
                  background: `${agent.color}1F`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: 700, color: agent.color, fontFamily: "'Sora', sans-serif", flexShrink: 0,
                }}>
                  {agent.name.charAt(0)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                    {agent.name}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                    {agent.role}
                  </div>
                </div>
                <Badge variant={agent.status === 'Active' ? 'active' : 'default'}>
                  {agent.status === 'Active' ? '● Active' : 'Default'}
                </Badge>
              </div>
            ))}
          </div>

          {/* Activity */}
          <div style={{
            background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px',
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, lineHeight: '24px', color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif", margin: 0 }}>
              Activity
            </h3>

            {contextData.activity.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px' }}>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%', background: item.color,
                  marginTop: '6px', flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Sora', sans-serif" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontFamily: "'Sora', sans-serif" }}>
                    {item.user}  ·  {item.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Paused activity (only shown when paused) */}
            {!isActive && (
              <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--warning)', marginTop: '6px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--warning)', fontFamily: "'Sora', sans-serif" }}>
                    Context paused · Just now
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
