<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 page-title q-mb-md text-center">Competitions</h1>

        <!-- Introduction Section -->
        <div class="intro-section q-mb-lg">
          <q-card bordered class="intro-card">
            <q-card-section class="q-pa-lg text-center">
              <p class="intro-text">
                Our chapter participates in various STEM competitions at local, regional, and national levels. These
                competitions provide opportunities to apply skills, showcase talents, and connect with other students
                passionate about engineering.
              </p>
            </q-card-section>
          </q-card>
        </div>

        <div class="row q-col-gutter-md">
          <div v-for="competition in competitions" :key="competition.id" class="col-12 col-md-6">
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6 q-mb-sm">
                  <q-icon :name="competition.icon" :color="competition.color" /> {{ competition.title }}
                </div>
                <div class="text-body2 q-mb-sm">{{ competition.description }}</div>
                <q-chip v-if="competition.level" :color="competition.levelColor" text-color="white" size="sm">
                  {{ competition.level }}
                </q-chip>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CompetitionsPage',
  setup() {
    const competitions = ref([
      {
        id: 2,
        title: 'Robotics Competitions',
        description: 'FIRST Robotics, VEX Robotics, and other robotics challenges.',
        icon: 'smart_toy',
        color: 'secondary',
        level: 'Regional & National',
        levelColor: 'orange'
      },
      {
        id: 4,
        title: 'Math Olympiad',
        description: 'Test mathematical problem-solving skills in team and individual formats.',
        icon: 'calculate',
        color: 'positive',
        level: 'Regional',
        levelColor: 'blue'
      }
    ])

    return {
      competitions
    }
  }
}
</script>

<style scoped>
.intro-section {
  display: flex;
  justify-content: center;
}

.intro-card {
  max-width: 900px;
  background: #ffffff;
  border-radius: 12px;
  transition: box-shadow 0.3s ease;
}

.intro-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.intro-text {
  margin: 0;
  color: #555;
  line-height: 1.9;
  font-size: 1.05rem;
  text-align: center;
}
</style>
