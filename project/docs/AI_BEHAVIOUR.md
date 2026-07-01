# AI Behaviour Submission — Blue Torch.me

## Behaviour Name
Source-linked diligence extraction and risk classification

## Trigger
The user uploads deal materials, such as a pitch deck, financial model, SEC filing, diligence document, or company website snapshot, and opens the Analysis Review workflow.

## Input
The AI receives the uploaded source material plus deal metadata such as company name, sector, deal stage, review phase, and assigned reviewers.

## Output
The AI returns structured diligence objects:
- Facts
- Assumptions
- Estimates
- Risks
- Open Questions
- Missing Evidence

Each output must include:
- source citation
- confidence level
- evidence type
- missing information, if any
- reviewer approval state

For risks, the AI also adds category, severity, mitigation/status, and owner. Risk categories include Financial, Market, Founder, Technology, Legal, Competitive, Product, and Execution.

## Where It Lives
The behavior lives in the backend analysis layer. The frontend displays the results in Analysis Review and Risk Register screens, where analysts can approve, reject, edit, flag, or escalate each AI-generated item.

## Success Criteria
The behavior works correctly when:
- extracted findings are separated into facts, assumptions, estimates, risks, open questions, and missing evidence
- every generated item has a source reference and confidence level
- source citations can be reviewed against the original document
- reviewers can approve, reject, flag, or escalate generated items
- risks show category, severity, confidence, citation, status, and owner
- unsupported or incomplete conclusions are marked as missing evidence or flagged for review

## Evidence to Submit
Attach or reference these generated screens:
- `analysis_review/screen.png` — shows AI-extracted findings with evidence type, citation, confidence score, source preview, and approve/reject/flag actions.
- `risk_register_completed/screen.png` — shows AI-classified risks with severity, confidence, citation, status, and owner.

Suggested submission sentence:

Blue Torch.me uses AI to extract diligence findings from uploaded source documents and convert them into reviewable investment objects. The AI separates facts, assumptions, estimates, risks, open questions, and missing evidence, then attaches source citations, confidence levels, evidence type, and reviewer approval states so investment teams can verify analysis before it enters the memo.
