# Accepted / Rejected Codex Findings — Blue Torch.me

## Accepted Findings
### 1. Define the v1 Supabase schema
Accepted. The architecture names the tables, but implementation needs exact fields, enums, and relationships.

Change made / next action:
- Keep `ARCHITECTURE.md` as the high-level design.
- Create a Supabase schema before building in Lovable.

### 2. Add explicit failure states
Accepted. The PRD and architecture describe processing states, but need clearer failure handling for upload, parsing, AI extraction, and export.

Change made / next action:
- Add failure states to the build prompt when moving into Lovable.

### 3. Strengthen permissions
Accepted. Confidential investment materials require row-level security and deal-level permissions.

Change made / next action:
- Keep Admin, Deal Owner, Reviewer, and Viewer roles.
- Implement RLS before real user data.

### 4. Narrow MVP to one end-to-end flow
Accepted. A smaller flow is more credible than a broad demo.

Change made / next action:
- MVP priority: create deal → upload document → extract risks → review risks → preview memo.

### 5. Add environment management
Accepted. API keys and service-role keys must never be exposed in the browser.

Change made / next action:
- Add `.env.example` and `.gitignore` before any AI API work.

## Rejected Or Deferred Findings
### 1. Build full PDF/DOCX memo export immediately
Deferred. It is important, but not necessary for the first technical proof. A memo preview is enough for v1.

Reason:
- The riskiest assumption is whether investors trust source-linked AI diligence, not whether export formatting works.

### 2. Add external market data integrations now
Rejected for v1. This would increase cost and complexity before core workflow validation.

Reason:
- Uploaded source-grounded diligence is the product wedge.

### 3. Build Investment Committee Debate now
Deferred. It is a strong differentiator but depends on the evidence-object system being stable.

Reason:
- Bull/Bear/Neutral debate only works if citations, review states, and confidence labels are already reliable.
