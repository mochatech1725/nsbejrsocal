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

        <!-- Two Column Layout for News and Events -->
        <div v-else class="row q-col-gutter-lg q-mb-xl">
          <!-- News and Announcements Section -->
          <div class="col-12 col-md-8">
            <NewsComponent :news-items="newsItems" />
          </div>

          <!-- Upcoming Events Section -->
          <div class="col-12 col-md-4">
            <q-card flat bordered>
              <q-card-section class="bg-secondary text-white">
                <div class="text-h5">Upcoming Events</div>
              </q-card-section>
              <q-separator />
              <q-list>
                <q-item v-for="event in upcomingEvents" :key="event.id" class="q-py-md">
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      {{ event.title }}
                    </q-item-label>
                    <q-item-label caption class="q-mt-xs">
                      <q-icon name="event" size="xs" /> {{ event.date }}
                    </q-item-label>
                    <q-item-label caption v-if="event.location">
                      <q-icon name="place" size="xs" /> {{ event.location }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item v-if="upcomingEvents.length === 0 && !loading">
                  <q-item-section>
                    <q-item-label class="text-grey-6 text-center q-py-md">
                      No upcoming events
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              <q-separator />
              <q-card-actions align="center">
                <q-btn flat color="secondary" label="Show Calendar" icon="calendar_month" :to="{ name: 'events' }" />
              </q-card-actions>
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

        // Fetch upcoming events (limit to 4)
        const events = await mockCmsService.getUpcomingEvents(4)

        // Format events for the sidebar display
        upcomingEvents.value = events.map(event => ({
          id: event.id,
          title: event.title,
          date: event.dateFormatted,
          location: event.location
        }))
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
.mission-vision-card {
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.mission-vision-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.mission-vision-text {
  line-height: 1.8;
  text-align: center;
}
</style>
