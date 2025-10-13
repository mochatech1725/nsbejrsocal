<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">

        <!-- Introduction Section -->
        <div class="intro-section q-mb-lg">
          <q-card bordered class="intro-card">
            <q-card-section class="q-pa-lg text-center">
              <p class="intro-text">
                Membership in NSBE Jr. is open to students interested in STEM fields. As a member, you'll have access to
                academic support and tutoring, leadership development programs, community service opportunities,
                STEM competitions and challenges,
                networking with professionals in engineering fields, and college preparation resources.
              </p>
            </q-card-section>
          </q-card>
        </div>

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
import { newsService, eventsService } from '../services'

export default {
  name: 'HomePage',
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
        // Fetch news items (limit to 10 to show items from all categories)
        newsItems.value = await newsService.getRecentNews(10)

        // Fetch upcoming events (limit to 12 to show all category types)
        upcomingEvents.value = await eventsService.getUpcomingEvents(12)
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
.intro-section {
  display: flex;
  justify-content: center;
}

.intro-card {
  max-width: 900px;
  background: #ffffff;
  border-radius: 12px;
  transition: box-shadow 0.3s ease;
}

.intro-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.intro-text {
  margin: 0;
  color: #555;
  line-height: 1.9;
  font-size: 1.05rem;
}
</style>
