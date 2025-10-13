<template>
  <q-item>
    <q-item-section>
      <q-item-label v-if="event.eventName" class="text-h6">{{ event.eventName }}</q-item-label>
      <q-item-label caption>
        <span v-if="event.endDate">
          {{ formatDateRange(event.date, event.endDate) }}
        </span>
        <span v-else>
          {{ formatDate(event.date) }}
        </span>
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
    // Helper function to format single date
    const formatDate = (date) => {
      if (!date) return ''
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      return date.toLocaleDateString('en-US', options)
    }

    // Helper function to format date range for multi-day events
    const formatDateRange = (startDate, endDate) => {
      if (!startDate || !endDate) return formatDate(startDate)

      const startOptions = { month: 'long', day: 'numeric' }
      const endOptions = { month: 'long', day: 'numeric', year: 'numeric' }

      const start = startDate.toLocaleDateString('en-US', startOptions)
      const end = endDate.toLocaleDateString('en-US', endOptions)

      return `${start} - ${end}`
    }

    return {
      formatDate,
      formatDateRange
    }
  }
}
</script>

<style scoped>
.text-h6 {
  font-family: 'Raleway', sans-serif;
}
</style>
