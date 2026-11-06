# Elara Weddings

A website for Elara Weddings, a **fictional** wedding photography studio in York, UK. Built for **MX AI Academy, Challenge 4**. The studio, prices and testimonials are demo content.

**Live site:** https://elara-weddings.ammar-rajabi.com

## Tech

- Next.js (App Router) with TypeScript
- Tailwind CSS
- next/font (Cormorant Garamond + Jost), next/image, lucide-react icons
- Static export for Apache hosting (o2switch), with security headers in `public/.htaccess`

## Pages

- **Home**: hero, introduction, portfolio preview, style notes, demo testimonials
- **About**: the studio story, values and approach before, on and after the day
- **Portfolio**: Ceremony, Couple Portraits, Details and Reception, with a filter and a lightbox
- **Packages**: Essential Collection, Signature Collection and Full Day Story, with prices in GBP
- **Contact**: availability form with wedding date, optional venue and guest count
- **Credits**: photographers of the sample images

## Run it

```bash
npm install
npm run dev
```

Static build for classic hosting (writes to `out/`):

```bash
node scripts/build-static.mjs https://elara-weddings.ammar-rajabi.com
```

## Image credits

Sample imagery from [Unsplash](https://unsplash.com). Each photographer is credited on the Credits page and in the portfolio lightbox.
