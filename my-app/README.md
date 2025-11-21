# my-app

A Next.js 15 project with React 19, Tailwind CSS 4, and shadcn/ui.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **ESLint** - Code linting
- **Turbopack** - Fast bundler (enabled in dev mode)

## Prerequisites

**Important:** This project requires Node.js version 18.18.0 or higher (20.0.0+ recommended). 

If you're using Node.js 17 or earlier, please upgrade:
- Install [nvm](https://github.com/nvm-sh/nvm) and run: `nvm install 20 && nvm use 20`
- Or download Node.js 20+ from [nodejs.org](https://nodejs.org/)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

The server will start with Turbopack enabled. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

- `src/app/` - App Router pages and layouts
- `src/components/` - React components
- `src/components/ui/` - shadcn/ui components (add components here)
- `src/lib/` - Utility functions (includes `cn` helper for className merging)
- `components.json` - shadcn/ui configuration

## Adding shadcn/ui Components

To add shadcn/ui components, you can manually copy them from [shadcn/ui](https://ui.shadcn.com) or use the CLI (requires Node.js 18+):

```bash
npx shadcn@latest add [component-name]
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [shadcn/ui Documentation](https://ui.shadcn.com) - component library docs
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs) - CSS framework docs

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
