<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 page-title q-mb-md">Gallery</h1>

        <p class="text-body1 q-mb-lg">
          Explore photos and videos from our events, meetings, and activities.
        </p>

        <!-- Gallery Component -->
        <GalleryComponent :gallery-items="galleryItems" :categories="categories" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import GalleryComponent from '../components/GalleryComponent.vue'
import { galleryService } from '../services'

export default {
  name: 'GalleryPage',
  components: {
    GalleryComponent
  },
  setup() {
    const galleryItems = ref([])
    const loading = ref(true)

    const categories = ref([
      { label: 'Meetings', value: 'meetings' },
      { label: 'Events', value: 'events' },
      { label: 'Competitions', value: 'competitions' }
    ])

    onMounted(async () => {
      try {
        // Fetch gallery items from CMS
        galleryItems.value = await galleryService.getGalleryItems()
      } catch (error) {
        console.error('Failed to load gallery items:', error)
      } finally {
        loading.value = false
      }
    })

    return {
      galleryItems,
      categories,
      loading
    }
  }
}
</script>
