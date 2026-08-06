# Changelog

All notable changes to the Showrun Brand OS. Follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-08-06

**The identity was re-derived from scratch and locked. This release supersedes v0.1 entirely.**

### Changed — BREAKING
- **Colour.** The teal/blue palette is retired. Replaced by one accent (`#FC4C13` vermilion)
  with everything else neutral: two grounds (`#F5F4F1` paper, `#141416` charcoal), pure black
  and white reserved for text, and two greys. All remaining colour now comes from the
  photography. Rejected on evidence: a scan of 22 verified peers found the field already
  splits between a dark-AV uniform and trust-blue templates, and teal/blue sat inside the
  second group rather than apart from it.
- **Typography.** Albert Sans / Plus Jakarta Sans / Sedgwick Ave replaced by **Switzer**
  (display + body) and **Martian Mono** (labels). Martian Mono was chosen on measured
  x-height — 60.5% against IBM Plex Mono's 51.6%.
- **Semantic light/dark** rewritten against the new grounds.
- **Logo assets** added: 54 files, three colourways, icon + horizontal lockup + padded
  square favicons.

### Added
- `tokens/image.json` — the Showrun grade as tokens, with a byte-identical reference
  implementation in the brand kit.
- Contrast ratios and the reasoning behind each value carried on the tokens themselves, so a
  future change can be checked rather than argued.

### Removed
- `gradients.json` — the system no longer uses gradients.
- Teal and blue glow tokens from `elevation.json`.

### Fixed
- **Archived tokens were compiling into `build/`.** Style Dictionary does not honour `!`
  negation in `source`, so an archive kept under `tokens/` was still being globbed and the
  v0.1 palette was being emitted alongside v1.0.0. Archives now live in `/_archive/` at the
  repo root, outside the glob. Anyone archiving tokens in future must do the same.
- Root-level `$description` collisions across token files (5 → 0).

### Scope
Showrun Media only. **Showrun OS is a separate product with its own register** and needs its
own visual system; none of this applies to OS surfaces.

### Geometry deliberately deferred
`spacing.json`, `radius.json`, `elevation.json`, `breakpoints.json` remain at v0.1. They were
not part of the identity work and are not settled — they need further development and will
vary by document type. A cue sheet, a deck, a one-sheet and a web page do not share one
geometry, so a single global scale would be an invented constraint rather than a derived one.

## [Unreleased]

### Added
- Phase 0 scaffolding (this commit)

## [0.1.0] — TBD (Phase 0 completion)

### Added
- W3C DTCG token files: color, typography, spacing (NEW), radius, gradients, elevation (NEW), breakpoints (NEW), semantic/light, semantic/dark
- Style Dictionary v5 build pipeline → CSS / SCSS / JSON / JS / Tailwind preset
- GitHub Actions: `build.yml` (auto-build on token changes), `release.yml` (publish on tag)
- Three-pillar structure: `tokens/`, `content/`, `templates/` + supporting LEARNINGS.md, ROADMAP.md
- npm package scaffold (`@showrunmedia/tokens`)
- Self-hosted font setup (Albert Sans, Plus Jakarta Sans, Sedgwick Ave)
- Logo assets migrated from existing Showrun_Logo_Package
- Sibling skill `showrun-asset-generator` stub in monorepo

### Notes
- All tokens tagged `v0.1-candidate` pending Phase 1 validation.
- Spacing, elevation, breakpoints are NEW additions to v7 (the locked design system did not specify these).
