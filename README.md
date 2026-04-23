This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

This site is automatically deployed to **GitHub Pages** via GitHub Actions on every push to the `main` branch.

The live site is available at: **https://tanmaydhar24-26.github.io/**

### How it works

1. Pushing to `main` triggers the workflow defined in `.github/workflows/deploy.yml`.
2. The workflow builds the Next.js app as a static export (`next build` with `output: "export"`), producing a fully static site in the `out/` directory.
3. The static files are uploaded as a GitHub Pages artifact and deployed using the official GitHub Pages actions (`actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`).

### Build locally

To produce the same static export on your machine:

```bash
npm install
npm run build
# Static output is written to the ./out directory
```

You can preview the built site with any static file server, for example:

```bash
npx serve out
```

