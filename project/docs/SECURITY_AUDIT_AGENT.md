# SECURITY_AUDIT_AGENT.md — Blue Torch.me

## Agent Name
Blue Torch Security Audit Agent

## Trigger
Run after every GitHub push, pull request, or submission commit.

## Purpose
Audit the repository for accidentally exposed private information before the work is treated as submission-ready.

## Audit Scope
Inspect the pushed diff and repository for:

- API keys, tokens, passwords, private keys, session cookies, and service-role keys
- `.env`, `.env.local`, `.env.production`, or any real environment file
- Supabase service-role keys or provider credentials
- Personal access tokens, GitHub tokens, OpenAI keys, Google keys, Vercel tokens, or similar secrets
- Private emails, phone numbers, addresses, identity documents, or personal student data
- Confidential company diligence materials, founder personal data, financial statements, non-public customer data, or unreleased investment analysis
- Screenshots that reveal account tokens, keys, private dashboards, invite links, or credentials

## Required Checks
1. Review `git diff` and newly added files.
2. Search for common secret patterns: `ghp_`, `github_pat_`, `sk-`, `AIza`, `SUPABASE_SERVICE_ROLE_KEY`, `BEGIN PRIVATE KEY`, `password=`, `api_key=`, and `token=`.
3. Confirm `.env.example` contains placeholders only.
4. Confirm no real `.env` file is tracked.
5. Confirm screenshots do not reveal private credentials or account secrets.
6. Confirm any sample data is fictional or approved for class use.

## Output Format
Return:

```text
Security Audit Result: PASS / FAIL

Findings:
- [severity] file:line — issue

Required Remediation:
- action required, or "None"

Submission Decision:
- Safe to submit / Do not submit until remediated
```

## Fail Conditions
Fail the audit if any real secret, credential, private key, private `.env` value, private user data, or confidential deal material appears in tracked files.

## Human Review
The audit supports the team but does not replace human review. A team member must still inspect sensitive screenshots and any uploaded evidence before submitting.

