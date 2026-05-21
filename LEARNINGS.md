# Brand OS Learnings

The self-improvement log for the Showrun brand operating system. Mirrors the DE Self-Improving Skill Protocol used elsewhere in the ecosystem.

## How to add an entry

Every time the system surfaces a gap — during asset generation, content review, or routine use — log it here **immediately**. Don't wait for session close.

Use this template:

```markdown
### YYYY-MM-DD — [LEARNING TITLE]

- **Signal:** [what specifically happened — be concrete, quote the moment]
- **Pattern:** [what this reveals about the system]
- **Proposed fix:** [token change / template change / content change / skill change / docs change]
- **Status:** observed | proposed | in-progress | applied | rejected
- **Surfaced via:** [asset-generator skill | manual use | review | other-skill-cross-signal]
- **Tags:** [token, template, content, skill, voice, etc.]
```

Entries flow: **observed → proposed → in-progress → applied** (or rejected). Applied entries move from `Active Learnings` to `Consolidated` at the next quarterly release.

## Watching for

Per Pillar 3 of the build plan, actively watch for:

- **Token gaps** surfaced during asset generation ("the spec doesn't say what to do here")
- **Template ambiguities** — same input rendering differently
- **Voice / copy drift** between assets (the bio on the website says one thing; the deck says another)
- **Workflow friction** in the `showrun-asset-generator` skill
- **Cross-domain patterns** worth absorbing (Pure Lush, DE Officiating brand applications)
- **Tool-stack changes** (new MCPs, deprecated libraries, font version updates)
- **Render fidelity issues** (gradient banding, font fallbacks, grain texture artifacts)
- **Accessibility issues** (contrast failures, focus states, screen reader gaps)

## Cadence

- **Real-time:** new entries get appended to Active as gaps are observed
- **Monthly:** quick triage — categorize, score impact, decide ship-in-next-release vs defer vs reject (see `docs/OPERATING_CADENCE.md`, populated in Phase 7)
- **Quarterly:** roll applied entries into a v1.x release. Tag, publish, update CHANGELOG.md
- **Annual:** full audit — is the OS still serving the business?

## Active Learnings

### 2026-05-21 — Top-level `$description` collides with sibling tokens

- **Signal:** Phase 0 pressure test of `npm run build` reported 6 "token collisions detected" warnings. Investigation showed Style Dictionary v5 + @tokens-studio/sd-transforms treats a top-level `$description` field (at the root of each `tokens/*.json` file) as a token-like entity with an empty path, causing collisions across files.
- **Pattern:** DTCG `$description` at the root of a tokens file should sit *inside* the first group object, not adjacent to it. This is a subtle DTCG-format gotcha.
- **Proposed fix:** Move each file's top-level `$description` into the first group object. Apply across spacing, radius, gradients, elevation, breakpoints, semantic/light, semantic/dark. (APPLIED in Phase 0 verification.)
- **Status:** applied
- **Surfaced via:** Phase 0 pressure test (Style Dictionary build smoke test)
- **Tags:** dtcg, style-dictionary, gotcha

### 2026-05-21 — Style Dictionary v5 uses `$value` not `value` for token access

- **Signal:** Custom Tailwind preset format produced empty objects (`colors: {}`, `spacing: {}`) because access used `t.value`.
- **Pattern:** In SD v5 with the `tokens-studio` preprocessor, the canonical access is `t.$value`. The unprefixed `t.value` may be undefined depending on preprocessor pipeline.
- **Proposed fix:** Use `t.$value ?? t.value` defensively in all custom transforms and formats. (APPLIED.)
- **Status:** applied
- **Surfaced via:** Phase 0 pressure test
- **Tags:** style-dictionary, v5-migration, custom-format

### 2026-05-21 — Dark CSS "filtered references" warning is informational

- **Signal:** `css-dark` platform emits warning: "While building tokens-dark.css, filtered out token references were found; output may be unexpected."
- **Pattern:** Expected behavior. The dark CSS file references primitive color tokens via `var(--color-...)` which resolve at runtime when both `tokens.css` and `tokens-dark.css` are loaded together. The warning fires because the filter excludes the primitives from this file's output, but the references are correct.
- **Proposed fix:** None for v0.1 — behavior is correct. Consider suppressing the warning in `log.warnings: 'disabled'` for this specific platform in v1.0.0, or document in build output comments.
- **Status:** observed
- **Surfaced via:** Phase 0 pressure test
- **Tags:** style-dictionary, expected-behavior, doc-only

### 2026-05-21 — Claude Design (Anthropic Labs) integration decision

- **Signal:** Daniel asked where Claude Design fits — he was planning to use it to create a design system. Investigation showed Claude Design (launched 2026-04-17, research preview) generates visuals by **reading an existing design system from a codebase**, not by creating one from scratch. The tokens repo we're building is exactly what Claude Design wants to read.
- **Pattern:** Claude Design is a *consumer* of the substrate, not a replacement for it. Other code-generated outputs (DOCX, n8n workflows, Astro site) also consume the substrate. The plan is correct; Claude Design slots in cleanly.
- **Proposed fix:** Folded Claude Design into v0.3 of the build plan: (a) Phase 1 deck prototyping uses Claude Design as the visual exploration front-end, then formalizes export into the HTML template, (b) Visual-fast asset templates (social, one-pager, ad creative) pulled forward from v1.3 to v1.0.0 Phase 6 because Claude Design unlocks them, (c) `showrun-asset-generator` skill gets Claude-Design-aware routing.
- **Status:** applied (build plan v0.3)
- **Surfaced via:** user question / mid-build clarification
- **Tags:** claude-design, integration, scope, plan-revision

### 2026-05-21 — JSON flat output uses CamelCase by default

- **Signal:** `build/json/tokens.json` (flat format) produces keys like `BreakpointMobile`, `ColorTealDeep` rather than the kebab-case used in CSS.
- **Pattern:** Style Dictionary v5's `json/flat` format defaults to camelCase concatenation of the path. For n8n / agent consumption, kebab-case or dot-notation would be more discoverable.
- **Proposed fix:** Decide whether to (a) use `tokens-nested.json` as the canonical JSON (preserves DTCG structure), (b) add a custom flat-kebab format, or (c) keep both. Defer the decision to first real n8n / agent consumer encounter (v1.1).
- **Status:** observed (deferred)
- **Surfaced via:** Phase 0 pressure test
- **Tags:** style-dictionary, agent-consumption, deferred

## Consolidated

*(Populated as entries ship in releases.)*

## Rejected

*(Entries considered but consciously not applied, with reasoning.)*

---

## Quick reference: where each learning ends up

| Type of learning | Where it lands |
|---|---|
| Token gap or change | `tokens/*.json` |
| Template bug or improvement | `templates/<asset-type>/` |
| Content fragment update | `content/<category>/<entry>.md` (version bumped in frontmatter) |
| Skill workflow change | `reftech12/de-ecosystem/SKILLS/showrun-asset-generator/SKILL.md` |
| Strategy / voice / positioning | `reftech12/de-ecosystem/SKILLS/showrun-brand-guidelines/SKILL.md` |
| Docs gap | `docs/` in this repo |
| Anti-pattern / "don't do this" | `docs/ANTIPATTERNS.md` (created when first one is logged) |

If an entry doesn't fit any of these, it's probably a candidate for `docs/OPERATING_CADENCE.md` or a new doc.
