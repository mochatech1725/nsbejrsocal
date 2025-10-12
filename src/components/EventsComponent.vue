<template>
  <q-card flat bordered>
    <q-card-section class="card-header">
      <div class="text-h5">Upcoming Events</div>
    </q-card-section>
    <q-separator />
    <div class="events-scroll-container" :style="{ maxHeight: maxHeight }">
      <q-list>
        <!-- General Events Section -->
        <q-expansion-item v-if="generalEvents.length > 0" default-opened expand-separator icon="event"
          label="General Events" header-class="bg-grey-3 section-header">
          <q-list separator>
            <EventItem v-for="event in generalEvents" :key="event.id" :event="event" />
          </q-list>
        </q-expansion-item>

        <!-- Conferences Section -->
        <q-expansion-item v-if="conferences.length > 0" default-opened expand-separator icon="school"
          label="Conferences" header-class="bg-grey-3 section-header">
          <q-list separator>
            <EventItem v-for="event in conferences" :key="event.id" :event="event" />
          </q-list>
        </q-expansion-item>

        <!-- Competitions Section -->
        <q-expansion-item v-if="competitions.length > 0" default-opened expand-separator icon="emoji_events"
          label="Competitions" header-class="bg-grey-3 section-header">
          <q-list separator>
            <EventItem v-for="event in competitions" :key="event.id" :event="event" />
          </q-list>
        </q-expansion-item>

        <!-- Monthly Meetings Section (at the end) -->
        <q-expansion-item v-if="monthlyMeetings.length > 0" default-opened expand-separator icon="groups"
          label="Monthly Meetings" header-class="bg-grey-3 section-header">
          <q-list separator>
            <EventItem v-for="event in monthlyMeetings" :key="event.id" :event="event" />
          </q-list>
        </q-expansion-item>
      </q-list>
    </div>
  </q-card>
</template>

<script>
import { computed } from 'vue'
import EventItem from './EventItem.vue'

export default {
  name: 'EventsComponent',
  components: {
    EventItem
  },
  props: {
    events: {
      type: Array,
      required: true,
      default: () => []
    },
    maxHeight: {
      type: String,
      default: '480px' // Adjust this to control how many events show before scrolling
    }
  },
  setup(props) {
    // Group events by category
    const monthlyMeetings = computed(() =>
      props.events.filter(event => event.category === 'monthly')
    )

    const generalEvents = computed(() =>
      props.events.filter(event => event.category === 'general')
    )

    const conferences = computed(() =>
      props.events.filter(event => event.category === 'conference')
    )

    const competitions = computed(() =>
      props.events.filter(event => event.category === 'competition')
    )

    return {
      monthlyMeetings,
      generalEvents,
      conferences,
      competitions
    }
  }
}
</script>
<style scoped>
.events-scroll-container {
  overflow-y: auto;
}

/* Custom scrollbar styling */
.events-scroll-container::-webkit-scrollbar {
  width: 8px;
}

.events-scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.events-scroll-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.events-scroll-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
