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
- 📧 Contact form
- 🚀 Fast and lightweight
- ♿ Accessible navigation

## Navigation Structure

- **Home** - Welcome page with announcements widget
- **About Us**
  - NSBE
  - Our Chapter
  - Membership
  - Contact Us
- **Calendar** - Events calendar
- **Programs**
  - Competitions
- **Partnerships & Support**
  - Partnerships
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

## Deployment Options

This is a static website that can be deployed to various free or low-cost hosting platforms:

### Option 1: Netlify (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Netlify will automatically build and deploy your site
4. Free tier includes: Custom domain, HTTPS, continuous deployment

### Option 2: Vercel
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically build and deploy
4. Free tier includes: Custom domain, HTTPS, automatic deployments

### Option 3: GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Run: `npm run deploy`
4. Enable GitHub Pages in repository settings

### Option 4: Cloudflare Pages
1. Push code to GitHub
2. Connect repository in Cloudflare Pages dashboard
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy

## Integrating a CMS for Announcements

The announcements widget on the home page currently uses sample data. To integrate with a free/low-cost CMS:

### Option 1: Sanity.io (Recommended)
1. Create a free account at [sanity.io](https://www.sanity.io)
2. Create a new project and schema for announcements
3. Install Sanity client: `npm install @sanity/client`
4. Update `src/pages/HomePage.vue` to fetch from Sanity
5. Free tier: Unlimited API requests, 3 users

### Option 2: Strapi
1. Deploy free Strapi instance on Railway or Render
2. Create announcement content type
3. Use Strapi REST API to fetch announcements
4. Update HomePage.vue with API integration

### Option 3: Directus
1. Self-host or use Directus Cloud free tier
2. Create announcements collection
3. Integrate with REST/GraphQL API

### Example CMS Integration

```javascript
// In HomePage.vue, replace the announcements ref with:
import { ref, onMounted } from 'vue'

const announcements = ref([])

onMounted(async () => {
  try {
    // Replace with your CMS API endpoint
    const response = await fetch('YOUR_CMS_API_URL/announcements')
    const data = await response.json()
    announcements.value = data
  } catch (error) {
    console.error('Error fetching announcements:', error)
    // Fallback to default announcements
  }
})
```

## Customization

### Colors and Branding

Edit `src/quasar-variables.sass` to customize colors:

```sass
$primary   : #1976D2  // Your primary brand color
$secondary : #26A69A  // Your secondary color
$accent    : #9C27B0  // Accent color
```

### Content

- Update page content in `src/pages/` directory
- Add officer/advisor information in respective pages
- Upload images for gallery
- Update contact information in `src/pages/about/ContactPage.vue`

### Logo

Add your chapter logo:
1. Place logo in `public/` directory
2. Update `src/layouts/MainLayout.vue` to include the logo image

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

## Contributing

When updating content:
1. Test locally with `npm run dev`
2. Build for production with `npm run build`
3. Commit your changes
4. Deploy to your hosting platform

## Support

For questions or issues with this website template, please contact your chapter's web administrator.

## License

ISC

---

Built with ❤️ for NSBE Jr. Chapter

