<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 q-mb-md">Community Service</h1>
        
        <q-card flat bordered class="q-mb-lg">
          <q-card-section>
            <h2 class="text-h5 q-mb-md">Making a Positive Impact</h2>
            <p class="text-body1">
              Community service is a core value of NSBE. Our members actively participate in projects that benefit our local community and inspire others to pursue STEM education.
            </p>
          </q-card-section>
        </q-card>

        <div class="row q-col-gutter-md q-mb-lg">
          <div v-for="initiative in initiatives" :key="initiative.id" class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 q-mb-sm">
                  <q-icon :name="initiative.icon" :color="initiative.color" /> {{ initiative.title }}
                </div>
                <p class="text-body2">{{ initiative.description }}</p>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <q-card flat bordered>
          <q-card-section>
            <h3 class="text-h6 q-mb-md">Get Involved</h3>
            <p class="text-body2">
              Interested in volunteering? Check our Calendar for upcoming community service events or contact us to learn about current opportunities.
            </p>
            <div class="q-mt-md">
              <q-btn color="primary" label="View Calendar" :to="{ name: 'calendar' }" />
              <q-btn color="secondary" label="Contact Us" :to="{ name: 'about-contact' }" class="q-ml-sm" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CommunityServicePage',
  setup() {
    const initiatives = ref([
      {
        id: 1,
        title: 'STEM Education Outreach',
        description: 'Visit local schools to conduct hands-on STEM workshops and demonstrations for younger students.',
        icon: 'school',
        color: 'primary'
      },
      {
        id: 2,
        title: 'Community Cleanup',
        description: 'Regular neighborhood cleanup events to maintain and beautify our community spaces.',
        icon: 'nature_people',
        color: 'positive'
      },
      {
        id: 3,
        title: 'Tutoring Program',
        description: 'Free tutoring services for students in math and science subjects.',
        icon: 'menu_book',
        color: 'secondary'
      },
      {
        id: 4,
        title: 'Technology Drive',
        description: 'Collect and refurbish computers and technology for underserved communities.',
        icon: 'devices',
        color: 'accent'
      },
      {
        id: 5,
        title: 'Food Bank Support',
        description: 'Volunteer at local food banks and organize food drives.',
        icon: 'volunteer_activism',
        color: 'warning'
      },
      {
        id: 6,
        title: 'Senior Center Assistance',
        description: 'Help seniors with technology and provide companionship through regular visits.',
        icon: 'elderly',
        color: 'info'
      }
    ])

    return {
      initiatives
    }
  }
}
</script>

