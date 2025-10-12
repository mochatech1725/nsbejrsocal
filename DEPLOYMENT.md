# Deployment Guide

This guide provides step-by-step instructions for deploying your NSBE Jr. Chapter website to various free hosting platforms.

## Prerequisites

Before deploying, make sure:
1. Your code is committed to a Git repository (GitHub, GitLab, or Bitbucket)
2. You have tested the site locally with `npm run build`
3. You have created a production build successfully

## Option 1: Netlify (Recommended for Beginners)

Netlify is the easiest option with excellent free tier features.

### Steps:

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Sign up for Netlify:**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up with your GitHub account

3. **Deploy your site:**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize Netlify
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

4. **Configure custom domain (optional):**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS configuration instructions

### Continuous Deployment:
Every time you push to your main branch, Netlify will automatically rebuild and redeploy your site.

**Free tier includes:**
- Unlimited personal projects
- HTTPS
- Continuous deployment
- 100GB bandwidth/month
- Custom domain support

---

## Option 2: Vercel

Vercel offers excellent performance and easy deployment.

### Steps:

1. **Push code to GitHub** (if not already done)

2. **Sign up for Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Import project:**
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect the framework settings
   - Click "Deploy"

4. **Custom domain:**
   - Go to Project Settings → Domains
   - Add your custom domain

**Free tier includes:**
- Unlimited deployments
- HTTPS
- Custom domains
- 100GB bandwidth/month
- Analytics

---

## Option 3: GitHub Pages

GitHub Pages is completely free but has some limitations.

### Steps:

1. **Install gh-pages package:**
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json:**
   Add this script to your scripts section:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```

3. **Update vite.config.js:**
   Add base URL configuration:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your repo name
     // ... rest of config
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: gh-pages branch
   - Save

Your site will be available at: `https://yourusername.github.io/your-repo-name/`

**Free tier includes:**
- Unlimited public repositories
- HTTPS
- Custom domain support
- 1GB storage, 100GB bandwidth/month

---

## Option 4: Cloudflare Pages

Cloudflare Pages offers great performance with their global CDN.

### Steps:

1. **Push code to GitHub** (if not already done)

2. **Sign up for Cloudflare:**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Sign up/login

3. **Create a Pages project:**
   - Click "Create a project"
   - Connect to your GitHub repository
   - Configure build:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
   - Click "Save and Deploy"

4. **Custom domain:**
   - Project Settings → Custom domains
   - Add your domain

**Free tier includes:**
- Unlimited sites
- Unlimited bandwidth
- HTTPS
- Custom domains
- 500 builds/month

---

## Option 5: Firebase Hosting

Google Firebase offers reliable hosting with good free tier.

### Steps:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase:**
   ```bash
   firebase init hosting
   ```
   - Select existing project or create new one
   - Public directory: `dist`
   - Configure as single-page app: Yes
   - Set up automatic builds: No

4. **Build your site:**
   ```bash
   npm run build
   ```

5. **Deploy:**
   ```bash
   firebase deploy
   ```

**Free tier includes:**
- 10GB storage
- 360MB/day bandwidth
- Custom domain
- HTTPS
- CDN

---

## Choosing the Right Platform

| Platform | Best For | Pros | Cons |
|----------|----------|------|------|
| **Netlify** | Beginners | Easiest setup, great docs | Bandwidth limits on free tier |
| **Vercel** | Performance | Fast, auto-deploys, analytics | Slightly more complex |
| **GitHub Pages** | Simple projects | 100% free, simple | No server-side features |
| **Cloudflare** | Global audience | Best CDN, unlimited bandwidth | More complex setup |
| **Firebase** | Google ecosystem | Reliable, good integration | More configuration needed |

## Recommended: Netlify

For most NSBE Jr. chapters, we recommend **Netlify** because:
1. Simplest setup process
2. Excellent documentation
3. Automatic HTTPS
4. Easy custom domain setup
5. Great free tier
6. Built-in forms (useful for contact page)

---

## Post-Deployment Checklist

After deploying, verify:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images display properly
- [ ] Mobile responsiveness
- [ ] Contact form works
- [ ] Custom domain (if configured)
- [ ] HTTPS is enabled
- [ ] Gallery images load
- [ ] Calendar displays events

---

## Updating Your Site

### For Netlify/Vercel/Cloudflare:
Simply push changes to your main branch:
```bash
git add .
git commit -m "Update content"
git push origin main
```

The platform will automatically rebuild and redeploy.

### For GitHub Pages:
```bash
npm run deploy
```

### For Firebase:
```bash
npm run build
firebase deploy
```

---

## Troubleshooting

### Build fails
- Check Node.js version (use v16+)
- Delete `node_modules` and `package-lock.json`, then run `npm install`
- Check build logs for specific errors

### Pages don't load (404 errors)
- Verify build output directory is set to `dist`
- Check router configuration (ensure using `createWebHistory`)
- For GitHub Pages, check base URL in vite.config.js

### Images not loading
- Ensure images are in `public/` directory
- Check image paths (should be absolute: `/images/photo.jpg`)
- Verify image files were committed to git

### Forms not working
- For Netlify: Use Netlify Forms feature
- For others: Need to integrate with form service (Formspree, etc.)

---

## Need Help?

- Check your hosting platform's documentation
- Review build logs for errors
- Test locally first with `npm run build && npm run preview`
- Contact your chapter's technical advisor

---

Good luck with your deployment! 🚀

