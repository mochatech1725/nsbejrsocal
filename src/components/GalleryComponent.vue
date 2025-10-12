<template>
  <div>
    <!-- Gallery Categories -->
    <div class="q-mb-lg">
      <q-btn-toggle
        v-model="selectedCategory"
        spread
        no-caps
        toggle-color="primary"
        :options="categoryOptions"
      />
    </div>

    <!-- Gallery Grid -->
    <div class="row q-col-gutter-md">
      <div 
        v-for="item in filteredGalleryItems" 
        :key="item.id" 
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card flat bordered class="gallery-card cursor-pointer" @click="openImage(item)">
          <q-img
            :src="item.thumbnail"
            :ratio="4/3"
            class="gallery-image"
          >
            <div class="absolute-bottom text-subtitle2 text-center">
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

    <!-- Placeholder message when no images -->
    <div v-if="filteredGalleryItems.length === 0" class="text-center q-pa-xl">
      <q-icon name="photo_library" size="5rem" color="grey-5" />
      <p class="text-h6 text-grey-6 q-mt-md">No photos in this category yet</p>
      <p class="text-body2 text-grey-6">Check back soon for updates!</p>
    </div>

    <!-- Image Dialog -->
    <q-dialog v-model="imageDialog">
      <q-card style="min-width: 50vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">{{ selectedImage?.title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-img :src="selectedImage?.fullsize" />
          <p class="q-mt-md text-body2">{{ selectedImage?.description }}</p>
          <p class="text-caption text-grey-7">{{ selectedImage?.date }}</p>
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
        { label: 'All', value: 'all' },
        { label: 'Events', value: 'events' },
        { label: 'Programs', value: 'programs' },
        { label: 'Competitions', value: 'competitions' }
      ]
    }
  },
  setup(props) {
    const selectedCategory = ref('all')
    const imageDialog = ref(false)
    const selectedImage = ref(null)

    const categoryOptions = computed(() => props.categories)

    const filteredGalleryItems = computed(() => {
      if (selectedCategory.value === 'all') {
        return props.galleryItems
      }
      return props.galleryItems.filter(item => item.category === selectedCategory.value)
    })

    const openImage = (item) => {
      selectedImage.value = item
      imageDialog.value = true
    }

    return {
      selectedCategory,
      categoryOptions,
      filteredGalleryItems,
      imageDialog,
      selectedImage,
      openImage
    }
  }
}
</script>

<style scoped>
.gallery-card {
  transition: transform 0.2s;
}

.gallery-card:hover {
  transform: translateY(-4px);
}

.gallery-image {
  background-color: #f5f5f5;
}
</style>

