<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 page-title q-mb-md text-center">NSBE Conventions</h1>

        <!-- NSBE 2026 Convention -->
        <div class="convention-feature q-mb-lg">
          <q-card bordered class="convention-card">
            <q-card-section class="q-pa-lg">
              <div class="row items-start">
                <div class="col-12">
                  <h3 class="convention-title q-mb-md text-center">NSBE 2026 National Convention: Advancing S.T.E.M.
                  </h3>
                  <div class="convention-details q-mb-md">
                    <p class="convention-date"><strong>March 18-22, 2026</strong></p>
                    <p class="convention-location">Baltimore Convention Center, Baltimore, MD</p>
                  </div>

                  <div class="convention-intro q-mb-md">
                    <p class="intro-text">
                      Join thousands of Black engineers and technologists at the premier gathering for STEM
                      professionals.
                      NSBE conventions offer unmatched opportunities for networking, career development, and
                      inspiration.
                    </p>
                  </div>

                  <div class="convention-links">
                    <q-btn color="primary" label="Visit Convention Website" href="https://convention.nsbe.org/"
                      target="_blank" rel="noopener noreferrer" class="q-mr-sm q-mb-sm" />
                    <q-btn outline color="primary" label="Registration Rates"
                      href="https://convention.nsbe.org/wp-content/uploads/2025/09/Registration-Rates.pdf"
                      target="_blank" rel="noopener noreferrer" class="q-mb-sm" />
                  </div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ConventionsPage'
}
</script>

<style scoped>
.intro-text {
  margin: 0;
  color: #2E7D32;
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 500;
}

.convention-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.convention-title {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 700;
  font-size: 1.5rem;
}

.convention-date {
  color: #2E7D32;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.convention-location {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 0;
}

.theme-heading {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.theme-item {
  margin-bottom: 0.75rem;
  color: #555;
  line-height: 1.6;
}

.stats-text {
  color: #2E7D32;
  font-size: 1.1rem;
  font-weight: 500;
}

.convention-links {
  margin-top: 1.5rem;
}
</style>
