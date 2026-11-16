# MrAmbrosia

MrAmbrosia is the independent software studio and product home of Amir (AmirSenpai).

**Website:** https://mrambrosia.ir

The site presents three products using information checked against their current project sources. Product source repositories are private and are intentionally not linked from the public site.

## Products

### PageNest

**Android reading app · latest repository version 3.1.0**

PageNest is a local-first reading library and Android reader. Its library supports EPUB, PDF, TXT, Markdown, FictionBook (FB2), and comic archives (CBZ), with cover extraction, search, sorting, custom shelves, and reading-status filters.

The reader includes paged and vertical layouts, table of contents, bookmarks, highlights, marginal notes, in-book search, shareable quote cards, custom TTF/OTF fonts, text-to-speech Listen Mode, and on-device translation.

Reading tools include daily goals, reading-time and page statistics, per-book progress, streaks, opt-in reminders, and Android home-screen widgets. PageNest Studio is currently documented as a beta offline writing environment with multi-chapter manuscripts, autosave, word counts, RTL/LTR writing, basic Markdown formatting, Markdown export, and EPUB publishing into the library.

- Public product destination: https://myket.ir/app/ir.pagenest.mrambrosia
- Implementation documented in the project: Kotlin, Jetpack Compose, Room, WorkManager, Android Glance, and ML Kit.
- Supporter activation is handled inside the app. Activation codes are never published on this website.

### Moodify

**Bilingual browser-based creative and file toolkit**

Moodify provides Persian and English routes and a collection of browser tools:

- **Create:** Polaroid-style photo frames; profile/avatar artwork with extracted colour palettes; 8-bit avatars; wallpapers; static music-player visuals; Spotify-style cards.
- **Make and convert:** GIFs from images or short video; image compression; image-to-PDF; PDF-to-images; image format conversion.
- **Utilities:** QR-code generation; image metadata removal; text styling.
- **Content:** News, blog, about, privacy, and donation pages.

The project describes its image workflows as browser-side processing: selected files are processed locally rather than uploaded to a processing server.

- Public product destination: https://moodifyweb.ir
- Implementation documented in the project: React, Vite, React Router, i18next, PDF.js, and JSZip.

### Mr Gholak

**Persian-first personal finance app · web and Android**

Mr Gholak is designed around everyday Persian financial workflows. Its documented product scope includes income and expense tracking, budgets, debts and receivables, instalments, savings goals, assets and net worth, Jalali-calendar views, monthly reporting, receipts, SMS transaction import, backup and restore, account features, notifications, and Android widgets.

Gholakyar provides a finance-focused assistant with a rules-based on-device fallback when the remote AI service is unavailable.

**Release status:** The current repository README describes version 2.0.0 as a release candidate and explicitly says native build, real-device testing, and browser QA are still release gates. The web app is available; this site does not claim that Android 2.0.0 has shipped publicly.

- Website: https://mrgholak.ir
- Web app: https://webapp.mrgholak.ir
- Support: info@mrgholak.ir
- Implementation documented in the project: Expo, React Native, React Native Web, and Supabase.

## Studio approach

- Describe shipped features separately from beta work and release candidates.
- Keep product identities distinct rather than forcing one visual style onto every app.
- Prefer useful, understandable interfaces over decorative complexity.
- Be explicit about data handling, integrations, and payment availability.
- Do not publish private source repositories or internal activation codes.

## Support

The support pages are:

- International: https://mrambrosia.ir/support
- Iran: https://mrambrosia.ir/support-fa

The PageNest `MonetizationConfig.kt` file is the source of truth for the support destinations represented on the site:

- Iran tip-jar destination: the support page above. The local payment gateway is not connected.
- International tip-jar destination: the support page above. A dedicated international payment provider is not configured.
- GitHub community support: https://github.com/AmirSenpai
- PageNest Pro in Iran: https://myket.ir/app/ir.pagenest.mrambrosia
- International PageNest Pro checkout: not active.

The site intentionally does not expose accepted supporter activation codes. PageNest codes are redeemed inside the app.

## Design and implementation

- Single dark theme; there is no light-mode or accent-theme switch.
- English and Persian copy with automatic LTR/RTL document direction.
- Responsive product directory with separate visual treatments for the reader, creative toolkit, and finance app.
- Reduced-motion support and semantic links/buttons.
- Original visual assets and layout; no ArtCraft branding or proprietary assets are reused.

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Development

```bash
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

GitHub Pages deployment builds the Vite site, copies the entry point to `404.html` for SPA route fallback, and deploys the `dist/` directory.
