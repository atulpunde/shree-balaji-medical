# Balaji Medical — Website

React + Vite + TypeScript static site for Balaji Medical (Susgaon). All ordering happens via WhatsApp — no cart, no checkout.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Notes

- **Themes**: `src/contexts/ThemeContext.tsx` cycles through 3 color themes (Trust Tech / Med Fresh / Gen-Z Bold), each with light + dark variants, toggled via the header buttons. Persisted in `localStorage`.
- **Store hours**: `src/utils/storeStatus.ts` has the active 24×7 logic. A ready-to-use 9 AM–2 AM alternate is commented directly below it — swap by commenting the first function and uncommenting the second.
- **Branches & WhatsApp links**: `src/data/branches.ts`.
- **Item types, trust badges, testimonials, FAQs**: `src/data/content.ts` — testimonials are placeholders, swap in real ones anytime.
