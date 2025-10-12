<template>
  <q-card flat bordered>
    <q-card-section class="news-header text-white">
      <div class="text-h5">News and Announcements</div>
    </q-card-section>
    <q-separator />
    <div class="news-scroll-container" :style="{ maxHeight: maxHeight }">
      <q-list>
        <!-- General News Section -->
        <q-expansion-item v-if="generalNews.length > 0" default-opened expand-separator icon="info" label="General News"
          header-class="bg-grey-3 section-header">
          <q-list separator>
            <NewsItem v-for="news in generalNews" :key="news.id" :news="news" />
          </q-list>
        </q-expansion-item>

        <!-- Competition News Section -->
        <q-expansion-item v-if="competitionNews.length > 0" default-opened expand-separator icon="emoji_events"
          label="Competitions" header-class="bg-grey-3 section-header">
          <q-list separator>
            <NewsItem v-for="news in competitionNews" :key="news.id" :news="news" />
          </q-list>
        </q-expansion-item>

        <!-- Conference News Section -->
        <q-expansion-item v-if="conferencesNews.length > 0" default-opened expand-separator icon="school"
          label="Conferences" header-class="bg-grey-3 section-header">
          <q-list separator>
            <NewsItem v-for="news in conferencesNews" :key="news.id" :news="news" />
          </q-list>
        </q-expansion-item>
      </q-list>
    </div>
  </q-card>
</template>

<script>
import { computed } from 'vue'
import NewsItem from './NewsItem.vue'

export default {
  name: 'NewsComponent',
  components: {
    NewsItem
  },
  props: {
    newsItems: {
      type: Array,
      required: true,
      default: () => []
    },
    maxHeight: {
      type: String,
      default: '500px' // Adjust this to control how many items show before scrolling
    }
  },
  setup(props) {
    // Group news by category
    const generalNews = computed(() =>
      props.newsItems.filter(item => item.category === 'general')
    )

    const competitionNews = computed(() =>
      props.newsItems.filter(item => item.category === 'competition')
    )

    const conferencesNews = computed(() =>
      props.newsItems.filter(item => item.category === 'conferences')
    )

    return {
      generalNews,
      competitionNews,
      conferencesNews
    }
  }
}
</script>

<style scoped>
.news-header {
  background: linear-gradient(135deg, #1976D2 0%, #1565C0 100%);
}

.news-scroll-container {
  overflow-y: auto;
}

/* Custom scrollbar styling */
.news-scroll-container::-webkit-scrollbar {
  width: 8px;
}

.news-scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.news-scroll-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.news-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
