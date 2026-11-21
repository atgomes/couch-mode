# Couch Mode

Turn a Windows PC into a home console: boot to a controller-friendly launcher, stream to a phone or Steam Deck, wake it from the TV.

Live site: https://atgomes.github.io/couch-mode/

This repo contains only the website: the pages, styles and images. It is built with [Astro Starlight](https://starlight.astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

```bash
npm install
npm run dev     # http://localhost:4321/couch-mode/
npm run build   # output in dist/
```

Pages live in `src/content/docs/`.
