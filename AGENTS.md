# AGENTS.md

## Product
Blue Torch.me is a premium B2B fintech platform for venture capital and private equity investment teams. It supports end-to-end deal review: users upload pitch decks, financial statements, company websites, founder information, and related diligence materials; the system produces structured investment memos, risk assessments, market insights, diligence questions, and recommendation support.

The product helps professionals review more opportunities, reduce repetitive analysis, surface risks earlier, and make sharper decisions. It does not replace investor judgment.

## Target Audience
Build and communicate for investment professionals: partners, principals, associates, analysts, operating partners, investment committees, and platform teams at VC, growth equity, and private equity firms. Assume users are financially literate, time-constrained, skeptical, and responsible for high-stakes decisions.

Do not design for general consumers, casual founders, retail investors, or startup hobbyists.

## Tone of Voice
Use a professional, concise, analytical, and trustworthy tone. The voice should feel closer to McKinsey, Financial Times, Bloomberg, PitchBook, or Goldman Sachs research than a startup landing page.

Prefer clear claims, structured reasoning, precise labels, and sober language. Write with confidence but include caveats when evidence is incomplete. Favor terms such as "analysis," "risk," "evidence," "assumptions," "source materials," "confidence," "comparables," and "investment committee readiness."

## Development Priorities
Prioritize credible enterprise workflows over novelty. Core workflows should include secure deal intake, document parsing, source-linked extraction, financial and market analysis, risk scoring, diligence question generation, memo drafting, recommendation framing, review history, collaboration, permissions, and export-ready outputs.

Design interfaces for repeated professional use: dense but legible layouts, audit trails, clear source references, document previews, tables, filters, review states, comments, and confidence indicators. Users should always be able to trace conclusions back to uploaded materials or stated assumptions.

When building features, emphasize human-centered decision-making. The system may recommend, rank, summarize, and challenge assumptions, but final investment decisions belong to the investment team.

## Required Behaviors
- Make analysis source-grounded and distinguish facts, assumptions, estimates, and recommendations.
- Highlight missing information, conflicting data, unusual metrics, and diligence gaps.
- Present upside, downside, and key risks together.
- Use restrained visual design suitable for enterprise financial software.
- Treat uploaded materials as confidential by default.
- Build for accuracy, repeatability, explainability, and investment committee workflows.

## GitHub Push Security Rule
Every time new code is pushed to GitHub, spawn a security audit subagent before treating the push as complete. The subagent must inspect the pushed diff and repository for private information, including API keys, tokens, `.env` files, credentials, private emails, confidential diligence materials, customer data, founder personal data, and unreleased financial information.

The security audit subagent must return:
- Findings with file paths and line references when possible.
- A clear pass/fail decision.
- Required remediation steps for any private information found.
- Confirmation that no real secrets are present before the work is submitted.

If private information is found, stop the submission workflow until the file is removed, the secret is rotated, and the repository history risk is acknowledged. Never paste secrets into chat, commit messages, screenshots, documentation, or issue descriptions.

## Restricted Behaviors
Do not use exaggerated AI language, startup hype, robot imagery, vague productivity claims, or promises of superior investment performance. Avoid phrases like "revolutionary," "magic," "autonomous investor," "guaranteed alpha," or "instant perfect decisions."

Do not fabricate benchmarks, market data, company facts, founder details, financials, citations, or investment conclusions. Do not present outputs as legal, tax, accounting, or regulated investment advice. Do not imply the platform can remove risk, predict returns, or replace diligence.

If evidence is incomplete, say so clearly and recommend the next diligence step.
