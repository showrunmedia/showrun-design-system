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

### 2026-05-21 — showrun-brand-guidelines SKILL.md is divergent between plugin cache and GitHub canonical

- **Signal:** During Phase 0 push, attempted to update `reftech12/de-ecosystem/SKILLS/showrun-brand-guidelines/SKILL.md` and discovered the GitHub version is v1.0.0 (9.7KB, simpler structure) while the Cowork plugin cache loads a v1.1.0 version (~28KB) with substantially more content (Strategic Positioning, full Voice & Tone register details, Document Layers, Design Axioms, Warmth Layer specs).
- **Pattern:** DECISION-014 says `SKILLS/` is the canonical source of truth, but the runtime (Cowork plugin cache) is loading a different file. The two have drifted — likely the v1.1.0 update happened only in the plugin cache, not pushed to GitHub. This is the exact "version mismatch" pattern previously noted with de-tool-eval (per memory).
- **Proposed fix:** Reconcile by canonicalizing the plugin-cache v1.1.0 into the GitHub SKILLS folder. Bump to v1.2.0 in the process, adding inline references to the new public design-system repo + sibling asset-generator skill. For Phase 0, created `SKILLS/showrun-brand-guidelines/IMPLEMENTATION.md` as a stop-gap to document the public repo without touching the divergent SKILL.md.
- **Status:** proposed (deferred to standalone reconciliation session)
- **Surfaced via:** Phase 0 push
- **Tags:** skill, divergence, decision-014, cross-skill

### 2026-05-21 — GitHub Apps API blocks pushing `.github/workflows/` files without `workflows` scope

- **Signal:** Push of `.github/workflows/build.yml` and `.github/workflows/release.yml` via the github MCP returned `Not Found` errors from both `push_files` (multi-file) and `create_or_update_file` (single-file). The other 21 files in the same batch pushed successfully.
- **Pattern:** GitHub treats `.github/workflows/` as a privileged path requiring the `workflows` OAuth scope beyond standard `repo` write. The MCP's GitHub auth token lacks this scope. Common limitation — affects any agentic system writing CI files via API.
- **Proposed fix:** Daniel adds the two workflow files manually via github.com web UI (5 min, copy-paste from the staged content in outputs folder). For future repos, document this as a known limitation in the standing workflow doc. Long-term fix: configure a GitHub PAT with `workflows` scope and route workflow-file pushes through it.
- **Status:** in-progress (Daniel's manual step)
- **Surfaced via:** Phase 0 push
- **Tags:** github, mcp-limitation, workflow-scope, manual-step

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

---

## 2026-08-06 — Archived tokens were still compiling into the build

**What happened.** While replacing the v0.1 palette with v1.0.0, the superseded tokens were
moved to `tokens/_archive/` and the Style Dictionary source glob was updated to
`['tokens/**/*.json', '!tokens/_archive/**']`. The build succeeded, so it looked done.

It was not. **Style Dictionary does not honour `!` negation in `source`.** The archive was
still being globbed, and `build/css/tokens.css` was emitting `--color-teal-deep: #0096bc`
alongside `--color-accent-vermilion: #fc4c13`. Style Dictionary flagged "Token collisions
detected (4)" — a warning easy to read past, since the build exits 0 either way.

Had this shipped, every downstream consumer — the Astro site, the Tailwind preset, n8n, and
Claude Design onboarded against this repo URL — would have received both palettes and been
free to pick the retired one.

**Fix.** Superseded token sets live in `/_archive/` at the **repo root**, outside the
`tokens/**` glob. There is now a comment in `style-dictionary.config.mjs` saying so.

**The general lesson.** A green build is not evidence that the right tokens shipped. Grep the
build output for values that should be *gone*, not just for values that should be present.
Absence is the harder thing to verify and the easier thing to get wrong.

## 2026-08-06 — Root-level `$description` collides across token files

Each token file carried a top-level `$description`. Style Dictionary merges all sources into
one tree, so those five root keys overwrote each other — 4 collisions, and the surviving
description was whichever file loaded last. Harmless to output but noisy, and it masked the
archive collision above by making collisions look normal.

**Fix.** Nest the description inside the file's top group (`color`, `typography`, `image`) or,
for the two semantic files that share a `semantic` root, inside their own sub-group.

---

## v1.0.1 — Shipping unvalidated tokens is worse than shipping none

**2026-08-07.** An audit of the published system against the brand kit found the repo
contradicting its own documentation, and two of the contradictions were live on the public
remote for a day.

**1. Geometry shipped as authoritative while the kit called it undefined.**
`spacing`, `radius`, `elevation` and `breakpoints` were v0.1 first-pass candidates. Their own
`$description` fields said so — *"candidate values pending Phase 1 prototype validation"* — but
Style Dictionary does not care about prose. The build emitted `--spacing-*`, `--radius-*`,
`--elevation-*` and `--breakpoint-*` looking exactly as authoritative as `--color-accent-vermilion`,
which was measured. **A consumer cannot tell a guess from a decision once both are custom
properties.** Removed in v1.0.1.

**2. `elevation` was blue.** Every level used `rgba(15, 23, 42, …)` — Tailwind's slate-900 — in a
system that had explicitly retired blue and whose dark ground is a neutral `#141416`. It came in
with a scaffold default and survived because nobody renders a shadow token in isolation.
*Scaffold defaults are not neutral; they carry another system's opinions.*

**3. `image.people` still carried a rule the brand had reversed.** The token read *"Photographed,
not generated… never for people."* That rule had been corrected days earlier in the brand kit and
the agent skill — but not here, in the machine-readable copy that consumers actually pull. The
prose sources were treated as the source of truth during the correction; the tokens were the
source of truth in practice.

**The pattern behind all three:** a correction is only real in the artifact that gets *consumed*.
Documentation and tokens drift apart silently because nothing fails when they disagree.

**Adopted.**
- Do not publish a token you cannot defend with a measurement or a decision record. Absent
  beats provisional.
- When a brand rule changes, grep the **built output** for the old rule, not just the docs.
  `grep -r "<old rule>" build/` is the check that would have caught this on day one.
- Treat any value inherited from a framework scaffold as unexamined until measured against the
  palette it now lives in.

---

## v1.1.0 — A brand face that cannot render on a collaborator's machine is not a brand face

**2026-08-07.** The locked v1.0 type system was Switzer for display and body, Martian Mono for
labels. Both were chosen on measured merit — x-height, set width, licence terms — and both were
wrong, for a reason that never came up during selection.

**The constraint that was missing.** Cue sheets, briefs, call sheets and working Sheets get
*shared*. A producer, a client or a collaborator opens the file on their machine, and it has to
render as designed. Switzer is Fontshare. **Google Docs and Sheets have no font-upload path** —
the picker is the Google Fonts catalogue and nothing else. So every shared working document was
silently falling back to whatever the recipient had installed. The design broke on someone
else's screen and we would never see it.

Worth being precise about the Word case too, because it looks like an escape hatch and is not:
a `.docx` *can* embed fonts, but that is **editable** embedding. The Fontshare FFL grants
**read-only PDF** embedding only. So the workaround is a licence violation as well as a
rendering gamble. PDF was always safe; nothing else was.

**A second gap, found the same day.** Martian Mono **has no italic**. On a cue sheet that is
functional, not stylistic — a held or soft cue needs to look different from a hard one, and the
label face could not express it.

**Locked v1.1.0.** Archivo (display) / Inter (body) / IBM Plex Mono (labels). All three on
Google Fonts, all three SIL OFL, all three with real weight range and true italics.

**Adopted.**
- **Distribution is a type selection criterion, ranked above aesthetics.** Ask where a face has
  to render *before* measuring x-heights. A face that fails this cannot be rescued by liking it.
- When a document is collaborative, the font question is "what will the *recipient's* software
  resolve", not "what is installed here".
- Check the italic. A missing italic is invisible in a specimen and load-bearing in a table.
- Verify against the Google Fonts CSS2 API, not memory — `?family=<Name>` returning 400 is the
  whole test.
