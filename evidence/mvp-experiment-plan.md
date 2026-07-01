# MVP Experiment Plan — Blue Torch.me

## Riskiest Assumption
Investment professionals will trust and use AI-generated diligence findings if every insight is source-linked, confidence-labeled, and reviewable.

If this is false, the product does not have a strong wedge. The team should test trust and review behavior before building the full platform.

## Hypothesis
If an associate or principal sees AI-generated risk findings with source citation, confidence level, evidence type, missing information, and review state, they will be willing to use the output as a starting point for diligence review.

## Target User
VC, growth equity, or private equity associates/principals who review pitch decks, financial models, and diligence materials.

## Experiment Type
Concierge / Wizard of Oz test using the Stitch prototype and a sample risk-register output.

## Method
1. Show the user the Blue Torch.me landing page.
2. Show the Analysis Review and Risk Register screens.
3. Walk through one generated risk item and its source citation.
4. Ask the user to review whether they would approve, reject, edit, or escalate it.
5. Record trust score, objections, and missing information requested.

## Minimum Success Criterion
The experiment is validated if:

- 4 out of 5 target users say they would use the risk output as a first-pass diligence aid.
- Average trust score is at least 4/5 when citation and confidence are visible.
- At least 3 users can correctly explain why the source citation matters.
- No more than 1 user says the product feels like generic ChatGPT.

## Feedback Questions
- Show me how you would review this risk before adding it to a memo.
- What would make you approve, reject, or escalate this finding?
- Which field do you trust most: source, confidence, category, or reviewer state?
- What missing evidence would you ask for next?
- Where would this fit in your current diligence workflow?

## Validated Outcome
Users understand the review workflow and are willing to use the output as a starting point, not a final answer.

## Invalidated Outcome
Users do not trust the AI output even with citations, or they say this is not meaningfully better than using ChatGPT manually.

## Next Change If Validated
Build one functional AI path:

create deal → upload document → generate risks → reviewer action → memo preview.

## Next Change If Invalidated
Narrow the product to either:

- source-linked extraction only, or
- investment memo structuring without AI-generated risk claims.
