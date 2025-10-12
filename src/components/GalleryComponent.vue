<template>
  <div>
    <!-- Gallery Categories with Styled Tabs -->
    <q-card flat bordered class="q-mb-lg">
      <q-tabs v-model="selectedCategory" dense class="text-grey-7" active-color="primary" indicator-color="primary"
        align="justify" narrow-indicator>
        <q-tab v-for="category in categoryOptions" :key="category.value" :name="category.value" :label="category.label"
          :icon="getCategoryIcon(category.value)" no-caps class="tab-item" />
      </q-tabs>
    </q-card>

    <!-- Content based on selected category -->
    <q-tab-panels v-model="selectedCategory" animated>
      <!-- Meetings Tab with Albums -->
      <q-tab-panel name="meetings" class="q-pa-none">
        <div v-if="meetingAlbums.length > 0" class="row q-col-gutter-md">
          <div v-for="album in meetingAlbums" :key="album.id" class="col-12 col-sm-6 col-md-4">
            <q-card flat bordered class="album-card cursor-pointer" @click="openAlbum(album)">
              <q-img :src="album.coverImage" :ratio="4 / 3" class="album-cover">
                <div class="absolute-full album-overlay">
                  <div class="absolute-bottom text-center q-pa-md">
                    <div class="text-h6 text-weight-medium">{{ album.title }}</div>
                    <div class="text-caption">{{ album.date }} • {{ album.photoCount }} photos</div>
                  </div>
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
        <div v-else class="text-center q-pa-xl">
          <q-icon name="photo_album" size="5rem" color="grey-5" />
          <p class="text-h6 text-grey-6 q-mt-md">No meeting albums yet</p>
          <p class="text-body2 text-grey-6">Check back soon for updates!</p>
        </div>
      </q-tab-panel>

      <!-- Other tabs with standard gallery grid -->
      <q-tab-panel v-for="category in nonMeetingCategories" :key="category.value" :name="category.value"
        class="q-pa-none">
        <div v-if="filteredGalleryItems.length > 0" class="row q-col-gutter-md">
          <div v-for="item in filteredGalleryItems" :key="item.id" class="col-12 col-sm-6 col-md-4">
            <q-card flat bordered class="gallery-card">
              <q-img :src="item.image" :ratio="4 / 3" class="gallery-image">
                <div class="absolute-bottom text-subtitle2 text-center q-pa-sm">
                  {{ item.title }}
                </div>
                <template v-slot:loading>
                  <div class="row justify-center items-center full-height">
                    <q-icon name="image" size="4rem" color="grey-5" />
                  </div>
                </template>
              </q-img>
            </q-card>
          </div>
        </div>
        <div v-else class="text-center q-pa-xl">
          <q-icon name="photo_library" size="5rem" color="grey-5" />
          <p class="text-h6 text-grey-6 q-mt-md">No photos in this category yet</p>
          <p class="text-body2 text-grey-6">Check back soon for updates!</p>
        </div>
      </q-tab-panel>
    </q-tab-panels>

    <!-- Album Dialog (for viewing album contents) -->
    <q-dialog v-model="albumDialog" maximized>
      <q-card>
        <q-card-section class="row items-center q-pb-md bg-primary text-white">
          <q-icon name="photo_album" size="md" class="q-mr-sm" />
          <div class="text-h6">{{ selectedAlbum?.title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup color="white" />
        </q-card-section>
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div v-for="photo in selectedAlbum?.photos" :key="photo.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
              <q-card flat bordered class="gallery-card">
                <q-img :src="photo.image" :ratio="1" class="gallery-image">
                  <div v-if="photo.title" class="absolute-bottom text-subtitle2 text-center q-pa-sm">
                    {{ photo.title }}
                  </div>
                  <template v-slot:loading>
                    <div class="row justify-center items-center full-height">
                      <q-icon name="image" size="3rem" color="grey-5" />
                    </div>
                  </template>
                </q-img>
              </q-card>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'GalleryComponent',
  props: {
    galleryItems: {
      type: Array,
      required: true,
      default: () => []
    },
    categories: {
      type: Array,
      default: () => [
        { label: 'Events', value: 'events' },
        { label: 'Meetings', value: 'meetings' },
        { label: 'Competitions', value: 'competitions' }
      ]
    }
  },
  setup(props) {
    const selectedCategory = ref('events')
    const albumDialog = ref(false)
    const selectedAlbum = ref(null)

    const categoryOptions = computed(() => props.categories)

    const nonMeetingCategories = computed(() => {
      return props.categories.filter(cat => cat.value !== 'meetings')
    })

    const filteredGalleryItems = computed(() => {
      return props.galleryItems.filter(item => item.category === selectedCategory.value)
    })

    const meetingAlbums = ref([])

    // Fetch meeting albums from CMS when component mounts
    const loadMeetingAlbums = async () => {
      try {
        const { mockCmsService } = await import('../services')
        meetingAlbums.value = await mockCmsService.getMeetingAlbums()
      } catch (error) {
        console.error('Failed to load meeting albums:', error)
      }
    }

    // Load albums when component mounts
    loadMeetingAlbums()

    const getCategoryIcon = (value) => {
      const icons = {
        events: 'event',
        meetings: 'groups',
        competitions: 'emoji_events'
      }
      return icons[value] || 'photo_library'
    }

    const openAlbum = (album) => {
      selectedAlbum.value = album
      albumDialog.value = true
    }

    return {
      selectedCategory,
      categoryOptions,
      nonMeetingCategories,
      filteredGalleryItems,
      albumDialog,
      selectedAlbum,
      meetingAlbums,
      getCategoryIcon,
      openAlbum
    }
  }
}
</script>

<style scoped>
.tab-item {
  font-weight: 500;
}

.gallery-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.gallery-image {
  background-color: #f5f5f5;
}

.album-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}

.album-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.album-cover {
  background-color: #f5f5f5;
}

.album-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%);
}

.album-overlay .text-h6,
.album-overlay .text-caption {
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
