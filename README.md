# Whatbytes Store

E-commerce product listing built with Next.js for the Whatbytes frontend assignment.

## Live Demo

Add your Vercel deployment URL here after deploying.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (cart state + localStorage persistence)
- FakeStore API
- lucide-react

## Features

- Product listing with responsive grid (3/2/1 columns)
- Category and price filters synced to URL (`?category=electronics&price=0-500&q=phone`)
- Search with debounced string matching
- Product detail page with quantity selector
- Cart page with quantity controls, remove item, and subtotal
- Cart persisted in `localStorage`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to a public GitHub repository
2. Import the repo in [Vercel](https://vercel.com)
3. Deploy (no environment variables required)
4. Add the live URL above

## GitHub authorship tip

To avoid commits showing as made by Cursor/agent:

1. Set your identity locally before committing:
   ```bash
   git config user.name "Your Name"
   git config user.email "your@email.com"
   ```
2. Push from your own terminal so GitHub records your account
3. If needed, rewrite author on the latest commits:
   ```bash
   git commit --amend --author="Your Name <your@email.com>" --no-edit
   ```

## Project Structure

```
src/
├── app/                 # Pages and routes
├── components/          # UI components
├── hooks/               # URL filter hook
├── lib/                 # API, types, filter helpers
└── store/               # Zustand cart store
```
