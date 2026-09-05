# Frontend Intern Assessment

Responsive implementation of the supplied Tobams Group Training and Development Figma design.

## Live demo

Live URL: `<VERCEL_OR_NETLIFY_URL>`

## Repository

GitHub: `<PUBLIC_GITHUB_REPOSITORY_URL>`

## Figma

[Frontend Intern Assessment](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Tech stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- React Icons
- Vercel or Netlify for deployment

## Local setup

```bash
git clone <repo-url>
cd tobams-group
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Design decisions / technical assumptions

The supplied desktop (1440px), mobile (375px), and section-specific exports were used as visual references. The intermediate tablet layout is a responsive reflow because no full tablet reference export was supplied. All available local images, footer icons, contact icons, and the Tobams Group logo are used directly. React Icons supplies only the directional chevrons, arrow-up-right, and bolt symbols that could not be retrieved from the Figma assets. The page uses the Lato typeface through `next/font`.

## Responsive testing

The implementation was verified at 375px, 425px, 768px, 1280px, and 1440px.

## Known issues

The repository does not currently include a production URL or public GitHub repository URL; replace the placeholders above after deployment and publication.
