#!/usr/bin/env bash
set -euo pipefail

git add \
  .gitignore \
  .env.example \
  AGENTS.md \
  PRD.md \
  DESIGN.md \
  AI_BEHAVIOUR.md \
  README.md \
  ARCHITECTURE.md \
  SPECIALIST_AGENT.md \
  SUBMISSION.md \
  evidence/accepted-rejected-findings.md \
  evidence/architecture-checklist.md \
  evidence/codex-architecture-review.md \
  evidence/mvp-experiment-plan.md \
  evidence/product-feature-review.md \
  evidence/red-team-log.md \
  memory/project-context.md \
  outputs/blue-torch-landing-page-20260701.zip \
  public/index.html \
  public/styles.css \
  public/assets \
  src/.gitkeep \
  scripts/commit_submission_pack.sh \
  tasks/todo.md

git commit -m "Complete Blue Torch submission pack"
git push origin main
