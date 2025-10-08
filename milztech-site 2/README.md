# Milztech — Creativity & Technology (Quiet Intelligence)

Minimal Next.js (App Router) site with Tailwind + Framer Motion.
JA/EN toggle, About / Service / Contact, and three service detail pages.

## Local Dev
```bash
npm i
npm run dev
```

## Build for Vercel/Node
```bash
npm run build
npm start
```

## Deploy to Cloudflare Pages (static output)
This project is client-rendered and works well on Pages using `@cloudflare/next-on-pages`.

1. Push to GitHub
2. In Cloudflare Pages → "Connect to Git" → select the repo
3. Build settings:
   - **Build command**: `npx @cloudflare/next-on-pages@latest`
   - **Output directory**: `.vercel/output/static`

For local preview on CF adapter:
```bash
npm run cf:build
npm run cf:preview
```

If you later add SSR / Server Actions, consider Workers deployment.
