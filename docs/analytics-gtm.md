# GTM and GA4 Mapping Guide

This project already pushes product engagement events into `window.dataLayer`.

Brand alignment note:

- Keep CTA copy and labels consistent with ATHA brand voice: direct, practical, and trustworthy.
- Prefer concrete action verbs and avoid ambiguous claims.

## 1) Enable GTM bootstrap in app

Set this environment variable in your deployment and local environment:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

The script bootstrap is loaded from `app/layout.tsx` when that variable is present.

## 2) Available dataLayer events

### CTA naming convention

Tracked CTA labels follow this strict format:

`<funnel_stage>__<surface>__<action>`

Funnel stage values used:

- `awareness`
- `consideration`
- `conversion`

Examples:

- `awareness__hero__view_source`
- `consideration__hero__read_docs`
- `conversion__sticky_cta__install_from_aur`

This format allows clean grouping in GA4 Exploration and Looker Studio by split rules on `__`.

Suggested funnel mapping for ATHA landing copy:

- `awareness`: discover credibility and project identity (for example source, repository)
- `consideration`: evaluate behavior and method (for example docs, script, technical details)
- `conversion`: install and adoption intent (for example AUR install)

### CTA matrix reference

Use this as the source of truth for all CTA labels currently implemented in the landing page.

CSV version for spreadsheet or BI import is available at `docs/cta-matrix.csv`.

| Surface | Button text | Funnel stage | Tracking label | Destination |
| --- | --- | --- | --- | --- |
| Hero | Install from AUR | conversion | `conversion__hero__install_from_aur` | https://aur.archlinux.org/packages/atha |
| Hero | Install script | consideration | `consideration__hero__view_install_script` | https://raw.githubusercontent.com/Bangkah/Atha/main/install.sh |
| Hero | View source | awareness | `awareness__hero__view_source` | https://github.com/Bangkah/Atha |
| Hero | Read docs | consideration | `consideration__hero__read_docs` | https://github.com/Bangkah/Atha/wiki |
| Sticky CTA | Install ATHA | conversion | `conversion__sticky_cta__install_from_aur` | https://aur.archlinux.org/packages/atha |
| Sticky CTA | Script | consideration | `consideration__sticky_cta__view_install_script` | https://raw.githubusercontent.com/Bangkah/Atha/main/install.sh |
| Sticky CTA | Docs | consideration | `consideration__sticky_cta__read_docs` | https://github.com/Bangkah/Atha/wiki |
| Social proof | Explore repository | awareness | `awareness__social_proof__open_repository` | https://github.com/Bangkah/Atha |
| Social proof | Open AUR package | conversion | `conversion__social_proof__open_aur_package` | https://aur.archlinux.org/packages/atha |
| Social proof | Read wiki | consideration | `consideration__social_proof__read_wiki` | https://github.com/Bangkah/Atha/wiki |

### `atha_cta_click`

Emitted when users click tracked CTA links.

Payload keys:

- `event`: `atha_cta_click`
- `event_category`: `engagement`
- `event_action`: `click`
- `event_label`: CTA label
- `cta_label`: CTA label
- `cta_location`: page area (for example: `hero`, `sticky_cta`, `social_proof`)
- `destination_url`: outbound URL
- `content_type`: `cta`
- `timestamp`: ISO datetime

### `atha_scroll_depth`

Emitted once per threshold at 25, 50, 75, and 100.

Payload keys:

- `event`: `atha_scroll_depth`
- `event_category`: `engagement`
- `event_action`: `scroll`
- `event_label`: percent string (for example `25%`)
- `scroll_depth_percent`: numeric value (25, 50, 75, 100)
- `timestamp`: ISO datetime

## 3) GTM setup recommendations

Create these Data Layer Variables:

- `DLV - cta_label` -> `cta_label`
- `DLV - cta_location` -> `cta_location`
- `DLV - destination_url` -> `destination_url`
- `DLV - scroll_depth_percent` -> `scroll_depth_percent`

Create these Custom Event Triggers:

- `CE - ATHA CTA Click` -> Event name: `atha_cta_click`
- `CE - ATHA Scroll Depth` -> Event name: `atha_scroll_depth`

Optional filtered triggers for scroll milestones:

- `CE - Scroll 25` with condition `{{DLV - scroll_depth_percent}} equals 25`
- `CE - Scroll 50` with condition `{{DLV - scroll_depth_percent}} equals 50`
- `CE - Scroll 75` with condition `{{DLV - scroll_depth_percent}} equals 75`
- `CE - Scroll 100` with condition `{{DLV - scroll_depth_percent}} equals 100`

## 4) GA4 tags

Prerequisite:

- Existing GA4 Configuration tag (for example `GA4 - Config`) firing on all pages.

Recommended GA4 Event tags:

1. `GA4 - ATHA CTA Click`
- Event name: `atha_cta_click`
- Trigger: `CE - ATHA CTA Click`
- Event parameters:
  - `cta_label` = `{{DLV - cta_label}}`
  - `cta_location` = `{{DLV - cta_location}}`
  - `destination_url` = `{{DLV - destination_url}}`

2. `GA4 - ATHA Scroll Depth`
- Event name: `atha_scroll_depth`
- Trigger: `CE - ATHA Scroll Depth`
- Event parameters:
  - `scroll_depth_percent` = `{{DLV - scroll_depth_percent}}`

## 5) Validation checklist

- Open GTM Preview mode and visit the landing page.
- Click CTAs in hero, sticky bar, and trust section.
- Scroll page past 25/50/75/100 thresholds.
- Confirm events appear in Preview with expected parameters.
- Confirm events appear in GA4 DebugView.
