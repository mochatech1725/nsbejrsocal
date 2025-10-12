<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 page-title q-mb-md text-center">News & Events</h1>

        <p class="text-body1 q-mb-lg text-center">
          Stay up to date with all our chapter news, events, meetings, and activities.
        </p>

        <!-- Loading State -->
        <div v-if="loading" class="text-center q-py-xl">
          <q-spinner-dots color="primary" size="50px" />
          <div class="text-grey-6 q-mt-md">Loading content...</div>
        </div>

        <!-- Two Column Layout -->
        <div v-else class="row q-col-gutter-lg">
          <!-- Left Column - News -->
          <div class="col-12 col-md-6">
            <NewsComponent :news-items="newsItems" max-height="600px" />
          </div>

          <!-- Right Column - Events List -->
          <div class="col-12 col-md-6">
            <EventsComponent :events="upcomingEvents" max-height="480px" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import NewsComponent from '../components/NewsComponent.vue'
import EventsComponent from '../components/EventsComponent.vue'
import { mockCmsService } from '../services'

export default {
  name: 'EventsPage',
  components: {
    NewsComponent,
    EventsComponent
  },
  setup() {
    const newsItems = ref([])
    const upcomingEvents = ref([])
    const loading = ref(true)

    onMounted(async () => {
      try {
        // Fetch news items from CMS (get more to show all categories)
        newsItems.value = await mockCmsService.getRecentNews(10)

        // Fetch upcoming events from CMS
        upcomingEvents.value = await mockCmsService.getUpcomingEvents()
      } catch (error) {
        console.error('Failed to load data:', error)
      } finally {
        loading.value = false
      }
    })

    return {
      newsItems,
      upcomingEvents,
      loading
    }
  }
}
</script>

<style scoped>
/* No additional styles needed */
</style>
