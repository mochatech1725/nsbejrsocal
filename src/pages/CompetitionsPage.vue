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
          <div v-for="(competition, index) in competitions" :key="index" class="col-12 col-md-6">
            <q-card flat bordered class="competition-card">
              <q-card-section>
                <div class="competition-name q-mb-sm">
                  <a v-if="competition.link" :href="competition.link" target="_blank" rel="noopener noreferrer"
                    class="competition-link">
                    {{ competition.name }}
                    <q-icon name="open_in_new" size="18px" class="link-icon" />
                  </a>
                  <span v-else>{{ competition.name }}</span>
                </div>
                <div class="competition-meta q-mb-sm">
                  <span class="meta-item"><strong>Category:</strong> {{ competition.category }}</span>
                  <span class="meta-separator">|</span>
                  <span class="meta-item"><strong>Grade Level:</strong> {{ competition.gradeLevel }}</span>
                  <span class="meta-separator">|</span>
                  <span class="meta-item"><strong>Team Size:</strong> {{ competition.teamSize }}</span>
                  <span class="meta-separator">|</span>
                  <span class="meta-item"><strong>Experience Level:</strong> {{ competition.experienceLevel }}</span>
                </div>
                <div class="competition-description">{{ competition.description }}</div>
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
import competitionsData from '../data/nsbe_competitions.json'

export default {
  name: 'CompetitionsPage',
  setup() {
    const competitions = ref(competitionsData.competitions)

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

.competition-card {
  background: #ffffff;
  border-radius: 12px;
  transition: box-shadow 0.3s ease;
}

.competition-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.competition-name {
  font-family: 'Raleway', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #388E3C;
  line-height: 1.4;
}

.competition-link {
  color: #388E3C;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.competition-link:hover {
  color: #2E7D32;
  text-decoration: underline;
}

.link-icon {
  transition: transform 0.3s ease;
}

.competition-link:hover .link-icon {
  transform: translateX(2px) translateY(-2px);
}

.competition-meta {
  font-family: 'Raleway', sans-serif;
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
}

.meta-item {
  display: inline;
}

.meta-separator {
  margin: 0 8px;
  color: #999;
}

.competition-description {
  font-family: 'Raleway', sans-serif;
  font-size: 0.95rem;
  color: #444;
  line-height: 1.6;
}
</style>
