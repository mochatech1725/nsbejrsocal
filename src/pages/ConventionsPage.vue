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

        <!-- Convention Competition Details -->
        <div class="competition-details-section q-mb-lg">
          <q-card bordered class="convention-card">
            <q-card-section class="q-pa-lg">
              <h3 class="convention-title q-mb-md text-center">Competition Details</h3>

              <div class="competition-item q-mb-md">
                <h4 class="competition-name">Try-Math-A-Lon</h4>
                <p class="competition-subtitle q-mb-sm"><strong>Teams: Pre-PAT Exams</strong></p>

                <div class="deadlines q-mb-md">
                  <div class="deadline-item">
                    <q-icon name="event" color="orange" size="20px" class="q-mr-xs" />
                    <span class="deadline-text">Complete Pre-PAT no later than <strong>November 12, 2025</strong></span>
                  </div>
                  <div class="deadline-item">
                    <q-icon name="event" color="orange" size="20px" class="q-mr-xs" />
                    <span class="deadline-text">Complete Official PAT no later than <strong>January 14,
                        2026</strong></span>
                  </div>
                </div>

                <div class="exam-links">
                  <div class="exam-link-item q-mb-sm">
                    <span class="exam-label">PAT EXAM Lower Division:</span>
                    <q-btn flat dense color="primary" label="Take Exam" href="https://forms.office.com/r/4C9xGhW4iL"
                      target="_blank" rel="noopener noreferrer" icon-right="open_in_new" class="q-ml-sm" />
                  </div>

                  <div class="exam-link-item">
                    <span class="exam-label">PAT EXAM Upper Division:</span>
                    <q-btn flat dense color="primary" label="Take Exam" href="https://forms.office.com/r/rJNkZHhpFY"
                      target="_blank" rel="noopener noreferrer" icon-right="open_in_new" class="q-ml-sm" />
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

.competition-name {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.competition-subtitle {
  font-family: 'Raleway', sans-serif;
  color: #555;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.deadlines {
  background: #fff3e0;
  border-left: 4px solid #ff9800;
  padding: 12px 16px;
  border-radius: 8px;
}

.deadline-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.deadline-item:last-child {
  margin-bottom: 0;
}

.deadline-text {
  font-family: 'Raleway', sans-serif;
  color: #444;
  font-size: 0.95rem;
}

.exam-links {
  margin-top: 1rem;
}

.exam-link-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.exam-label {
  font-family: 'Raleway', sans-serif;
  color: #444;
  font-size: 0.95rem;
  font-weight: 500;
}
</style>
