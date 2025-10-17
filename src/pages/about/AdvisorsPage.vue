<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <h1 class="text-h3 page-title q-mb-md text-center">Chapter Advisors</h1>

        <!-- Advisors List -->
        <q-card flat bordered class="section-card">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div v-for="advisor in advisors" :key="advisor.name" class="col-12 col-sm-6">
                <div class="position-item">
                  <span class="position-title">{{ advisor.title }}:</span>
                  <span class="position-name">{{ advisor.name }}</span>
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
import advisorsData from '../../data/advisors.json'

export default {
  name: 'AdvisorsPage',
  setup() {
    const advisors = ref(advisorsData.advisors)

    return {
      advisors
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
</style>
