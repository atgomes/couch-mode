# Content guide

## Tone

Playful in the packaging, plain in the steps. Levels, side quests, checkpoints are fine in titles and short asides. Steps themselves are literal instructions. No filler intros, no "in this section we will".

## Rules

1. Every step is tested on a real machine before the page loses its `Draft` badge.
2. Each level page starts with `<LevelInfo ... />`. Add `tested="YYYY-MM-DD"` and `versions={[...]}` once verified, and remove `badge: Draft` from the frontmatter.
3. Commands are copy-pasteable. State whether they need an admin shell.
4. Screenshots: real ones from the setup, PNG or WebP, under 300 KB each, in `src/assets/`.
5. Say what is specific to the author's hardware (LG B5, RTX 5070 Ti, Xbox controller) and what is general.
6. Security trade-offs go in a `danger` aside next to the step, not in a footnote.
7. Add a line to the changelog when the setup itself changes.

## Page template

```mdx
---
title: Name
description: One line.
sidebar:
  label: N · Name
  order: N
---

import LevelInfo from '../../../components/LevelInfo.astro';

<LevelInfo time="20 min" difficulty="Easy" tested="2026-11-17" versions={['Windows 11 24H2']} />

**Goal:** one sentence.

## You need
## Steps
## Verify
## If it breaks
```
