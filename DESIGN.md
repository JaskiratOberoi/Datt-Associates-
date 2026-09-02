---
name: Datt & Associates
description: An engraved Indian stamp-paper legal instrument — security printing as a law firm's credibility.
colors:
  paper: "#e9e2cf"
  paper-hi: "#f1ebdb"
  paper-tint: "#e0d6ba"
  ink: "#221c10"
  ink-soft: "#4c4330"
  green: "#0e3b2e"
  green-deep: "#092b21"
  green-line: "#2f6b56"
  on-green: "#e7e0cb"
  on-green-2: "#a8c2b2"
  red: "#a8231f"
  red-hi: "#bf2b24"
  gold: "#8a6d2f"
  gold-text: "#6d551f"
typography:
  display:
    fontFamily: "Libre Caslon Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 5.4vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.06em"
  headline:
    fontFamily: "Libre Caslon Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.9rem, 4vw, 2.9rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "0.05em"
  title:
    fontFamily: "Libre Caslon Display, Georgia, Times New Roman, serif"
    fontSize: "1.45rem"
    fontWeight: 400
    lineHeight: 1.15
  body:
    fontFamily: "Libre Caslon Text, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.12em"
  serial:
    fontFamily: "Courier Prime, Courier New, monospace"
    fontSize: "0.78rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  co-title:
    fontFamily: "Noto Serif Devanagari, Libre Caslon Text, serif"
    fontSize: "clamp(1rem, 2vw, 1.25rem)"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  sheet-y: "clamp(3rem, 7vw, 5.5rem)"
  section-gap: "clamp(2rem, 5vw, 3.5rem)"
  card-gap: "clamp(1.5rem, 4vw, 3rem)"
components:
  button-stamp:
    backgroundColor: "transparent"
    textColor: "{colors.red}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.6rem"
    typography: "{typography.label}"
  button-stamp-hover:
    textColor: "{colors.red-hi}"
  button-stamp-cta:
    backgroundColor: "transparent"
    textColor: "{colors.red}"
    rounded: "{rounded.none}"
    padding: "1rem 2rem"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.red}"
  card-stamp:
    backgroundColor: "{colors.paper-hi}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.25rem, 3vw, 2rem)"
  fee-mark:
    backgroundColor: "{colors.paper-hi}"
    textColor: "{colors.gold-text}"
    rounded: "{rounded.none}"
    padding: "0.2rem 0.5rem"
---

# Design System: Datt & Associates

## Overview

**Creative North Star: "The Engraved Instrument"**

The site is not a page about a law firm; it is a document that behaves like the law's own paper — Indian stamp-paper security printing rendered live in the browser. Buff security paper carries a monumental affixed hero stamp with a green engraved interior, guilloche rosettes and lattice bands drawn at runtime as real hypotrochoid and sine curves, microprint rules, perforated stamp frames, a red circular postmark cancellation, and rubber-stamp red endorsements. Every device on the page is a working security-printing device, not a decoration: the rosette is generated geometry, the microprint is real repeated text, the perforation is a punched edge, the postmark cancels the stamp's corner. It deliberately refuses both the navy-gold pillars-and-gavel law-firm template and the sterile legal-tech opposite.

Density is documentary: long measure prose in an engraved text face, uppercase engraved headings flanked by double rules, roman-numeral schedules, "Clause the First" procedure language. Authority is carried in green engraving; the human hand arrives in red — stamps, serials, endorsement buttons, the postmark, focus rings — always slightly rotated and masked with ink grunge so it reads as physically applied. Unknown facts are never invented: they appear as dotted deed blanks with red "to be affixed" marks, an honesty pattern confirmed by PRODUCT.md (placeholders are honest — clearly marked, easy to replace).

**Key Characteristics:**
- Buff paper ground with fractal-noise grain, laid-line striations, and a soft top-light sheen (all in the body background stack)
- Two-ink discipline: intaglio green for authority, rubber-stamp red for human action
- Runtime-generated guilloche (rosettes, bands, microprint) in `currentColor`, recolorable by context
- The hero is itself a stamp — a perforated, rotated, postmarked artifact affixed to the paper, not a banner
- Square corners everywhere; depth is paper physics, not UI elevation
- Bilingual masthead: Devanagari co-title above the engraved Latin caps

## Colors

A stamp-paper duotone — buff paper and intaglio green — punctuated by rubber-stamp red and court-fee gold.

### Primary
- **Intaglio Green** (`--green`, #0e3b2e): the engraving ink. Hero-stamp interior and ledger backgrounds, headings, engraved borders and double rules, rosettes on paper, the scrollbar thumb, `::selection` background.
- **Plate Shadow Green** (`--green-deep`, #092b21): the dark end of every engraved gradient (`linear-gradient` from `--green` to `--green-deep`; 165° on the hero stamp); heading color for h3s on paper.
- **Engraved Line Green** (`--green-line`, #2f6b56): fine security linework — microprint on paper, portrait frames, tier dividers.

### Secondary
- **Rubber-Stamp Red** (`--red`, #a8231f) and **Fresh-Ink Red** (`--red-hi`, #bf2b24): the endorsement ink. Stamp buttons and CTA, the hero postmark, gate serial, "to be affixed" marks, portrait notes, list markers in the gate, focus-visible outline, caret-color, nav hover. Red is an act, never a surface.
- **Court-Fee Gold** (`--gold`, #8a6d2f) and **Gold Text** (`--gold-text`, #6d551f): fee marks, roman-numeral indices, clause numerals, qualification rules, tinted-sheet borders, link underlines at rest.

### Neutral
- **Security Paper** (`--paper`, #e9e2cf): page ground, always dressed with the grain/laid-line/sheen background stack; also the perf punch-through color on the hero stamp (via a local `--paper-tint` remap), so the hero reads as affixed to the page rather than torn from a tinted sheet.
- **Fresh Sheet** (`--paper-hi`, #f1ebdb): raised paper — hero-stamp margin, gate document, partner stamp cards, row hover, fee-mark fill, docket bar (at 92% via `color-mix`).
- **Aged Tint** (`--paper-tint`, #e0d6ba): recessed paper — tinted sheets, perforation punch-through color on tinted sheets, scrollbar track.
- **Document Ink** (`--ink`, #221c10) and **Faded Ink** (`--ink-soft`, #4c4330): body prose and secondary/annotation text.
- **Paper on Green** (`--on-green`, #e7e0cb) and **Verdigris on Green** (`--on-green-2`, #a8c2b2): text and linework hierarchy on green engraved surfaces.

### Named Rules
**The Two-Inks Rule.** Green is the state's engraving; red is the human hand. Red appears only on applied acts — stamps, serials, endorsements, the postmark, marks, focus — always in the mono face, usually rotated, never as a background or body-text color.

**The Fourth-Ink Restraint.** Gold is a fee-mark ink: small marks, numerals, hairline rules. It never fills a surface and never carries a heading.

## Typography

**Display Font:** Libre Caslon Display (with Georgia, Times New Roman fallback)
**Body Font:** Libre Caslon Text (with Georgia fallback; real italics are used for intros and notes)
**Label/Mono Font:** Courier Prime (with Courier New fallback)
**Devanagari Co-title:** Noto Serif Devanagari (weights 500/600)

All faces are self-hosted via `fonts/fonts.css`. **Character:** engraved Caslon caps carry the ceremony of a security plate; Courier Prime is the typewriter of serials, endorsements and annotations; the Devanagari serif makes the masthead genuinely bilingual rather than decorated — it appears in the co-title line and the hero stamp's top-right corner mark.

### Hierarchy
- **Display** (400, `clamp(1.9rem, 5.4vw, 4.4rem)`, uppercase, 0.06em tracking): the firm name inside the hero mega-stamp only.
- **Headline** (400, `clamp(1.9rem, 4vw, 2.9rem)`, uppercase, 0.05em): section headings, centered between double hairline rules (`.sheet-h`).
- **Title** (400, 1.3–1.6rem): row, clause, and partner names in the display face; green-deep on paper, on-green on green surfaces.
- **Body** (400, 1.0625rem, 1.65 line-height): Caslon Text prose, measure capped at 52–65ch. Italic body is the annotation voice (intros, notes, the hero hook, "deed-set" values).
- **Label** (Courier Prime, 0.58–0.85rem, 0.1–0.22em tracking, uppercase): nav links, roles, forums, captions, marks. The smaller the label, the wider the tracking.
- **Serial** (Courier Prime 700, 0.78rem, 0.1em): document numbers — bottom-right of the hero mega-stamp, top-right of the gate document.

### Named Rules
**The Serial Rule.** Every formal document surface carries a mono serial number, format `No. DA / …` — red at the head of the gate document, a lightened red tint at the bottom-right of the hero stamp.

**The Microprint Rule.** Microprint is real text — the firm's name repeated at 6–7px in the mono face between hairline rules, `user-select: none`, filled at runtime. It marks the edge of every green zone; it is never an image.

## Layout

The page opens with the affixed stamp: a centered monumental perforated stamp (`.mega-stamp`, `width: min(940px, 100%)`, rotated −1.2°) sitting on the paper inside `.affix-wrap` (`clamp(2.25rem, 4.5vw, 3.75rem)` top padding), its top-right corner cancelled by the postmark. Below it the red stamped CTA endorsement, then the sheets in shipped order: **Partners → Schedule of Practice → Forums → Procedure → Contact** (docket nav matches this order).

Sections are stacked "sheets": `.sheet` at max-width 72rem, centered, with `clamp(3rem, 7vw, 5.5rem)` vertical padding and the shared `--gutter` (`clamp(1rem, 4vw, 3rem)`) inline. Full-bleed green zones (ledger, colophon) break the paper rhythm and are always bounded by microprint rules or lattice bands. Tinted sheets (`.sheet-tint`) run full-bleed with gold hairline top/bottom borders while their content stays at 72rem. Light sheets carry a centered rosette watermark at 5.5% opacity behind the content (z-index −1).

Internal structures are documentary grids: the practice schedule is a `4rem / 1fr / 15rem` three-column ledger row (collapsing to two columns at 900px, index shrinking at 640px); partners use `auto-fit minmax(min(100%, 24rem), 1fr)`; the forum ladders are vertical ordered lists connected by dashed leader lines. Breakpoints observed: 900px (grid collapses, seal reorders above contact fields) and 640px (docket stacks and centers, body drops to 1rem, hero corners/serial/postmark shrink and pull inboard, fee marks become block). Sticky docket nav is compensated by `scroll-padding-top: 4.5rem`.

## Elevation & Depth

Depth is paper physics, not UI elevation. Three devices, all soft and diffuse:

1. **Paper lift** — raised sheets (cards, gate, the hero stamp) float on large-blur, soft shadows.
2. **Intaglio recession** — green engraved surfaces carry a large *inset* shadow, reading as pressed into the paper.
3. **Fee-mark tack** — tiny marks get a 1–2px soft shadow, like a chit gummed on.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 10px 30px -14px rgba(34,28,16,.55)`): partner stamp cards.
- **Document lift** (`box-shadow: 0 18px 50px -12px rgba(0,0,0,.55)`): the gate document over the scrim.
- **Affix lift** (`filter: drop-shadow(0 18px 34px rgba(34,28,16,.35))`): the hero mega-stamp — `drop-shadow` so the perforated edge casts a true punched silhouette.
- **Engraved press** (`inset 0 0 50px rgba(0,0,0,.35)` on the hero interior; `inset 0 20px 40px -30px rgba(0,0,0,.6)` on the ledger): green surfaces pressed into the page.
- **Stamp hover** (`0 6px 18px -6px rgba(168,35,31,.45)`): red glow under stamp buttons on hover.
- **Seal relief** (`filter: drop-shadow(0 2px 3px rgba(34,28,16,.25))`): the SVG common seal.

### Named Rules
**The No-Hard-Offset Rule.** Every shadow is blurred and usually negative-spread; nothing in this world casts a hard offset shadow.

## Shapes

Square corners everywhere (`border-radius` is never set above the 1px focus-ring softening); the world is cut, punched, and ruled, not rounded. The recurring form language:

- **Double rules**: authority borders are doubled — `3px double` on schedules and clauses, `4px double` red on stamps, or a 1px border paired with an offset `outline` (gate border, stamp-card inner frame, tier-3 emphasis); the hero's engraved interior uses a 2px `--on-green-2` outline at −12px offset instead.
- **Perforation**: stamp edges (hero and partner cards) are punched with repeating radial-gradient dot strips (4.5px circles on a 16px pitch) in the surrounding paper color — `--paper-tint` on tinted sheets, remapped to `--paper` on the hero so it merges with the page ground.
- **Rotation**: applied elements sit slightly askew — the hero mega-stamp −1.2°, stamp buttons −1.5°, fee marks and replace marks −2°, the postmark +8°, gate stamp −9°; hover squares the stamp button to 0°.
- **Ink grunge**: every stamped element (`.stamp-btn`, `.stamp-cta`, `.replace-mark`, `.fee-mark`, `.portrait-note`, `.postmark`, gate stamp) wears an inline-SVG `feTurbulence` mask so the ink breaks up like a real rubber stamp.
- **Working curves**: rosettes are layered hypotrochoids plus a bounding ring; bands are three mirrored sine pairs threaded through an ellipse chain — all stroked in `currentColor` at sub-pixel widths (0.5–0.9), generated by `js/main.js` on `[data-rosette]` / `[data-band]`.

**The Working-Curves Rule.** Guilloche is always generated geometry in `currentColor` — never a raster texture, never an opaque image. New surfaces reuse the `[data-rosette]` / `[data-band]` generators.

## Components

### Buttons (stamp endorsements)
- **Character:** a rubber stamp pressed on the paper, not a UI button.
- **Shape:** square-cornered, `3px double` red border, transparent fill, rotated −1.5°, ink-grunge mask.
- **Type:** Courier Prime 700, uppercase, 0.1em tracking; standard at 1rem, CTA at `clamp(1.05rem, 1.8vw, 1.35rem)` with two-line copy.
- **Hover:** rotation squares to 0°, ink brightens to `--red-hi`, red glow shadow appears (0.18s ease).
- **Active:** 1px downward translate — the press.
- **Quiet alternative:** plain green underlined links (`.quiet-link` in mono) for secondary paths; there is no filled button anywhere.

### Cards (perforated stamps)
- **Structure:** `--paper-hi` sheet, perforated on all four edges, card-lift shadow; inner frame is a 1px green border with a 1px offset outline, 18px in from the perforation.
- **Content grammar:** denomination chit top-right (display face in a green hairline box on `--paper`), engraved portrait frame with laid-line fill, centered name in the display face, mono role line, gold-ruled qualifications, prose bio, deed-blank enrolment line.

### Inputs / Fields (deed blanks)
The site has no form inputs; the input-shaped pattern is the **deed blank**: label, a dotted-underline `.blank-line` in mono (min-width 9rem, wide variant 16rem), and a red rotated `.replace-mark` reading "… to be affixed". Known values replace the blank with italic `.deed-set` text. This is the only sanctioned way to show an unknown fact.

### Navigation (docket)
Sticky translucent `--paper-hi` bar (92% via `color-mix`, 6px blur) with a 2px green bottom rule; firm name in small-caps display face in green; links in uppercase mono at 0.82rem, ink-soft at rest, red text + red underline on hover. Stacks and centers below 640px (links drop to 0.72rem). Link order follows the shipped page sequence: Partners, Practice, Forums, Procedure, Contact.

### Chips (fee marks)
Small uppercase mono chits (0.62rem, 700, 0.14em tracking) in gold text with a 1px gold border on `--paper-hi`, rotated −2°, ink-grunge mask, tack shadow. Used to flag specialisations inline after headings.

### Microprint rule
Self-filling security rule (`.microprint`): repeated firm text at 6px between 1px `currentColor` rules; `--green-line` on paper, `--on-green-2` at reduced opacity on green (`.microprint-onink`).

### Mega-Stamp hero (signature component)
The first viewport is one artifact: a monumental perforated stamp (`min(940px, 100%)`, −1.2°, affix-lift drop-shadow) affixed to the paper. `--paper-hi` margin (20px; 14px at 640px) with perf dots remapped to `--paper`; corner chits top-left "DA" (display face) and top-right "दत्त" (Devanagari) in `--on-green-2` hairline boxes on `rgba(9,43,34,.5)`. The engraved interior is a 165° green→green-deep gradient with `inset 0 0 50px` press and a 2px `--on-green-2` outline at −12px, stacking: runtime rosette (`clamp(110px, 12vw, 140px)`), Devanagari co-title, the display-scale firm name, mono role line (0.22em tracking), italic hook (46ch max), and the serial bottom-right in Courier 700.

### Postmark (signature component)
A red circular SVG cancellation stamped over the hero's top-right corner: 170px (108px at 640px), rotated +8°, 85% opacity, z-index 2, positioned to overhang the stamp edge (`right: -44px; top: -30px`). Two `currentColor` rings (stroke 3 / 1.5) with ring text on arc paths — "NEW DELHI" above, "CHAMBERS" below, "BY APPT." across the middle — in the mono face (13px/3px tracking; 16px 700 center), the whole mark broken up by an `feTurbulence` ink mask (`baseFrequency .5`). It is the world's franking device: use it to cancel a stamp artifact, never as decoration on plain prose.

### Disclaimer gate (signature component)
Full-viewport `rgba(9,32,25,.82)` scrim with 3px blur over a gate document (max-width 34rem, `--paper-hi`, double-outlined border inset 8px, serial, small rosette, uppercase title). Accepting fires the stamp-slam: a −9° red "Agreed & Admitted" double-border stamp scales in at `cubic-bezier(.19,1,.22,1)` over 0.38s, then the gate lifts after 900ms. State in `sessionStorage` (`da-gate`), `?nogate` bypass, focus held inside while open, re-showable from the colophon. Reduced-motion collapses all delays.

## Do's and Don'ts

### Do:
- **Do** generate all guilloche at runtime via `[data-rosette]` / `[data-band]` and let `currentColor` recolor it per context (green on paper, verdigris on green surfaces).
- **Do** apply the ink-grunge `feTurbulence` mask and a slight rotation (−1.2° to −2°, postmark +8°) to anything that reads as stamped or affixed.
- **Do** mark every unknown fact as a deed blank with a red "to be affixed" mark; never invent an address, number, photo, or credential.
- **Do** bound every green zone with a microprint rule or lattice band, and keep engraved depth as inset shadow.
- **Do** honor `prefers-reduced-motion` (all animation/transition durations collapse to 0.01ms) and keep the red `:focus-visible` outline (2px, 3px offset).

### Don't:
- **Don't** round corners, fill buttons with solid color, or cast hard offset shadows — the world is cut paper and pressed ink.
- **Don't** use red as a surface or body-text color; it is reserved for applied acts (Two-Inks Rule).
- **Don't** replace generated curves with raster textures or stock imagery; no photography exists in this world until real portraits are affixed into the engraved frames.
- **Don't** use superlative or solicitous copy; headings speak in the instrument's register ("Schedule of Practice", "In Witness Whereof") and the BCI gate stays on entry.
- **Don't** add typefaces beyond the four self-hosted faces; system display faces and icon fonts are outside the world.
