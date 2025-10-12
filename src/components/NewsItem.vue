<template>
  <q-item>
    <q-item-section>
      <q-item-label class="text-h6 text-weight-medium q-mb-xs">
        {{ news.title }}
      </q-item-label>
      <q-item-label caption class="text-grey-8 text-weight-bold q-mb-xs">
        {{ formatDate(news.date) }}
      </q-item-label>
      <q-item-label caption lines="2" class="text-body2">
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
  },
  setup() {
    // Helper function to format date
    const formatDate = (dateString) => {
      const date = new Date(dateString + 'T00:00:00')
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return date.toLocaleDateString('en-US', options)
    }

    return {
      formatDate
    }
  }
}
</script>

<style scoped>
.text-h6 {
  font-family: 'Raleway', sans-serif;
}
</style>
