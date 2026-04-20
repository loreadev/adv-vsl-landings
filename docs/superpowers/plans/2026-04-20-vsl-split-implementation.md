# VSL Split Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace `/vsl` with `/vsl-bh` and `/vsl-wh`, preserving tracking and CTA behavior while separating content and analytics labels.

**Architecture:** Extract the existing `/vsl` page into a single shared client component parameterized by a `variant` prop. Add two thin route files for `/vsl-bh` and `/vsl-wh`, and delete the old `/vsl` route.

**Tech Stack:** Next.js App Router, React client components, TypeScript, existing Meta Pixel and Google Ads tracking hooks

---

### Task 1: Shared VSL Route Split

**Files:**
- Create: `src/components/VslPage.tsx`
- Create: `src/app/vsl-bh/page.tsx`
- Create: `src/app/vsl-wh/page.tsx`
- Delete: `src/app/vsl/page.tsx`

- [ ] **Step 1: Extract the shared VSL implementation**

Create a reusable client component that owns:
- the existing VSL page layout
- Meta Pixel and UTM debug rendering
- video start tracking
- CTA click tracking
- footer rendering

Use a `variant` prop with values `'bh' | 'wh'`.

- [ ] **Step 2: Preserve the current `/vsl` experience as `/vsl-bh`**

Map the current `/vsl` headline, existing Vimeo embed source, CTA label, CTA URL, and current visual styling to the `bh` variant. Keep its current highlighted headline treatment and animated strikethrough.

- [ ] **Step 3: Add the new `/vsl-wh` variant**

Use the same page shell, but set:
- headline: `What If The Problem Isn't Your Ads &mdash; But The Account They're Running On?`
- subheadline: `Meta assigns a hidden performance grade to every Business Manager. If yours is low, no creative, no hook, no audience will save you. Here's how e-commerce brands are bypassing the system and scaling with unfair CPMs from day one.`
- Vimeo embed URL: `https://player.vimeo.com/video/1184860847?h=9d3869975f&badge=0&autopause=0&player_id=0&app_id=58479`

Also ensure route-specific analytics labels distinguish `vsl-bh` from `vsl-wh`.

- [ ] **Step 4: Add the new route files**

Create thin App Router pages:
- `src/app/vsl-bh/page.tsx` should render the shared component with variant `bh`
- `src/app/vsl-wh/page.tsx` should render the shared component with variant `wh`

- [ ] **Step 5: Remove the old route**

Delete `src/app/vsl/page.tsx` entirely so `/vsl` no longer exists.

- [ ] **Step 6: Skip local tests per explicit user instruction and review the diff**

Do not run local tests or builds. Inspect the changed files and confirm the split only changed the intended routes and shared VSL implementation.

- [ ] **Step 7: Commit**

```bash
git add docs/superpowers/plans/2026-04-20-vsl-split-implementation.md src/components/VslPage.tsx src/app/vsl-bh/page.tsx src/app/vsl-wh/page.tsx src/app/vsl/page.tsx
git commit -m "feat: split VSL routes into bh and wh variants"
```
