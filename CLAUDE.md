# CrafterTech Frontend — Claude Code Instructions

## Project
React + Vite + TypeScript + Tailwind CSS frontend for the CrafterTech AI Workforce Platform.
Figma file key: `G7WZMg8OnLFCsuImpgMpEn`
Figma MCP: Desktop Bridge plugin running on port 9223

---

## ⚠️ MANDATORY SCREEN BUILD PROTOCOL
Before writing a single line of code for any screen, you MUST complete these steps in order.
No exceptions. No skipping.

### Step 1 — Read the Design System
Connect to Figma MCP and read the **Design System page**.
Confirm and extract:
- All color paint styles and hex values
- All text styles (font-size, font-weight, line-height, letter-spacing)
- All spacing and radius tokens
- Every component used on this screen (Button, Badge, Input, AgentCard, etc.)

Do not proceed until you have this data confirmed.

### Step 2 — Read the User Flow
Read the **User Flows page** in Figma for the flow this screen belongs to.
Understand:
- Where the user comes from (entry point)
- What actions are available on this screen
- Where each action leads next (exit points)
- All conditional states: empty, error, loading, success

Do not proceed until you understand the full flow context.

### Step 3 — Read the Screen Frame
Read the exact Figma frame for this screen from the **Screens page**.
Extract:
- Frame dimensions and layout grid
- Every layer: name, dimensions, position, padding, gap
- All applied color variables (map to token names — never use raw hex)
- All applied text styles (map to token names)
- All component instances and their variants

Do not proceed until you have the full layer specification.

### Step 4 — Build
Only now write the code. Match Figma exactly.
- Use CSS variables from `src/styles/tokens.css` — never hardcode hex values
- Reuse components from `src/components/` — never rebuild inline
- If a component doesn't exist yet, build it first, then use it

### Step 5 — Commit
Once the screen renders correctly:
```
git add .
git commit -m "feat: [screen name] screen"
```

---

## Stack
- React 18 + Vite
- TypeScript
- Tailwind CSS (tokens mapped from design system)
- React Router v6
- Sora font via Google Fonts (`@import` in global CSS)

## Folder Structure
```
src/
  components/     → shared reusable components only
  pages/          → one file per screen
  layouts/        → AppLayout.tsx, AuthLayout.tsx
  styles/
    tokens.css    → all CSS variables (source of truth)
    global.css    → resets, font import, base styles
```

---

## Design Tokens — Live from Figma (pulled March 2026)

> These are extracted directly from Figma variables. Do NOT deviate from these values.
> Always reference them via CSS variables in `src/styles/tokens.css`.

### Backgrounds
| Token | CSS Variable | Hex |
|---|---|---|
| bg/base | `--bg-base` | `#0A0A0A` |
| bg/surface | `--bg-surface` | `#111111` |
| bg/elevated | `--bg-elevated` | `#1A1A1A` |
| bg/overlay | `--bg-overlay` | `#222222` |
| bg/hover | `--bg-hover` | `#2A2A2A` |

### Text
| Token | CSS Variable | Hex |
|---|---|---|
| text/primary | `--text-primary` | `#FFFFFF` |
| text/secondary | `--text-secondary` | `#A3A3A3` |
| text/tertiary | `--text-tertiary` | `#6B6B6B` |
| text/disabled | `--text-disabled` | `#3D3D3D` |
| text/inverse | `--text-inverse` | `#0A0A0A` |

### Borders
| Token | CSS Variable | Hex |
|---|---|---|
| border/subtle | `--border-subtle` | `#1F1F1F` |
| border/default | `--border-default` | `#2A2A2A` |
| border/strong | `--border-strong` | `#3A3A3A` |
| border/focus | `--border-focus` | `#FFFFFF` |

### Brand
| Token | CSS Variable | Hex | Usage |
|---|---|---|---|
| brand/accent | `--brand-accent` | `#6366F1` | Primary brand — buttons, active states |
| brand/accent-light | `--brand-accent-light` | `#818CF8` | Lighter variant — decorative on dark bg |
| brand/accent-dark | `--brand-accent-dark` | `#4F46E5` | Stronger — pressed/bold use on light bg |
| brand/accent-bg-subtle | `--brand-accent-bg-subtle` | `#6366F11F` | Active nav, selected state |
| brand/accent-bg-muted | `--brand-accent-bg-muted` | `#6366F10F` | Hover states |
| brand/accent-border | `--brand-accent-border` | `#6366F166` | Focus ring, active card border |
| brand/accent-border-strong | `--brand-accent-border-strong` | `#6366F1CC` | Highlighted component border |

### Semantic
| Token | CSS Variable | Hex |
|---|---|---|
| semantic/success | `--success` | `#4ADE80` |
| semantic/success-muted | `--success-muted` | `#4ADE801A` |
| semantic/warning | `--warning` | `#FBBF24` |
| semantic/warning-muted | `--warning-muted` | `#FBBF241A` |
| semantic/error | `--error` | `#F87171` |
| semantic/error-muted | `--error-muted` | `#F871711A` |
| semantic/info | `--info` | `#60A5FA` |
| semantic/info-muted | `--info-muted` | `#60A5FA1A` |

### Agent Colors
| Token | CSS Variable | Hex | Agent |
|---|---|---|---|
| agent/spark | `--agent-spark` | `#F97316` | Social Media |
| agent/spark-muted | `--agent-spark-muted` | `#F973161F` | |
| agent/pixel | `--agent-pixel` | `#A78BFA` | Copywriter |
| agent/pixel-muted | `--agent-pixel-muted` | `#A78BFA1F` | |
| agent/nova | `--agent-nova` | `#34D399` | Designer |
| agent/nova-muted | `--agent-nova-muted` | `#34D3991F` | |
| agent/bolt | `--agent-bolt` | `#FBBF24` | Automation |
| agent/bolt-muted | `--agent-bolt-muted` | `#FBBF241F` | |
| agent/cleo | `--agent-cleo` | `#F472B6` | Email Marketing |
| agent/cleo-muted | `--agent-cleo-muted` | `#F472B61F` | |

### Spacing Scale
| Token | CSS Variable | Value |
|---|---|---|
| spacing/1 | `--spacing-1` | `4px` |
| spacing/2 | `--spacing-2` | `8px` |
| spacing/3 | `--spacing-3` | `12px` |
| spacing/4 | `--spacing-4` | `16px` |
| spacing/5 | `--spacing-5` | `20px` |
| spacing/6 | `--spacing-6` | `24px` |
| spacing/8 | `--spacing-8` | `32px` |
| spacing/10 | `--spacing-10` | `40px` |
| spacing/12 | `--spacing-12` | `48px` |
| spacing/16 | `--spacing-16` | `64px` |

### Border Radius Scale
| Token | CSS Variable | Value | Usage |
|---|---|---|---|
| radius/sm | `--radius-sm` | `6px` | Buttons, inputs, badges |
| radius/md | `--radius-md` | `10px` | Cards, panels |
| radius/lg | `--radius-lg` | `14px` | Modals, large cards |
| radius/xl | `--radius-xl` | `20px` | Large containers |
| radius/2xl | `--radius-2xl` | `28px` | Feature cards |
| radius/full | `--radius-full` | `9999px` | Pills, avatars |

---

## tokens.css — Paste this exactly into `src/styles/tokens.css`

```css
:root {
  /* Backgrounds */
  --bg-base:     #0A0A0A;
  --bg-surface:  #111111;
  --bg-elevated: #1A1A1A;
  --bg-overlay:  #222222;
  --bg-hover:    #2A2A2A;

  /* Text */
  --text-primary:   #FFFFFF;
  --text-secondary: #A3A3A3;
  --text-tertiary:  #6B6B6B;
  --text-disabled:  #3D3D3D;
  --text-inverse:   #0A0A0A;

  /* Borders */
  --border-subtle:  #1F1F1F;
  --border-default: #2A2A2A;
  --border-strong:  #3A3A3A;
  --border-focus:   #FFFFFF;

  /* Brand */
  --brand-accent:               #6366F1;
  --brand-accent-light:         #818CF8;
  --brand-accent-dark:          #4F46E5;
  --brand-accent-bg-subtle:     #6366F11F;
  --brand-accent-bg-muted:      #6366F10F;
  --brand-accent-border:        #6366F166;
  --brand-accent-border-strong: #6366F1CC;

  /* Semantic */
  --success:        #4ADE80;
  --success-muted:  #4ADE801A;
  --warning:        #FBBF24;
  --warning-muted:  #FBBF241A;
  --error:          #F87171;
  --error-muted:    #F871711A;
  --info:           #60A5FA;
  --info-muted:     #60A5FA1A;

  /* Agent Colors */
  --agent-spark:       #F97316;
  --agent-spark-muted: #F973161F;
  --agent-pixel:       #A78BFA;
  --agent-pixel-muted: #A78BFA1F;
  --agent-nova:        #34D399;
  --agent-nova-muted:  #34D3991F;
  --agent-bolt:        #FBBF24;
  --agent-bolt-muted:  #FBBF241F;
  --agent-cleo:        #F472B6;
  --agent-cleo-muted:  #F472B61F;

  /* Spacing */
  --spacing-1:  4px;
  --spacing-2:  8px;
  --spacing-3:  12px;
  --spacing-4:  16px;
  --spacing-5:  20px;
  --spacing-6:  24px;
  --spacing-8:  32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;

  /* Border Radius */
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   14px;
  --radius-xl:   20px;
  --radius-2xl:  28px;
  --radius-full: 9999px;
}
```

---

## Component Rules
- **Button** variants: Primary, Secondary, Ghost, Danger, Disabled
- **Badge** variants: Default, Active, Warning, Error
- **Input** variants: Default, Error — always with label wrapper
- **Toggle**: On / Off
- **AgentCard**: shared between Marketplace and Dashboard
- All components live in `src/components/` — always reuse, never rebuild inline
- If a needed component doesn't exist, build it first before building the page

---

## Screens Build Order
Apply the **MANDATORY SCREEN BUILD PROTOCOL** to every single screen — no exceptions.

**App screens:**
1. `01 — Dashboard`
2. `02 — AI Agents` (Marketplace)
3. `03 — Conversations`
4. `04 — Content Library`
5. `05 — Analytics`
6. `06 — Billing & Credits`
7. `07 — Settings` (Profile, Security, Notifications sub-screens)

**Auth screens:**
8. Login
9. Signup
10. Forgot Password

---

## Git Rules
- Commit after every screen: `feat: [screen name] screen`
- Commit shared components separately: `feat: shared component library`
- Push to `origin main` after every 3 commits

---

## Global Rules — Never Break These
- **Never hardcode hex values** — always use CSS variables from `tokens.css`
- **Never use any font other than Sora**
- **Dark theme throughout** — root background is always `var(--bg-base)`
- **Never guess Figma values** — if unsure, re-read the node from Figma MCP before writing code
- **Always read Figma before building** — the protocol above is mandatory, not optional
