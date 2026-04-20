# VSL Split Design

**Date:** 2026-04-20

**Goal:** Replace the single `/vsl` route with two dedicated landing pages, `/vsl-bh` and `/vsl-wh`, while keeping the current tracking stack and CTA behavior intact.

## Scope

- Remove the existing `/vsl` route entirely.
- Preserve the current `/vsl` experience as `/vsl-bh`.
- Add `/vsl-wh` as a second VSL variant with a different Vimeo asset and hero copy.
- Keep Meta Pixel, Google Ads conversion tracking, UTM support, CTA destination, and footer behavior unchanged.

## Architecture

Create one reusable VSL page component that owns the shared layout, event tracking, CTA, footer, and video wrapper behavior. Each route will provide its own content configuration object so the two pages can diverge in copy and video details without duplicating the implementation.

## Routes

- `/vsl-bh`
  - Replaces the current `/vsl` content.
  - Uses the existing headline, current Vimeo player source, and current CTA.
- `/vsl-wh`
  - Uses the same page structure and tracking as `/vsl-bh`.
  - Uses the new Vimeo source derived from the provided Vimeo link.
  - Uses the provided headline and subheadline.
- `/vsl`
  - Deleted.

## Shared Behavior

- Load Meta Pixel only on the VSL pages.
- Preserve UTM debug behavior in development only.
- Keep Google Ads conversion tracking on CTA click.
- Keep the CTA target unchanged unless the user later asks to change it.
- Track video start only once per page load.
- Make tracking metadata page-specific so `/vsl-bh` and `/vsl-wh` are distinguishable in analytics.

## Content Model

The shared VSL component will accept a config object with:

- page identifier
- video title
- video duration label
- iframe source
- headline
- optional subheadline
- CTA label
- CTA href

This keeps the new second page cheap to maintain and prevents analytics labels from drifting.

## `/vsl-bh` Content

- Reuse the current `/vsl` copy and current Vimeo embed.
- No new subheadline unless already present in the current page.

## `/vsl-wh` Content

- Headline:
  `What If The Problem Isn't Your Ads — But The Account They're Running On?`
- Subheadline:
  `Meta assigns a hidden performance grade to every Business Manager. If yours is low, no creative, no hook, no audience will save you. Here's how e-commerce brands are bypassing the system and scaling with unfair CPMs from day one.`
- Vimeo source:
  Convert the provided Vimeo share link into a player embed URL for the iframe.

## Error Handling

- If the Vimeo URL is malformed, fail at development time by keeping the embed source in explicit route config rather than deriving it at runtime.
- Keep route modules thin so future content edits only touch per-page config.

## Testing

- Verify both routes render.
- Verify `/vsl` returns 404 after deletion.
- Verify each page uses a distinct route identifier in tracking payloads.
- Verify `/vsl-wh` renders the new headline and subheadline.
- Verify CTA and footer still render on both pages.

## Non-Goals

- No redesign of the overall VSL layout.
- No CTA destination change.
- No changes to homepage behavior.
- No new CMS or dynamic routing layer.
