<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <h1 class="text-h3 page-title q-mb-md text-center">Student Executive Board</h1>
        <h2 class="text-h5 text-grey-7 q-mb-xl text-center">2025-2026</h2>

        <!-- Main Officers -->
        <q-card flat bordered class="q-mb-lg section-card">
          <q-card-section class="section-header">
            <div class="text-h6">Main Officers</div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">President:</span>
                  <span class="position-name">Tristan Ramella-Paia</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Vice-President:</span>
                  <span class="position-name">James Burton</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Secretary:</span>
                  <span class="position-name">Layla Sibert</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Treasurer:</span>
                  <span class="position-name">Solomon Cannad</span>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- Finance Committee -->
        <q-card flat bordered class="q-mb-lg section-card">
          <q-card-section class="section-header">
            <div class="text-h6">Finance Committee</div>
          </q-card-section>
          <q-card-section>
            <div class="committee-list">
              <span class="committee-name">Major Paxton</span>
              <span class="committee-name">Ezekiel Niazi</span>
              <span class="committee-name">Kassidy Crutchfield</span>
              <span class="committee-name">King Solomon Henderson</span>
              <span class="committee-name">Akira Jackson</span>
              <span class="committee-name">Myles Taylor</span>
              <span class="committee-name">Kendall Burnley</span>
              <span class="committee-name">Taryn Earl</span>
            </div>
          </q-card-section>
        </q-card>

        <!-- Chairs -->
        <q-card flat bordered class="section-card">
          <q-card-section class="section-header">
            <div class="text-h6">Committee Chairs</div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Programs Chair:</span>
                  <span class="position-name">Yeshaya Lang</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Community Outreach Chair:</span>
                  <span class="position-name">Geon Cobb</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Socials Chair:</span>
                  <span class="position-name">Jillian Dickens</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">College Prep Chair:</span>
                  <span class="position-name">Daniel Lorick</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Career Prep Chair:</span>
                  <span class="position-name">Avery Favorite</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Membership Chair:</span>
                  <span class="position-name">Aaron Gitahi</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Public Relations Chair:</span>
                  <span class="position-name">Rena Daniels</span>
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">Public Relations Assistant:</span>
                  <span class="position-name">Meony Armstrong</span>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'StudentExecutiveBoardPage'
}
</script>

<style scoped>
.section-card {
  transition: box-shadow 0.2s ease;
}

.section-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section-header {
  background: linear-gradient(135deg, #f8f9fa 0%, #e8e8e8 100%);
  border-bottom: 3px solid #388E3C;
  padding: 16px;
}

.section-header .text-h6 {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 600;
  margin: 0;
}

.position-item {
  padding: 12px 16px;
  border-left: 3px solid #388E3C;
  background: #fafafa;
  margin-bottom: 8px;
  border-radius: 4px;
  transition: background 0.2s ease;
}

.position-item:hover {
  background: #f0f7f1;
}

.position-title {
  font-weight: 600;
  color: #388E3C;
  margin-right: 8px;
}

.position-name {
  font-family: 'Raleway', sans-serif;
  color: #424242;
  font-weight: 500;
}

.committee-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.committee-name {
  background: #f5f5f5;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #424242;
  border: 1px solid #e0e0e0;
}
</style>
