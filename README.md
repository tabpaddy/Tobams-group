# Frontend Intern Assessment

A production-ready Training and Development landing page for Tobams Group. The application presents the organisation’s learning services, professional development programmes, testimonials, consultation calls to action, and contact information through a responsive and accessible interface.

## Live Demo

[View the deployed application](https://tobams-group-brown.vercel.app/)

## Repository

[View the source code on GitHub](https://github.com/tabpaddy/Tobams-group)

## Design

[View the Figma design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Project Overview

The page introduces Tobams Group’s training and development offering through the following sections:

- Responsive desktop and mobile navigation
- Training and Development hero section
- Learning Management System overview
- Corporate, individual, and capacity-development programmes
- Management Development Programme
- Transformation Hub with Jite Newton
- Training the Consultant programme
- Consultation calls to action
- Customer testimonials
- Company navigation, registered offices, and contact details

## Key Features

### Responsive interface

The layout adapts across mobile, tablet, laptop, and large desktop screens. Content ordering, spacing, image dimensions, typography, navigation, programme rows, and benefit grids adjust at defined Tailwind CSS breakpoints.

The interface has been tested at:

- 375px
- 425px
- 768px
- 1280px
- 1440px

### Interactive mobile navigation

The mobile header includes an accessible slide-out navigation drawer with:

- Open and close controls
- Backdrop dismissal
- Escape-key dismissal
- Scroll locking while the drawer is open
- Automatic closing after a navigation selection
- Accessible labels and expanded-state information

### Optimised local imagery

Photographs, branding, social icons, and contact icons are stored locally in the `public` directory. Raster images are rendered with `next/image` to provide responsive image sizing, image optimisation, reserved layout space, and reduced layout shift.

### Accessible structure

The application uses semantic page regions, heading hierarchy, keyboard-accessible links and buttons, alternative text for meaningful images, decorative-image handling, visible focus behaviour, and descriptive labels for icon-only controls.

### Component-based architecture

Each major part of the page is maintained as an independent component:

```text
components/
  CallToAction.tsx
  CeoLearning.tsx
  Footer.tsx
  Header.tsx
  Hero.tsx
  LearningManagement.tsx
  ManagementDevelopment.tsx
  Testimonials.tsx
  TrainingConsultant.tsx
  TrainingPrograms.tsx
  Ui.tsx
```

`app/page.tsx` composes these sections while the individual components retain responsibility for their content and responsive presentation.

## Technology Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- `next/image` for image optimisation
- `next/font` with Lato for locally optimised typography
- [Vercel](https://vercel.com/) for production deployment

## Icon Choice

The project uses the available local icon assets for the footer social links, contact information, and Tobams Group branding. React Icons is used for directional chevrons, arrow-up-right actions, menu controls, and bolt symbols.

The initially exported directional and action icons did not retain a sufficiently clean, consistent, and robust appearance at the different sizes required by the responsive interface. React Icons provided sharper rendering, consistent stroke proportions, reliable alignment with text, and better control over size and colour. It was therefore used only where the exported icon could not achieve the required visual quality; suitable local assets continue to be used everywhere else.

## Project Structure

```text
app/
  favicon.ico
  globals.css
  layout.tsx
  page.tsx

components/
  CallToAction.tsx
  CeoLearning.tsx
  Footer.tsx
  Header.tsx
  Hero.tsx
  LearningManagement.tsx
  ManagementDevelopment.tsx
  Testimonials.tsx
  TrainingConsultant.tsx
  TrainingPrograms.tsx
  Ui.tsx

public/
  icons/
  images/
```

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js 20 or later
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/tabpaddy/Tobams-group.git
```

Move into the project directory:

```bash
cd Tobams-group
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Available Scripts

```bash
npm run dev
```

Starts the development server with hot reloading.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run build
```

Creates an optimised production build and performs framework and TypeScript validation.

```bash
npm start
```

Starts the compiled production application. Run `npm run build` first.

## Production Build

To test the production version locally:

```bash
npm run build
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Implementation Decisions

- Server Components are used by default; the header is a Client Component because its mobile drawer requires state and browser event handling.
- Tailwind CSS utilities control layout, typography, colour, spacing, borders, radii, and responsive behaviour.
- Repeated buttons and programme bullet lists are implemented as shared UI components.
- Images preserve their intended crops through responsive containers and `object-cover`.
- Lato is loaded through `next/font` with the required regular and bold weights.
- The intermediate tablet layout prioritises readable text widths and clean benefit-card wrapping.
- The mobile drawer retains the compact rounded-square menu treatment while adding complete open and close behaviour.

## Quality Checks

Before production deployment, the project is validated with:

```bash
npm run lint
npm run build
```

Both commands complete successfully.

## Deployment

The application is deployed on Vercel. Updates pushed to the connected production branch trigger a new deployment.

Production URL: [https://tobams-group-brown.vercel.app/](https://tobams-group-brown.vercel.app/)

## Known Issues

No known issues at the time of submission.
