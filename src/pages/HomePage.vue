<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">

        <!-- Loading State -->
        <div v-if="loading" class="row q-col-gutter-lg q-mb-xl">
          <div class="col-12 text-center q-py-xl">
            <q-spinner-dots color="primary" size="50px" />
            <div class="text-grey-6 q-mt-md">Loading content...</div>
          </div>
        </div>

        <!-- Two Column Layout -->
        <div v-else class="row q-col-gutter-lg">
          <!-- Left Column - News -->
          <div class="col-12 col-md-6">
            <NewsComponent :news-items="newsItems" max-height="500px" />
          </div>

          <!-- Right Column - Events List -->
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section class="bg-primary text-white">
                <div class="text-h5">Upcoming Events</div>
              </q-card-section>
              <q-separator />
              <div class="events-scroll-container">
                <q-list separator>
                  <q-item v-for="event in upcomingEvents" :key="event.id">
                    <q-item-section avatar>
                      <q-icon :name="event.icon" :color="event.color" size="md" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-h6">{{ event.title }}</q-item-label>
                      <q-item-label caption>{{ event.dateFormatted }} | {{ event.time }}</q-item-label>
                      <q-item-label caption>{{ event.location }}</q-item-label>
                      <q-item-label class="q-mt-sm">{{ event.description }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import NewsComponent from '../components/NewsComponent.vue'
import { mockCmsService } from '../services'

export default {
  name: 'HomePage',
  components: {
    NewsComponent
  },
  setup() {
    const newsItems = ref([])
    const upcomingEvents = ref([])
    const loading = ref(true)

    onMounted(async () => {
      try {
        // Fetch news items (limit to 5 most recent)
        newsItems.value = await mockCmsService.getRecentNews(5)

        // Fetch upcoming events (limit to 6 for preview)
        upcomingEvents.value = await mockCmsService.getUpcomingEvents(6)
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
.events-scroll-container {
  max-height: 480px;
  /* Adjust this to control how many events show before scrolling (currently ~4 events) */
  overflow-y: auto;
}

/* Custom scrollbar styling for events */
.events-scroll-container::-webkit-scrollbar {
  width: 8px;
}

.events-scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.events-scroll-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.events-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
