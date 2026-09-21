# Build or Pass

Marketing site for the **Build or Pass** Agentic AI course. Next.js 15 App Router.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this repo to GitHub (`buildorpass/build-or-pass-website`).
2. Import the repo in [Vercel](https://vercel.com/new). Framework Preset: **Next.js**.
3. Leave Build Command (`next build`) and Output as defaults.
4. Set Node.js to **20.x** if it is not already.
5. Optional env var: `NEXT_PUBLIC_SITE_URL` = `https://buildorpass.com` (or your Vercel domain). Used for sitemap, robots, and Open Graph URLs.
6. Deploy. Add the custom domain in Vercel project settings when ready.

No API keys are required for the current waitlist landing pages.
