# Architect Portfolio

A modern, bilingual portfolio website for architects built with Astro. Features a clean design, internationalization (English/Spanish), dark mode support, and content collections for easy project and service management.

![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

## ✨ Features

- 🌍 **Bilingual Support** - Full internationalization (EN/ES) with language picker
- 🌙 **Dark/Light Mode** - Theme toggle with system preference detection
- 📁 **Content Collections** - Markdown-based projects and services management
- 📱 **Responsive Design** - Mobile-first approach with modern CSS
- ⚡ **Performance** - Static site generation for blazing fast load times
- 🎨 **Modern UI** - Clean, professional design with smooth animations

## 🚀 Project Structure

```text
/
├── public/
│   └── images/projects/     # Project images
├── src/
│   ├── content/
│   │   ├── projects/        # Project markdown files (en/es)
│   │   └── services/        # Service markdown files (en/es)
│   ├── features/
│   │   ├── marketing/       # Hero, Bio, ContactForm, CallToAction
│   │   ├── portfolio/       # ProjectCard, ProjectList, ProjectDetail
│   │   └── services/        # ServiceCard, ServiceList
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── [lang]/          # Dynamic language routes
│   │   ├── 404.astro
│   │   └── index.astro
│   ├── shared/
│   │   ├── i18n/            # Translations
│   │   └── ui/              # Reusable UI components
│   └── styles/
│       └── global.css
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying       |

## 📝 Adding Content

### Projects

Add new projects by creating markdown files in `src/content/projects/[lang]/`:

```markdown
---
title: "Project Name"
description: "Brief description"
image: "/images/projects/project-name.jpg"
location: "City, Country"
year: 2024
area: "500 m²"
services: ["Architecture", "Interior Design"]
featured: true
order: 1
---

Full project description here...
```

### Services

Add services in `src/content/services/[lang]/` with similar frontmatter structure.

## 🌐 Internationalization

Translations are managed in `src/shared/i18n/translations.ts`. The site supports:
- English (`/en/`)
- Spanish (`/es/`)

## 📄 License

MIT License
