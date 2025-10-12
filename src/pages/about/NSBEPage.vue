<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <!-- Page Header -->
        <div class="text-center q-mb-xl">
          <h1 class="text-h3 page-title q-mb-sm">About NSBE</h1>
          <q-separator class="q-my-md" style="max-width: 100px; margin: 0 auto;" />
        </div>

        <!-- NSBE Background Section - No Card -->
        <div class="nsbe-background q-mb-xl q-pa-md">
          <h2 class="text-h5 section-title q-mb-md text-center">National Society of Black Engineers</h2>
          <div class="row justify-center">
            <div class="col-12 col-md-9">
              <p class="text-body2 text-grey-8 q-mb-md" style="line-height: 1.7;">
                The National Society of Black Engineers (NSBE) is one of the largest student-governed organizations with
                the aim of increasing the number of culturally responsible Black Engineers who excel academically,
                succeed professionally and positively impact the community.
              </p>
              <p class="text-body2 text-grey-8" style="line-height: 1.7;">
                Founded in 1975, NSBE now has more than 500 chapters and nearly 16,000 active members in the United
                States and abroad. NSBE offers its members leadership training, professional development, mentoring
                opportunities, career placement services and more.
              </p>
            </div>
          </div>
        </div>

        <!-- Mission and Vision Cards -->
        <div class="row q-col-gutter-md q-mb-lg">
          <div class="col-12 col-md-6">
            <q-card flat bordered class="mission-vision-card">
              <q-card-section class="card-header text-center q-py-md">
                <div class="text-h6">Our Mission</div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <p class="text-body2 text-grey-8 mission-vision-text">
                  To increase the number of culturally responsible Black engineers who excel academically, succeed
                  professionally, and positively impact the community.
                </p>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered class="mission-vision-card">
              <q-card-section class="card-header text-center q-py-md">
                <div class="text-h6">Our Vision</div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <p class="text-body2 text-grey-8 mission-vision-text">
                  We envision a world in which engineering is a mainstream word in homes and communities of color, and
                  all Black students can envision themselves as engineers. In this world, Blacks exceed parity in
                  entering engineering fields, earning degrees, and succeeding professionally.
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- NSBE Regions Card -->
        <div class="row justify-center q-mb-lg">
          <div class="col-12 col-md-10">
            <q-card flat bordered class="regions-card">
              <q-card-section class="card-header text-center q-py-md">
                <div class="text-h6">NSBE Regions</div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <div class="text-center">
                  <img src="@/assets/images/nsbe-regions.png" alt="NSBE Regions Map" class="regions-image" />
                </div>
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
  name: 'NSBEPage'
}
</script>

<style scoped>
.section-title {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 600;
}

.nsbe-background {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  border-radius: 8px;
}

.mission-vision-card {
  height: 100%;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.mission-vision-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.mission-vision-text {
  line-height: 1.8;
  text-align: center;
}

.regions-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.regions-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.regions-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Removed - now using global .card-header class */
</style>
