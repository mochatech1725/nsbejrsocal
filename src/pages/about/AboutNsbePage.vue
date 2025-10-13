<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <!-- Page Header -->
        <div class="text-center q-mb-xl">
          <h1 class="text-h3 page-title q-mb-sm">About NSBE</h1>
          <q-separator class="q-my-md" style="max-width: 100px; margin: 0 auto;" />
        </div>

        <!-- Main Content with Mission/Vision -->
        <div class="row q-col-gutter-lg q-mb-xl">
          <!-- Mission Card - Left -->
          <div class="col-12 col-md-6">
            <q-card flat bordered class="mission-vision-card">
              <q-card-section class="card-header text-center q-py-md">
                <div class="text-h5">Our Mission</div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <p class="text-body1 mission-vision-text">
                  To increase the number of culturally responsible Black engineers who excel academically, succeed
                  professionally, and positively impact the community.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <!-- Vision Card - Right -->
          <div class="col-12 col-md-6">
            <q-card flat bordered class="mission-vision-card">
              <q-card-section class="card-header text-center q-py-md">
                <div class="text-h5">Our Vision</div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <p class="text-body1 mission-vision-text">
                  We envision a world in which engineering is a mainstream word in homes and communities of color, and
                  all Black students can envision themselves as engineers. In this world, Blacks exceed parity in
                  entering engineering fields, earning degrees, and succeeding professionally.
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>

        <!-- PCI Card -->
        <div class="row justify-center q-mb-lg">
          <div class="col-12 col-md-10">
            <q-card flat bordered class="pci-card">
              <q-card-section class="card-header text-center q-py-md">
                <div class="text-h5">PCI</div>
              </q-card-section>
              <q-card-section class="q-pa-md">
                <p class="text-body1 pci-text">
                  The Pre-College Initiative (PCI) program is designed to stimulate the interest in science, technology,
                  engineering, and mathematics fields, or STEM. The goal is to encourage students in grades K–12 to
                  attend college and pursue technical degrees. Our PCI program provides activities to help students
                  discover
                  firsthand how engineering and technology relate to the world around them and discover the excitement
                  of academic excellence, leadership, technical development and teamwork.
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
  name: 'AboutNsbePage'
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
  color: #444;
}

.nsbe-text {
  line-height: 1.7;
  color: #444;
}

.pci-text {
  line-height: 1.8;
  color: #444;
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

.pci-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pci-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Removed - now using global .card-header class */
</style>
