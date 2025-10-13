# NSBE Jr. Chapter Website

A modern, responsive website for an NSBE Jr. Chapter built with Vue.js and Quasar Framework. This website features a clean design, easy navigation, and an announcements widget that can be integrated with a CMS.

## Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with Quasar components
- 📰 Announcements widget on homepage
- 📅 Events calendar
- 📚 Program information pages
- 🤝 Partnership and sponsorship information
- 🖼️ Photo gallery
- 🚀 Fast and lightweight
- ♿ Accessible navigation

## Navigation Structure

- **Home** - Welcome page with announcements widget
- **About Us**
  - About NSBE
  - Student Executive Board
- **News & Events** - News and upcoming events
- **Programs**
  - Competitions
  - Conventions
  - 2025-2026 Calendar
- **Partnerships** - Partnership information
- **Gallery** - Photo gallery

## Technology Stack

- **Frontend Framework:** Vue 3
- **UI Framework:** Quasar v2
- **Build Tool:** Vite
- **Routing:** Vue Router 4
- **Styling:** Sass

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
cd /path/to/nsbejr
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

To build the site for production:

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This website is deployed using Cloudflare Pages, which provides automatic builds, continuous deployment, and global CDN hosting for static websites.


## Project Structure

```
nsbejr/
├── index.html              # Main HTML file
├── package.json            # Project dependencies
├── vite.config.js         # Vite configuration
├── src/
│   ├── main.js            # Application entry point
│   ├── App.vue            # Root component
│   ├── quasar-variables.sass  # Quasar theme variables
│   ├── router/
│   │   └── index.js       # Route definitions
│   ├── layouts/
│   │   └── MainLayout.vue # Main layout with navigation
│   └── pages/             # Page components
│       ├── HomePage.vue
│       ├── CalendarPage.vue
│       ├── GalleryPage.vue
│       ├── about/         # About section pages
│       ├── programs/      # Programs section pages
│       └── partnerships/  # Partnerships section pages
└── public/                # Static assets
```

## Support

For questions or issues with this website template, please contact your chapter's web administrator.

## License

ISC

---

Built with ❤️ for NSBE Jr. Chapter

