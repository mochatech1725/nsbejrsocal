<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 q-mb-md">Competitions</h1>
        
        <q-card flat bordered class="q-mb-lg">
          <q-card-section>
            <h2 class="text-h5 q-mb-md">Compete and Excel</h2>
            <p class="text-body1">
              Our chapter participates in various STEM competitions at local, regional, and national levels. These competitions provide opportunities to apply skills, showcase talents, and connect with other students passionate about engineering.
            </p>
          </q-card-section>
        </q-card>

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

        <q-card flat bordered class="q-mt-lg">
          <q-card-section>
            <h3 class="text-h6 q-mb-md">Competition Preparation</h3>
            <p class="text-body2">
              We provide training and support to help our members succeed in competitions:
            </p>
            <ul class="text-body2">
              <li>Regular practice sessions and workshops</li>
              <li>Mentorship from experienced competitors and professionals</li>
              <li>Access to materials and equipment</li>
              <li>Team formation and project guidance</li>
              <li>Travel support for regional and national events</li>
            </ul>
          </q-card-section>
        </q-card>
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
        id: 1,
        title: 'NSBE Jr. Technical Innovation Competition',
        description: 'Design and present innovative solutions to real-world engineering challenges.',
        icon: 'emoji_objects',
        color: 'primary',
        level: 'National',
        levelColor: 'red'
      },
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
        id: 3,
        title: 'Science Fair',
        description: 'Conduct scientific research and present findings at local and state science fairs.',
        icon: 'science',
        color: 'accent',
        level: 'Local & State',
        levelColor: 'green'
      },
      {
        id: 4,
        title: 'Math Olympiad',
        description: 'Test mathematical problem-solving skills in team and individual formats.',
        icon: 'calculate',
        color: 'positive',
        level: 'Regional',
        levelColor: 'blue'
      },
      {
        id: 5,
        title: 'Coding Competitions',
        description: 'Programming challenges including hackathons and algorithm competitions.',
        icon: 'code',
        color: 'info',
        level: 'Various',
        levelColor: 'purple'
      },
      {
        id: 6,
        title: 'Engineering Design Challenge',
        description: 'Apply engineering principles to design and build solutions within constraints.',
        icon: 'engineering',
        color: 'warning',
        level: 'Regional',
        levelColor: 'teal'
      }
    ])

    return {
      competitions
    }
  }
}
</script>

