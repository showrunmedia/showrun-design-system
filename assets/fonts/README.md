# Fonts

Self-hosted as WOFF2. Critical for HTML→PDF rendering — Google Fonts CDN fails inside headless Chromium.

## Required files (Phase 0 manual step)

Download from Google Fonts and place WOFF2 files here:

```
assets/fonts/
├── albert-sans-600.woff2          # SemiBold
├── albert-sans-700.woff2          # Bold
├── albert-sans-800.woff2          # ExtraBold
├── albert-sans-600-italic.woff2
├── albert-sans-700-italic.woff2
├── albert-sans-800-italic.woff2
├── plus-jakarta-sans-400.woff2    # Regular
├── plus-jakarta-sans-500.woff2    # Medium
├── plus-jakarta-sans-600.woff2    # SemiBold
├── plus-jakarta-sans-800.woff2    # ExtraBold
├── plus-jakarta-sans-400-italic.woff2
├── plus-jakarta-sans-600-italic.woff2
├── plus-jakarta-sans-800-italic.woff2
├── sedgwick-ave-400.woff2         # Regular (single weight)
└── fonts.css                      # @font-face declarations (committed)
```

## Download sources

- **Albert Sans:** https://fonts.google.com/specimen/Albert+Sans
- **Plus Jakarta Sans:** https://fonts.google.com/specimen/Plus+Jakarta+Sans
- **Sedgwick Ave:** https://fonts.google.com/specimen/Sedgwick+Ave

For each, download the static variants (not just the variable font) at the weights listed in `tokens/typography.json`. Convert TTF/OTF → WOFF2 if Google only provides TTF (use `woff2_compress` from the Google woff2 repo, or an online converter).

## fonts.css

`@font-face` declarations using `font-display: block` (NOT `swap`):

```css
@font-face {
  font-family: 'Albert Sans';
  src: url('./albert-sans-800.woff2') format('woff2');
  font-weight: 800;
  font-style: normal;
  font-display: block;
}
/* ... repeat for each weight + italic + family */
```

`font-display: block` is critical: it prevents the unstyled-text flash in HTML→PDF rendering, which would otherwise produce broken-looking deck slides.

## License

All three fonts are SIL Open Font License (OFL). Self-hosting and bundling permitted for any use including commercial.

## Status

Phase 0 manual step. Files not committed yet — Daniel downloads from Google Fonts and adds to this directory as part of Phase 0 execution.
