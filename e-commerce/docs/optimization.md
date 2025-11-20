Optimization checklist and quick commands

Overview
- What I changed in this pass:
  - Lazy-loaded large sections (`Products`, `Lights`, `Testimonials`) using `React.lazy` + `Suspense` in `src/App.jsx`.
  - Added `loading="lazy"` and `decoding="async"` to product images in `src/components/common/ProductCard.jsx`.
  - Added basic SEO meta tags (title, description, Open Graph) and JSON-LD to `index.html`.

Quick commands
- Start dev server:
```
npm run dev
```

- Run Lighthouse (local):
```
npx lighthouse http://localhost:5173 --output html --output-path ./reports/lighthouse-homepage.html --chrome-flags="--headless"
```

- Build and analyze bundle (example with source-map-explorer):
```
npm run build
npx source-map-explorer dist/assets/*.js
```

Next recommended steps
- Convert large images to WebP/AVIF and add `srcset`/`picture` fallbacks in hero and product images.
- Run full Lighthouse and axe audits and address top 5 opportunities.
- Add `vite-plugin-compression` and `rollup-plugin-visualizer` to `vite.config.js` for production compression and bundle analysis.
- Add Lighthouse CI to your CI pipeline to prevent regressions.

Notes
- Replace `https://yourdomain.com` and `/src/assets/images/og-image.jpg` with your real production URLs/assets.
