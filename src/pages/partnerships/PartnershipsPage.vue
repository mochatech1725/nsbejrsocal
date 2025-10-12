<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 q-mb-md">Partnerships</h1>
        
        <q-card flat bordered class="q-mb-lg">
          <q-card-section>
            <h2 class="text-h5 q-mb-md">Building Strong Community Connections</h2>
            <p class="text-body1">
              We collaborate with schools, universities, businesses, and community organizations to provide our members with enriching experiences and opportunities.
            </p>
          </q-card-section>
        </q-card>

        <div class="row q-col-gutter-md q-mb-lg">
          <div v-for="partner in partners" :key="partner.id" class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 q-mb-sm">
                  <q-icon :name="partner.icon" :color="partner.color" /> {{ partner.type }}
                </div>
                <p class="text-body2">{{ partner.description }}</p>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <q-card flat bordered>
          <q-card-section>
            <h3 class="text-h6 q-mb-md">Become a Partner</h3>
            <p class="text-body2">
              Interested in partnering with our chapter? We welcome collaborations that support our mission of empowering students in STEM. Partnership opportunities include:
            </p>
            <ul class="text-body2">
              <li>Hosting workshops and facility tours</li>
              <li>Providing mentorship and guest speakers</li>
              <li>Sponsoring events and programs</li>
              <li>Offering internship and job shadow opportunities</li>
              <li>Donating equipment and materials</li>
            </ul>
            <div class="q-mt-md">
              <q-btn color="primary" label="Contact Us" :to="{ name: 'about-contact' }" />
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
  name: 'PartnershipsPage',
  setup() {
    const partners = ref([
      {
        id: 1,
        type: 'Educational Institutions',
        description: 'Local schools, colleges, and universities provide resources, facilities, and academic support for our programs.',
        icon: 'school',
        color: 'primary'
      },
      {
        id: 2,
        type: 'Corporate Partners',
        description: 'Technology and engineering companies offer mentorship, internships, and funding for our initiatives.',
        icon: 'business',
        color: 'secondary'
      },
      {
        id: 3,
        type: 'Community Organizations',
        description: 'Non-profits and community groups collaborate with us on service projects and outreach programs.',
        icon: 'groups',
        color: 'accent'
      },
      {
        id: 4,
        type: 'Government Agencies',
        description: 'Local and state agencies support our programs through grants and partnership opportunities.',
        icon: 'account_balance',
        color: 'positive'
      }
    ])

    return {
      partners
    }
  }
}
</script>

