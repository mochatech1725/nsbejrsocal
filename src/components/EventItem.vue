<template>
  <q-item>
    <q-item-section>
      <q-item-label v-if="event.eventName" class="event-name">
        <a v-if="event.link" :href="event.link" target="_blank" rel="noopener noreferrer" class="event-link">
          {{ event.eventName }}
        </a>
        <span v-else>{{ event.eventName }}</span>
      </q-item-label>
      <q-item-label class="event-date q-mt-xs">
        <span v-if="event.endDate">
          {{ formatDateRange(event.date, event.endDate) }}
        </span>
        <span v-else>
          {{ formatDate(event.date) }}
        </span>
        <span v-if="event.startTime && event.endTime"> | {{ event.startTime }} - {{ event.endTime }}</span>
      </q-item-label>
      <q-item-label class="event-location q-mt-xs">{{ event.location }}</q-item-label>
      <q-item-label class="event-location" v-if="event.address">{{ event.address }}</q-item-label>
      <q-item-label class="event-description q-mt-sm">{{ event.description }}</q-item-label>
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
.event-name {
  font-family: 'Raleway', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #333;
  line-height: 1.4;
}

.event-link {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 600;
}

.event-link:hover {
  color: #2E7D32;
  text-decoration: underline;
}

.event-date {
  font-family: 'Raleway', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #2E7D32;
}

.event-location {
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #555;
}

.event-description {
  font-family: 'Raleway', sans-serif;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
}
</style>
