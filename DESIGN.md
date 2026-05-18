# Design & motion guidelines

Guidelines for anyone (including future agents) extending **krishg.com** — visual identity, interaction tone, and motion rules. The site should feel like a **quiet studio**: warm paper, confident type, motion that explains rather than performs.

**Related references**

- Motion tokens: [`src/lib/motion.ts`](src/lib/motion.ts)
- Global styles: [`src/styles/global.css`](src/styles/global.css)
- Motion audits: [`.agents/docs/motion/`](.agents/docs/motion/) (withciel, Awwwards SOTY set)
- Site index: [`.agents/docs/motion/README.md`](.agents/docs/motion/README.md)

---

## Visual identity: Studio Paper

A custom theme in the spirit of **theme-factory** palettes like *Desert Rose* and *Modern Minimalist*: warm neutrals, no neon, no glassmorphism for its own sake. Closer to editorial print than to SaaS marketing or WebGL spectacle.

| Attribute | Intent |
|-----------|--------|
| **Mood** | Calm, literate, precise — engineer-poet, not hype |
| **Density** | Airy; one idea per viewport on key pages |
| **Contrast** | Soft but readable; never pure black on pure white |
| **Motion** | Subtle, eased, **no overshoot**; scroll feels weighted, not bouncy |
| **Chrome** | Minimal UI; content (name, bio, links) is the interface |

---

## Color palette

Use Tailwind theme tokens — do not hardcode new hex values unless extending the theme in `global.css`.

| Token | Hex | Role |
|-------|-----|------|
| `--color-background` | `#FAF6EF` | Page canvas — warm cream / paper |
| `--color-foreground` | `#4E4B46` | Body text, icons, rules — warm gray-brown |
| `--color-link-hover` | `#EEE8DD` | Inline link hover fill, nav pill background tint |

### Color usage rules

- **Backgrounds:** Prefer `bg-background`. Nav uses `bg-link-hover/94` + `backdrop-blur-md` for a frosted pill on paper.
- **Text hierarchy:** Use opacity on foreground (`text-foreground/65`, `/70`) for secondary — not a second gray hex.
- **Borders & shadows:** `border-foreground/12`, shadows via `color-mix(in oklab, var(--color-foreground) …)` — keeps warmth in elevation.
- **Accent:** There is no brand accent color. Emphasis comes from **weight, underline, scale, and motion** — not from a third hue.
- **Do not** import Ciel’s gold accent (`#b88a4a`) or high-contrast B&W photo treatments unless building a separate Ciel-branded page.

---

## Typography

| Role | Family | Source | Notes |
|------|--------|--------|-------|
| **Display / UI / body** | Zodiak | [Fontshare](https://www.fontshare.com/fonts/zodiak) via `astro:fonts` | Sole loaded family; headlines, nav, and prose |

### Scale (homepage reference)

| Element | Classes | Behavior |
|---------|---------|----------|
| Name (H1) | `text-6xl` → `lg:text-9xl`, centered | Hero focal point |
| Tagline | `text-lg` → `lg:text-3xl`, centered | One line of personality |
| Body | `max-w-prose`, `text-justify` | Literary measure; justified bio |
| Nav | `text-sm` | Compact, inside pill |

### Typography rules

- **Single typeface:** Zodiak only — no second sans, serif, or mono webfont. Avoid `font-mono` unless a future page truly needs system monospace for code snippets.
- **Justified body** is intentional on long copy — keep `max-w-prose` (~65ch). Do not justify one-line UI labels.
- **Underline** for links: `decoration-foreground/30`, stronger on hover/focus — motion may deepen decoration color, not switch to accent blue.
- **Strikethrough in nav labels** (e.g. `<s>Where</s>Abouts`) is allowed HTML in labels — preserve wit, don’t “clean it up” to plain sans.

---

## Layout & spatial system

- **Viewport:** Prefer `svh` / `dvh` utilities (`.h-screen`, `.min-h-screen` in `global.css`).
- **Home:** Centered column, `px-4 py-16`, `gap-4` — vertical rhythm is loose.
- **Header:** Fixed floating pill, `inset-x-4 top-4`, centered — never full-width sticky bar.
- **Content width:** `max-w-prose` for reading; hero name can break out visually via size, not width.
- **Whitespace:** When in doubt, add space before adding decoration.

---

## Motion philosophy

Motion on this site is **editorial and functional**, in the same family as [withciel.com](https://withciel.com) (see [withciel motion audit](.agents/docs/motion/withciel.md)) but **much lighter**:

1. **Explain hierarchy** — what to read first, second, third.
2. **Confirm interaction** — hover/focus/active states are visible and smooth.
3. **Never compete with copy** — the bio and name are the product; motion is the frame.

### What we do here (current stack)

| Layer | Tool | Purpose |
|-------|------|---------|
| Page transitions | Full document navigation (no View Transitions / `ClientRouter`) | Avoids Lenis + ScrollTrigger lifecycle conflicts |
| Smooth scroll | Lenis (`LenisScroll.tsx`) | Weighted wheel; disabled when `prefers-reduced-motion` |
| UI motion | Framer Motion | Hero stagger, fades, nav pill, image previews |
| Tokens | `src/lib/motion.ts` | Shared durations / easings |

### What we do not do (on this site by default)

- Pinned scroll chapters, GSAP ScrollTrigger scrub, or full-viewport WebGL — unless a **new** page explicitly needs it and still uses Studio Paper colors/type.
- Bounce, elastic, or spring overshoot on UI chrome.
- Autoplay carousels, parallax for parallax’s sake, or cursor gimmicks.
- Sound, glitch, or “award site” transitions between routes.

### Relationship to reference docs

Use [`.agents/docs/motion/`](.agents/docs/motion/) as **pattern library**, not as **style import**:

| Borrow | Don’t borrow blindly |
|--------|---------------------|
| Scroll-scrub pacing, progress indicators, snap between sections | Ciel’s gold highlights, B&W photo filters, Figma cursor theatrics |
| Staggered reveals (`power3.out` ≈ our `easeEmphasized`) | Lusion/Bruno-level WebGL unless the page is a dedicated experiment |
| Image-led inline previews (we already do this) | Infinite marquees, award-wall scroll |

---

## Motion tokens (source of truth)

Always import from [`src/lib/motion.ts`](src/lib/motion.ts). **Do not** duplicate durations in components.

### Easing curves (cubic-bezier)

| Name | Value | Use |
|------|-------|-----|
| `easeStandard` | `0.2, 0, 0, 1` | Default moves, nav pill, taps |
| `easeEmphasized` | `0.05, 0.7, 0.1, 1` | Entrances (hero lines, body fade) |
| `easeExit` | `0.3, 0, 1, 1` | Exits (rare) |

**No overshoot.** If Framer `spring` is used, keep stiffness high and damping full — prefer `tween` with curves above.

### Duration presets

| Token | Duration | Typical use |
|-------|----------|-------------|
| `motion.quick` | 0.15s | Hover bg on inline links |
| `motion.standard` | 0.25s | Image preview show/hide |
| `motion.entrance` | 0.45s | (reserved; hero uses custom 0.48–0.52) |
| `motion.exit` | 0.2s | Leaving states |
| `motion.nav` | 0.35s | Header mount; layout pill ~0.28s |

### Choreography defaults

| Pattern | Timing | Implementation |
|---------|--------|----------------|
| **Hero load** | Stagger children **0.09s**; first child after **0.06s**; items **0.52s** `easeEmphasized`, `y: 18→0` | `HeroEntrance.tsx` |
| **Rule under hero** | `scaleX: 0.4→1`, **0.38s** `easeStandard` | Same |
| **Body paragraph** | Delay **0.28s**, **0.48s** fade, `y: 14→0` | `MotionFade.tsx` |
| **Nav enter** | `y: -10→0`, `motion.nav` | `AnimatedHeader.tsx` |
| **Nav pill** | `layoutId="nav-pill"`, **0.28s** tween | Shared layout animation |
| **Tap** | `scale: 0.97`, **0.12s** | Nav links only |
| **Image preview** | Show: opacity + scale **0.88→1**, `y: 6→0`, **0.04s** delay; hide: no delay | `ImageLink.tsx` |

When adding a new section, **match these ranges** (0.12–0.52s UI, 0.25–0.35s layout) rather than inventing 0.8s+ fades unless it’s a route-level transition.

---

## Component motion contracts

### Floating nav (`AnimatedHeader.tsx`)

- Pill: rounded-full, blur, subtle border/shadow — motion should not change geometry drastically.
- Active state: **shared layout pill** (`layoutId="nav-pill"`) — keep one pill, don’t crossfade backgrounds per link.
- Inactive links: `text-foreground/65` → hover `text-foreground`.
- Active link: `font-medium` + underline `decoration-foreground/35`.

### Inline image links (`ImageLink.tsx` / `ImageLink.astro`)

- Preview appears **above** link, centered, `bottom-[calc(100%+0.35rem)]`.
- Image: `image-link-preview` — squircle when supported (`corner-shape`), else ~28% radius.
- Hover/focus: link-hover background via `color-mix`; preview scales in — **no rotation, no 3D flip**.
- Use `client:visible` for hydration discipline on long pages.

### Hero (`HeroEntrance.tsx`)

- Single column, centered; motion only on first paint (not on every route revisit unless View Transition handles it).
- `useReducedMotion`: static DOM, no transforms.

### Lenis (`LenisScroll.tsx`)

- `duration: 1.05`, exponential ease out — do not pair with CSS `scroll-behavior: smooth` on `html` (Lenis sets `scroll-behavior: auto !important` when active).
- Destroy on unmount; remove `lenis` class from `documentElement`.

---

## Accessibility

| Requirement | Implementation |
|-------------|----------------|
| **Reduced motion** | `useReducedMotion()` in every Framer component; Lenis off |
| **Focus** | Image links: `focus-visible:ring-2 ring-foreground/25`, `z-30` when focused |
| **Keyboard** | Previews show on focus, not only hover |
| **Contrast** | Foreground on background meets body text needs; don’t drop below `/65` opacity for essential text |
| **Motion timeout** | No content that requires waiting for animation to finish before reading |

Test: macOS *Reduce motion*, keyboard-only nav through header and inline links.

---

## Adding new motion (checklist)

Before shipping animation on a new page or component:

- [ ] Uses tokens from `src/lib/motion.ts` (or extends that file with a named preset)
- [ ] Honors `prefers-reduced-motion` with equivalent static layout
- [ ] Uses palette tokens only (`background`, `foreground`, `link-hover`)
- [ ] Uses Zodiak / existing type scale — no new font families
- [ ] Duration ≤ **0.55s** for UI (except route transitions ≤ **0.35s**)
- [ ] No bounce/elastic easing on chrome
- [ ] Motion clarifies reading order or interaction state
- [ ] Works with Lenis (no fighting native scroll snap unless documented)
- [ ] Documented in this file or linked motion audit if introducing a **new pattern** (e.g. first scroll-pinned section)

---

## Homepage zones (single URL `/`)

| Zone | Motion stack | Notes |
|------|--------------|-------|
| **A — Hero** | Framer `HeroEntrance` | First `100svh`; load stagger only |
| **B — Bio** | Framer `MotionInView` + `ImageLink` | Normal scroll; no pin/scrub |
| **B — Featured work** | GSAP ScrollTrigger in `FeaturedWorkScroll.tsx` | Horizontal pin + scrub; height synced to `scrollWidth` in px |
| **C — Motion essay** (optional) | `HomeShowcase.tsx` | Pinned beats + type stagger; use `client:visible` if added below fold |
| **Chrome** | `ScrollProgress` + Lenis | Full-page progress bar |

**GSAP + Lenis:** single `connectLenisScrollTrigger` on `document.documentElement`; islands await `whenLenisScrollTriggerReady()` before creating triggers; `disconnectLenisScrollTrigger` on Lenis destroy; reduced-motion static trees; kill triggers on island unmount.

---

## Anti-patterns (do not ship)

- Neon, purple gradients, dark mode toggles, or “startup” illustration style
- Generic `fade-in` on every element without stagger logic
- `whileHover={{ scale: 1.05 }}` on large text blocks
- Scroll-jacking the homepage bio
- Copying Ciel’s triptych, timeline, or highlight-wipe **verbatim** on krishg.com
- Heavy GSAP + ScrollTrigger on the main portfolio without a reduced-motion static tree
- Stock “intersection observer fade-up” on 20 elements with identical delay

---

## File map for implementers

| Concern | Location |
|---------|----------|
| Colors, view transitions, image shape | `src/styles/global.css` |
| Easing / duration presets | `src/lib/motion.ts` |
| Smooth scroll | `src/components/motion/LenisScroll.tsx` |
| Nav motion | `src/components/motion/AnimatedHeader.tsx` |
| Hero | `src/components/motion/HeroEntrance.tsx` |
| Body reveal | `src/components/motion/MotionInView.tsx` |
| Scroll progress | `src/components/motion/ScrollProgress.tsx` |
| Featured horizontal scroll | `src/components/motion/FeaturedWorkScroll.tsx` |
| Motion essay (optional) | `src/components/motion/HomeShowcase.tsx` |
| Lenis ↔ ScrollTrigger bridge | `src/lib/lenis-scroll-trigger.ts` |
| Inline links | `src/components/motion/ImageLink.tsx` + `ImageLink.astro` |
| Fonts | `astro.config.ts` + `Head.astro` |
| Layout shell | `src/layouts/Root.astro` |

---

## Summary for future self

**Studio Paper** = warm cream canvas, Zodiak type, warm gray copy, frosted pill nav, inline squircle previews. Motion is **short, eased, and purposeful** — Framer for UI, Lenis for scroll weight. Study [withciel](.agents/docs/motion/withciel.md) and [patterns-catalog](.agents/docs/motion/patterns-catalog.md) when leveling up storytelling, but **never trade this site’s quiet tone for award-site noise.**
