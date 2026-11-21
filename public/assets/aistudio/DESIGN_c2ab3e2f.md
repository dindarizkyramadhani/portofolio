---
name: Studio Scrapbook
colors:
  surface: '#fff8f3'
  surface-dim: '#dfd9d4'
  surface-bright: '#fff8f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f9f2ed'
  surface-container: '#f3ede7'
  surface-container-high: '#ede7e2'
  surface-container-highest: '#e7e1dc'
  on-surface: '#1d1b18'
  on-surface-variant: '#57423b'
  inverse-surface: '#32302d'
  inverse-on-surface: '#f6f0ea'
  outline: '#8a726a'
  outline-variant: '#dec0b7'
  surface-tint: '#a23e18'
  primary: '#9f3c16'
  on-primary: '#ffffff'
  primary-container: '#bf542c'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59c'
  secondary: '#2e5f9d'
  on-secondary: '#ffffff'
  secondary-container: '#8ebbff'
  on-secondary-container: '#0f4a87'
  tertiary: '#7a5500'
  on-tertiary: '#ffffff'
  tertiary-container: '#996c00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#390c00'
  on-primary-fixed-variant: '#822801'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a6c8ff'
  on-secondary-fixed: '#001c3b'
  on-secondary-fixed-variant: '#094784'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#febb30'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4100'
  background: '#fff8f3'
  on-background: '#1d1b18'
  surface-variant: '#e7e1dc'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 84px
    fontWeight: '700'
    lineHeight: 84px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 42px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-gallery:
    fontFamily: Playfair Display
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-gallery-mobile:
    fontFamily: Playfair Display
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: 0em
  headline-poster:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-poster-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-editorial:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  body-regular:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-editorial-italic:
    fontFamily: Playfair Display
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  annotation-script:
    fontFamily: Epilogue
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 22px
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.12em
  label-stamp:
    fontFamily: Epilogue
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.875rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3.5rem
---

## Brand & Style

This design system expresses the dynamic creative tension between a physical tactile scrapbook studio and high-octane modern creative computing. Designed for the multi-disciplinary portfolio of Dinda Rizky Ramadhani (D.KYRAA), the aesthetic rejects homogenized SaaS templates in favor of a tactile, layered editorial workspace.

### Design Style: Tactile Neo-Brutalism & Kinetic Atelier
The visual style fuses the warm, intimate chaos of a physical art desk—replete with masking tape, polaroid stacks, torn paper deckles, and scribbled margin notes—with the precision and punch of contemporary web typography and graphic poster culture.

- **Atmosphere:** Physical, artisanal, irreverent, and technologically sharp.
- **Key Motifs:** Translucent washi tape strips, mechanical folder tabs, rotating sticker badges, tactile craft paper grain, contrasting marquee bands, and archival gallery borders.
- **Motion Principles:** Elements tilt, drift, and settle with physical weight. Hover states introduce slight rotational friction (`-2deg` to `2deg`), simulating physical items picked up from a working desk.

## Colors

The palette reproduces organic printing substrates, pigment-based archival inks, and physical studio materials illuminated by crisp daylight.

### Functional Palette Mapping
- **Canvas Base (`paper`):** `#F9F7F2` — Warm unbleached rag paper backing every viewport.
- **Deep Pigment (`ink`):** `#1C1A17` — Primary carbon black for bold kinetic typography, borders, and heavy framing.
- **Subdued Text (`ink-soft`):** `rgba(28, 26, 23, 0.68)` — Secondary annotations, body copy, and metadata.
- **Architectural Grid (`grid`):** `rgba(28, 26, 23, 0.06)` — Background technical drafting grid.
- **Primary Accent (`art-coral`):** `#C85A32` — Expressive hero calls-to-action, sticker outlines, and raw editorial highlights.
- **Secondary Accent (`tech-blue`):** `#2A5C9A` — Creative engineering labels, interactive node tags, code snippets, and active state triggers.
- **Tertiary Accent (`gold`):** `#D99B00` — Highlight badges, starburst stickers, awards, and curiosity indicators.
- **Quaternary Accent (`forest`):** `#2F6B4C` — Organic design categories, sustainability tags, and status stamps.
- **Studio Wood (`wood`):** `#3D2B1F` — Heavy dark accents, footer pedestals, and framing shadows.
- **Gilded Trim (`frame-gold`):** `#C5A059` — Gallery exhibition borders, metallic foil sticker effects, and featured project badges.

### Color Rules
1. Backgrounds default to `#F9F7F2`; do not use pure `#FFFFFF` except within inner polaroid photo areas.
2. Inverted marquee tapes and focal breaks run in solid `#1C1A17` with `#F9F7F2` or `#D99B00` typography.
3. No high-saturation artificial neon glows; color interaction behaves like screen-printed ink layers overlapping uncoated stock.

## Typography

The typographic hierarchy orchestrates a triad of voices: high-impact graphic impact, classical editorial elegance, and personal studio marginalia.

- **Primary Impact Voice:** Wide, structural grotesque headlines deliver punchy poster-like clarity. Used for hero section titles, marquee tickers, project numbers, and punchy statement banners.
- **Gallery & Editorial Voice:** A high-contrast transitional serif provides classical weight and fine-art credibility. Used for showcase artwork titles, long-form project intros, and curatorial statements.
- **Annotation & Hand-Staged Voice:** Hand-staged labels mimic quick studio notes, handwritten marginalia, paper tape lettering, and circular sticker text.

### Typographic Styling Guidance
- Hero numbers ("01", "02") and case study categories must always pair broad, heavy grotesque sizing against an expressive editorial subheader.
- Use uppercase for all status chips, technical specs, and folder tabs to preserve the look of a stamped archival dossier.
- Apply a slight organic angle (`transform: rotate(-1.5deg)`) to informal script annotations and sticker callouts.

## Layout & Spacing

The layout is built upon an architectural drafting grid that accommodates deliberate scrap-layer overlaps, off-grid polaroid positioning, and staggered masonry galleries.

### Grid Framework
- **Desktop:** 12-column dynamic grid, `margin: 3rem`, `gutter: 1.5rem`, capped at a max-width of `1440px`.
- **Tablet (768px – 1024px):** 8-column grid, `margin: 2rem`, `gutter: 1.25rem`.
- **Mobile (< 768px):** 4-column grid, `margin: 1.25rem`, `gutter: 0.875rem`.

### Layering & Composition Dynamics
- **Negative Space vs. Layering:** Ample margins balance dense interactive clusters. Items inside project collages intentionally bleed over boundaries by `12px` to `24px` to create a physically pinned appearance.
- **Rhythm:** Section-to-section breaks use `space-xl` coupled with physical divider elements: a jagged deckle tear, a dark contrast marquee band, or a row of vintage binder tabs.

## Elevation & Depth

Depth is established through physical papercraft layering, raw contact shadows, and masking accessories rather than ethereal software blur.

### Depth Hierarchy
1. **Level 0 (Cutting Mat / Desk Base):** `#F9F7F2` canvas overlaid with an `rgba(28,26,23,0.06)` square grid (24px by 24px).
2. **Level 1 (Paper Sheets & Workboards):** Backing cards, dossier folders, and exhibition slabs. They cast a crisp, tactile contact shadow: `box-shadow: 4px 5px 0px #1C1A17` or `0 4px 12px rgba(28, 26, 23, 0.08)`.
3. **Level 2 (Artwork Polaroids & Pinned Fragments):** Layered prints with borders. Shadows feature dual ambient-and-drop layers: `0 8px 24px rgba(28, 26, 23, 0.12), 2px 3px 0px rgba(28, 26, 23, 0.15)`.
4. **Level 3 (Masking Tape, Decals & Sticky Badges):** Washi tape overlays (`background: rgba(249, 247, 242, 0.82)` with backdrop blur) and metallic seal stickers (`#C5A059`) positioned across level 1 and 2 boundaries.
5. **Level 4 (Floating Lightbox Modals & Cursor Canvas):** Full-bleed viewing overlays bordered with solid `#1C1A17` edges and dark drop shadows: `12px 16px 0px #3D2B1F`.

## Shapes

The design system relies on a structural, sharp-edged baseline (`roundedness: 0`), honoring cut paper sheets, guillotine prints, and rigid wood mounts.

### Shape Variations
- **Cards & Frame Panels:** Strictly rectangular with `0px` border-radius, framed by `1.5px` or `2px` solid `#1C1A17` outlines.
- **Torn & Deckle Edges:** Created using dynamic CSS clip-paths (zigzag polygon coordinates) along top or bottom edges to simulate hand-torn sketchbook pages.
- **Washi Tape Strips:** Rectangular translucent blocks (`height: ~24px`, `width: ~90px`) featuring rough notched ends and subtle rotational tilts (`-3deg` to `3deg`).
- **Physical Decals & Badges:** Distinct geometric exceptions. Starburst badges (8 to 12 points), circular ink seals (`border-radius: 9999px`), and rectangular stacked folder tabs with asymmetrical top-left and top-right bevels.

## Components

### 1. Buttons
- **Primary Studio Button:** Rectangular, sharp-cornered. Filled with `#C85A32` or `#1C1A17`, text in `#F9F7F2`. Embellished with a heavy 2px outline and an offset drop block: `box-shadow: 3px 3px 0px #1C1A17`. Hover state triggers a `translate(-2px, -2px)` shift with an expanded shadow (`5px 5px 0px`).
- **Washi Action Link:** Translucent paper strip look, underlined with an irregular hand-drawn vector stroke.
- **Secondary Frame Button:** Transparent background, `1.5px` solid `#1C1A17`, text in `#1C1A17`, with subtle stamp hover tint of `#2A5C9A` at 10% opacity.

### 2. Chips & Badge Stickers
- **Discipline Badge:** Sharp pill or folder tab silhouette, `1px` border in `#1C1A17`, text set in uppercase label-caps.
- **Category Filter Chips:** Active state fills with `#2A5C9A` or `#2F6B4C` with inverted `#F9F7F2` text; inactive state features `#F9F7F2` paper surface with `rgba(28,26,23,0.15)` border.
- **Sticker Seals:** Floating circular or scalloped starburst badges positioned overlapping card borders. Colored in `#D99B00` or `#C5A059` with rotated display typography.

### 3. Polaroid & Gallery Cards
- **Polaroid Frame:** Crisp white container (`#FFFFFF`), `12px` top/left/right border, and `40px` bottom margin for hand-staged caption typography.
- **Washi Fixation:** Every card is anchored at one or two corners by a semi-transparent masking tape element with soft drop shadow.
- **Hover Motion:** Slight rotation (`rotate(1.5deg)`) and smooth upward lift (`translateY(-4px)`).

### 4. Stacked Folder Tabs
- Navigation or archive filter rows styled as physical Manila folder tabs nested along a bottom baseline.
- Active tab features an inverted tone (`#1C1A17` ground, `#F9F7F2` text) and sits `4px` higher than sibling tabs.

### 5. Input Fields
- Underlined or bottom-bordered drafting fields (`2px` solid `#1C1A17`) on `#F9F7F2` substrate.
- Focus state switches the underline to `#C85A32` with an accompanying handwritten label reveal in the right margin.

### 6. Dark Contrast Marquee Bands
- Full-bleed horizontal ticker ribbons set to `#1C1A17` background with `#F9F7F2` kinetic bold uppercase text.
- Edge boundaries feature subtle perforated or dashed border rules (`border-top: 1px dashed rgba(249,247,242,0.3)`).