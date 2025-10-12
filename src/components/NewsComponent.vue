<template>
  <q-card flat bordered>
    <q-card-section class="bg-primary text-white">
      <div class="text-h5">News and Announcements</div>
    </q-card-section>
    <q-separator />
    <div class="news-scroll-container" :style="{ maxHeight: maxHeight }">
      <q-list>
        <!-- General News Section -->
        <q-expansion-item v-if="generalNews.length > 0" default-opened expand-separator icon="info" label="General News"
          header-class="bg-grey-3 text-grey-8">
          <q-list separator>
            <q-item v-for="news in generalNews" :key="news.id">
              <q-item-section side top>
                <div class="news-date-box bg-primary text-white text-center q-pa-sm rounded-borders">
                  <div class="text-h6 text-weight-bold">{{ news.day }}</div>
                  <div class="text-caption">{{ news.month }}</div>
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-weight-medium q-mb-xs">
                  {{ news.title }}
                </q-item-label>
                <q-item-label caption lines="2" class="text-body2">
                  {{ news.content }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <!-- Competition News Section -->
        <q-expansion-item v-if="competitionNews.length > 0" default-opened expand-separator icon="emoji_events"
          label="Competitions" header-class="bg-grey-3 text-grey-8">
          <q-list separator>
            <q-item v-for="news in competitionNews" :key="news.id">
              <q-item-section side top>
                <div class="news-date-box bg-primary text-white text-center q-pa-sm rounded-borders">
                  <div class="text-h6 text-weight-bold">{{ news.day }}</div>
                  <div class="text-caption">{{ news.month }}</div>
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-weight-medium q-mb-xs">
                  {{ news.title }}
                </q-item-label>
                <q-item-label caption lines="2" class="text-body2">
                  {{ news.content }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <!-- Conference News Section -->
        <q-expansion-item v-if="conferencesNews.length > 0" default-opened expand-separator icon="school"
          label="Conferences" header-class="bg-grey-3 text-grey-8">
          <q-list separator>
            <q-item v-for="news in conferencesNews" :key="news.id">
              <q-item-section side top>
                <div class="news-date-box bg-primary text-white text-center q-pa-sm rounded-borders">
                  <div class="text-h6 text-weight-bold">{{ news.day }}</div>
                  <div class="text-caption">{{ news.month }}</div>
                </div>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-h6 text-weight-medium q-mb-xs">
                  {{ news.title }}
                </q-item-label>
                <q-item-label caption lines="2" class="text-body2">
                  {{ news.content }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-list>
    </div>
  </q-card>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'NewsComponent',
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
.news-date-box {
  min-width: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
