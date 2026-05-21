# Content Library Conventions

The `content/` directory is the canonical, reusable copy library. Every template imports from here rather than embedding copy inline. **Update once, propagate everywhere.**

## Frontmatter (required on every entry)

Every content file starts with YAML frontmatter:

```yaml
---
id: daniel-bio-medium-v3              # stable identifier (kebab-case, version-suffixed)
version: 3.0                          # SemVer of THIS specific entry
last-updated: 2026-05-20              # ISO date
status: canonical                     # canonical | draft | retired
voice-check: passed                   # passed | pending | failed
used-by:                              # which templates/places consume this
  - website-about
  - deck-page-2
  - proposal-cover
tags: [bio, identity, daniel]         # search/discovery aids
length-budget: 150                    # approximate target word count (for length-constrained entries)
---
```

### Field rules

- **id** — unique, stable, kebab-case. Once published, never rename. If you need to change the meaning, create a new id and retire the old one.
- **version** — bumps when the content materially changes. Patch bumps for typos, minor for sentence-level revisions, major for full rewrites.
- **status** — `canonical` is the default in-production state. `draft` means use cautiously. `retired` means do not use but kept for audit.
- **voice-check** — manually attested via the showrun-brand-guidelines skill's Quick Reference checklist, OR (in v1.1+) automatically via the brand-voice CI eval.
- **used-by** — every template or place that imports this entry. Keep current; this is how we find what breaks when an entry changes.
- **length-budget** — useful for fragments with constraints (footer bios, social hooks, etc.). Optional for unconstrained entries.

## File naming

- `kebab-case-with-descriptive-suffix.md`
- For entries that come in variants (short / medium / long), name them `<thing>.<variant>.md`:
  - `daniel-bio.short.md`
  - `daniel-bio.medium.md`
  - `daniel-bio.long.md`
- Case studies: `YYYY-<slug>.md` (year prefix)
- Testimonials: stored as structured JSON in `testimonials/quotes.json` (one record per quote)

## Subdirectory ownership

| Folder | Purpose | Examples |
|---|---|---|
| `identity/` | Anything about Daniel as a person | bios, narrative, headshots-reference |
| `positioning/` | Anything about how Showrun positions in market | one-liner, methodology pitches, differentiation pillars |
| `services/` | Anything about what Showrun offers / sells | tier descriptions, pricing language, engagement escalation |
| `case-studies/` | Real or anonymized client engagement narratives | individual case studies + INDEX.md |
| `testimonials/` | Quotes, attribution, permission tracking | quotes.json + INDEX.md |
| `faq/` | Common-question answers in Showrun voice | one file per question + INDEX.md |

Each subdirectory has its own `README.md` explaining its specific rules (e.g., testimonials need permission-tracking metadata; case studies need anonymization rules).

## Importing into templates

Templates import via manifest files declaring required content keys. Example:

```json
// templates/capabilities-deck/manifest.json
{
  "requires": [
    "identity.daniel-bio.medium",
    "positioning.methodology.long",
    "services.tier-1-production-partner",
    "case-studies.2024-conference-name"
  ]
}
```

The `showrun-asset-generator` skill reads the manifest, pulls each entry from `content/`, composes them into the template's `content.md`, and runs the build.

## Voice authority

The `showrun-brand-guidelines` skill (in the de-ecosystem monorepo) is the authority for voice. **Every entry must pass the Quick Reference checklist before becoming `canonical`.** The Ana test, the protagonist check, the rhythm check — all apply here.

## When to update vs create new

- **Edit in place** when fixing typos, refining a phrase, or making a minor revision that preserves the meaning. Bump patch or minor version.
- **Create a new entry** when the meaning fundamentally changes. The old entry gets `status: retired` and stays for audit; the new entry gets a new id.

Never silently change the meaning of a `canonical` entry — downstream templates depend on what it currently says.

## Anti-patterns

- Embedding copy inline in templates (defeats the whole point of the library)
- Using stock language ("synergy," "leverage," "circle back" — see retired vocabulary in the skill)
- Mixing the wrong register (proposal copy in a social post tone, or vice versa)
- Skipping the `used-by` field — without it, you can't know what breaks when you edit
- Bumping version without updating `last-updated`
- Marking `voice-check: passed` without actually running the checklist

## Reviewing

Monthly: scan for `draft` entries that have been drafts >30 days — either promote to `canonical` or delete.
Quarterly: scan for `canonical` entries with `last-updated` >180 days — confirm they're still accurate. Bump version even if no change, to refresh the freshness signal.
