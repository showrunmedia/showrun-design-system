/**
 * Do not edit directly, this file was auto-generated.
 */

/** Light ground. Warm-neutral, R−B spread +4, so it flatters tungsten in the photography. */
export const ColorGroundPaper: string;
/** Dark ground. Chosen against the photography: graded plates floor at ~26/255 luma because the Showrun grade lifts blacks. At luma 20.2 this sits BELOW that floor so images sit into the page. #1A1A1A matched the floor and edges dissolved; #1D1D1D sat above it and images punched a hole. */
export const ColorGroundCharcoal: string;
/** 19.09:1 on paper. AA + AAA. */
export const ColorTextOnPaper: string;
/** 18.40:1 on charcoal. AA + AAA. */
export const ColorTextOnCharcoal: string;
/** 4.76:1 on paper. Small text, labels, captions. */
export const ColorGreyOnPaper: string;
/** 6.54:1 on charcoal. Small text, labels, captions. */
export const ColorGreyOnCharcoal: string;
/** The only accent. Unrestricted on charcoal (5.42). On paper it is 3.09 — AA-large — so it is used there for navigational text only (section labels, FIG numbers, running heads), never to set body paragraphs and never as the sole carrier of unique information. */
export const ColorAccentVermilion: string;
export const ColorAlphaDivider: number;
export const ColorAlphaSoftRule: number;
export const ColorAlphaHairline: number;
export const ColorAlphaTint: number;
/** −32%. Sits below the vibrancy clients and agencies use — that gap is the separation. */
export const ImageGradeSaturation: number;
/** 0–255. Shadows go milky rather than crushed: film, not video. This is why the charcoal ground must sit under 26/255. */
export const ImageGradeBlackLift: number;
/** Red gain against blue. Keeps skin and tungsten honest once saturation drops. */
export const ImageGradeWarmBias: number;
export const ImageTemperatureDefault: string;
export const ImageTemperatureCoolException: string;
export const ImageSourcingModes: string;
export const ImageSourcingBar: string;
export const ImageSourcingPeople: string;
export const ImageSourcingLimits: string;
export const SemanticDarkBackground: string;
export const SemanticDarkText: string;
export const SemanticDarkMuted: string;
/** 5.42:1 — unrestricted at any size on this ground. */
export const SemanticDarkAccent: string;
/** Apply at alpha.hairline (0.22). */
export const SemanticDarkRule: string;
export const SemanticLightBackground: string;
export const SemanticLightText: string;
export const SemanticLightMuted: string;
/** 3.09:1 — AA-large. Navigational text only on this ground. */
export const SemanticLightAccent: string;
/** Apply at alpha.hairline (0.22). */
export const SemanticLightRule: string;
/** Headlines, oversized numerals, section titles. Grotesque with masthead authority. Variable: wght 100–900 plus a wdth axis 62–125, so condensed-editorial and wide-poster come out of one file. Replaces Switzer, which is Fontshare and therefore cannot render in a shared Google Doc. */
export const TypographyFamilyDisplay: string;
/** All running text, captions, table content. Locked first and independently: at 54.6% it carries the highest x-height of any candidate, which is what keeps 14px cue text legible. Variable wght 100–900 with true italics. */
export const TypographyFamilyBody: string;
/** Labels, values, times, cue states, running heads, title blocks. NEVER a display or heading face. Engineered and slightly squared — it reads as instrumentation, which is the right register on a cue sheet. 600 weight span with true italics; not variable, which is immaterial for a face used at fixed label sizes. Replaces Martian Mono, which has NO ITALIC at all — a functional gap, since a held or soft cue needs to look different from a hard one. */
export const TypographyFamilyMono: string;
/** Archivo at 800 for headlines. The variable axis reaches 900; 800 holds more counter shape at large sizes. */
export const TypographyWeightDisplay: string;
/** Inter 400 for running text. Its x-height carries the weight Switzer needed 500 to reach. */
export const TypographyWeightBody: string;
export const TypographyWeightBodyEmphasis: string;
/** IBM Plex Mono 600 for labels; 700 for a cue state that must read as a command. */
export const TypographyWeightLabel: string;
export const TypographySizeCoverHeadline: string;
export const TypographySizeSectionHeading: string;
/** Oversized stat treatment. One per slide. */
export const TypographySizeNumeral: string;
export const TypographySizeBody: string;
export const TypographySizeValue: string;
export const TypographySizeLabel: string;
/** 17px x 1.62 = 27.54px, which is where the 28px baseline grid comes from. That grid is the one piece of geometry that is actually derived rather than chosen. */
export const TypographyLeadingBody: string;
export const TypographyTrackingCoverHeadline: string;
export const TypographyTrackingSectionHeading: string;
export const TypographyTrackingNumeral: string;
export const TypographyTrackingLabel: string;
export const TypographyTrackingAccentLabel: string;
export const TypographyAxesDisplayWeight: string;
/** Archivo wdth. Below 100 for condensed editorial headlines; above for wide poster settings. Default 100. */
export const TypographyAxesDisplayWidth: string;
export const TypographyAxesBodyWeight: string;
/** Static instances, not a variable axis. */
export const TypographyAxesMonoWeight: string;
