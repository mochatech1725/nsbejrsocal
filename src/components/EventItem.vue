<template>
  <q-item>
    <q-item-section>
      <q-item-label v-if="event.title" class="text-h6">{{ event.title }}</q-item-label>
      <q-item-label caption>
        {{ formatDate(event.date) }}
        <span v-if="event.startTime && event.endTime"> | {{ event.startTime }} - {{ event.endTime }}</span>
      </q-item-label>
      <q-item-label caption>{{ event.location }}</q-item-label>
      <q-item-label caption v-if="event.address">{{ event.address }}</q-item-label>
      <q-item-label class="q-mt-sm">{{ event.description }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EventItem',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  setup() {
    // Helper function to format date
    const formatDate = (date) => {
      if (!date) return ''
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
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
