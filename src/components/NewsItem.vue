<template>
  <q-item>
    <q-item-section>
      <q-item-label class="news-title">
        <a v-if="news.link" :href="news.link" target="_blank" rel="noopener noreferrer" class="news-link">
          {{ news.title }}
        </a>
        <span v-else>{{ news.title }}</span>
      </q-item-label>
      <q-item-label class="news-content q-mt-sm">
        {{ news.content }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.news-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
}

.news-link {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 600;
}

.news-link:hover {
  color: #2E7D32;
  text-decoration: underline;
}

.news-content {
  font-family: 'Raleway', sans-serif;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
}
</style>
