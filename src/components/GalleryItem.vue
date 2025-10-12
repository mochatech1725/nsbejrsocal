<template>
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
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
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
</style>
