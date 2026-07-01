# SESSION_16_SUBMISSION.md — Videoreport.ai

## What To Submit
Session 16 says D2 is relaxed: no GitHub tag, no repo submission, and no formal D2 evidence pack required today unless the professor reactivates it.

Submit the practical Session 16 work:

- Videoreport.ai landing page screenshot or preview link
- Short note explaining the page concept
- Optional Supabase proof: screenshot of one email lead saved in the `leads` table

## Paste-Ready Submission Text
Videoreport.ai is a premium single-page landing page for a service that monitors 100+ Spanish tech YouTube creators and delivers weekly AI-powered brand sentiment reports. The page presents the product, explains the monitoring workflow, shows what the weekly report contains, and drives users to schedule a demo.

For the database part, the intended user action is the Schedule Demo / email capture form. When connected to Supabase, each submitted email creates a row in the `leads` table with email, source, page, and timestamp. The service role key is not exposed in the browser.

## Screenshot Checklist
Take one screenshot that clearly shows:

- Videoreport.ai name or wordmark
- Hero headline: "Know What Spanish Tech Creators Say About Your Brand"
- Cinematic video/dark landing-page style
- Schedule Demo CTA

If you also connect Supabase, take a second screenshot showing:

- Supabase `leads` table
- At least one new row from your submitted email
- Timestamp or created date visible

## Files Prepared
- Landing page preview: `session16/videoreport-ai/index.html`
- Lovable build prompt: `session16/lovable-videoreport-prompt.md`
- Supabase table script: `session16/supabase-leads.sql`
- Screenshot guide: `session16/screenshot-checklist.md`

## If The Professor Asks About D2
Use this answer:

D2 is relaxed according to the Session 16 guide. The current deliverable is the landing page. The database component was treated as a Supabase lead-capture concept, with a table definition prepared and optional verification screenshot if required.

