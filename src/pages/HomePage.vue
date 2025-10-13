<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-11">

        <!-- Page Header -->
        <div class="text-center q-mb-lg">
          <h1 class="text-h3 page-title q-mb-xs">Region VI Southern California NSBE Jr.</h1>
          <h2 class="text-h5 page-subtitle text-grey-7">Cultivating the Next Generation</h2>
          <q-separator class="q-my-md" style="max-width: 150px; margin: 0 auto;" />
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
          <!-- Left Column - NSBE Info & PCI -->
          <div class="col-12 col-md-6">
            <!-- NSBE Background Section -->
            <div class="nsbe-background q-pa-lg q-mb-md">
              <h2 class="text-h5 section-title q-mb-md text-center">National Society of Black Engineers</h2>
              <p class="text-body1 nsbe-text q-mb-md">
                The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations with
                the aim of increasing the number of culturally responsible Black Engineers who excel academically,
                succeed professionally and positively impact the community.
              </p>
              <p class="text-body1 nsbe-text">
                Founded in 1975, NSBE now has more than 500 chapters and nearly 16,000 active members in the United
                States and abroad. NSBE offers its members leadership training, professional development, mentoring
                opportunities, career placement services and more.
              </p>
            </div>

            <!-- PCI Card -->
            <q-card flat bordered class="info-card">
              <q-card-section class="card-header text-center q-py-md">
                <div class="text-h5">PCI</div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <p class="text-body1 card-text">
                  The Pre-College Initiative (PCI) program is designed to stimulate the interest in science, technology,
                  engineering, and mathematics fields, or STEM. The goal is to encourage students in grades K–12 to
                  attend college and pursue technical degrees. Our PCI program provides activities to help students
                  discover firsthand how engineering and technology relate to the world around them and discover the
                  excitement
                  of academic excellence, leadership, technical development and teamwork.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <!-- Right Column - News & Events -->
          <div class="col-12 col-md-6">
            <!-- News Section -->
            <div class="q-mb-md">
              <NewsComponent :news-items="newsItems" max-height="400px" />
            </div>

            <!-- Events Section -->
            <div>
              <EventsComponent :events="upcomingEvents" max-height="400px" />
            </div>
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
.page-title {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 600;
}

.page-subtitle {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-style: italic;
}

.section-title {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 600;
}

.nsbe-background {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  border-radius: 8px;
}

.nsbe-text {
  line-height: 1.7;
  color: #444;
}

.info-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-text {
  line-height: 1.8;
  text-align: center;
  color: #444;
}
</style>
