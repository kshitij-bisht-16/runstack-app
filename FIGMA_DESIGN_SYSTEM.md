---
name: "craftertech-figma-design-system"
title: "Craftertech AI Platform — Figma Design System Guide"
project: "Craftertech AI Platform"
figma_file_key: "G7WZMg8OnLFCsuImpgMpEn"
version: "1.3.0"
last_updated: "2026-03-23"
changelog:
  - version: "1.3.0"
    date: "2026-03-23"
    changes:
      - "Added CTA component specification subsection to Security screen notes"
      - "Documented DS Button instance wiring for Update Password and Discard CTAs"
      - "Expanded fix #7 in Security table into layout fix (7) and CTA wiring fix (7a)"
      - "Updated content structure tree with explicit DS component references and variant IDs"
  - version: "1.2.0"
    date: "2026-03-23"
    changes:
      - "Added Section 13 — Screen-Specific Refinement Notes"
      - "Documented all 10 issues fixed in 07 — Settings (Security)"
      - "Updated Security frame height in Screen Inventory from 949px to 1191px"
      - "Added counterAxisSizingMode FIXED at placeholder height to Common Mistakes"
      - "Added session-separator pattern to Auto Layout Rules"
  - version: "1.1.0"
    date: "2026-03-23"
    changes:
      - "Added Changelog to YAML frontmatter"
      - "Added name field to YAML frontmatter"
  - version: "1.0.0"
    date: "2026-03-23"
    changes:
      - "Initial document generated from live Figma file state"
authors:
  - Kshitij Shah
status: "active"
scope:
  - components
  - color_styles
  - text_styles
  - auto_layout
  - grid_system
  - screen_inventory
  - naming_conventions
  - plugin_workflows
excludes:
  - prototyping
  - micro_interactions
  - animations
  - transitions
font_family: "Sora"
canvas_size: "1440 × 900"
color_mode: "dark"
total_screens: 30
total_components: 32
total_text_styles: 17
total_paint_styles: 42
---

# Craftertech AI Platform — Figma Design System Guide

> **File:** Craftertech - AI Platform (`G7WZMg8OnLFCsuImpgMpEn`)  
> **Last updated:** March 2026  
> **Purpose:** This document captures every design decision, naming convention, and workflow pattern established in this Figma file. Use it as the single source of truth when making changes, onboarding new designers, or introducing new screens.

---

## Table of Contents

1. [File Structure](#1-file-structure)
2. [Design Tokens — Color Styles](#2-design-tokens--color-styles)
3. [Design Tokens — Text Styles](#3-design-tokens--text-styles)
4. [Component Library](#4-component-library)
5. [Auto Layout Rules](#5-auto-layout-rules)
6. [Grid System](#6-grid-system)
7. [Linking Styles & Components to Screens](#7-linking-styles--components-to-screens)
8. [Screen Inventory](#8-screen-inventory)
9. [Naming Conventions](#9-naming-conventions)
10. [Adding New Screens](#10-adding-new-screens)
11. [Adding New Components](#11-adding-new-components)
12. [Common Mistakes to Avoid](#12-common-mistakes-to-avoid)
13. [Screen-Specific Refinement Notes](#13-screen-specific-refinement-notes)

---

## 1. File Structure

The file is organised into **three pages**:

| Page | Purpose |
|---|---|
| **Screens** | All product screens — the working canvas |
| **Design System** | The single source of truth for all components, styles, and tokens |
| **User Flows** | Flow diagrams (reserved — currently empty) |

### Canvas Layout (Screens page)

Screens are arranged in a loose horizontal grid by feature area:

```
Dashboard → AI Agents → Conversations → Content Library → Analytics → Billing → Settings
                                                                              ↓
                                                               Auth Screens (y: 15500)
                                                                              ↓
                                                             Settings Sub-screens (x: 18240+)
```

- **Main app screens:** `y: -691`, spaced `~1520px` apart on the X axis
- **Auth screens:** `y: 15500` (separate row, same X range)
- **Settings sub-screens:** `y: -691`, starting at `x: 18240`, `1520px` apart
- **Grid reference frame:** `x: 2200, y: 280` on the Design System page

> **Rule:** Never place new frames on top of existing ones. Always check the canvas before adding content. New screen rows should be placed at a new Y position below existing content.

---

## 2. Design Tokens — Color Styles

All colors are defined as **Figma Paint Styles** on the Design System page and must be applied to every node via `fillStyleId` — never as raw hex values directly on a node.

### Background Scale

| Token | Hex | Usage |
|---|---|---|
| `Background/Base` | `#0a0a0a` | Page/canvas background, outermost frames |
| `Background/Surface` | `#111111` | Cards, panels, form backgrounds |
| `Background/Elevated` | `#1a1a1a` | Input fields, modals, elevated cards |
| `Background/Overlay` | `#222222` | Dropdowns, tooltips |
| `Background/Hover` | `#2a2a2a` | Interactive hover states |

### Text Scale

| Token | Hex | Usage |
|---|---|---|
| `Text/Primary` | `#ffffff` | Headlines, labels, body copy — main content |
| `Text/Secondary` | `#a3a3a3` | Subtitles, meta, secondary labels |
| `Text/Tertiary` | `#6b6b6b` | Placeholders, captions, divider labels |
| `Text/Disabled` | `#3d3d3d` | Disabled input text |
| `Text/Inverse` | `#0a0a0a` | Text on light/brand backgrounds |

### Border Scale

| Token | Hex | Usage |
|---|---|---|
| `Border/Subtle` | `#1f1f1f` | Dividers, section separators |
| `Border/Default` | `#2a2a2a` | Input borders, card borders |
| `Border/Strong` | `#3a3a3a` | Focused non-brand borders |
| `Border/Focus` | `#ffffff` | Focus ring on non-brand elements |

### Brand / Indigo Scale

| Token | Hex | Usage |
|---|---|---|
| `Brand/Indigo-50` | `#eef2ff` | Light backgrounds on brand |
| `Brand/Indigo-200` | `#c7d2fe` | Light text on dark |
| `Brand/Indigo-300` | `#a5b4fc` | Accent text light |
| `Brand/Indigo-400 (Primary)` | `#818cf8` | Hover state, links |
| `Brand/Indigo-500` | `#6366f1` | ⭐ Primary brand color — buttons, active states, icons |
| `Brand/Indigo-600 (Strong)` | `#4f46e5` | Pressed/active states |
| `Brand/Indigo-700` | `#4338ca` | Deep pressed |
| `Brand/Indigo-950 (Deep)` | `#1e1b4b` | Auth panel background |

### Brand Semantic Aliases

| Token | Value | Usage |
|---|---|---|
| `Brand/Accent` | `#818cf8` | General accent — links, active nav dots |
| `Brand/Accent-Strong` | `#4f46e5` | Stronger accent |
| `Brand/Accent-Subtle` | `#818cf8 @ 12%` | Subtle brand tints on surfaces |
| `Brand/Accent-Muted` | `#818cf8 @ 6%` | Very soft brand wash |
| `Brand/Accent-Text` | `#818cf8` | Brand-colored text |
| `Brand/Accent-Border` | `#818cf8 @ 40%` | Brand-tinted borders |
| `Brand/Accent-Border-Strong` | `#818cf8 @ 80%` | Strong brand borders |

### Semantic Colors

| Token | Hex | Usage |
|---|---|---|
| `Semantic/Success` | `#4ade80` | Success badges, active status dots |
| `Semantic/Warning` | `#fbbf24` | Warning states, password strength |
| `Semantic/Error` | `#f87171` | Error states, danger buttons |
| `Semantic/Info` | `#60a5fa` | Info alerts |

### Agent Colors

Each AI agent has a dedicated color used for their avatar background and icon:

| Token | Hex | Agent |
|---|---|---|
| `Agent/Spark` | `#f97316` | Social Media agent |
| `Agent/Pixel` | `#a78bfa` | Copywriter agent |
| `Agent/Nova` | `#34d399` | Designer agent |
| `Agent/Bolt` | `#fbbf24` | Automation agent |
| `Agent/Cleo` | `#f472b6` | Brand agent |

### How to Apply Color Styles in Figma Plugin Code

```javascript
// Correct — always use setFillStyleIdAsync for any node
await node.setFillStyleIdAsync('S:3564b26a1c0a2f4b1993e325169b277073c6e4e7,'); // Background/Base

// Wrong — never hardcode hex
node.fills = [{ type: 'SOLID', color: { r: 0.04, g: 0.04, b: 0.04 } }];
```

> **Exception:** Opacity-variant fills (e.g., `Brand/Accent @ 15%` on ellipses) cannot be stored as a named style with a custom opacity. In these cases, the raw fill is acceptable — note it in the layer name.

---

## 3. Design Tokens — Text Styles

All text is set using **Sora** (Google Fonts). Every text node must be linked to a text style via `setTextStyleIdAsync`. Font weights used: Regular, SemiBold, Bold, ExtraBold.

### Type Scale

| Style | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `Display/Display XL` | 48px | ExtraBold | 56px | Hero headlines |
| `Display/Display LG` | 40px | ExtraBold | 48px | Large display text |
| `Heading/H1` | 32px | Bold | 40px | Page-level headings |
| `Heading/H2` | 24px | Bold | 32px | Section headings |
| `Heading/H3` | 20px | Bold | 28px | Card/panel titles |
| `Heading/H4` | 16px | Bold | 24px | Sub-section labels |
| `Body/Body LG Regular` | 16px | Regular | 24px | Long-form body |
| `Body/Body LG SemiBold` | 16px | SemiBold | 24px | Emphasis in body |
| `Body/Body MD Regular` | 14px | Regular | 20px | ⭐ Primary UI body text |
| `Body/Body SM Regular` | 13px | Regular | 18px | ⭐ Secondary UI copy |
| `Body/Body SM SemiBold` | 13px | SemiBold | 18px | Interactive body text |
| `Label/Label LG` | 14px | SemiBold | 20px | Button labels, nav items |
| `Label/Label MD` | 12px | SemiBold | 16px | Form labels, tags |
| `Label/Label SM` | 11px | SemiBold | 16px | Badge text, stat labels |
| `Label/Label XS` | 10px | Bold | 14px | Section headers (ALL CAPS) |
| `Caption/Caption MD` | 12px | Regular | 16px | Timestamps, meta |
| `Caption/Caption SM` | 11px | Regular | 16px | Fine print, footnotes |

### How to Apply Text Styles in Figma Plugin Code

```javascript
// Always use the async version — synchronous setTextStyleId fails silently
await textNode.setTextStyleIdAsync('S:c36f4c435e32be47fbda4dfb6d368e818d27b90d,'); // Heading/H3
```

### Section Label Pattern

Nav section labels (ACCOUNT, WORKSPACE, PREFERENCES) use `Label/Label XS` with `letterSpacing: { unit: 'PERCENT', value: 6 }` — this is the only place letter spacing is used.

---

## 4. Component Library

All components live in the **Design System page**. Every screen must use instances of these components — no raw frames for interactive elements.

### Component Sets (Figma Component Sets with variants)

#### Button — `ID: 40:4095`

The most-used component. Properties:

| Property | Type | Default | Notes |
|---|---|---|---|
| `Variant` | Variant | `Primary` | Primary / Secondary / Tertiary / Ghost / Danger / Disabled / Icon Only |
| `label#41:30` | Text | `Button` | Always set this |
| `icon left#40:12` | Boolean | `true` | Set to `false` for most cases |
| `icon right#40:18` | Boolean | `false` | |
| `Show label#224:67` | Boolean | `true` | |
| `Full Width#434:48` | Boolean | `false` | |

Interactive state variants (for design specs only, not used in static screens):
`Primary-Hover`, `Primary-Pressed`, `Primary-Focused`, `Secondary-Hover` etc.

**Usage rules:**
- Primary → main CTA (one per form)
- Ghost → secondary action, "Cancel", "Discard"
- Danger → destructive actions only (Delete, Revoke, Remove)
- Tertiary → inline links, subtle actions

#### Input / Component 1 — `ID: 354:1182`

| Property | Type | Default |
|---|---|---|
| `Property 1` | Variant | `Label-input` |
| `Label#354:18` | Text | `Brand` |
| `Placeholder text#354:24` | Text | `Brand name...` |
| `Show label#354:6` | Boolean | `true` |
| `Show icon#354:0` | Boolean | `true` — **always set false** |

Variants: `Label-input` (standard), `Input`, `Focus`, `Error`, `Disabled`

> Always use `Property 1 = Label-input` for forms. Set `Show icon = false` unless a dropdown indicator is intentional.

#### Sidebar — `ID: 265:10181`

Selected state variants map to different nav items:
- `Selected=Default` — no active item
- `Selected=ai agents`, `Selected=Conversations`, `Selected=Content Library` etc.

#### Other Component Sets

| Component | ID | Variants / Notes |
|---|---|---|
| `CreditMeter` | `102:6387` | Level=High / Medium / Low |
| `ConvoItem` | `265:10984` | State=Default / State=Clicked |
| `Link` | `492:14976` | Size=MD / Size=SM |
| `Divider` | `492:14951` | `Divider/Simple`, `Divider/WithLabel` |
| `Heading` | `492:14983` | Level=H1 / Level=H2 |
| `BodyText` | `492:14994` | Size=MD/SM, Color=Primary/Secondary |

### Standalone Components

| Component | ID | Usage |
|---|---|---|
| `Badge/Default` | `33:3391` | Neutral pill |
| `Badge/● Active` | `33:3392` | Green active status |
| `Badge/● Warning` | `33:3393` | Amber warning |
| `Badge/● Error` | `33:3394` | Red error |
| `Badge/● Info` | `33:3395` | Blue info |
| `Alert/Success` | `33:3404` | Full-width success alert |
| `Alert/Warning` | `33:3405` | Full-width warning alert |
| `Alert/Error` | `33:3406` | Full-width error alert |
| `Alert/Info` | `33:3407` | Full-width info alert |
| `Toggle/On` | `387:4366` | Toggle in on state |
| `Toggle/Off` | `387:4368` | Toggle in off state |
| `AgentCard` | `50:4228` | AI agent card in lists |
| `SettingsNavItem/Profile` | `387:4355` | Settings left nav item |
| `SettingsNavItem/Security & Password` | `387:4359` | Settings left nav item |

### Creating Instances in Plugin Code

```javascript
// 1. Find the component
const dsPage = figma.root.children.find(p => p.name === 'Design System');
const primaryBtn = dsPage.findOne(n => n.id === '33:3386'); // Variant=Primary

// 2. Create instance
const inst = primaryBtn.createInstance();

// 3. Set properties
inst.setProperties({
  'label#41:30': 'Save Changes',
  'icon left#40:12': false,
  'icon right#40:18': false,
});

// 4. Resize and position
inst.resize(400, 44);
inst.x = targetX;
inst.y = targetY;

// 5. Insert into parent
parentFrame.appendChild(inst);
```

---

## 5. Auto Layout Rules

**Every frame in this file uses Auto Layout.** No absolute positioning except for decorative elements (ellipse glows, background shapes) that use `layoutPositioning = 'ABSOLUTE'`.

### Core Settings

```
layoutMode:              VERTICAL  (most frames) or HORIZONTAL (rows)
primaryAxisSizingMode:   FIXED     (when width/height is known) or AUTO (content-driven)
counterAxisSizingMode:   FIXED     (columns with defined width) or AUTO (wraps to content)
clipsContent:            false     (always — prevents invisible overflow bugs)
```

### Spacing Scale in Use

| Value | Context |
|---|---|
| `4px` | Tight — between icon and label, between badge items |
| `6px` | Tight — title/subtitle gap in headings |
| `8px` | Standard small — inside pills, icon spacing |
| `10px` | Component internal padding (horizontal) |
| `12px` | Between form elements, button groups |
| `14px` | Input horizontal padding |
| `16px` | ⭐ Standard form row gap |
| `20px` | ⭐ Section content gap |
| `24px` | Content panel padding (all sides) |
| `28px` | Screen-level top padding |
| `40px` | Screen-level horizontal padding |

### Form Layout Pattern

```
content-panel (VERTICAL, itemSpacing: 20px, padding: 24px all)
  ├── section-header (VERTICAL, itemSpacing: 6px)
  │     ├── title (Heading/H3)
  │     └── subtitle (Body/Body SM Regular)
  ├── divider (1px Rectangle)
  ├── [sub-label] (Label/Label XS, letterSpacing: 6%)
  ├── input-row (HORIZONTAL, itemSpacing: 16px)
  │     ├── Component 1 / Label-input (w: 402px)
  │     └── Component 1 / Label-input (w: 402px)
  ├── input-row ...
  ├── divider
  └── actions-row (HORIZONTAL, SPACE_BETWEEN)
        ├── left-group (HORIZONTAL, itemSpacing: 12px)
        │     ├── Button / Primary
        │     └── Button / Ghost
        └── Button / Danger  (right side — destructive only)
```

### Screen Layout Pattern (App screens)

```
Root Frame (1440 × 900 or 949)
  ├── Sidebar instance (240 × H, x:0, y:0)
  └── Main Area (1200 × H, x:240, VERTICAL, itemSpacing: 0)
        ├── topbar (1136 × 98 or 72)
        └── content-area (1136 × remaining, HORIZONTAL)
              ├── [settings-nav] (200px — settings screens only)
              └── [main content]
```

### Auth Screen Layout Pattern

```
Root Frame (1440 × 900)
  ├── brand-panel (560 × 900, x:0)  ← Left branded panel
  └── form-panel  (880 × 900, x:560) ← Right form area
        └── login-form (400 × auto, centered)
              ├── heading-block (VERTICAL, itemSpacing: 6px)
              ├── fields-block  (VERTICAL, itemSpacing: 14px)
              ├── Button / Primary (w: 400px)
              ├── Divider / WithLabel (w: 400px)
              ├── Button / Ghost (w: 400px)
              └── signup-row (HORIZONTAL, CENTER)
```

---

## 6. Grid System

Defined in the **📐 Grid System Reference** frame on the Design System page (`x: 2200, y: 280`).

### Specification — 1440px Desktop

| Property | Value |
|---|---|
| Canvas width | 1440px |
| Canvas height | 900px |
| Columns | 12 |
| Column width | 86px |
| Gutter | 24px |
| Left margin | 72px |
| Right margin | 72px |
| Content width | 1296px |

### Formula

```
Content width = Total width − (margin × 2) − (gutter × 11)
             = 1440 − 144 − 264
             = 1032px

Column width = Content width ÷ 12
             = 1032 ÷ 12
             = 86px
```

Wait — let me clarify. The actual numbers used:

```
Total:    1440px
Margins:  72 × 2  = 144px
Gutters:  24 × 11 = 264px
Columns:  86 × 12 = 1032px
Check:    144 + 264 + 1032 = 1440 ✓
```

### Common Layout Spans

| Span | Width | Use case |
|---|---|---|
| 12 col | 1296px | Full-width containers |
| 8 col | 878px | Main content area |
| 6 col | 636px | Half-width (two equal halves) |
| 4 col | 394px | Sidebar / aside / card third |
| 3 col | 294px | Quarter-width card |

### Applying the Grid

The app screens don't use Figma's native grid guides. Instead, the grid is baked into component widths:

- Sidebar: **240px** (sits outside the 12-col grid — it's a fixed chrome element)
- Main content area: **1200px** (1440 − 240 sidebar)
- Content panel: **916px** (within main area with padding)
- Form inputs: **868px** full-width, **402px** half-width (two-col form rows)
- Auth form: **400px** centered in 880px form panel

---

## 7. Linking Styles & Components to Screens

This is the most important workflow. **Every node in every screen must be linked to a DS style or component.** Raw hex values and unlinked text nodes break the design system.

### The Three Linking Operations

#### 1. Text Style Linking

```javascript
// Always async — the sync version fails silently on many node types
await textNode.setTextStyleIdAsync('STYLE_ID');
```

Lookup table — `fontSize|fontStyle` → Style ID:

```
'20|Bold'     → S:c36f4c435e32be47fbda4dfb6d368e818d27b90d, (Heading/H3)
'16|Bold'     → S:a63a4599d31d73c4877379b687864d6ff1ea4cd1, (Heading/H4)
'14|SemiBold' → S:0e1bd8b78db35ababd778c1ee6ce190b5f7d0ad8, (Label/Label LG)
'14|Regular'  → S:74b74d4112340b58fbb893f106fe8851958465b5, (Body/Body MD Regular)
'13|SemiBold' → S:ed4da587b9459e0aa152a7f3d3279505f869cc7b, (Body/Body SM SemiBold)
'13|Regular'  → S:0569369b64ddb9481b698bd425b1e428a5be4161, (Body/Body SM Regular)
'12|SemiBold' → S:746e26e25a0f37d597894989cc8d39103b4129c4, (Label/Label MD)
'12|Regular'  → S:6cea082fbb4841f18595cd123d440395003f0a82, (Caption/Caption MD)
'11|SemiBold' → S:b6e78a24c67a185f615dd1fdab5874716d9376f9, (Label/Label SM)
'11|Regular'  → S:0a1727780ff29383fa285a97642d74667fa720e4, (Caption/Caption SM)
'10|Bold'     → S:e3bf690d96f8c954c19374849bdc0386bb9a2984, (Label/Label XS)
```

#### 2. Fill Style Linking (Colors)

```javascript
// Always async — same reason as text styles
await node.setFillStyleIdAsync('STYLE_ID');
```

Key lookup (hex → Style ID):

```
'#ffffff' → S:762324f1b13757a43a6a1744024772c7a4e35a9a, (Text/Primary)
'#a3a3a3' → S:968cbd21c7a877910456ca5d13aa79f6db3a8586, (Text/Secondary)
'#6b6b6b' → S:ac8837a5db7b3c819752f6023b8810b46102bf43, (Text/Tertiary)
'#6366f1' → S:aac96987f5739a2e1a068de9163f4822e892ee28, (Brand/Accent)
'#818cf8' → S:15191d07bdb26806ba0599aefba4c264e3690a6b, (Brand/Indigo-400)
'#0a0a0a' → S:3564b26a1c0a2f4b1993e325169b277073c6e4e7, (Background/Base)
'#111111' → S:35dc7aa37f4afba8ad45f30f2e803f693a65942a, (Background/Surface)
'#1a1a1a' → S:fd8e05e5d527136af397ffdefb16c64d2de0ce9b, (Background/Elevated)
'#2a2a2a' → S:c6b6420982b2459510c77b34f358d1a2c5e41f16, (Background/Hover)
'#1f1f1f' → S:fff144aa2cf7e63e099f9f582e43fc514c5a1049, (Border/Subtle)
'#4ade80' → S:b89f1e63c0d6c356a930043aa6154f7008602f70, (Semantic/Success)
'#f87171' → S:c6eb8474811b5b7d870af60f240b7a442a5b5cd7, (Semantic/Error)
'#fbbf24' → S:159dd3348fe94bcbf3f0e6929267644c29e39bc4, (Semantic/Warning)
```

#### 3. Verifying Link Coverage

Run this snippet on any frame to audit unlinked nodes:

```javascript
const frame = figma.currentPage.findOne(n => n.name === 'YOUR SCREEN NAME');
const allNodes = frame.findAll(() => true);

const unlinkedText  = allNodes.filter(n => n.type === 'TEXT' && !n.textStyleId);
const unlinkedFills = allNodes.filter(n =>
  ['TEXT','FRAME','RECTANGLE','ELLIPSE'].includes(n.type) &&
  !n.fillStyleId &&
  Array.isArray(n.fills) &&
  n.fills[0]?.type === 'SOLID'
);

return {
  unlinkedText:  unlinkedText.length,
  unlinkedFills: unlinkedFills.length,
  textGaps:  unlinkedText.map(t => ({ chars: t.characters?.slice(0,20), size: t.fontSize })),
  fillGaps:  unlinkedFills.map(n => ({ name: n.name, type: n.type })),
};
```

**Target: both counts should be 0.**

### Replacing Raw Elements with DS Components

When a screen has raw button frames or raw input frames, replace them:

```javascript
function replaceWithInstance(oldNode, dsComponent, setupFn) {
  const parent = oldNode.parent;
  const idx = [...parent.children].indexOf(oldNode);
  const { x, y } = oldNode;

  const inst = dsComponent.createInstance();
  inst.x = x;
  inst.y = y;
  if (setupFn) setupFn(inst);

  parent.insertChild(idx, inst);
  oldNode.remove();
  return inst;
}

// Example: replace a raw button frame
replaceWithInstance(rawButtonFrame, primaryBtnComponent, (inst) => {
  inst.resize(400, 44);
  inst.setProperties({
    'label#41:30': 'Save Changes',
    'icon left#40:12': false,
    'icon right#40:18': false,
  });
});
```

---

## 8. Screen Inventory

### Authentication Flow (y: 15500)

| Frame | ID | Screen |
|---|---|---|
| `AUTH-01 — Login` | `489:9025` | Sign in form |
| `AUTH-02 — Sign Up` | `489:10130` | Create account form |
| `AUTH-03 — Forgot Password` | `489:10224` | Password reset request |
| `AUTH-04 — Check Your Email` | `489:10295` | Email sent confirmation |

**Auth brand panel specs:**
- Background: `Brand/Indigo-950` (`#1e1b4b`)
- Big ellipse: `Brand/Indigo-500` @ 55% + `LAYER_BLUR: 80` — `layoutPositioning: ABSOLUTE`, `x:180, y:-130`
- Small ellipse: `Brand/Indigo-400` @ 45% + `LAYER_BLUR: 60` — `layoutPositioning: ABSOLUTE`, `x:-60, y:640`
- Both ellipses must be ABSOLUTE (not AUTO) to avoid pushing flow content down

### Main App Screens (y: -691)

| Frame | ID | X position | Notes |
|---|---|---|---|
| `01 — Dashboard` | `102:6388` | 7535 |
| `02 — AI Agents` | `102:6423` | 9020 |
| `03 — Conversations` | `128:7806` | 10570 |
| `04 — Content Library` | `407:1761` | 12171 |
| `05 — Analytics` | `384:3203` | 15191 |
| `06 — Billing` | `331:12069` | 13689 |
| `07 — Settings` | `387:3720` | 16700 |

### Journey Screens

| Frame | ID | Flow |
|---|---|---|
| `J2-01 — Agent Detail` | `394:6559` | Agent activation |
| `J2-02 — Activation Confirm` | — | Agent activation |
| `J2-03 — Activation Success` | — | Agent activation |
| `CL-J1-01 — Add Brand Context` | `407:2438` | Content Library upload |
| `CL-J1-02 — Uploading` | `407:3056` | Content Library upload |
| `CL-J1-03 — Brand Context Added` | `407:3333` | Content Library upload |
| `BC-D1 — Brand Context Detail` | `441:2595` | Brand context detail view |

### Settings Sub-screens (x: 18240+)

| Frame | ID | X position |
|---|---|---|
| `07 — Settings (Security)` | `504:54549` | 18241 | `1440 × 1191` — expanded to fit scrollable content |
| `07 — Settings (Notifications)` | `504:54674` | 19760 |
| `07 — Settings (API Keys)` | `504:54799` | 21280 |
| `07 — Settings (Integrations)` | `504:54924` | 22800 |
| `07 — Settings (Team)` | `504:55049` | 24320 |
| `07 — Settings (Appearance)` | `504:55174` | 25840 |
| `07 — Settings (Language)` | `504:55299` | 27360 |

---

## 9. Naming Conventions

### Frames

```
[Screen number] — [Screen name]              01 — Dashboard
[Screen number] — [Screen name] ([Sub])      07 — Settings (Security)
[Journey code]-[Step] — [Screen name]        CL-J1-01 — Add Brand Context
BC-D1 — [Screen name]                        BC-D1 — Brand Context Detail
AUTH-01 — [Screen name]                      AUTH-01 — Login
```

### Layers inside screens

```
brand-panel          Left branded panel in auth screens
form-panel           Right form area in auth screens
login-form           Inner form container (centered)
heading-block        Title + subtitle group
fields-block         Input field group
actions-row          CTA button row at bottom of forms
section-header       Title block inside content panels
header-divider       1px line under section header
content-panel        Main white card on settings screens
content-row          Horizontal row holding nav + content
settings-nav         Left nav list on settings screens
```

### Components on DS page

```
ComponentName/VariantName     Button/Primary, Badge/● Active
ComponentName                 AgentCard, CreditMeter
Property 1=VariantName        (Figma's default for unnamed component sets)
```

---

## 10. Adding New Screens

Follow this checklist when creating any new screen:

### Step 1 — Place the frame

```javascript
const f = figma.createFrame();
f.name = 'XX — New Screen Name';
f.resize(1440, 900);
// Place to the right of the last screen in its row
f.x = lastScreenX + 1520;
f.y = -691; // main app row
```

### Step 2 — Add the sidebar

```javascript
const dsPage = figma.root.children.find(p => p.name === 'Design System');
const sidebarComp = dsPage.findOne(n => n.name.startsWith('Sidebar'));
const sidebarInst = sidebarComp.createInstance();
// Set the correct active nav state
sidebarInst.setProperties({ 'Selected': 'ai agents' }); // adjust per screen
f.appendChild(sidebarInst);
```

### Step 3 — Build layout with Auto Layout

```javascript
const mainArea = figma.createFrame();
mainArea.layoutMode = 'VERTICAL';
mainArea.itemSpacing = 0;
mainArea.primaryAxisSizingMode = 'FIXED';
mainArea.counterAxisSizingMode = 'FIXED';
mainArea.resize(1200, 900);
mainArea.x = 240; mainArea.y = 0;
mainArea.fills = [];
mainArea.clipsContent = false;
f.appendChild(mainArea);
```

### Step 4 — Link all styles

After building content, run the audit snippet from Section 7 and link everything. Target: 0 unlinked text, 0 unlinked fills.

### Step 5 — Replace raw elements

Check for any raw button frames, input frames, or dividers. Replace with DS component instances.

---

## 11. Adding New Components

### When to create a new component

- The pattern appears in 2+ screens
- It has interactive states (hover, pressed, disabled)
- It contains a meaningful group of elements that designers will reuse

### How to create it

1. Design the base state on the DS page, inside a named frame/section
2. Select the layer → `Create component` (⌥K)
3. Add component properties via `Add property` in the right panel
4. If it has variants: select all variants → `Combine as variants`
5. Name variants using `Property=Value` format: `Variant=Primary`, `State=Hover`
6. Apply DS styles to every element inside the component

### Component property key format

Figma appends the internal node ID to property keys:

```
'label#41:30'           Text property named "label" on node 41:30
'icon left#40:12'       Boolean property "icon left" on node 40:12
'Show label#224:67'     Boolean property "Show label" on node 224:67
```

When using `setProperties()` or `setProperties` in plugin code, you must include the full key with the `#nodeId` suffix.

### Adding fill styles to a new component

```javascript
// Inside your component building code
const text = figma.createText();
await text.setTextStyleIdAsync('S:0569369b64ddb9481b698bd425b1e428a5be4161,'); // Body SM Regular
await text.setFillStyleIdAsync('S:968cbd21c7a877910456ca5d13aa79f6db3a8586,'); // Text/Secondary
```

---

## 12. Common Mistakes to Avoid

### ❌ Using synchronous `fillStyleId =` setter

```javascript
// Fails silently on many node types
node.fillStyleId = 'S:abc123,';

// Correct
await node.setFillStyleIdAsync('S:abc123,');
```

### ❌ Setting `layoutPositioning = 'ABSOLUTE'` without an auto-layout parent

ABSOLUTE positioning only works inside frames with `layoutMode !== 'NONE'`. Decorative ellipses inside brand-panel must be ABSOLUTE so they don't push content down — the brand-panel itself is VERTICAL auto-layout.

### ❌ Hardcoding `height` on auto-layout frames

```javascript
// Wrong — locks height, content will overflow or clip
frame.resize(400, 600);
frame.primaryAxisSizingMode = 'FIXED';

// Correct — height grows with content
frame.primaryAxisSizingMode = 'AUTO';
```

### ❌ Leaving `clipsContent = true` on content panels

The default is `true`. Content panels should always have `clipsContent = false` so overflowing content is visible during design (it will be scrollable in the real product).

### ❌ Creating items on the canvas instead of inside a frame

All screens and components must live inside named frames. Never create loose elements directly on the page canvas.

### ❌ Using `getMainComponent()` synchronously

```javascript
// Throws an error on dynamic-page context
const comp = instance.mainComponent;

// Correct
const comp = await instance.getMainComponentAsync();
```

### ❌ Duplicating styles instead of linking

If you copy-paste a node with a color, the color value is copied but the style link is broken. Always re-link with `setFillStyleIdAsync` after pasting.

### ❌ Setting `itemSpacing` on frames with `primaryAxisSizingMode = 'FIXED'` and small content

If the frame's height is fixed (e.g., 10px placeholder) and you set `itemSpacing = 16`, children will try to space but the frame won't grow. Always set `primaryAxisSizingMode = 'AUTO'` first, then set spacing.

### ❌ Using `counterAxisSizingMode = 'FIXED'` with a placeholder height on horizontal rows

This is the most common collapse bug. When building rows programmatically with `resize(820, 10)` as a placeholder, the counter axis stays locked at 10px even after `itemSpacing` and children are added. The children render at their correct heights but the parent frame clips them all to 10px — rows appear overlapping or invisible.

```javascript
// Wrong — builds a row that looks fine in code but collapses visually
const row = figma.createFrame();
row.layoutMode = 'HORIZONTAL';
row.counterAxisSizingMode = 'FIXED'; // ← locks at whatever resize() set
row.resize(820, 10);                 // ← counter axis is now permanently 10px
row.appendChild(textColumn);        // textColumn is 37px tall — gets clipped

// Correct — let the counter axis grow to the tallest child
const row = figma.createFrame();
row.layoutMode = 'HORIZONTAL';
row.primaryAxisSizingMode = 'FIXED';   // fixed width
row.counterAxisSizingMode = 'AUTO';    // height wraps tallest child ✓
row.resize(820, row.height);           // height auto-resolves after children added
```

**How to diagnose:** Select the collapsed row in Figma → check the right panel height. If it shows `10` or any suspiciously small value, check `counterAxisSizingMode`. Run:

```javascript
const row = figma.currentPage.findOne(n => n.id === 'YOUR_ROW_ID');
console.log(row.counterAxisSizingMode); // should be AUTO, not FIXED
console.log(Math.round(row.height));    // should match tallest child, not 10
```

**How to bulk-fix all collapsed rows in a screen:**

```javascript
const frame = figma.currentPage.findOne(n => n.name === '07 — Settings (Security)');
const collapsed = frame.findAll(n =>
  n.type === 'FRAME' &&
  n.layoutMode === 'HORIZONTAL' &&
  Math.round(n.height) <= 10
);
for (const f of collapsed) {
  f.counterAxisSizingMode = 'AUTO';
}
return { fixed: collapsed.length };
```

---

## Quick Reference — Most-Used IDs

### DS Components

```
Button (set):          40:4095
Button/Primary:        33:3386
Button/Secondary:      33:3387
Button/Tertiary:       399:10063
Button/Ghost:          33:3388
Button/Danger:         33:3389
Button/Disabled:       33:3390

Input (set):           354:1182
Input/Label-input:     354:1106
Input/Default:         33:3400
Input/Error:           33:3402

Toggle/On:             387:4366
Toggle/Off:            387:4368

Badge/Default:         33:3391
Badge/Active:          33:3392
Badge/Warning:         33:3393
Badge/Error:           33:3394

Alert/Success:         33:3404
Alert/Warning:         33:3405
Alert/Error:           33:3406

Divider/WithLabel:     492:14951
Link/MD:               492:14972
AgentCard:             50:4228
```

### Key Paint Style IDs

```
Background/Base:        S:3564b26a1c0a2f4b1993e325169b277073c6e4e7,
Background/Surface:     S:35dc7aa37f4afba8ad45f30f2e803f693a65942a,
Background/Elevated:    S:fd8e05e5d527136af397ffdefb16c64d2de0ce9b,
Text/Primary:           S:762324f1b13757a43a6a1744024772c7a4e35a9a,
Text/Secondary:         S:968cbd21c7a877910456ca5d13aa79f6db3a8586,
Text/Tertiary:          S:ac8837a5db7b3c819752f6023b8810b46102bf43,
Brand/Accent:           S:aac96987f5739a2e1a068de9163f4822e892ee28,
Brand/Indigo-400:       S:15191d07bdb26806ba0599aefba4c264e3690a6b,
Border/Subtle:          S:fff144aa2cf7e63e099f9f582e43fc514c5a1049,
Border/Default:         S:c6b6420982b2459510c77b34f358d1a2c5e41f16,
Semantic/Success:       S:b89f1e63c0d6c356a930043aa6154f7008602f70,
Semantic/Error:         S:c6eb8474811b5b7d870af60f240b7a442a5b5cd7,
Semantic/Warning:       S:159dd3348fe94bcbf3f0e6929267644c29e39bc4,
```

### Key Text Style IDs

```
Heading/H2:             S:4d547e9764db1b4e50a6971b1014cd295a1d3663,
Heading/H3:             S:c36f4c435e32be47fbda4dfb6d368e818d27b90d,
Heading/H4:             S:a63a4599d31d73c4877379b687864d6ff1ea4cd1,
Body/Body MD Regular:   S:74b74d4112340b58fbb893f106fe8851958465b5,
Body/Body SM Regular:   S:0569369b64ddb9481b698bd425b1e428a5be4161,
Body/Body SM SemiBold:  S:ed4da587b9459e0aa152a7f3d3279505f869cc7b,
Label/Label LG:         S:0e1bd8b78db35ababd778c1ee6ce190b5f7d0ad8,
Label/Label MD:         S:746e26e25a0f37d597894989cc8d39103b4129c4,
Label/Label SM:         S:b6e78a24c67a185f615dd1fdab5874716d9376f9,
Label/Label XS:         S:e3bf690d96f8c954c19374849bdc0386bb9a2984,
Caption/Caption MD:     S:6cea082fbb4841f18595cd123d440395003f0a82,
Caption/Caption SM:     S:0a1727780ff29383fa285a97642d74667fa720e4,
```

---

## 13. Screen-Specific Refinement Notes

This section documents significant fixes applied to existing screens after initial build. Use it to understand the history of a screen before making further changes.

---

### 07 — Settings (Security) — `504:54549`

**Refined:** March 2026  
**Frame dimensions after refinement:** `1440 × 1191px` (expanded from default 949px to fit scrollable content)

#### Root cause

All horizontal rows in the content panel were built with `resize(820, 10)` as a placeholder, which set `counterAxisSizingMode = 'FIXED'` and locked height at 10px. Children rendered at their natural heights (37px text columns, 24px toggles, 40px buttons) but the parent frames clipped everything to 10px — causing all rows to visually overlap and collapse.

#### Fixes applied (10 total)

| # | Node | Problem | Fix applied |
|---|---|---|---|
| 1 | `section-header` | `primarySizing: FIXED` → height 10px, title invisible | `primarySizing → AUTO` |
| 2 | Authenticator App row | `counterSizing: FIXED` → 10px, toggle and subtitle clipped | `counterSizing → AUTO` |
| 3 | SMS Backup row | `counterSizing: FIXED` → 10px, overlap with row above | `counterSizing → AUTO` |
| 4 | MacBook Pro session row | `counterSizing: FIXED` → 10px, device name not visible | `counterSizing → AUTO` |
| 5 | iPhone 14 session row | `counterSizing: FIXED` → 10px | `counterSizing → AUTO` |
| 6 | Windows PC session row | `counterSizing: FIXED` → 10px | `counterSizing → AUTO` |
| 7 | Actions row — layout | `counterSizing: FIXED` → 10px, buttons collapsed and invisible | `counterSizing → AUTO` |
| 7a | Actions row — CTAs | Raw button frames with hardcoded fills — no DS link, changes won't propagate | Replaced with DS component instances: `Button / Variant=Primary` (label: `Update Password`, `ID: 33:3386`) and `Button / Variant=Ghost` (label: `Discard`, `ID: 33:3388`) |
| 8 | Session row separators | Missing — all sessions ran together visually | Added `1px` `Border/Subtle` rectangles between each session |
| 9 | Frame canvas height | Content overflowed the 949px frame boundary | Frame (+ sidebar, main area, content row, nav, wrap) expanded to `1191px` |
| 10 | Fill styles | 5 new separator rectangles unlinked | Linked to `Border/Subtle` (`S:fff144aa2cf7e63e099f9f582e43fc514c5a1049,`) |

#### CTA component specification

The actions row on this screen uses two DS Button instances. No Danger button — destructive account actions are intentionally absent from the Security screen (present on Profile only).

| Slot | DS Component | Variant ID | Label | Width |
|---|---|---|---|---|
| Left — primary action | `Button` | `33:3386` (`Variant=Primary`) | `Update Password` | auto |
| Left — secondary action | `Button` | `33:3388` (`Variant=Ghost`) | `Discard` | auto |

Both buttons sit inside a `left-group` frame (`layoutMode: HORIZONTAL`, `itemSpacing: 12px`) which is the first child of `actions-row`. The actions row itself uses `primaryAxisAlignItems: SPACE_BETWEEN` — left-group anchors left, leaving right side empty (no Danger button).

Properties set on both instances:
```javascript
inst.setProperties({
  'icon left#40:12':  false,
  'icon right#40:18': false,
  // label set per button above
});
```

#### Content structure after refinement

```
content-panel (VERTICAL, itemSpacing: 20px, AUTO height)
  ├── section-header (VERTICAL, 6px gap, AUTO)           ← was FIXED/10px
  ├── header-divider (1px Rectangle)
  ├── spacer (8px)
  ├── "CHANGE PASSWORD" (Label/Label XS)
  ├── Component 1 / Label-input — Current Password (820px)
  ├── Component 1 / Label-input — New Password (820px)
  ├── strength-bar (VERTICAL, AUTO)
  ├── Component 1 / Label-input — Confirm New Password (820px)
  ├── divider
  ├── "TWO-FACTOR AUTHENTICATION" (Label/Label XS)
  ├── Row — Authenticator App + Toggle/Off (HORIZONTAL, AUTO) ← was FIXED/10px
  ├── Row — SMS Backup + Toggle/Off (HORIZONTAL, AUTO)        ← was FIXED/10px
  ├── divider
  ├── "ACTIVE SESSIONS" (Label/Label XS)
  ├── Row — MacBook Pro + Badge/Active (HORIZONTAL, AUTO)     ← was FIXED/10px
  ├── session-sep (1px Border/Subtle)                         ← new
  ├── Row — iPhone 14 + Button/Danger Revoke (HORIZONTAL, AUTO) ← was FIXED/10px
  ├── session-sep (1px Border/Subtle)                         ← new
  ├── Row — Windows PC + Button/Danger Revoke (HORIZONTAL, AUTO) ← was FIXED/10px
  ├── divider
  └── actions-row (HORIZONTAL, SPACE_BETWEEN, AUTO)                  ← was FIXED/10px
        └── left-group (HORIZONTAL, itemSpacing: 12px)
              ├── Button / Variant=Primary  "Update Password"  ID: 33:3386  ← DS instance
              └── Button / Variant=Ghost    "Discard"          ID: 33:3388  ← DS instance
```

---

*This document was generated from the live Figma file state in March 2026. Update it whenever new components, styles, or screens are added.*
