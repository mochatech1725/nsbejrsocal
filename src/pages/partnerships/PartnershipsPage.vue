<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 page-title q-mb-sm text-center">Partnerships</h1>

        <!-- Introduction -->
        <div class="text-center q-mb-md">
          <p class="text-body2 text-grey-7" style="max-width: 700px; margin: 0 auto;">
            We collaborate with organizations dedicated to STEM education to provide our members
            with enriching experiences and opportunities that inspire the next generation of engineers.
          </p>
        </div>

        <!-- Featured Partner: PS Science -->
        <div class="partner-feature q-mt-lg q-mb-lg">
          <div class="partner-content">
            <!-- Logo Section -->
            <div class="partner-logo-section">
              <a href="https://psscience.org/" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/images/ps-science.png" alt="PS Science Logo" class="partner-logo" />
              </a>
            </div>

            <!-- Description Section -->
            <div class="partner-description">
              <h3 class="text-h4 partner-heading q-mb-sm">PS Science</h3>
              <p class="text-body2 text-grey-7 q-mb-sm" style="line-height: 1.7;">
                PS Science brings hands-on STEM learning to elementary school children. They support classroom teachers
                and community educators with lessons, materials, and training to ensure all kids have an equal chance
                at the STEM careers of the future.
              </p>
              <p class="text-body2 text-grey-7 q-mb-md" style="line-height: 1.7;">
                Through our partnership, our chapter members gain access to high-quality STEM education
                resources, engaging learning experiences, and opportunities to develop critical thinking skills.
              </p>
              <q-btn color="primary" label="Visit PS Science" icon-right="open_in_new" href="https://psscience.org/"
                target="_blank" rel="noopener noreferrer" unelevated rounded class="q-px-lg" />
            </div>
          </div>
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
.partner-heading {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 700;
}

.partner-feature {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 16px;
  padding: 24px;
  border: 2px solid #e0e0e0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.partner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 800px;
  margin: 0 auto;
}

.partner-logo-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e8e8e8;
}

.partner-logo {
  max-width: 120px;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.partner-logo:hover {
  transform: scale(1.08);
  filter: brightness(1.1);
}

.partner-description {
  width: 100%;
  text-align: center;
}

.partner-cta {
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
  border-radius: 8px;
}

/* Responsive adjustments */
@media (min-width: 768px) {
  .partner-content {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }

  .partner-logo-section {
    flex: 0 0 160px;
  }

  .partner-description {
    flex: 1;
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .partner-logo {
    max-width: 140px;
  }

  .partner-logo-section {
    flex: 0 0 180px;
  }
}
</style>
