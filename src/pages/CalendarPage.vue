<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col-12 col-md-10">
        <h1 class="text-h3 page-title q-mb-md text-center">NSBE Jr. Southern California Chapter Calendar 2025-2026
        </h1>

        <!-- A-MAN STEM Center Partnership Info -->
        <div class="partnership-info q-mb-md">
          <q-card bordered class="partnership-card">
            <q-card-section class="q-pa-md">
              <div class="row items-center">
                <div class="col-12 col-md-8">
                  <h3 class="partnership-title q-mb-sm">Partnership with A-MAN STEM Center</h3>
                  <p class="partnership-text">
                    We are proud to partner with <strong>A-MAN, Inc.</strong> (All Colors One People),
                    a 501(c)(3) non-profit organization founded by Dr. Bettye Walker. A-MAN operates
                    the Holman/A-MAN STEM Technology Center and has been instrumental in advancing
                    STEM education in our community. Their state-of-the-art facilities at the Edgar
                    Love Education Building provide the perfect environment for our engineering
                    workshops and activities.
                  </p>
                  <p class="partnership-text">
                    A-MAN's mission of "All Colors One People" aligns perfectly with NSBE's commitment
                    to increasing the number of culturally responsible Black engineers. Together, we
                    work to inspire and educate the next generation of STEM leaders.
                  </p>
                </div>
                <div class="col-12 col-md-4 text-center">
                  <img src="@/assets/images/a-man-stem-logo.png" alt="A-MAN STEM Center Logo" class="a-man-logo" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- Calendar Table -->
        <div class="calendar-content">
          <q-table :rows="calendarEvents" :columns="calendarColumns" row-key="date" flat bordered class="calendar-table"
            :pagination="{ rowsPerPage: 0 }" hide-pagination>
            <template v-slot:body-cell-date="props">
              <q-td :props="props">
                <div class="date-cell">
                  <div class="date-text">{{ formatDate(props.value) }}</div>
                  <div v-if="props.row.endDate" class="date-range">
                    - {{ formatDate(props.row.endDate) }}
                  </div>
                </div>
              </q-td>
            </template>

            <template v-slot:body-cell-time="props">
              <q-td :props="props">
                <div class="time-cell">{{ props.value }}</div>
              </q-td>
            </template>

            <template v-slot:body-cell-activity="props">
              <q-td :props="props">
                <div class="activity-cell">{{ props.value }}</div>
              </q-td>
            </template>

            <template v-slot:body-cell-location="props">
              <q-td :props="props">
                <div class="location-cell">{{ props.value }}</div>
              </q-td>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
// @ts-ignore - JSON import
import calendarData from '../data/calendar.json'

export default {
  name: 'CalendarPage',
  setup() {
    const calendarEvents = ref(calendarData.events)

    const calendarColumns = [
      {
        name: 'date',
        required: true,
        label: 'Date',
        align: 'left',
        field: 'date',
        sortable: true,
        style: 'width: 180px'
      },
      {
        name: 'time',
        required: true,
        label: 'Time',
        align: 'left',
        field: 'time',
        sortable: false,
        style: 'width: 120px'
      },
      {
        name: 'activity',
        required: true,
        label: 'Activity',
        align: 'left',
        field: 'activity',
        sortable: false,
        style: 'width: 250px'
      },
      {
        name: 'location',
        required: true,
        label: 'Location',
        align: 'left',
        field: 'location',
        sortable: false,
        style: 'width: 180px'
      }
    ]

    const formatDate = (dateString) => {
      const date = new Date(dateString + 'T00:00:00')
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    return {
      calendarEvents,
      calendarColumns,
      formatDate
    }
  }
}
</script>

<style scoped>
.banner-section {
  display: flex;
  justify-content: center;
}

.partnership-banner {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.calendar-content {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.calendar-table {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.calendar-table .q-table__top {
  background: linear-gradient(135deg, #f8f9fa 0%, #e8e8e8 100%);
  border-bottom: 3px solid #388E3C;
  border-radius: 12px 12px 0 0;
}

.calendar-table .q-table__top .q-table__title {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 600;
}

.date-cell {
  font-weight: 600;
}

.date-text {
  color: #2E7D32;
}

.date-range {
  color: #666;
  font-size: 0.9em;
  margin-top: 2px;
}

.time-cell {
  color: #555;
  font-weight: 500;
}

.activity-cell {
  color: #333;
  font-weight: 500;
}

.location-cell {
  color: #666;
}

.partnership-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.partnership-title {
  font-family: 'Raleway', sans-serif;
  color: #388E3C;
  font-weight: 600;
  font-size: 1.5rem;
}

.partnership-text {
  color: #555;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.a-man-logo {
  max-width: 200px;
  height: auto;
}
</style>
