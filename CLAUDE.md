# PressurePro / DFW Pristine Power Washing

## Mission

Upgrade this repository into a polished, high-converting, production-ready website for DFW Pristine Power Washing. Improve the visual design, conversion path, performance, accessibility, maintainability, and consistency without damaging the existing SEO footprint or inventing unsupported business claims.

Work autonomously through inspection, planning, implementation, browser review, testing, and refinement. Do not stop after producing a plan. Make the changes, verify them, and report the result. When a decision is reversible and low-risk, use professional judgment. Stop and ask only when credentials, destructive history rewriting, unverifiable business claims, or a genuinely consequential product decision is involved.

Use the installed `frontend-design` and `ui-ux-pro-max` skills when available. Apply them as design guidance, not as permission to replace the business identity with a fashionable generic template.

## Non-negotiable safety rules

1. Never work directly on `main`. Create and use a branch named `design-system-upgrade` unless already on an appropriate feature branch.
2. Never print, open, copy, summarize, or expose secret values from `.env*` files.
3. `.env.local` is currently tracked in this public repository. Treat this as a security issue:
   - Add `.env`, `.env.*`, and `!.env.example` to `.gitignore`.
   - Replace the tracked file with a sanitized `.env.example` containing names and safe placeholder values only.
   - Do not rewrite Git history or rotate credentials automatically. Explain that any real exposed credential must be rotated and that history cleanup requires explicit approval.
4. Do not delete routes, page content, analytics, schemas, tracking, images, or integrations merely because they look unused. Trace usage first.
5. Never invent ratings, review counts, years in business, guarantees, certifications, licenses, insurance status, service availability, customer names, addresses, prices, or performance claims.
6. Preserve the currently verified phone number, email address, business name, canonical domain, primary location, service areas, and certification language unless repository sources conflict. If sources conflict, flag the conflict instead of guessing.
7. Do not push, merge, deploy, rewrite history, or modify external services unless explicitly requested.

## Business and conversion objective

The site should make a DFW homeowner quickly understand:

- what the company cleans;
- where it operates;
- why it is trustworthy;
- what real results look like;
- how to call or request a quote immediately.

The primary conversion is a qualified quote request. The secondary conversion is a phone call. Every major page should provide a clear path to one of those actions without feeling aggressive or repetitive.

## Desired visual direction

Create a distinctive, premium exterior-cleaning brand—not a generic blue home-service template and not a glossy SaaS landing page.

Use:

- authentic project photography and before/after proof as the main visual language;
- deep water-inspired blue, warm off-white, charcoal, and one high-contrast CTA color;
- strong editorial hierarchy with confident headlines and restrained supporting copy;
- purposeful asymmetric composition where it improves the page;
- generous whitespace, clear section rhythm, and consistent alignment;
- subtle surface texture or water/cleaning motifs when they support the brand;
- restrained motion focused on page entry, before/after interaction, navigation, and CTA feedback;
- obvious keyboard focus and reduced-motion support.

Avoid:

- purple/pink AI gradients;
- excessive glassmorphism, floating pills, bento grids, and identical rounded cards;
- generic centered hero layouts with four interchangeable statistic cards;
- stock imagery when genuine project images are available;
- decorative animations that delay content or compete with conversion;
- emojis or font-icon `<i>` elements as interface icons;
- giant headings that wrap awkwardly on mobile;
- low-contrast text over video or photography;
- testimonial, rating, certification, or urgency claims not supported by repository evidence.

## Technical context

The current application uses React 18, TypeScript, Vite, Tailwind CSS, shadcn/Radix primitives, Wouter, React Helmet Async, Framer Motion, Lucide React, and a Vercel-oriented deployment configuration.

The repository describes itself as a static frontend but still contains Express/server dependencies and server build behavior. Determine what production actually requires before removing anything. Prefer the smallest coherent architecture. If the deployed site is truly static, prepare a safe cleanup that removes obsolete runtime code and dependencies only after proving they are unused.

## Required execution sequence

### 1. Establish a baseline

- Inspect repository status and current branch.
- Read `package.json`, build configuration, routing, SEO utilities, layout components, homepage sections, service templates, city templates, and deployment configuration.
- Inventory all public routes and note template-driven route families.
- Run the existing TypeScript check and production build before edits.
- Start the site and capture baseline screenshots at widths 375, 768, 1024, and 1440.
- Record current console errors, broken requests, overflow, layout shifts, inaccessible controls, and obvious performance problems.
- Do not treat old Markdown reports as proof that the current application works; verify the current code.

### 2. Secure configuration

- Correct `.gitignore` for environment files.
- Create a sanitized `.env.example` if environment variables are still required.
- Search for secret-shaped values and hard-coded credentials without displaying their values in logs or the final report.
- Report any suspected exposure by variable name and file location only.

### 3. Reconcile architecture

- Determine whether `server/`, `api/`, Express, Resend, database-related packages, and server build commands are used by production.
- Remove only items proven obsolete.
- Keep contact and quote functionality working. If a form is only visual or client-validated with no delivery mechanism, state that plainly and either connect the existing safe mechanism or keep the UI honest about what happens.
- Keep development, build, preview, and deployment commands internally consistent.
- Do not perform a large framework migration. Improve the current React/Vite application.

### 4. Create the design system before redesigning pages

Create a documented, reusable design system using semantic tokens rather than scattered arbitrary values.

Define at minimum:

- brand, surface, text, border, success, warning, and CTA colors;
- display and body typography with deliberate font choices and sensible fallbacks;
- fluid type scale using `clamp()` where useful;
- spacing scale, content widths, grid behavior, radii, shadows, and borders;
- button variants and states;
- section-shell and content-container patterns;
- card patterns with more than one composition when the content requires it;
- focus, hover, active, disabled, loading, error, and success states;
- animation durations/easing and `prefers-reduced-motion` behavior;
- responsive rules for 375, 768, 1024, and 1440 widths.

Prefer CSS variables consumed by Tailwind. Avoid redefining Tailwind utility names such as `.bg-primary` manually when the theme already supplies them.

Use Lucide React consistently and remove Font Awesome `<i>` usage when touching a component.

### 5. Redesign the homepage around conversion

Build a cohesive homepage with this priority:

1. Header with prominent Call and Get a Quote actions.
2. Hero that communicates service, geography, benefit, and primary CTA immediately.
3. Compact trust strip using only verified claims.
4. Core residential services with scannable distinctions.
5. Strong before/after proof using authentic assets.
6. Simple process explaining what happens after requesting a quote.
7. Verified testimonials or social proof.
8. Owner/company story and certification information.
9. Service-area coverage presented for people first, not as a wall of SEO links.
10. Final quote CTA and useful footer.

Specific homepage requirements:

- Replace the autoplaying YouTube hero iframe with a performant image or locally hosted optimized media strategy unless testing demonstrates the video is worth its cost.
- Do not autoplay motion for users requesting reduced motion.
- Keep the primary CTA visible without scrolling at common mobile sizes.
- Make phone links real `<a href="tel:...">` links rather than JavaScript window operations.
- Preserve analytics events for phone and quote actions.
- Avoid duplicating the same CTA treatment in every section.
- Use semantic headings in a logical order with one meaningful `h1`.

### 6. Apply the system to reusable templates

After the homepage is coherent, update shared layout, service-page templates, service-area templates, and the about page. Do not hand-design dozens of city pages individually.

- Preserve each existing public URL.
- Preserve unique, useful local content.
- Improve navigation and internal linking without creating link spam.
- Ensure service and location pages have relevant conversion blocks.
- Ensure mobile navigation is fully keyboard- and touch-operable.
- Add an active/current-page indication when useful.

### 7. Preserve and validate SEO

Before and after implementation, validate:

- canonical URLs and canonical host;
- titles and meta descriptions;
- Open Graph and Twitter metadata;
- LocalBusiness, Service, Breadcrumb, and FAQ structured data;
- robots directives and generated sitemap;
- heading hierarchy;
- descriptive image alt text;
- NAP consistency;
- internal links and route status;
- analytics page-view and conversion tracking.

Do not create near-duplicate city pages or keyword-stuffed copy. Do not add structured data for content users cannot see. Do not change the canonical host based on preference; use the repository's deployed configuration and existing verified constants.

### 8. Accessibility and resilient layout

Meet WCAG 2.2 AA expectations where practical:

- minimum 4.5:1 contrast for ordinary text;
- visible focus styles;
- complete keyboard navigation;
- semantic landmarks, buttons, links, labels, and headings;
- usable forms with programmatic errors and instructions;
- 44px-ish touch targets where appropriate;
- no meaning conveyed through color alone;
- reduced-motion support;
- no essential text clipping at 200% zoom;
- layouts that tolerate long labels, addresses, city names, and translated text;
- no horizontal page scrolling at supported widths.

### 9. Performance

- Keep the primary visual lightweight and prioritize its loading correctly.
- Use responsive image dimensions, modern formats, width/height attributes, lazy loading below the fold, and async decoding where appropriate.
- Avoid loading large component libraries or media for small effects.
- Code-split route families when it materially reduces the initial bundle.
- Remove unused dependencies only after verifying they are unused.
- Target a strong mobile experience and improve Core Web Vitals without sacrificing clarity.

### 10. Browser QA and iteration

Use Playwright or the available browser tooling. Do not consider the design complete after code generation.

For the homepage and representative service and city pages:

- capture full-page screenshots at 375, 768, 1024, and 1440 widths;
- inspect the screenshots visually;
- test header/navigation, dropdowns, mobile menu, phone links, quote actions, forms, gallery interactions, and route changes;
- check console errors and failed network requests;
- verify focus order and keyboard behavior;
- test reduced-motion mode;
- test at least one long city name and narrow layout;
- iterate until there are no obvious overlaps, clipped text, broken grids, unreadable overlays, dead controls, or horizontal overflow.

Use representative routes rather than assuming that a passing homepage proves all templates work.

## Definition of done

The task is complete only when:

- environment-file handling is safe and any possible prior exposure is clearly reported;
- the architecture matches the actual deployment model;
- the design system is reusable and documented in the codebase;
- the homepage has a distinctive, professional, conversion-focused design;
- service and location templates use the same coherent system;
- current URLs and essential SEO signals remain intact;
- TypeScript checking succeeds;
- the production build succeeds;
- browser QA succeeds across required breakpoints;
- critical flows work without console errors;
- accessibility and reduced-motion checks have been performed;
- the final report lists changed files, commands run, test results, remaining risks, and any decisions that require the owner.

## Final response format

Return a concise report with:

1. What changed.
2. Why the new design should convert better.
3. Security or credential actions the owner must take.
4. Architecture cleanup performed or deferred.
5. SEO, accessibility, performance, and browser checks completed.
6. Commands and results.
7. Remaining limitations or items requiring real business information.

Do not claim success for a check that was not actually run. Do not hide failures. Do not merge or deploy automatically.

---

## Current state — read this before starting (updated 2026-09-19)

This mission is **partially complete**. Substantial work already exists on the
branch `preview/site-overhaul`, not `design-system-upgrade`. **Continue on that
branch.** Branching fresh off `main` would discard the work below and re-do it.

### Already done — do not rebuild, and do not revert

- **Design system** in `client/src/index.css` + `tailwind.config.ts`: warm
  limestone/ink palette on channel-format CSS variables (`--ink: 210 24% 10%`)
  so Tailwind `/opacity` modifiers work; fluid `clamp()` type scale
  (`--step--1` … `--step-5`); `--section-y`, `--gutter`, `--measure`; soft
  shadow tokens. Fraunces display + Inter body. Brand blue deepened to
  `hsl(202 80% 38%)` to pass AA on white.
  - Two gotchas already paid for: an opacity modifier on a token whose value is
    a complete `hsl()` string compiles to nothing, and Tailwind's opacity scale
    has no `92` step. Both silently produced a transparent header.
- **Font Awesome fully removed** — all 28 usages are `lucide-react`, and the
  cdnjs stylesheet is out of `client/index.html`.
- **YouTube hero iframe removed**, replaced with one optimised WebP served
  through `srcSet` and marked priority.
- **Image pipeline**: 57 curated photos → 173 responsive WebP in
  `client/public/images/work/`, with `client/src/lib/work-images.ts` (alt text,
  intrinsic dimensions) and a `WorkImage` component. Regenerate via
  `_triage/curate.py`.
- **New pages**: delicate stone hub + five stone pages, `/gallery`, a shared
  `ServiceDetail` template, rebuilt commercial page, rebuilt
  `city-page-template` (drives all 31 city pages).
- **SEO fixes already applied**: NAP now mirrors the Google listing
  (203 Walnut Way, Euless, TX 76039 — it previously emitted an empty street and
  the wrong city); geo from the GBP plus code; `LocalBusiness` typed as
  `HomeAndConstructionBusiness` with `openingHoursSpecification`,
  `hasOfferCatalog`, `sameAs`; sitemap city list derived from page files
  (31 city pages existed, only 15 were listed); `llms.txt` added.
- **ScrollToTop** in `client/src/components/scroll-to-top.tsx` — wouter does not
  reset scroll on navigation. Needs `scrollRestoration: manual`,
  `useLayoutEffect`, and a hold across several frames; one pass lands mid-page.

### Deliberate content removals — DO NOT restore

Section 20 of this file forbids inventing testimonials and certifications. The
following were already found and removed. Restoring them would violate it:

1. **Six fabricated testimonials** under the names Sarah Mitchell, Mike Johnson,
   Robert Taylor, Lisa Davis and Jennifer Wilson. None match any reviewer on the
   live Google listing. Replaced with three real, named, linkable Google reviews.
2. **A CSS-drawn circular seal** reading "CHOCTAW NATION OF OKLAHOMA /
   CERTIFIED" under an "Official Certification" badge. The owner confirms he
   holds the certification and it is now displayed prominently **in words** in
   `components/sections/credentials.tsx`. The Choctaw Nation requires prior
   written permission for use of its names, seal, logos and emblems, so do not
   draw one. That component has a `CERT_MARK` slot for the licensed asset.
3. **"Licensed, bonded, 100% satisfaction guarantee."** Texas does not license
   pressure washing. Reduced to insured + owner-operated pending documentation.

### Architecture — already investigated, conclusions

- `api/send-quote.ts` **is production**: a Vercel function using Resend that
  emails both customer and owner. The quote form really delivers. Keep Resend.
- `server/index.ts` is **not a server** — it is a 20-line wrapper that spawns
  Vite for `npm run dev`. The old `build` script bundled it into `dist/index.js`,
  which Vercel never serves (`outputDirectory` is `dist/public`). That esbuild
  step and the `start` script have been removed; `db:push` too, since no drizzle
  dependency is installed.
- Unused dependencies remain and are **deliberately deferred**: `express`,
  `@types/express`, `@types/express-session`, `@types/passport`,
  `@types/passport-local`, `@types/connect-pg-simple`, `@types/ws`. Verified
  unimported. They are devDependencies or unbundled, so removing them saves
  nothing at runtime, and `npm install` must not be run from the Linux side of
  the bridge — it would overwrite Windows binaries in the owner's node_modules.

### Verification loop that already exists

Do not rely on `tsc` alone — it passed while `/services` was crashing at runtime
with React error #130. Build and render instead. A working harness lives at
`_triage/` and in the session container: build, serve `dist/public` with SPA
fallback, drive headless Chromium, and assert per route at 1440 and 390:
no horizontal overflow, no broken images, no console errors, exactly one `h1`,
header background not transparent.

Note: `node_modules` on the owner's machine holds Windows binaries, so
`vite build` cannot run from the Linux side of the device bridge. Build in a
separate checkout.

### Still outstanding

- Quote calculator internals (`components/quote/QuoteCalculator.tsx`) are still
  on the old styling — the largest remaining file.
- Prerendering. This is a Vite SPA, so the initial HTML ships the homepage title
  and description on **every** route. Google renders JS and mostly recovers, but
  Facebook, LinkedIn and most link-preview scrapers do not — so every shared
  page currently previews with the wrong title and OG image.
- Accessibility pass: contrast audit, focus order, keyboard operation of the
  mobile menu and gallery filters, 200% zoom, reduced motion.
- Baseline and post-change screenshots at 768 and 1024 (375 and 1440 are covered).
- `OWNER_EMAIL` in `api/send-quote.ts` falls back to
  `info@dfwpristinepowerwashing.com`, which conflicts with the business email
  used everywhere else. Flagged, not guessed.
