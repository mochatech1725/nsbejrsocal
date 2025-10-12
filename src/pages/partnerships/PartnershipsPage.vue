<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 page-title q-mb-md text-center">Partnerships & Sponsors</h1>

        <!-- Introduction -->
        <div class="text-center q-mb-xl q-pa-md">
          <p class="text-body1 text-grey-7" style="max-width: 800px; margin: 0 auto;">
            We collaborate with organizations dedicated to STEM education to provide our members
            with enriching experiences and opportunities that inspire the next generation of engineers.
          </p>
        </div>

        <!-- Featured Partner: PS Science -->
        <div class="partner-feature q-mb-lg">
          <div class="text-center q-mb-lg">
            <h2 class="text-h4 text-primary q-mb-md">Our Partners</h2>
            <q-separator class="q-my-md" style="max-width: 80px; margin: 0 auto;" />
          </div>

          <div class="partner-content">
            <!-- Logo Section -->
            <div class="partner-logo-section">
              <a href="https://psscience.org/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/images/ps-science.png" alt="PS Science Logo" class="partner-logo" />
              </a>
            </div>

            <!-- Description Section -->
            <div class="partner-description">
              <h3 class="text-h5 text-grey-8 q-mb-md">PS Science</h3>
              <p class="text-body1 text-grey-7 q-mb-md" style="line-height: 1.8;">
                PS Science brings hands-on STEM learning to elementary school children. They support classroom teachers
                and community educators with lessons, materials, and training to ensure all kids have an equal chance
                at the STEM careers of the future.
              </p>
              <p class="text-body1 text-grey-7 q-mb-lg" style="line-height: 1.8;">
                Through our partnership with PS Science, our chapter members gain access to high-quality STEM education
                resources, engaging learning experiences, and opportunities to develop critical thinking skills that
                will
                serve them throughout their academic journey.
              </p>
              <q-btn color="primary" label="Visit PS Science" icon-right="open_in_new" href="https://psscience.org/"
                target="_blank" rel="noopener noreferrer" outline />
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <q-separator class="q-my-xl" />
        <div class="text-center q-pa-lg partner-cta">
          <h3 class="text-h5 text-grey-8 q-mb-md">Interested in Partnering?</h3>
          <p class="text-body1 text-grey-7 q-mb-md" style="max-width: 600px; margin: 0 auto 24px;">
            We welcome collaborations that support our mission of empowering students in STEM.
            Contact us to learn more about partnership opportunities.
          </p>
          <q-btn color="primary" label="Contact Us" icon="email" :to="{ name: 'about-contact' }" unelevated />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PartnershipsPage'
}
</script>

<style scoped>
.partner-feature {
  background: linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%);
  border-radius: 12px;
  padding: 32px 24px;
}

.partner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}

.partner-logo-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.partner-logo {
  max-width: 280px;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.partner-logo:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.partner-description {
  width: 100%;
}

.partner-cta {
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
  border-radius: 8px;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .partner-content {
    flex-direction: row;
    align-items: flex-start;
  }

  .partner-logo-section {
    flex: 0 0 320px;
  }

  .partner-description {
    flex: 1;
  }
}

@media (min-width: 1024px) {
  .partner-logo {
    max-width: 320px;
  }
}
</style>
