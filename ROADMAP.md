# Showrun Brand OS Roadmap

Public-facing backlog. Each item lands in a quarterly release. Order is recommendation, not contract — sequencing flexes with what's most needed in the business.

## v1.0.0 — Foundation (target: ~3-4 sessions from project start)

The baseline brand OS. Tokens, templates, content library, asset-generator skill, learnings loop, operating cadence.

Reads with Claude Design (Anthropic Labs) as a first-class visual consumer. The tokens repo is the substrate Claude Design loads to maintain brand consistency in any generated visual.

- [x] Build plan v0.3 approved (folds in Claude Design integration)
- [ ] Phase 0 — Foundation setup
- [ ] Phase 1 — Capabilities deck via Claude Design → formalized into template + content library
- [ ] Phase 2 — Apply Phase 1 findings, lock tokens v1.0.0
- [ ] Phase 3 — Website skeleton (Astro + Cloudflare Pages)
- [ ] Phase 4 — Proposal / SOW DOCX template
- [ ] Phase 5 — Resume + cover letter templates
- [ ] Phase 6 — Email signature + Beehiiv newsletter + Resend transactional + **social/one-pager via Claude Design** (pulled forward from v1.3)
- [ ] Phase 7 — Lock v1.0.0, document operating cadence, publish roadmap

---

## v1.1 — Automation Layer (target: 1–2 months after v1.0.0)

Make the system run itself.

- [ ] **n8n workflow library** — token-push auto-rebuild; tag auto-publish; lead-form → Attio → proposal draft; asset-rendered → Hindsight log; newsletter cadence auto-draft from content library
- [ ] **Quality gates (CI)** — token-usage linter (non-token hex flag); WCAG color contrast check; spell check; brand voice eval (Haiku-driven against skill voice rules); image presence/quality check
- [ ] **Output versioning system** — every generated asset writes a manifest committed to a private `client-outputs` repo or pushed to Hindsight. Full audit trail of what client got what version
- [ ] **Claude Design integration improvements** — auto-export from Claude Design to GitHub on completion (if Anthropic ships this); standardize the prompt-template format used by asset-generator skill; tighten Canva export pipeline; capture v1.0.0 Phase 1 + 6 learnings into integration patterns

## v1.2 — Funnel Integration (target: 3–4 months after v1.0.0)

Connect assets to the lead → close → onboard flow.

- [ ] **Sales funnel map** — explicit doc showing which asset fires at which funnel stage. Lead capture → outreach → discovery → close → onboard
- [ ] **Kickoff packet template** — new asset type. Welcome letter, project charter draft, communication norms, tool access list, signed-doc archive index
- [ ] **Attio CRM adoption** via `de-tool-eval` skill. Wire to n8n for auto-routing
- [ ] **Lead-to-proposal automation** — n8n workflow that watches Attio for stage transitions → triggers `showrun-asset-generator` skill → drafts proposal → notifies Daniel for review

## v1.3 — Imagery + Cadence (target: 5–6 months after v1.0.0)

Close the imagery gap and wire recurring asset cadences.

NOTE: Visual-fast asset templates (social posts, one-pagers, ad creative) moved up to v1.0.0 because Claude Design handles the generation step. This phase is now narrower.

- [ ] **`showrun-imagery` skill** — focused on photography (BTS + experiential) and the curation/metadata layer. Image needed → check library → if missing, route to AI generation (Midjourney/Ideogram via API) OR curated stock with brand filter rules → adds to library with metadata
- [ ] **Recurring asset cadences** — scheduled draft generation for newsletter, social content, capabilities-deck quarterly refresh. Drafts notify Daniel; nothing auto-publishes
- [ ] **Analytics integration** — Beehiiv stats, Resend opens, site analytics → weekly digest into Hindsight. "What's working" feedback loop

## v1.4 — Cross-Domain Pattern + Brand Portal (target: 7–8 months after v1.0.0)

Productize the pattern. Make the system itself a credibility asset.

- [ ] **`brand-os-template` repo** — parameterized version that Pure Lush and DE Officiating can clone. Tokens swap, templates reuse, content library re-seeded per brand
- [ ] **Pure Lush parallel build** — apply the pattern. Estimated 25-40% of original build time
- [ ] **Public brand portal** at `design.showrunmedia.com` — showcases the OS itself. Visiting prospects see the system as proof of methodology
- [ ] **`llms.txt`** at repo root — emerging standard for LLM-readable indexing

## v1.5 — Hardening (target: 9–12 months after v1.0.0)

Long-term resilience.

- [ ] **Backup / DR strategy** — scheduled mirrors to GDrive, periodic snapshots, dependency-pin audit
- [ ] **Cost ceiling tracker** — dashboard tracking each tool against its free-tier limits. Alerts when within 80%
- [ ] **Org migration consideration** — possibly move the monorepo from `reftech12` personal to a `daniel-esteves` or `de-ecosystem` org
- [ ] **Showrun OS narrative compounding** — every commit/release becomes content. LinkedIn post generator that watches this repo and drafts posts when interesting commits land

---

## Backlog (no target yet)

Items that have been raised but aren't sequenced.

- Animated brand motion system (Cinematic Register video bumpers)
- Multi-language support (Spanish initially)
- Print press-ready output (CMYK, bleeds, real PDF/X)
- Showrun OS standalone visual identity (extends the OS gradient pattern)
- Public API for tokens (REST endpoint for non-npm consumers)
- Component library (React + Astro) for sharable UI primitives
