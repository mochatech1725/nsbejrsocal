<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <h1 class="text-h3 page-title q-mb-md text-center">2025-2026 Student Executive Board</h1>

        <!-- Main Officers -->
        <q-card flat bordered class="q-mb-lg section-card">
          <q-card-section class="section-header">
            <div class="text-h6">Main Officers</div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div v-for="officer in mainOfficers" :key="officer.position" class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">{{ officer.position }}:</span>
                  <span class="position-name">{{ officer.name }}</span>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- Chairs -->
        <q-card flat bordered class="q-mb-lg section-card">
          <q-card-section class="section-header">
            <div class="text-h6">Committee Chairs</div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div v-for="chair in committeeChairs" :key="chair.position" class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">{{ chair.position }}:</span>
                  <span class="position-name">{{ chair.name }}</span>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- Finance Committee -->
        <q-card flat bordered class="section-card">
          <q-card-section class="section-header">
            <div class="text-h6">Finance Committee</div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div v-for="member in financeOfficers" :key="member.name" class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-name">{{ member.name }}</span>
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
import { ref } from 'vue'
// @ts-ignore - JSON import
import executivesData from '../../data/student-executives.json'

export default {
  name: 'StudentExecutiveBoardPage',
  setup() {
    const mainOfficers = ref(executivesData['main-officers'])
    const financeOfficers = ref(executivesData['finance-officers'])
    const committeeChairs = ref(executivesData['committee-chairs'])

    return {
      mainOfficers,
      financeOfficers,
      committeeChairs
    }
  }
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
