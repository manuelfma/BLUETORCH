# L06 Red-Team Log — Blue Torch.me

| Objection | Severity | Response | Change Made |
|---|---:|---|---|
| The product may feel like a generic ChatGPT wrapper. | High | Blue Torch.me differentiates through source traceability, review states, permissions, audit history, and memo workflow. | PRD and README emphasize governed workflow over chat. |
| AI may hallucinate deal facts or financial metrics. | Critical | AI must not fabricate facts, metrics, citations, or conclusions. Missing support becomes Missing Evidence. | Guardrails added in PRD, ARCHITECTURE, AI_BEHAVIOUR, and SPECIALIST_AGENT. |
| Users may over-trust AI output in high-stakes investment decisions. | High | Human approval is required before memo use. AI does not approve or reject investments. | Review states and approval gate added. |
| Confidential documents could be exposed if permissions are weak. | Critical | Supabase RLS, private storage buckets, and deal-level permissions are required. | Security section added to ARCHITECTURE.md. |
| MVP scope is too broad for a first build. | High | Narrow v1 to create deal → upload document → extract risks → review → memo preview. | Scope trim added in Codex architecture review. |
| Document parsing may fail on decks, PDFs, and spreadsheets. | High | Start with one or two mandatory file types before expanding. | File-type choice added as open technical decision. |
| Landing page proves interest, not product value. | Medium | Pair landing page with a concierge test using generated risk review. | MVP experiment plan uses trust-score feedback from target users. |
| Investors may not trust confidence scores. | Medium | Confidence scoring method must be explained or reviewer-adjustable. | Confidence-score method remains open technical decision. |
| Product may imply investment advice. | Critical | Copy and UX must state that final investment judgment remains with the team. | Guardrails repeated across docs. |
| Demo screens may look polished but not buildable. | Medium | Architecture now maps screens to data objects and backend responsibilities. | ARCHITECTURE.md added. |
