# App Plan — Blue Torch.me

## 1. Product Purpose and Differentiation
Blue Torch.me is an enterprise deal review workspace for VC, growth equity, and private equity teams. It turns confidential source materials into governed investment analysis: evidence objects, risk assessment, diligence questions, and investment committee-ready memo drafts. It does not replace investor judgment; every generated insight must have a citation, confidence level, evidence type, missing-information note, and reviewer approval state.

The difference versus a generic LLM such as ChatGPT is workflow control: source traceability, object-level review, version history, lifecycle states, audit trails, memo structure, permissions, and export-ready outputs.

## 2. Target Users
Primary users are VC, growth equity, and private equity professionals: associates, analysts, principals, partners, IC members, and platform teams. They are financially literate, time-constrained, skeptical, and accountable. Exclude retail investors, casual founders, startup hobbyists, and consumer finance use cases.

## 3. Product Principles and User Stories
Principles:
- Source-grounded by default: uncited analysis cannot enter an investment memo.
- Human approval before authority: AI may draft and challenge; reviewers approve, reject, edit, or escalate.
- Workflow before chat: the core experience is deal review, not a general assistant.
- Balanced investment judgment: upside, downside, risks, assumptions, and missing evidence appear together.
- Confidentiality first: source materials are private, permissioned, and auditable from intake to export.

User stories:
- As an associate, I want to upload materials once and receive structured findings from source evidence.
- As a principal, I want findings separated by evidence type so I can judge facts, assumptions, estimates, risks, and recommendations.
- As a partner, I want an IC-ready view of upside, downside, risks, and open questions.
- As an IC reviewer, I want each memo claim linked to a source or stated assumption so I can challenge unsupported conclusions.
- As an admin, I want deal-level permissions so confidential materials stay limited to approved team members.

## 4. End-to-End Investment Workflow
1. Home dashboard: users see assigned deals, lifecycle state, risk level, owner, open questions, overdue reviews, and changed memo sections.
2. Deal intake: users create a deal, enter company metadata, assign reviewers, set confidentiality level, and upload materials.
3. Processing: files move through Uploading, Processing, Ready, or Failed; the system extracts text, tables, citations, and metadata.
4. AI extraction: the system creates facts, assumptions, estimates, risks, recommendations, open questions, and missing evidence.
5. Analyst review: reviewers filter by source, evidence type, confidence, risk category, and review state; each object is approved, rejected, edited, or escalated.
6. Diligence planning: open questions and missing evidence are grouped by topic, owner, severity, and next action.
7. Partner review: approved insights populate a review package with source preview, risk register, memo outline, and unresolved issues.
8. Memo export: approved content moves into Memo Builder and exports to PDF or DOCX with citations, confidence labels, and open items preserved.

## 5. AI Functionality and Guardrails
AI extracts findings, labels evidence type, identifies missing or conflicting information, summarizes risks, drafts diligence questions, and proposes memo language. Every generated insight must include source citation, confidence level, evidence type, missing information, and reviewer approval state.

AI must never fabricate company facts, market data, founder details, financials, benchmarks, citations, metrics, or investment conclusions. It must not remove citations, hide uncertainty, imply legal/tax/accounting advice, present regulated investment advice, predict returns, approve or reject investments, or claim risk has been eliminated. If evidence is incomplete, state the gap and next diligence step.

Competitive advantage candidate: Investment Committee Debate. A later version can create Bull Case, Bear Case, and Neutral Reviewer analyses, then produce consensus and remaining uncertainties. Ship after evidence objects, citations, review states, and memo workflow are stable.

## 6. Data Inputs and Output Objects
Inputs: pitch decks, financial models, PDFs, spreadsheets, company websites, founder bios, customer or market diligence files, deal metadata, reviewer comments, and memo edits.

AI output objects:
- Fact: source-supported statement extracted from materials.
- Assumption: inferred premise that needs reviewer confirmation.
- Estimate: calculated or inferred value with method and source notes.
- Risk: downside item with category, severity, confidence, source, mitigation, owner, and status.
- Recommendation: proposed memo statement or next step tied to approved evidence.
- Open Question: diligence question with topic, priority, owner, and due date.
- Missing Evidence: required input or source gap blocking confidence.

Risk categories: Market, Financial, Founder, Technology, Legal, Competitive, Product, Execution. Review states: New, Needs Review, Approved, Rejected, Escalated, Superseded.

## 7. App Structure and Lifecycle States
Main screens: Home Dashboard, Deals List, New Deal Intake, Deal Workspace, Documents, Analysis Review, Risk Register, Diligence Questions, Memo Builder, Team Settings.

Deal lifecycle states: Incoming, Screening, Analysis, Partner Review, IC Ready, Invested, Rejected, Archived. Lifecycle changes create review events with user, timestamp, prior state, new state, and optional note.

Navigation flow: sign in opens Home Dashboard; deal selection opens Deal Workspace; upload opens Documents until parsing completes; approved objects can be inserted into Memo Builder; admins access Team Settings.

## 8. User Interface
Home Dashboard: command center showing assigned deals, lifecycle distribution, high-severity risks, open questions, pending reviews, and recent exports.

Deals List: dense table with deal name, sector, stage, owner, lifecycle state, last review date, risk level, open questions, and IC readiness.

New Deal Intake: two-column form with company metadata left and private upload dropzone right; show file type, size, parsing state, and confidentiality label.

Analysis Review: split view with object table left and source preview right. Selecting a claim highlights the source excerpt and exposes approve, reject, edit, and escalate actions.

Risk Register: grouped table by category with severity, confidence, source, mitigation, owner, and review state.

Memo Builder: IC memo sections: Executive Summary, Company Overview, Market, Product/Technology, Customers/GTM, Financials, Team, Deal Terms, Investment Thesis, Upside Case, Downside/Risks, Diligence Gaps, Recommendation, Appendix/Sources.

## 9. Backend Requirements
A backend is required for authentication, private file storage, parsing state, evidence objects, review states, lifecycle events, comments, exports, and audit history.

Supabase tables: organizations, users, memberships, deals, documents, evidence_objects, risks, diligence_questions, memo_sections, comments, review_events, exports. Use Supabase Auth with email domain restrictions, optional SSO, row-level security by organization and deal permission, and private Supabase Storage buckets. Store generated outputs as versioned records, not untraceable text blobs.

## 10. APIs and Libraries
Use Lovable with Supabase for auth, database, storage, and row-level security. Use a server-side parsing service for PDFs, slides, spreadsheets, and website snapshots. Use an LLM API for extraction, classification, risk summaries, diligence questions, debate drafts, and memo drafting, with prompts requiring citations and metadata. Use TanStack Table for review grids and Recharts for simple financial visuals.

## 11. MVP Scope and Success Metrics
MVP includes: secure auth, one organization, deal dashboard, deal creation, private upload, parsing status, evidence-object extraction, review states, risk register, diligence questions, memo builder, PDF/DOCX export, and basic permissions. MVP excludes CRM replacement, fund reporting, LP portal features, portfolio monitoring, real-time collaborative editing, external data integrations, and Investment Committee Debate.

Success metrics: reduce source upload-to-first memo draft time by 30% versus manual baseline; 95%+ of generated insights include citation and metadata; 80%+ of generated objects receive a reviewer decision before export; reduce uncited memo claims to zero; one deal team can complete intake, review, memo draft, and export in one session.

## 12. Testing Strategy
Unit test upload validation, permissions, lifecycle transitions, review states, citation rendering, evidence labels, confidence tags, risk fields, and memo insertion. Integration test deal creation, upload, extraction, object review, risk updates, diligence questions, memo generation, and export. User acceptance: an associate uploads a deck and model; rejects an unsupported claim; escalates a material risk; adds diligence questions; drafts a memo; exports it; and confirms recommendations link to approved evidence or stated assumptions.

## 13. Platform-Specific Considerations
In Lovable, define Supabase schema, RLS policies, private storage buckets, and auth before screens. Keep UI dense: tables, tabs, side panels, status chips, source preview, and document history. Use Lovable server actions or Supabase edge functions for parsing and AI calls so API keys stay off the client. Seed demo deals for each lifecycle and review state.

## 14. Definition of Done and Open Product Decisions
Definition of Done:
- Users can sign in and only access deals permitted by role and organization.
- Users can create a deal, upload documents, and track processing state.
- AI creates facts, assumptions, estimates, risks, recommendations, open questions, and missing-evidence objects.
- Every generated insight shows citation, confidence, evidence type, missing information, and review state.
- Reviewers can approve, reject, edit, or escalate generated objects.
- Deal lifecycle states can be changed and audited.
- Memo export preserves approved content, citations, confidence labels, and unresolved questions.

Open decisions before development:
- Mandatory v1 file types: PDF, PPTX, XLSX, DOCX, website URL, or all five.
- Parsing and LLM providers for confidential financial documents.
- Whether SSO is required for v1 or email-domain access is sufficient.
- Whether export should match a firm memo template.
- Whether confidence scores are model-generated, rule-based, reviewer-entered, or a combination.
- Whether Investment Committee Debate is v1.5 or first paid pilot.
