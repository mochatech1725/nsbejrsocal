<template>
  <div>
    <!-- Calendar View -->
    <div class="row q-col-gutter-lg q-mb-xl">
      <!-- Calendar -->
      <div class="col-12 col-md-8">
        <q-card flat bordered>
          <q-card-section>
            <q-date
              v-model="selectedDate"
              :events="eventDates"
              event-color="primary"
              mask="YYYY-MM-DD"
              minimal
              class="full-width"
              :options="dateOptions"
              @update:model-value="onDateSelect"
            />
          </q-card-section>
        </q-card>
      </div>

      <!-- Event Details Sidebar -->
      <div class="col-12 col-md-4">
        <q-card flat bordered>
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">
              {{ selectedDateFormatted }}
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div v-if="selectedDateEvents.length > 0">
              <div v-for="event in selectedDateEvents" :key="event.id" class="q-mb-md">
                <div class="row items-center q-mb-xs">
                  <q-icon :name="event.icon" :color="event.color" size="sm" class="q-mr-sm" />
                  <div class="text-h6">{{ event.title }}</div>
                </div>
                <div class="text-body2 text-grey-7 q-mb-xs">
                  <q-icon name="schedule" size="xs" /> {{ event.time }}
                </div>
                <div class="text-body2 text-grey-7 q-mb-xs">
                  <q-icon name="place" size="xs" /> {{ event.location }}
                </div>
                <div class="text-body2 q-mt-sm">
                  {{ event.description }}
                </div>
                <q-separator v-if="selectedDateEvents.length > 1" class="q-my-md" />
              </div>
            </div>
            <div v-else class="text-center text-grey-6 q-py-lg">
              No events on this date
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Upcoming Events List -->
    <div v-if="showUpcomingList">
      <h2 class="text-h5 q-mb-md">Upcoming Events</h2>
      <q-card flat bordered>
        <q-list separator>
          <q-item v-for="event in upcomingEvents" :key="event.id" clickable @click="selectEventDate(event)">
            <q-item-section avatar>
              <q-icon :name="event.icon" :color="event.color" size="md" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6">{{ event.title }}</q-item-label>
              <q-item-label caption>{{ event.dateFormatted }} | {{ event.time }}</q-item-label>
              <q-item-label caption>{{ event.location }}</q-item-label>
              <q-item-label class="q-mt-sm">{{ event.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'EventsComponent',
  props: {
    events: {
      type: Array,
      required: true,
      default: () => []
    },
    showUpcomingList: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const selectedDate = ref(new Date().toISOString().split('T')[0])

    // Get array of dates that have events (for calendar markers)
    const eventDates = computed(() => {
      return props.events.map(event => event.date)
    })

    // Get events for the selected date
    const selectedDateEvents = computed(() => {
      return props.events.filter(event => event.date === selectedDate.value)
    })

    // Format selected date for display
    const selectedDateFormatted = computed(() => {
      if (!selectedDate.value) return 'Select a date'
      const date = new Date(selectedDate.value + 'T00:00:00')
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    })

    // Get upcoming events (sorted by date)
    const upcomingEvents = computed(() => {
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return props.events
        .filter(event => new Date(event.date + 'T00:00:00') >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
    })

    // Date options to highlight dates with events
    const dateOptions = (date) => {
      return eventDates.value.includes(date)
    }

    // Handle date selection
    const onDateSelect = (value) => {
      selectedDate.value = value
    }

    // Select date from event list
    const selectEventDate = (event) => {
      selectedDate.value = event.date
      // Scroll to calendar
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return {
      selectedDate,
      eventDates,
      selectedDateEvents,
      selectedDateFormatted,
      upcomingEvents,
      dateOptions,
      onDateSelect,
      selectEventDate
    }
  }
}
</script>

