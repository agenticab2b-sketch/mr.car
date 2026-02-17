---
name: technical-brutalism
description: A design system skill for creating interfaces in a "Technical Brutalism" style, characterized by dark modes, heavy typography, visible grids, and safety orange accents.
---

# Technical Brutalism Design System

This skill provides the rules and tokens for building interfaces with a raw, industrial, and high-contrast aesthetic. It is disciplined, grid-based, and functionally "honest".

## 1. Core Principles
- **Grid is God**: Every element must align to a visible or strictly felt grid. Borders between sections are often visible (1px solid).
- **No Curves**: `border-radius: 0px` is the default for everything (Buttons, Cards, Inputs, Images).
- **High Contrast**: Dark backgrounds (`#111625`) with bright, industrial accents (`#FFB000`).
- **Data Over Decoration**: Use technical markers (`[01]`, `ID: #552`) instead of decorative icons.

## 2. Color System
**Palette:**
- **Background**: `#111625` (Deep Navy/Black)
- **Surface/Card**: `#111625` (Same as BG, separated by borders) or `#1A2133` (Slightly lighter for inputs)
- **Border/Grid**: `#2A344A` (Blue-Grey, 1px)
- **Primary Accent**: `#FFB000` (Safety Orange) - Used for primary actions, price tags, "active" states.
- **Secondary Accent**: `#2A344A` (Dark Grey) - Used for secondary buttons (outline).
- **Text Main**: `#FFFFFF` (White)
- **Text Muted**: `#B0B5C0` (Cool Grey) - Body text.
- **Text Dimmed**: `#5A6275` (Dark Blue-Grey) - Meta info, large background numbers.

## 3. Typography
**Fonts:**
- **Headings**: `Inter` (Black/Heavy weight900) or `Oswald` (Bold). Always **UPPERCASE** for top-level headers.
    - `letter-spacing`: `-0.02em` (tight)
    - `line-height`: `1.0` or `1.1` (compact)
- **Body**: `Inter` or `Roboto` (Regular/400). Readable, clean.
- **Mono/Tech**: `JetBrains Mono`, `Roboto Mono`, or just `Inter` (Medium/500) with `[ brackets ]`.

**Hierarchy:**
- **H1 (Hero)**: 64px+ (Desktop), 40px+ (Mobile). Black weight. All Caps.
- **H2 (Section)**: 32px-48px. Bold. All Caps.
- **H3 (Card Title)**: 20px-24px. Bold. All Caps.
- **Label/Meta**: 12px-14px. Mono or Uppercase. Bracketed `[ LIKE THIS ]`.

## 4. UI Components

### 4.1. The Grid Container
The layout should often look like a dashboard or a schematic.
```css
.brutal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1px;
  background-color: #2A344A; /* Color of the gap (the border) */
  border: 1px solid #2A344A;
}
.brutal-cell {
  background-color: #111625;
  padding: 2rem;
}
```

### 4.2. Buttons
- **Primary**: Solid Safety Orange background. Black text. Bold. Uppercase. 0px Radius.
    - Hover: Lighten orange or simple translate transform.
- **Secondary**: Transparent background. White/Grey border. White text.
    - Hover: Background fills with White or Accent.

### 4.3. Cards & Sections
- **Corner Brackets**: Key feature cards should have subtle `L` shapes in corners to frame the content.
- **Numbering**: Background should feature large, low-contrast numbers (`01`, `02`) to indicate sequence.
- **Separators**: Use `<hr>` styled as 1px solid lines with `#2A344A`.

## 5. Usage Checklist
- [ ] Are all border-radii set to 0px?
- [ ] Is the primary background colour `#111625`?
- [ ] Are all main headings UPPERCASE and Heavy?
- [ ] Is the grid visible (via borders or gaps)?
- [ ] Are technical markers (`[01]`, `//`) used for meta data?
