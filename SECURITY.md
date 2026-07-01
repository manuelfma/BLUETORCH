# SECURITY.md — Blue Torch.me

## Post-Push Security Rule
Every GitHub push or pull request must trigger a private-information audit before the work is considered submission-ready.

The audit checks for:

- API keys, tokens, passwords, private keys, and service-role keys
- Real `.env` files or populated environment values
- Supabase service-role keys or provider credentials
- Personal access tokens, GitHub tokens, OpenAI keys, Google keys, or Vercel tokens
- Private user data, student data, customer data, founder personal data, or confidential diligence material
- Screenshots that expose account secrets, invite links, dashboards, or credentials

## Required Process
1. Run the security audit subagent described in `SECURITY_AUDIT_AGENT.md`.
2. Review the GitHub Action result from `.github/workflows/security-audit.yml`.
3. If a secret is found, stop submission work until the file is removed and the exposed secret is rotated.
4. Never paste secrets into chat, commit messages, screenshots, docs, or issue descriptions.

## Current Status
The first documented audit is stored at:

```text
evidence/security-audit-2026-07-01.md
```

