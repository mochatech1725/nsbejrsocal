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
            <q-card flat bordered>
              <q-card-section class="bg-primary text-white">
                <div class="text-h5">Upcoming Events</div>
              </q-card-section>
              <q-separator />
              <div class="events-scroll-container">
                <q-list>
                  <!-- General Events Section -->
                  <q-expansion-item v-if="generalEvents.length > 0" default-opened expand-separator icon="event"
                    label="General Events" header-class="bg-grey-3 text-grey-8">
                    <q-list separator>
                      <q-item v-for="event in generalEvents" :key="event.id">
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
                  </q-expansion-item>

                  <!-- Conferences Section -->
                  <q-expansion-item v-if="conferences.length > 0" default-opened expand-separator icon="school"
                    label="Conferences" header-class="bg-grey-3 text-grey-8">
                    <q-list separator>
                      <q-item v-for="event in conferences" :key="event.id">
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
                  </q-expansion-item>

                  <!-- Competitions Section -->
                  <q-expansion-item v-if="competitions.length > 0" default-opened expand-separator icon="emoji_events"
                    label="Competitions" header-class="bg-grey-3 text-grey-8">
                    <q-list separator>
                      <q-item v-for="event in competitions" :key="event.id">
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
                  </q-expansion-item>

                  <!-- Monthly Meetings Section (at the end) -->
                  <q-expansion-item v-if="monthlyMeetings.length > 0" default-opened expand-separator icon="groups"
                    label="Monthly Meetings" header-class="bg-grey-3 text-grey-8">
                    <q-list separator>
                      <q-item v-for="event in monthlyMeetings" :key="event.id">
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
                  </q-expansion-item>
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
import { ref, computed, onMounted } from 'vue'
import NewsComponent from '../components/NewsComponent.vue'
import { mockCmsService } from '../services'

export default {
  name: 'EventsPage',
  components: {
    NewsComponent
  },
  setup() {
    const newsItems = ref([])
    const upcomingEvents = ref([])
    const loading = ref(true)

    // Group events by category
    const monthlyMeetings = computed(() =>
      upcomingEvents.value.filter(event => event.category === 'monthly')
    )

    const generalEvents = computed(() =>
      upcomingEvents.value.filter(event => event.category === 'general')
    )

    const conferences = computed(() =>
      upcomingEvents.value.filter(event => event.category === 'conference')
    )

    const competitions = computed(() =>
      upcomingEvents.value.filter(event => event.category === 'competition')
    )

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
      monthlyMeetings,
      generalEvents,
      conferences,
      competitions,
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
