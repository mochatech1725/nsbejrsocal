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

        <!-- News Section -->
        <div v-else>
          <NewsComponent :news-items="newsItems" max-height="500px" />
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
    const loading = ref(true)

    onMounted(async () => {
      try {
        // Fetch news items (limit to 5 most recent)
        newsItems.value = await mockCmsService.getRecentNews(5)
      } catch (error) {
        console.error('Failed to load data:', error)
      } finally {
        loading.value = false
      }
    })

    return {
      newsItems,
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
