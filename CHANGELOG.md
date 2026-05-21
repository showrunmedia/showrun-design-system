# Changelog

All notable changes to the Showrun Brand OS. Follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
