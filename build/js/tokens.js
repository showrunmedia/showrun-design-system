/**
 * Do not edit directly, this file was auto-generated.
 */

export const ColorGroundPaper = "#f5f4f1"; // Light ground. Warm-neutral, R−B spread +4, so it flatters tungsten in the photography.
export const ColorGroundCharcoal = "#141416"; // Dark ground. Chosen against the photography: graded plates floor at ~26/255 luma because the Showrun grade lifts blacks. At luma 20.2 this sits BELOW that floor so images sit into the page. #1A1A1A matched the floor and edges dissolved; #1D1D1D sat above it and images punched a hole.
export const ColorTextOnPaper = "#000000"; // 19.09:1 on paper. AA + AAA.
export const ColorTextOnCharcoal = "#ffffff"; // 18.40:1 on charcoal. AA + AAA.
export const ColorGreyOnPaper = "#6e6c69"; // 4.76:1 on paper. Small text, labels, captions.
export const ColorGreyOnCharcoal = "#9a9a9a"; // 6.54:1 on charcoal. Small text, labels, captions.
export const ColorAccentVermilion = "#fc4c13"; // The only accent. Unrestricted on charcoal (5.42). On paper it is 3.09 — AA-large — so it is used there for navigational text only (section labels, FIG numbers, running heads), never to set body paragraphs and never as the sole carrier of unique information.
export const ColorAlphaDivider = 0.55;
export const ColorAlphaSoftRule = 0.35;
export const ColorAlphaHairline = 0.22;
export const ColorAlphaTint = 0.12;
export const ColorLinkOnPaper = "#007870"; // 4.87:1 on paper. AA-normal, so it clears at body size, which is the whole point.
export const ColorLinkOnCharcoal = "#009c91"; // 5.40:1 on charcoal. AA-normal at any size.
export const ImageGradeSaturation = 0.68; // −32%. Sits below the vibrancy clients and agencies use — that gap is the separation.
export const ImageGradeBlackLift = 12; // 0–255. Shadows go milky rather than crushed: film, not video. This is why the charcoal ground must sit under 26/255.
export const ImageGradeWarmBias = 1.012; // Red gain against blue. Keeps skin and tungsten honest once saturation drops.
export const ImageTemperatureDefault = "warm";
export const ImageTemperatureCoolException =
  "Available for specific campaigns or stage designs, but must come from natively cool light in the scene — overcast, north window, cool-white LED, blue hour, screen glow. Never from cooling a warm source.";
export const ImageSourcingModes =
  "original (real photography, graded) | hybrid (original supplies the true environment; generation completes the coverage) | generated (built from the creative brief, no source photography)";
export const ImageSourcingBar =
  "Believability, not provenance. Every mode must read as though a photographer was in the room. An image that announces itself as generated has failed, however it was made.";
export const ImageSourcingPeople =
  "The full range is available and the surface decides: invented people as art direction, Daniel's own likeness, and real collaborators or partners rendered with their own visual identity. Density is a judgement call per surface — a capabilities deck littered with the founder reads as self-regarding. Prefer him incidental and candid: in the background, on headset, mid-conversation with a client, a profile or a silhouette. Sprinkle, never saturate.";
export const ImageSourcingLimits =
  "Two, both about honesty rather than technique. (1) Never fabricate a factual claim — Daniel at an event he did not work, or a generated venue presented as a specific named client's production. The image may complete a true story; it may not invent one. (2) Real, identifiable people require their own permission. Invented figures are art direction and carry no such claim.";
export const SemanticDarkBackground = "#141416";
export const SemanticDarkText = "#ffffff";
export const SemanticDarkMuted = "#9a9a9a";
export const SemanticDarkAccent = "#fc4c13"; // 5.42:1 — unrestricted at any size on this ground.
export const SemanticDarkRule = "#9a9a9a"; // Apply at alpha.hairline (0.22).
export const SemanticDarkLink = "#009c91"; // Links only. Never a fill, rule, heading or CTA — vermilion keeps all of those.
export const SemanticLightBackground = "#f5f4f1";
export const SemanticLightText = "#000000";
export const SemanticLightMuted = "#6e6c69";
export const SemanticLightAccent = "#fc4c13"; // 3.09:1 — AA-large. Navigational text only on this ground.
export const SemanticLightRule = "#6e6c69"; // Apply at alpha.hairline (0.22).
export const SemanticLightLink = "#007870"; // Links only. Never a fill, rule, heading or CTA — vermilion keeps all of those.
export const TypographyFamilyDisplay = "Archivo"; // Headlines, oversized numerals, section titles. Grotesque with masthead authority. Variable: wght 100–900 plus a wdth axis 62–125, so condensed-editorial and wide-poster come out of one file. Replaces Switzer, which is Fontshare and therefore cannot render in a shared Google Doc.
export const TypographyFamilyBody = "Inter"; // All running text, captions, table content. Locked first and independently: at 54.6% it carries the highest x-height of any candidate, which is what keeps 14px cue text legible. Variable wght 100–900 with true italics.
export const TypographyFamilyMono = "JetBrains Mono"; // Labels, values, times, cue states, running heads, title blocks. NEVER a display or heading face. Taller x-height (55%) and rounder counters than the alternatives, so digits stay open rather than packing tight — chosen on how it holds a TIME column and a call-sheet key/value strip, not on a specimen. Variable wght 100–800 with true italics. Replaces Martian Mono, which has NO ITALIC at all — a functional gap, since a held or soft cue must not look like a hard one.
export const TypographyWeightDisplay = "800"; // Archivo at 800 for headlines. The variable axis reaches 900; 800 holds more counter shape at large sizes.
export const TypographyWeightBody = "400"; // Inter 400 for running text. Its x-height carries the weight Switzer needed 500 to reach.
export const TypographyWeightBodyEmphasis = "600";
export const TypographyWeightLabel = "600"; // JetBrains Mono 600 for labels; 700 for a cue state that must read as a command. Italic 400 for a held or soft cue.
export const TypographySizeCoverHeadline = "74px";
export const TypographySizeSectionHeading = "46px";
export const TypographySizeNumeral = "186px"; // Oversized stat treatment. One per slide.
export const TypographySizeBody = "17px";
export const TypographySizeValue = "17px";
export const TypographySizeLabel = "14px";
export const TypographyLeadingBody = "1.62"; // 17px x 1.62 = 27.54px, which is where the 28px baseline grid comes from. That grid is the one piece of geometry that is actually derived rather than chosen.
export const TypographyTrackingCoverHeadline = "-2.3px";
export const TypographyTrackingSectionHeading = "-1.3px";
export const TypographyTrackingNumeral = "-8px";
export const TypographyTrackingLabel = "0.12em";
export const TypographyTrackingAccentLabel = "0.14em";
export const TypographyAxesDisplayWeight = "100..900";
export const TypographyAxesDisplayWidth = "62..125"; // Archivo wdth. Below 100 for condensed editorial headlines; above for wide poster settings. Default 100.
export const TypographyAxesBodyWeight = "100..900";
export const TypographyAxesMonoWeight = "100..800"; // JetBrains Mono is variable, unlike the IBM Plex alternative that was considered alongside it.
