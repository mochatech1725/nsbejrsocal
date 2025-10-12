<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 page-title q-mb-md">Membership</h1>

        <q-card flat bordered class="q-mb-lg">
          <q-card-section>
            <h2 class="text-h5 q-mb-md">Join Our Chapter</h2>
            <p class="text-body1">
              Membership in NSBE Jr. is open to students interested in STEM fields. As a member, you'll have access to:
            </p>
            <ul class="text-body1">
              <li>Academic support and tutoring</li>
              <li>Leadership development programs</li>
              <li>Community service opportunities</li>
              <li>STEM competitions and challenges</li>
              <li>Networking with professionals in engineering fields</li>
              <li>College preparation resources</li>
            </ul>
          </q-card-section>
        </q-card>

        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 q-mb-sm">Membership Requirements</div>
                <ul class="text-body2">
                  <li>Interest in STEM fields</li>
                  <li>Commitment to academic excellence</li>
                  <li>Willingness to participate in chapter activities</li>
                  <li>Good standing at your school</li>
                </ul>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 q-mb-sm">How to Join</div>
                <p class="text-body2">
                  Contact us through our Contact page or attend one of our meetings to learn more about membership
                  opportunities.
                </p>
                <q-btn color="primary" label="Contact Us" :to="{ name: 'about-contact' }" class="q-mt-md" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MembershipPage'
}
</script>
