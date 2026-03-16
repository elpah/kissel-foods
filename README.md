# Kissel Foods Restaurant Website

## Live Demo

https://kisselfoods.com

A modern, responsive restaurant website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, **React Router** for navigation and **EmailJS** for email notifications. Features a beautiful multi-page SPA with smooth animations using **Framer Motion**.

## Features

- **Responsive Design** — Mobile-first approach with seamless experience across all devices
- **Multi-Page Navigation** — Home, Menu, Reservations, Catering, Specials, About, and Contact pages
- **Smooth Animations** — Framer Motion for elegant page transitions and interactive elements
- **Menu Management** — Filter dishes by category
- **Contact Form** — Email inquiry form and notification using EmailJS
- **SEO-Friendly** — Semantic HTML and proper accessibility attributes

## 📁 Project Structure

```bash
public/
├── images/
│   ├── cover_images/
│   ├── menu/
│   └── logo/
├── favicon.ico

src/
├── components/
│   ├── about/
│   ├── catering/
│   ├── home/
│   ├── reservation/
│   ├── shared/
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── PageHero.tsx
├── data/
├── hooks/
│   └── use-mobile.ts        # Mobile breakpoint detection hook
├── lib/
│   └── utils.ts             # Utility functions
├── pages/
├── types/
├── App.tsx                  # Root component wrapper
├── main.tsx                 # Application entry point
└── index.css                # Global styles & Tailwind setup

```

## Tech Stack

- **Frontend Library** — React 19
- **Language** — TypeScript 5.7
- **Bundler** — Vite 6
- **Styling** — Tailwind CSS 4 with custom theme
- **Animation** — Framer Motion
- **Icons** — Lucide React

## Design System

### Color Palette

- **Primary** — Black (#1a1a1a) / Dark slate (#0d0d0d for hero)
- **Accent** — Amber (#f97316, #f59e0b)
- **Neutral** — Slate grays (50–900)
- **Success** — Green (#22c55e)

### Typography

- **Headlines** — Inter Bold / Black, tracking-tight
- **Body** — Inter Regular, 16px base
- **Accent** — Georgia, Helvetica for typography variety

## Responsive Breakpoints

- **Mobile** — < 768px
- **Tablet** — 768px – 1024px
- **Desktop** — 1024px+

## Deployment

### Build

```bash
npm run build
```

The optimized build output goes to the `dist/` directory. Deploy this folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## 📝 License

© 2026 Kissel Foods Restaurant. All rights reserved.

Designed and developed by Paruah Systems
https://www.paruah.com
