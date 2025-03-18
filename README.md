# Coaching Landing Lighthouse

A modern, responsive landing page built with React and TypeScript, featuring a clean design and seamless user experience. The site uses shadcn-ui components and is styled with Tailwind CSS for a polished, professional look.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router DOM
- **State Management**: React Query
- **Date Handling**: date-fns
- **Charts**: Recharts
- **Analytics**: Mixpanel

## Getting Started

### Prerequisites

- Node.js (LTS version)
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/davpan/coaching-landing-lighthouse.git

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun dev
```

The development server will start at `http://localhost:5173`

### Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
├── src/               # Source code
├── public/            # Static assets
├── components.json    # shadcn-ui configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── vite.config.ts     # Vite configuration
└── tsconfig.json      # TypeScript configuration
```

## Features

- Modern React with TypeScript for type safety
- Component library built on Radix UI primitives
- Responsive design with Tailwind CSS
- Form validation with Zod
- Analytics integration with Mixpanel
- Custom favicon with minimalist 'dp' logo

## Development Workflow

1. Make changes in the `src` directory
2. Run `npm run lint` to check for code quality issues
3. Test changes locally using `npm run dev`
4. Build for production using `npm run build`
