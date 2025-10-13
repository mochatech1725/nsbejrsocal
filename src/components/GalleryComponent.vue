<template>
  <div>
    <!-- Gallery Categories with Styled Tabs -->
    <div class="gallery-tabs-container q-mb-lg">
      <q-tabs v-model="selectedCategory" class="gallery-tabs" active-color="white" inline-label align="center">
        <q-tab v-for="category in categoryOptions" :key="category.value" :name="category.value" :label="category.label"
          :icon="getCategoryIcon(category.value)" no-caps class="tab-item" />
      </q-tabs>
    </div>

    <!-- Content based on selected category -->
    <q-tab-panels v-model="selectedCategory" animated>
      <!-- All Categories Display Albums -->
      <q-tab-panel v-for="category in categoryOptions" :key="category.value" :name="category.value" class="q-pa-none">
        <div v-if="currentAlbums.length > 0" class="row q-col-gutter-md">
          <div v-for="album in currentAlbums" :key="album.id" class="col-12 col-sm-6 col-md-4">
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
          <p class="text-h6 text-grey-6 q-mt-md">No albums in this category yet</p>
          <p class="text-body2 text-grey-6">Check back soon for updates!</p>
        </div>
      </q-tab-panel>
    </q-tab-panels>

    <!-- Album Dialog (for viewing album contents) -->
    <q-dialog v-model="albumDialog" maximized>
      <q-card>
        <q-card-section class="row items-center q-pb-md album-dialog-header text-white">
          <q-icon name="photo_album" size="md" class="q-mr-sm" />
          <div class="text-h6">{{ selectedAlbum?.title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup color="white" />
        </q-card-section>
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div v-for="photo in selectedAlbum?.photos" :key="photo.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
              <GalleryItem :item="photo" />
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import GalleryItem from './GalleryItem.vue'

export default {
  name: 'GalleryComponent',
  components: {
    GalleryItem
  },
  props: {
    galleryItems: {
      type: Array,
      required: true,
      default: () => []
    },
    categories: {
      type: Array,
      default: () => [
        { label: 'Meetings', value: 'meetings' },
        { label: 'Events', value: 'events' },
        { label: 'Competitions', value: 'competitions' }
      ]
    }
  },
  setup(props) {
    const selectedCategory = ref('meetings')
    const albumDialog = ref(false)
    const selectedAlbum = ref(null)

    const categoryOptions = computed(() => props.categories)

    const albums = ref([])

    // Load albums for current category
    const currentAlbums = computed(() => {
      return albums.value.filter(album => album.category === selectedCategory.value)
    })

    // Load all albums when component mounts
    const loadAllAlbums = async () => {
      try {
        const { galleryService } = await import('../services')
        const meetingsAlbums = await galleryService.getAlbumsByCategory('meetings')
        const eventsAlbums = await galleryService.getAlbumsByCategory('events')
        const competitionsAlbums = await galleryService.getAlbumsByCategory('competitions')
        albums.value = [...meetingsAlbums, ...eventsAlbums, ...competitionsAlbums]
      } catch (error) {
        console.error('Failed to load albums:', error)
      }
    }

    // Load albums when component mounts
    loadAllAlbums()

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
      currentAlbums,
      albumDialog,
      selectedAlbum,
      getCategoryIcon,
      openAlbum
    }
  }
}
</script>

<style scoped>
.gallery-tabs-container {
  display: flex;
  justify-content: center;
}

.gallery-tabs {
  background: transparent;
  box-shadow: none;
}

.tab-item {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  padding: 12px 24px;
  margin: 0 6px;
  border-radius: 8px;
  background: #f5f5f5;
  color: #666;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.tab-item:hover {
  background: #e8e8e8;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tab-item.q-tab--active {
  background: linear-gradient(135deg, #43A047 0%, #2E7D32 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(56, 142, 60, 0.3);
  border: 2px solid #388E3C;
}

.tab-item.q-tab--active:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(56, 142, 60, 0.4);
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

.album-overlay .text-h6 {
  font-family: 'Raleway', sans-serif;
}

.album-dialog-header {
  background: linear-gradient(135deg, #388E3C 0%, #2E7D32 100%);
}

.album-dialog-header .text-h6 {
  font-family: 'Raleway', sans-serif;
}
</style>
