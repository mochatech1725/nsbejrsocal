<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <!-- Hero Section -->
        <div class="hero-section q-mb-md text-center q-pa-md bg-primary text-white rounded-borders">
          <h1 class="text-h4 q-mb-sm">Welcome to NSBE Jr. Chapter</h1>
          <p class="text-body1">Empowering the next generation of engineers and innovators</p>
        </div>

        <!-- Mission Statement -->
        <div class="q-mb-lg text-center">
          <p class="text-body1">
            Our mission is to increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community.
          </p>
        </div>

        <!-- Two Column Layout for News and Events -->
        <div class="row q-col-gutter-lg q-mb-xl">
          <!-- News and Announcements Section -->
          <div class="col-12 col-md-8">
            <NewsComponent :news-items="newsItems" />
          </div>

          <!-- Upcoming Events Section -->
          <div class="col-12 col-md-4">
            <q-card flat bordered>
              <q-card-section class="bg-secondary text-white">
                <div class="text-h5">Upcoming Events</div>
              </q-card-section>
              <q-separator />
              <q-list>
                <q-item v-for="event in upcomingEvents" :key="event.id" class="q-py-md">
                  <q-item-section>
                    <q-item-label class="text-weight-medium">
                      {{ event.title }}
                    </q-item-label>
                    <q-item-label caption class="q-mt-xs">
                      <q-icon name="event" size="xs" /> {{ event.date }}
                    </q-item-label>
                    <q-item-label caption v-if="event.location">
                      <q-icon name="place" size="xs" /> {{ event.location }}
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-item v-if="upcomingEvents.length === 0">
                  <q-item-section>
                    <q-item-label class="text-grey-6 text-center q-py-md">
                      No upcoming events
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
              <q-separator />
              <q-card-actions align="center">
                <q-btn 
                  flat 
                  color="secondary" 
                  label="Show Calendar" 
                  icon="calendar_month"
                  :to="{ name: 'events' }"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import NewsComponent from '../components/NewsComponent.vue'

export default {
  name: 'HomePage',
  components: {
    NewsComponent
  },
  setup() {
    // Sample news items - In production, these would come from a CMS
    const newsItems = ref([
      {
        id: 1,
        day: '10',
        month: 'OCT',
        title: 'Upcoming STEM Fair',
        content: 'Join us for our annual STEM fair showcasing student projects and innovations. All are welcome! Register now to reserve your spot.',
        link: '#'
      },
      {
        id: 2,
        day: '05',
        month: 'OCT',
        title: 'New Membership Drive',
        content: 'We are opening registration for new members. Sign up today and be part of our growing community. Early registration benefits available.',
        link: '#'
      },
      {
        id: 3,
        day: '28',
        month: 'SEP',
        title: 'Community Service Day Success',
        content: 'Thank you to all volunteers who participated in our community cleanup initiative. Together we made a difference in our neighborhood!',
        link: '#'
      },
      {
        id: 4,
        day: '15',
        month: 'SEP',
        title: 'Robotics Competition Winners',
        content: 'Congratulations to our robotics team for placing first in the regional competition! Their dedication and hard work paid off.',
        link: '#'
      }
    ])

    // Sample upcoming events - In production, these would come from a CMS
    const upcomingEvents = ref([
      {
        id: 1,
        title: 'STEM Fair 2025',
        date: 'October 10, 2025',
        location: 'Main Auditorium'
      },
      {
        id: 2,
        title: 'General Meeting',
        date: 'October 15, 2025',
        location: 'Room 204'
      },
      {
        id: 3,
        title: 'College Campus Tour',
        date: 'October 20, 2025',
        location: 'State University'
      },
      {
        id: 4,
        title: 'Coding Workshop',
        date: 'October 25, 2025',
        location: 'Computer Lab'
      }
    ])

    return {
      newsItems,
      upcomingEvents
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1976D2 0%, #1565C0 100%);
}
</style>

