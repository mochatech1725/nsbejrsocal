<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 q-mb-md">Events Calendar</h1>
        
        <p class="text-body1 q-mb-lg">
          Stay up to date with all our chapter events, meetings, and activities.
        </p>

        <!-- Events Calendar Component -->
        <EventsComponent :events="events" :show-upcoming-list="true" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import EventsComponent from '../components/EventsComponent.vue'

export default {
  name: 'EventsPage',
  components: {
    EventsComponent
  },
  setup() {
    // Events with dates in YYYY-MM-DD format for calendar
    // In production, these would come from a CMS
    const events = ref([
      {
        id: 1,
        title: 'STEM Fair 2025',
        date: '2025-10-10',
        dateFormatted: 'October 10, 2025',
        time: '10:00 AM - 3:00 PM',
        location: 'Main Auditorium',
        description: 'Join us for our annual STEM fair showcasing student projects and innovations.',
        icon: 'science',
        color: 'primary'
      },
      {
        id: 2,
        title: 'Chapter Meeting',
        date: '2025-10-15',
        dateFormatted: 'October 15, 2025',
        time: '4:00 PM - 5:30 PM',
        location: 'Room 204',
        description: 'Monthly chapter meeting to discuss upcoming events and initiatives.',
        icon: 'groups',
        color: 'primary'
      },
      {
        id: 3,
        title: 'College Campus Tour',
        date: '2025-10-20',
        dateFormatted: 'October 20, 2025',
        time: '9:00 AM - 4:00 PM',
        location: 'State University',
        description: 'Visit State University campus and learn about engineering programs.',
        icon: 'school',
        color: 'secondary'
      },
      {
        id: 4,
        title: 'STEM Workshop',
        date: '2025-10-22',
        dateFormatted: 'October 22, 2025',
        time: '10:00 AM - 2:00 PM',
        location: 'Science Lab',
        description: 'Hands-on workshop for students to explore robotics and coding.',
        icon: 'precision_manufacturing',
        color: 'secondary'
      },
      {
        id: 5,
        title: 'Coding Workshop',
        date: '2025-10-25',
        dateFormatted: 'October 25, 2025',
        time: '3:00 PM - 5:00 PM',
        location: 'Computer Lab',
        description: 'Learn Python programming basics and work on fun coding projects.',
        icon: 'code',
        color: 'accent'
      },
      {
        id: 6,
        title: 'Community Service',
        date: '2025-10-29',
        dateFormatted: 'October 29, 2025',
        time: '9:00 AM - 12:00 PM',
        location: 'Community Center',
        description: 'Volunteer day at the local community center.',
        icon: 'volunteer_activism',
        color: 'positive'
      },
      {
        id: 7,
        title: 'Competition Preparation',
        date: '2025-11-05',
        dateFormatted: 'November 5, 2025',
        time: '3:00 PM - 6:00 PM',
        location: 'Main Building',
        description: 'Preparation session for upcoming regional competition.',
        icon: 'emoji_events',
        color: 'accent'
      }
    ])

    return {
      events
    }
  }
}
</script>

