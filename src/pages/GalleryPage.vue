<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 page-title q-mb-md">Gallery</h1>

        <p class="text-body1 q-mb-lg">
          Explore photos and videos from our events, programs, and activities.
        </p>

        <!-- Gallery Component -->
        <GalleryComponent :gallery-items="galleryItems" :categories="categories" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import GalleryComponent from '../components/GalleryComponent.vue'

export default {
  name: 'GalleryPage',
  components: {
    GalleryComponent
  },
  setup() {
    // Sample gallery items - In production, these would come from a CMS
    const galleryItems = ref([
      {
        id: 1,
        title: 'Annual STEM Fair 2025',
        description: 'Students showcasing their innovative projects at our annual STEM fair.',
        category: 'events',
        date: 'March 2025',
        thumbnail: 'https://via.placeholder.com/400x300/1976D2/FFFFFF?text=STEM+Fair',
        fullsize: 'https://via.placeholder.com/800x600/1976D2/FFFFFF?text=STEM+Fair'
      },
      {
        id: 2,
        title: 'Robotics Workshop',
        description: 'Members learning robotics programming and design.',
        category: 'programs',
        date: 'February 2025',
        thumbnail: 'https://via.placeholder.com/400x300/26A69A/FFFFFF?text=Robotics',
        fullsize: 'https://via.placeholder.com/800x600/26A69A/FFFFFF?text=Robotics'
      },
      {
        id: 3,
        title: 'Regional Competition',
        description: 'Our team competing at the regional engineering challenge.',
        category: 'competitions',
        date: 'January 2025',
        thumbnail: 'https://via.placeholder.com/400x300/9C27B0/FFFFFF?text=Competition',
        fullsize: 'https://via.placeholder.com/800x600/9C27B0/FFFFFF?text=Competition'
      },
      {
        id: 4,
        title: 'Community Cleanup Day',
        description: 'Members volunteering for neighborhood cleanup.',
        category: 'service',
        date: 'April 2025',
        thumbnail: 'https://via.placeholder.com/400x300/21BA45/FFFFFF?text=Service',
        fullsize: 'https://via.placeholder.com/800x600/21BA45/FFFFFF?text=Service'
      }
    ])

    const categories = ref([
      { label: 'All', value: 'all' },
      { label: 'Events', value: 'events' },
      { label: 'Programs', value: 'programs' },
      { label: 'Competitions', value: 'competitions' }
    ])

    return {
      galleryItems,
      categories
    }
  }
}
</script>
