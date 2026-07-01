# Lovable Prompt — Session 16 Videoreport.ai

Build a premium, cinematic single-page landing site for `Videoreport.ai`, a service that monitors 100+ Spanish tech YouTube creators and delivers weekly AI-powered brand sentiment reports.

Use the default Lovable stack: TanStack Start, React, Tailwind v4, shadcn, and `motion` for animations.

## Global Design System
- Define tokens in `src/styles.css` using `oklch`.
- Background: pure black `oklch(0 0 0)`.
- Foreground: white.
- Borders: white at 10% opacity.
- Fonts: Inter for sans and JetBrains Mono for mono.
- Avoid hardcoded component colors; use semantic tokens or white opacity utilities.

## Hero Video Effect
Create a fixed, full-viewport background video behind all content.

Video requirements:
- muted
- playsInline
- preload auto
- object-cover
- scale 1.05
- 80% opacity
- z-0
- vertical black gradient overlay from `from-black/60 via-black/30 to-black/80`

Use this video:

```text
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4
```

Make the video scrub based on scroll position:
- fraction = `scrollY / (scrollHeight - innerHeight)`
- target time = `fraction * video.duration`
- inside `requestAnimationFrame`, seek when the gap is greater than `0.033s`
- prime with `play()` then `pause()` on mount for Safari

## Header
Create a fixed glassy pill header:
- 90% width
- centered
- z-50
- logo / wordmark: `VIDEOREPORT/AI`
- nav: `HOW IT WORKS`, `CREATORS`, `REPORTS`, `PRICING`, `FAQ`
- CTA: `SCHEDULE DEMO`
- header translates from `0` to `-150px` between scrollY 500 and 800
- on mobile, hide the nav but keep logo and CTA

## Page Structure
Single route: `src/routes/index.tsx`.

### 1. Hero
Eyebrow:

```text
Monitoring 100+ Spanish tech creators · 150M+ combined reach
```

H1:

```text
Know What Spanish Tech Creators Say About Your Brand
```

Description:

```text
Weekly automated YouTube monitoring with AI sentiment analysis. Stop guessing and start tracking your brand reputation in the Spanish market.
```

CTA:

```text
SCHEDULE DEMO
```

### 2. How It Works
Headline:

```text
Stop Manually Watching Hours Of Video. We Track Every Mention So You Don't Have To.
```

Three columns:
- Continuous YouTube intelligence
- AI Brand Detection
- Sentiment & Context Analysis

### 3. What You Get
Headline:

```text
A weekly executive summary of your brand's performance in the Spanish tech community.
```

Features:
- `01` Total Mentions Count
- `02` Sentiment Breakdown, positive/neutral/negative on a 0-5 scale
- `03` Competitor Comparison, share of voice

CTA:

```text
VIEW SAMPLE REPORT
```

### 4. Final CTA + Footer
Eyebrow:

```text
Professional Monitoring · €499/month
```

H2:

```text
Ready to know what they're saying about you?
```

Footer:

```text
© 2026 Videoreport.ai · Privacy Policy · Terms of Service
```

## Database Tie-In
Connect the `SCHEDULE DEMO` CTA to a small email capture form.

When the user submits the form, insert a row into Supabase table `leads` with:
- `email`
- `source`: `session16-videoreport-ai`
- `page`: `landing`
- `created_at`

Show a success state:

```text
Demo request received. We will contact you with a sample report.
```

Do not expose the Supabase service role key in the browser. Use the public anon key only for the insert, with RLS allowing inserts but not public reads.

## SEO
Title:

```text
Videoreport.ai — Spanish Tech Creator Brand Monitoring
```

Meta description:

```text
Weekly automated YouTube monitoring with AI sentiment analysis. Track what 100+ Spanish tech creators say about your brand.
```

Use a single H1 and semantic sections.

