# MrAmbrosia

MrAmbrosia is the independent software studio and project home of Amir (AmirSenpai).

Live site: https://mrambrosia.ir

## The studio

A small independent studio building thoughtful digital products. The site brings together three flagship projects while giving each one its own visual identity.

| Project | Focus | Official destination |
| --- | --- | --- |
| PageNest | Android reading app for EPUB, PDF and text | https://github.com/AmirSenpai/PageNest |
| Moodify | Creative web tools for avatars, collages, music, wallpapers and more | https://www.moodifyweb.ir |
| Mr Gholak | Persian-first personal finance app for Android and web | https://mrgholak.ir |

## Design system

The visual direction takes inspiration from the clarity and product-directory structure of ArtCraft:
- Editorial typography (Archivo / Inter / DM Mono, with Vazirmatn for Persian).
- Thin 1px rules, structured grids, restrained square geometry and generous whitespace.
- A distinct product hero treatment for every project.
- Responsive layouts, reduced-motion support and accessible controls.
- Light/dark appearance plus blue, violet and mint accent choices.
- Persian and English content with automatic RTL/LTR direction.

This is an original implementation. It does not reuse ArtCraft's proprietary assets or branding.

## Support

The support pages are /support (international) and /support-fa (Iranian Persian).

The PageNest MonetizationConfig.kt is the source of truth for the links represented here:
- Iran tip jar: https://mrambrosia.ir/support-fa (the local gateway itself is not configured yet).
- International tip jar: https://mrambrosia.ir/support (no external payment provider is configured yet).
- GitHub: https://github.com/AmirSenpai.
- PageNest Pro Iran: https://myket.ir/app/ir.pagenest.mrambrosia.
- PageNest Pro international: not active yet.

The site intentionally does not expose supporter activation codes. Codes are redeemed inside PageNest, not on this website. No payment is claimed to be active where no payment provider URL exists.

## Development

Install dependencies with npm ci, then use npm run dev, npm run lint, npm run build, or npm run preview.

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, and Lucide icons.