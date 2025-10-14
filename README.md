# NSBE Jr. Southern California Chapter Website

A modern, responsive website for the NSBE Jr. Southern California Chapter (Region VI) built with Vue.js and Quasar Framework. This website features a clean design, easy navigation, and dynamic news and events sections.

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
- **Data Management:** Static JSON files (see Design Decisions below)
- **Deployment:** Cloudflare Pages

## Design Decisions

### Content Management Approach

**Current Implementation:** Static JSON Files

This website currently uses static JSON files (`src/data/events.json` and `src/data/news.json`) to manage news and events content. This approach was chosen for several key reasons:

1. **Cost Effectiveness**: Eliminates monthly CMS subscription costs, keeping operational expenses minimal
2. **Simplicity**: No database or backend infrastructure required
3. **Performance**: Lightning-fast load times with static content
4. **Version Control**: All content changes are tracked in Git
5. **Zero Downtime**: No external service dependencies

**Future Plans:** CMS Integration

While the static file approach works well for initial deployment, the long-term goal is to integrate a Content Management System (CMS) such as:
- Strapi (open source, self-hosted)
- Contentful (cloud-based)
- Sanity.io (cloud-based)
- Supabase (already included in dependencies for future use)

A CMS would provide:
- User-friendly interface for non-technical staff to update content
- Real-time content updates without code deployments
- Image management and optimization
- Content scheduling and workflow management
- Multi-user access with role-based permissions

**Migration Path**: The current data structure is designed to make CMS migration straightforward. The service layer (`src/services/`) abstracts data access, allowing a future switch from JSON files to API calls with minimal code changes.

**Cost Considerations**: By starting with static files, the chapter can launch the website immediately at minimal cost, then migrate to a CMS when budget allows or when content update frequency justifies the investment.

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

This website is deployed using **Cloudflare Pages**, which provides:
- Automatic builds from Git commits
- Continuous deployment (main branch → production)
- Global CDN hosting for fast worldwide access
- Free SSL certificates
- Zero-cost hosting for static sites

The `wrangler.toml` file configures the Cloudflare Pages deployment settings.


## Project Structure

```
nsbejrsocal/
├── index.html              # Main HTML file
├── package.json            # Project dependencies
├── vite.config.ts         # Vite configuration
├── wrangler.toml          # Cloudflare Pages configuration
├── src/
│   ├── main.js            # Application entry point
│   ├── App.vue            # Root component
│   ├── quasar-variables.sass  # Quasar theme variables
│   ├── router/
│   │   └── index.js       # Route definitions
│   ├── layouts/
│   │   └── MainLayout.vue # Main layout with navigation
│   ├── pages/             # Page components
│   │   ├── HomePage.vue
│   │   ├── EventsPage.vue
│   │   ├── CalendarPage.vue
│   │   ├── GalleryPage.vue
│   │   ├── CompetitionsPage.vue
│   │   ├── ConventionsPage.vue
│   │   ├── PartnershipsPage.vue
│   │   └── about/         # About section pages
│   ├── components/        # Reusable components
│   │   ├── NewsComponent.vue
│   │   ├── EventsComponent.vue
│   │   └── GalleryComponent.vue
│   ├── data/              # Static data files (JSON)
│   │   ├── news.json      # News and announcements
│   │   ├── events.json    # Upcoming events
│   │   ├── calendar.json  # Academic calendar
│   │   ├── gallery.json   # Photo gallery metadata
│   │   └── student-executives.json
│   ├── services/          # Data access layer
│   │   ├── NewsDataService.ts
│   │   ├── EventsDataService.ts
│   │   └── GalleryDataService.ts
│   └── assets/            # Images and global styles
└── public/                # Static assets (images, favicon)
```

## Updating Content

### News and Events

To add or update news and events:

1. Edit the JSON files in `src/data/`:
   - `news.json` - Add announcements, updates, competition news
   - `events.json` - Add upcoming chapter events

2. Follow the existing data structure for consistency

3. Commit and push changes - Cloudflare Pages will automatically rebuild and deploy

### Gallery

To add photos to the gallery:

1. Add images to `public/images/gallery/`
2. Update `src/data/gallery.json` with the new image metadata
3. Commit and deploy

## Contributing

This website was built for the NSBE Jr. Southern California Chapter. If you'd like to use this as a template for your chapter or contribute improvements, feel free to fork and adapt it to your needs.

## License

ISC

---

Built with ❤️ for NSBE Jr. Southern California Chapter - Region VI
*Cultivating the Next Generation*

