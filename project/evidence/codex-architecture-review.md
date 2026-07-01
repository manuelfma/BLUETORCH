# Codex Architecture Review — Blue Torch.me

## Review Prompt Used
1. Is the architecture sound for an MVP at this stage?
2. What is structurally missing — auth, data layer, error handling, env management, deployability?
3. What are the top 5 technical tasks to close before Deliverable 2?
4. What are the biggest risks if we ship as-is?

## 1. Is The Architecture Sound For An MVP?
Yes, with scope discipline. The architecture is sound for a prototype/MVP because it has a clear split between:

- frontend product workflow
- Supabase auth, database, and storage
- server-side AI/parsing calls
- evidence objects and human review states
- memo export flow

The strongest architecture decision is treating AI output as structured reviewable objects instead of freeform chat text. This matches the product risk: investment teams need traceability, confidence, and human approval.

The architecture is not yet production-ready because provider choices, failure handling, deployment details, and permission policy depth are still open. That is acceptable for this stage if the team narrows v1.

## 2. Structurally Missing
### Auth
Supabase Auth is named, but the repo needs exact auth rules:

- supported sign-in method
- organization membership model
- deal-level access model
- admin vs reviewer permissions

### Data Layer
The database model is strong, but v1 should define the minimum schema in SQL or Supabase table format before build. `evidence_objects` needs required fields and enum values.

### Error Handling
Missing explicit behavior for:

- failed file upload
- failed document parsing
- failed AI call
- missing source citation
- low-confidence extraction
- export failure

### Env Management
Environment variables are listed, but `.env.example` and `.gitignore` should be added before any API work. Service-role keys must stay server-side only.

### Deployability
Deployment path is directionally clear, but the repo needs a final target:

- Lovable-hosted app
- exported frontend
- Netlify/static landing page
- Supabase project

The landing page exists locally, but the app deployment path still needs a decision.

## 3. Top 5 Technical Tasks Before Deliverable 2
1. Define the v1 Supabase schema with required fields, enums, and relationships.
2. Add `.env.example` and `.gitignore` with explicit key-handling rules.
3. Define row-level security policy requirements for organizations, memberships, and deals.
4. Specify failure states for upload, parsing, AI extraction, review, and export.
5. Commit evidence artifacts: architecture diagram, Codex review, accept/reject decisions, and static landing page evidence.

## 4. Biggest Risks If We Ship As-Is
### Risk 1 — AI trust without enough failure states
If source citations fail or confidence is unclear, users may over-trust AI output.

### Risk 2 — Permission model too vague
Investment documents are confidential. Any ambiguity around deal-level permissions is a serious product risk.

### Risk 3 — Parsing quality bottleneck
The product depends on extracting useful evidence from PDFs, decks, and spreadsheets. Poor parsing would weaken the whole workflow.

### Risk 4 — MVP too broad
Deal intake, parsing, risk review, diligence questions, memo builder, export, permissions, and AI review are a lot for v1. The team should prioritize one end-to-end path.

### Risk 5 — No live backend yet
The landing page and Stitch screens are strong, but the functional app still needs a real backend path for at least one AI behavior.

## 5. Recommended Scope Trim
For v1, build one clean workflow:

1. Create a deal.
2. Upload one document.
3. Generate risk objects.
4. Review/approve/reject risks.
5. Export or preview a memo section.

Defer full memo export, external market data integrations, IC Debate, and multi-organization complexity.
