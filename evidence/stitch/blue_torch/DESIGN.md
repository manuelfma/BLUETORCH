---
name: Blue Torch
colors:
  surface: '#fcf8f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f3'
  surface-container: '#f0eded'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e2'
  on-surface: '#1c1b1c'
  on-surface-variant: '#45474b'
  inverse-surface: '#313031'
  inverse-on-surface: '#f3f0f0'
  outline: '#75777b'
  outline-variant: '#c5c6cb'
  surface-tint: '#5b5f65'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#181c21'
  on-primary-container: '#80848a'
  inverse-primary: '#c3c6cd'
  secondary: '#316671'
  on-secondary: '#ffffff'
  secondary-container: '#b6ebf8'
  on-secondary-container: '#376c77'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#221a13'
  on-tertiary-container: '#8f8177'
  error: '#9E3B35'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e2ea'
  primary-fixed-dim: '#c3c6cd'
  on-primary-fixed: '#181c21'
  on-primary-fixed-variant: '#43474d'
  secondary-fixed: '#b6ebf8'
  secondary-fixed-dim: '#9bcfdc'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#144e58'
  tertiary-fixed: '#f0dfd4'
  tertiary-fixed-dim: '#d3c4b8'
  on-tertiary-fixed: '#221a13'
  on-tertiary-fixed-variant: '#4f453c'
  background: '#fcf8f8'
  on-background: '#1c1b1c'
  surface-variant: '#e5e2e2'
  accent-brass: '#B8872E'
  paper: '#F7F5EF'
  porcelain: '#EBE7DC'
  rule: '#D3CEC2'
  slate: '#66707A'
  success: '#3F6B4F'
  warn: '#A76522'
  info: '#486A7A'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-sm:
    fontFamily: Source Serif 4
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-md-bold:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  data-mono:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section: 32px
  panel: 16px
  cell-padding: 12px
  rail-width: 240px
  max-width: 1440px
---

# DESIGN.md — Blue Torch.me

## 1. Design Principles
- Evidence first: every claim earns its space by showing source, confidence, and next diligence step.
- Research-house restraint: the product should feel like a McKinsey diligence deck translated into working software.
- Dense, not crowded: favor tables, split panes, tabs, and review states over roomy marketing composition.
- Human judgment stays visible: recommendations are framed as analysis for investors, never final answers.
- Risk and upside sit together: no celebratory screen without downside, assumptions, and gaps nearby.

## 2. Color Palette
- Primary Ink `#15191E`: main text, headers, left rail, high-priority controls.
- Secondary Aegean `#255B66`: active navigation, selected rows, analytical emphasis; muted, not SaaS blue.
- Accent Brass `#B8872E`: source highlights, citation markers, export-ready moments, not large backgrounds.
- Neutrals: Paper `#F7F5EF` for app background, Porcelain `#EBE7DC` for panels, Rule `#D3CEC2` for dividers, Slate `#66707A` for secondary text.
- Semantic: Success `#3F6B4F` approved finding, Warn `#A76522` missing evidence, Error `#9E3B35` material risk, Info `#486A7A` neutral analysis.

## 3. Typography
Heading font: Source Serif 4, weights 600/700. Body font: IBM Plex Sans, weights 400/500/600. Data font: IBM Plex Mono 500 for IDs, percentages, confidence values. Scale: 32 page title, 24 section, 18 panel title, 14 body/table, 12 metadata. The type should feel like an analyst note with a clean operating layer.

## 4. Components & UI Patterns
Buttons are rectangular with 4px radius, 40px height, strong labels: primary Ink fill, secondary white with 1px Rule border, destructive Error outline. Cards are low, sharp evidence panels with 6px radius, 1px Rule border, no soft shadow; use a left status stripe for risk/confidence. Inputs are white, 4px radius, compact labels above, focused state in Aegean. Navigation is a fixed left rail with text labels and small icons; active section uses Aegean text and a 3px left bar. Tables are first-class: sticky headers, 40px rows, sortable columns, status chips, inline citation chips. Modals are narrow decision panels, not full-screen drama.

## 5. Layout & Spacing
Use a 12-column desktop grid with a fixed 240px left rail and a max content width of 1440px. Default rhythm is 8px: sections 32px apart, panels 16px apart, table cell padding 12px. Compose screens as operating surfaces: left navigation, top context bar, central work area, right evidence/source drawer when reviewing claims. Breakpoints: desktop 1200+, tablet 768-1199 with collapsible rail, mobile under 768 as read/review only with stacked panes.

## 6. Microcopy & Tone
Write like an investment memo: concise, specific, caveated when evidence is incomplete. Button examples: "Review sources", "Add diligence question", "Approve finding", "Export IC memo". Empty state: "No source materials uploaded yet. Add a deck, model, or diligence file to begin extraction." Warning: "Revenue growth is cited, but no cohort or retention support was found." Error: "This conclusion needs a source before it can be added to the memo."

## 7. Motion & Interaction
Motion is quiet and functional: 120-180ms transitions, no bouncing, no celebratory effects. Hover states darken borders and reveal row actions. Press states compress by 1px and show a clear loading label. Source citations open the right drawer and highlight the matching excerpt in Brass. Risk changes should feel weighty: update chips immediately, then show a short audit-trail entry.

## 8. Anti-Patterns (do NOT do)
- Do not use banned claims or phrases: "revolutionary," "magic," "autonomous investor," "guaranteed alpha," or "instant perfect decisions."
- No startup hype, robot imagery, glowing AI brains, gradient blobs, glass panels, stock photos of smiling people with laptops, or generic finance hero screens.
- Do not use vague productivity copy, performance promises, or language that implies the product replaces diligence or investor judgment.
- Reject the generic fintech mean: blue-purple dashboards, oversized metric cards, cheerful onboarding, fake certainty, and decorative charts.
- Do not bury sources, confidence, assumptions, missing information, or downside risk behind summary text.
