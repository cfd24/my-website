# AI Context: My Website (Portfolio)

**Purpose of this File:**
To provide context about the `my-website` sub-project so that AIs and human developers can quickly understand its architecture and purpose without reading every file.

## Overview
This is a fast, single-page React portfolio application built with Vite. It serves as Crisostomo Dunn's main online presence, showcasing skills, course projects, and side endeavors.

## Tech Stack
- **Framework:** React 19 + Vite.
- **Styling:** Vanilla CSS (`src/App.css`, `src/index.css`), prioritizing modern, premium design aesthetics over frameworks like Tailwind.

## Current Page Sections
The primary layout (`src/App.jsx`) is divided into:
- **Hero Section:** Intro ("Hi — I’m Crisostomo"), subtext about being a UC Berkeley junior studying CS and Math, and call-to-action buttons (Projects, Play Games, Contact, Resume) alongside a profile photo.
- **Projects Section:** A curated list of projects fed entirely from the JSON data.
- **Footer:** Simple copyright and resume link.

## Directory Structure & Key Files
- `index.html`: The HTML entry point.
- `src/main.jsx`: Bootstraps the application.
- `src/App.jsx`: The top-level layout (Hero section, Projects section, Footer).
- `src/components/`: Reusable UI components.
  - `Featured.jsx`: Displays featured projects on the home page.
  - `Projects.jsx`: A full project listing component.
- `src/data/projects.json`: The source of truth for all projects displayed. When adding new projects or modifying existing links, update this JSON. 
  - **Schema Example:**
    ```json
    {
      "id": "drinking-games",
      "title": "Party Games (PWA)",
      "repo": "https://github.com/cfd24/DrinkingGameMobile",
      "url": "/drinks/index.html",
      "desc": "A collection of premium mobile drinking games built with React Native and Expo.",
      "shortDesc": "Premium mobile drinking games built with React Native and Expo.",
      "image": "/drinks/assets/images/old_man_v2.png",
      "tags": ["react-native", "pwa", "expo", "games"],
      "category": "personal",
      "featured": true
    }
    ```
- `public/`: Stores static assets and standalone HTML routes (like `resume.html`).

## Commands
- **Development Server:** `npm run dev`
- **Build Output:** `npm run build` (outputs to `/dist/`)

## Future Goals / Guidelines
- The design should remain visually excellent, utilizing dynamic animations and vibrant colors.
- If integrating the `DrinkingGameMobile` app, the built output from that app should eventually map to the URL route `/drinks/`.
- Ensure this `aicontext.md` file is modified whenever large structural changes or new major pages are added to the portfolio.
