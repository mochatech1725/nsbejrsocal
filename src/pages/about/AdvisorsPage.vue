<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <h1 class="text-h3 page-title q-mb-md text-center">Chapter Advisors</h1>

        <!-- Advisors List -->
        <q-card flat bordered class="section-card">
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div v-for="advisor in advisors" :key="advisor.name" class="col-12 col-sm-6 col-md-4">
                <div class="advisor-card">
                  <div class="advisor-name">{{ advisor.name }}</div>
                  <div class="advisor-title">{{ advisor.title }}</div>
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

.advisor-card {
  padding: 16px;
  border: 2px solid #E8F5E9;
  background: #fafafa;
  margin-bottom: 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  text-align: center;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.advisor-card:hover {
  background: #f0f7f1;
  border-color: #388E3C;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(56, 142, 60, 0.15);
}

.advisor-name {
  font-family: 'Raleway', sans-serif;
  color: #212121;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 6px;
  line-height: 1.3;
  word-wrap: break-word;
  hyphens: auto;
}

.advisor-title {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.2;
  word-wrap: break-word;
}
</style>
