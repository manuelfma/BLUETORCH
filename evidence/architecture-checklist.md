# L01 Architecture Checklist — Blue Torch.me

## Readiness Audit
### Problem
Explicit and specific.

Blue Torch.me helps investment teams review confidential deal materials and prepare source-linked investment committee analysis.

### Target User
Explicit and specific.

Primary users are VC, growth equity, and private equity professionals: associates, analysts, principals, partners, IC members, and platform teams.

### Features
Mostly explicit.

Core MVP features are deal intake, document upload, evidence extraction, risk register, diligence questions, memo builder, and export preview.

### Architecture
Explicit at system level.

The architecture defines frontend, backend, database, storage, AI pipeline, security, states, and deployment plan.

### Acceptance Criteria
Partially explicit.

Acceptance criteria exist across `PRD.md`, `AI_BEHAVIOUR.md`, and `ARCHITECTURE.md`, but should be converted into test cases before build.

### Assumptions
Explicit but still risky.

Key assumptions:
- Investment teams want source-linked AI diligence.
- Uploaded documents contain enough evidence to generate useful findings.
- Reviewers will trust AI output if citations, confidence, and approval states are visible.

## Gaps Closed
- Added `ARCHITECTURE.md`.
- Added system diagram.
- Added database model.
- Added AI pipeline.
- Added security and privacy requirements.
- Added specialist agent specification.
- Added static landing page.
- Added Codex architecture review artifact.

## Remaining Gaps
- Exact Supabase schema.
- `.env.example` and `.gitignore`.
- GitHub/Codex connection screenshot.
- Google AI Studio upload/test evidence.
- Contributor and professor access confirmation.
