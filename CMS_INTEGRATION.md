# CMS Integration Guide

This guide explains how to integrate a Content Management System (CMS) with your NSBE Jr. website to manage announcements dynamically.

## Why Use a CMS?

A CMS allows non-technical users to:
- Add, edit, and delete announcements without coding
- Upload images and media
- Schedule content publication
- Manage multiple content types (events, news, etc.)

## Recommended CMS Options

### 1. Sanity.io (Recommended) ⭐

**Why Sanity:**
- Completely free tier
- Real-time updates
- Easy-to-use editor
- Great documentation
- No server required

**Free Tier:**
- Unlimited API requests
- 3 users
- 10GB bandwidth
- 5GB assets

**Setup Steps:**

1. **Create Sanity Account:**
   ```bash
   npm install -g @sanity/cli
   sanity init
   ```

2. **Create Schema:**
   Create a schema for announcements in Sanity Studio:
   ```javascript
   // schemas/announcement.js
   export default {
     name: 'announcement',
     title: 'Announcement',
     type: 'document',
     fields: [
       {
         name: 'title',
         title: 'Title',
         type: 'string',
         validation: Rule => Rule.required()
       },
       {
         name: 'content',
         title: 'Content',
         type: 'text',
         validation: Rule => Rule.required()
       },
       {
         name: 'date',
         title: 'Date',
         type: 'date',
         validation: Rule => Rule.required()
       },
       {
         name: 'link',
         title: 'Link (optional)',
         type: 'url'
       },
       {
         name: 'published',
         title: 'Published',
         type: 'boolean',
         initialValue: true
       }
     ],
     orderings: [
       {
         title: 'Date, New',
         name: 'dateDesc',
         by: [
           {field: 'date', direction: 'desc'}
         ]
       }
     ]
   }
   ```

3. **Install Sanity Client:**
   ```bash
   npm install @sanity/client
   ```

4. **Create Sanity Service:**
   ```javascript
   // src/services/sanity.js
   import { createClient } from '@sanity/client'

   export const sanityClient = createClient({
     projectId: 'YOUR_PROJECT_ID',
     dataset: 'production',
     useCdn: true,
     apiVersion: '2024-01-01'
   })

   export async function getAnnouncements() {
     const query = `*[_type == "announcement" && published == true] | order(date desc)[0..2] {
       _id,
       title,
       content,
       date,
       link
     }`
     
     return await sanityClient.fetch(query)
   }
   ```

5. **Update HomePage.vue:**
   ```javascript
   import { ref, onMounted } from 'vue'
   import { getAnnouncements } from '../services/sanity'

   export default {
     setup() {
       const announcements = ref([])
       const loading = ref(true)

       onMounted(async () => {
         try {
           announcements.value = await getAnnouncements()
         } catch (error) {
           console.error('Error loading announcements:', error)
           // Fallback to default announcements
           announcements.value = [
             {
               id: 1,
               title: 'Welcome',
               content: 'Check back soon for announcements',
               date: new Date().toISOString()
             }
           ]
         } finally {
           loading.value = false
         }
       })

       return { announcements, loading }
     }
   }
   ```

---

### 2. Strapi

**Why Strapi:**
- Open source
- Self-hosted or cloud
- REST and GraphQL APIs
- User-friendly admin panel

**Free Options:**
- Self-host (free but requires server)
- Strapi Cloud free trial

**Setup:**

1. **Deploy Strapi:**
   - Use Railway.app or Render.com free tier
   - Follow Strapi deployment guide

2. **Create Content Type:**
   - In Strapi admin, create "Announcement" collection
   - Add fields: title, content, date, link

3. **Enable Public Access:**
   - Settings → Roles → Public
   - Enable find and findOne for announcements

4. **Fetch in Vue:**
   ```javascript
   const response = await fetch('YOUR_STRAPI_URL/api/announcements')
   const data = await response.json()
   announcements.value = data.data
   ```

---

### 3. Directus

**Why Directus:**
- Open source
- SQL database
- REST and GraphQL
- Self-hosted or cloud

**Setup:**
Similar to Strapi, requires hosting.

---

### 4. Contentful

**Why Contentful:**
- Enterprise-grade
- Great UI
- Good documentation

**Free Tier:**
- 25,000 records
- 2 users
- 5 locales

**Setup:**
1. Create free account at contentful.com
2. Create "Announcement" content model
3. Use Contentful JavaScript SDK
4. Similar integration to Sanity

---

### 5. Headless WordPress

**Why WordPress:**
- Familiar interface
- Lots of plugins
- Huge community

**Free Hosting:**
- WordPress.com (limited)
- InfinityFree (with caveats)

**Setup:**
1. Install WordPress
2. Enable REST API
3. Create custom post type for announcements
4. Fetch via REST API

---

## Simple Alternative: JSON File + GitHub

If you want the absolute simplest solution:

1. **Create announcements.json:**
   ```json
   [
     {
       "id": 1,
       "title": "Welcome",
       "content": "First announcement",
       "date": "2025-10-11",
       "link": null
     }
   ]
   ```

2. **Store in public folder:**
   - Place in `public/data/announcements.json`

3. **Fetch in HomePage:**
   ```javascript
   const response = await fetch('/data/announcements.json')
   const announcements = await response.json()
   ```

4. **Update process:**
   - Edit JSON file
   - Commit and push
   - Site rebuilds automatically (on Netlify/Vercel)

**Pros:**
- No external services
- Completely free
- Simple

**Cons:**
- Requires code commits to update
- No user interface
- No media management

---

## Comparison Table

| CMS | Free Tier | Ease of Setup | Best For |
|-----|-----------|---------------|----------|
| **Sanity** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Most chapters |
| **Strapi** | ⭐⭐⭐ | ⭐⭐⭐ | Tech-savvy teams |
| **Contentful** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Simple needs |
| **Directus** | ⭐⭐⭐ | ⭐⭐⭐ | SQL preference |
| **WordPress** | ⭐⭐ | ⭐⭐⭐⭐ | WP experience |
| **JSON File** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Minimal updates |

---

## Our Recommendation

For most NSBE Jr. chapters, we recommend **Sanity.io** because:

1. ✅ Completely free forever (generous limits)
2. ✅ No server hosting required
3. ✅ Real-time updates
4. ✅ Great editing experience
5. ✅ Easy to set up
6. ✅ Scales well
7. ✅ Excellent documentation

---

## Step-by-Step: Sanity Integration

### Day 1: Setup Sanity (30 minutes)

1. Install Sanity CLI:
   ```bash
   npm install -g @sanity/cli
   ```

2. Initialize Sanity project:
   ```bash
   cd /path/to/separate/folder
   sanity init
   ```
   - Follow prompts
   - Choose blank schema
   - Note your Project ID

3. Create announcement schema (see schema above)

4. Start Sanity Studio:
   ```bash
   sanity start
   ```

5. Deploy Sanity Studio:
   ```bash
   sanity deploy
   ```

### Day 2: Integrate with Website (20 minutes)

1. Install Sanity client in your website:
   ```bash
   cd /path/to/nsbejr
   npm install @sanity/client
   ```

2. Create sanity service file (see code above)

3. Update HomePage.vue (see code above)

4. Test locally:
   ```bash
   npm run dev
   ```

### Day 3: Add Content

1. Go to your Sanity Studio URL
2. Add 3-5 announcements
3. See them appear on your website automatically!

---

## Troubleshooting

### CORS Errors
Add your domain to Sanity CORS settings:
- Sanity Dashboard → API → CORS Origins
- Add `http://localhost:5173` for dev
- Add your production domain

### Data Not Updating
- Check browser console for errors
- Verify API credentials
- Check Sanity project ID
- Ensure content is published

### Slow Loading
- Use CDN option in Sanity client
- Cache responses in localStorage
- Show loading skeleton

---

## Next Steps

After setting up announcements, you can expand to manage:
- Events for the calendar
- Officer/advisor information
- Gallery images
- Program descriptions
- Blog posts

The same CMS can handle all of this content!

---

## Need Help?

- Sanity docs: https://www.sanity.io/docs
- Sanity Slack: community.sanity.io
- GitHub issues: Create an issue in your repo

---

Happy content managing! 📝

