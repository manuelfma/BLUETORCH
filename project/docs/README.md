# Blue Torch.me

Enterprise deal intelligence for venture capital and private equity teams.

## 1. Project Name + One-Line Pitch
**Blue Torch.me** helps investment teams turn confidential deal materials into source-linked findings, risk assessments, diligence questions, and investment committee-ready memo drafts.

Domain: `bluetorch.me`

Repository: `https://github.com/manuelfma/BLUETORCH`

## 2. The Problem
Investment teams review large volumes of pitch decks, financial models, diligence files, founder information, and market materials under time pressure. Important risks, missing evidence, and unsupported assumptions can be buried across documents. Generic AI tools can summarize content, but they do not provide a controlled investment workflow with citations, review states, permissions, memo structure, and audit history.

Blue Torch.me addresses this by making every AI-generated insight traceable, reviewable, and ready for human investment judgment.

## 3. The User
Primary users are VC, growth equity, and private equity professionals:

- Associates and analysts preparing first-pass diligence
- Principals and partners reviewing opportunities
- Investment committee members evaluating memo-ready analysis
- Operating partners and platform teams contributing specialist review

Users are financially literate, time-constrained, skeptical, and responsible for high-stakes decisions.

## 4. Features (MVP Scope)
MVP features:

- Secure deal dashboard and deal creation
- Private document upload and parsing status
- AI-generated evidence objects: facts, assumptions, estimates, risks, recommendations, open questions, and missing evidence
- Analysis Review screen with source preview, confidence levels, evidence type, and reviewer actions
- Risk Register with category, severity, confidence, citation, mitigation/status, and owner
- Diligence Questions workflow
- Investment Memo Builder for IC-ready outputs
- PDF/DOCX memo export with citations and unresolved questions preserved

Out of scope for MVP:

- CRM replacement
- Fund reporting or LP portal features
- Portfolio monitoring
- Real-time collaborative editing
- External data-provider integrations
- Automated investment approval or rejection

## 5. Architecture (Frontend / Backend / Database)
Proposed architecture:

- **Frontend:** Lovable-generated web app with dense enterprise UI patterns: tables, split panes, source drawers, status chips, and memo builder views.
- **Backend:** Supabase-backed application layer for authentication, permissions, file storage, evidence objects, review states, lifecycle events, comments, and exports.
- **Database:** Supabase Postgres tables for organizations, users, memberships, deals, documents, evidence objects, risks, diligence questions, memo sections, comments, review events, and exports.
- **Storage:** Private Supabase Storage buckets for uploaded confidential deal materials.
- **AI layer:** Server-side parsing and LLM calls for extraction, classification, risk summaries, diligence questions, and memo drafting. API keys must stay off the client.

Every generated insight must include source citation, confidence level, evidence type, missing information, and reviewer approval state.

## 6. Tech Stack & Tools
Planned stack:

- Lovable for guided full-stack app generation
- Supabase for auth, database, row-level security, and file storage
- LLM API for extraction, classification, risk summaries, diligence questions, and memo drafting
- TanStack Table for dense review grids
- Recharts for simple financial visuals
- Stitch for early product interface design
- Codex for product documentation, review, and repo preparation

Project documentation:

- `AGENTS.md` — product context, audience, voice, and constraints
- `PRD.md` — product requirements and workflow specification
- `DESIGN.md` — visual and interaction design specification
- `ARCHITECTURE.md` — system architecture, data model, AI pipeline, and deployment plan
- `AI_BEHAVIOUR.md` — AI behavior specification and evidence plan
- `SPECIALIST_AGENT.md` — source-linked diligence risk analyst agent
- `SUBMISSION.md` — submission package index and evidence checklist

## 7. How to Run / Preview Link
Current status: design/prototype stage.

Preview artifacts:

- Stitch preview link: paste the live Stitch link in Blackboard when submitting.
- Static landing page: `public/index.html`
- Local exported Stitch screens: `evidence/stitch/`
- Landing page zip: `outputs/blue-torch-landing-page-20260701.zip`

To view the static landing page locally, open:

```text
public/index.html
```

If building in Lovable:

1. Create a new Lovable project.
2. Paste `AGENTS.md`, `PRD.md`, and `DESIGN.md` as the project context.
3. Build the MVP workflow: Home Dashboard, Deal Intake, Analysis Review, Risk Register, Diligence Questions, Memo Builder, and Export Preview.
4. Use `AI_BEHAVIOUR.md` to implement the first AI behavior.

## 8. Team + Roles
Team: Blue Torch.me

- Goncalo Fernandes — product documentation, AI behavior specification, design workflow
- Manuel F. — GitHub repository / domain coordination
- Additional teammates: `ADD_NAMES_AND_ROLES_HERE`

## Submission Evidence
For Session 11/12 submission, include:

- Domain: `bluetorch.me`
- Stitch preview link
- AI behavior spec: `AI_BEHAVIOUR.md`
- Architecture spec: `ARCHITECTURE.md`
- Specialist agent: `SPECIALIST_AGENT.md`
- Submission index: `SUBMISSION.md`
- Evidence screenshots:
  - `analysis_review/screen.png`
  - `risk_register_completed/screen.png`
  - browser screenshot of `public/index.html`
- Skills installed:
  - `stitch-design-taste`
  - `copywriting`

## Notes
Blue Torch.me is not designed to replace investor judgment. It supports analysis by making evidence, assumptions, risks, recommendations, and missing information easier to inspect before anything enters an investment memo.
