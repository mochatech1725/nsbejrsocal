<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">

        <!-- Introduction Section -->
        <div class="intro-section q-mb-lg">
          <div class="intro-border">
            <p class="intro-text">
              Membership in NSBE Jr. is open to students interested in STEM fields. As a member, you'll have access to
              academic support and tutoring, leadership development programs, community service opportunities, STEM
              competitions and challenges,
              networking with professionals in engineering fields, and college preparation resources.
            </p>
          </div>
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
import { mockCmsService } from '../services'

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
        newsItems.value = await mockCmsService.getRecentNews(10)

        // Fetch upcoming events (limit to 12 to show all category types)
        upcomingEvents.value = await mockCmsService.getUpcomingEvents(12)
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

.intro-border {
  max-width: 850px;
  padding: 24px 32px;
  border: 3px solid #388E3C;
  border-radius: 12px;
  background: linear-gradient(135deg, #f8fdf9 0%, #ffffff 100%);
  box-shadow: 0 4px 12px rgba(56, 142, 60, 0.15);
  position: relative;
}

.intro-border::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 12px;
  background: linear-gradient(135deg, #388E3C 0%, #2E7D32 100%);
  z-index: -1;
}

.intro-text {
  margin: 0;
  text-align: center;
  color: #424242;
  line-height: 1.8;
  font-size: 1.05rem;
}
</style>
