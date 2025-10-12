<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/" class="text-white" style="text-decoration: none">
            NSBE Jr. Chapter
          </router-link>
        </q-toolbar-title>

        <!-- Desktop Menu -->
        <div v-if="$q.screen.gt.sm" class="desktop-menu row q-gutter-sm">
          <q-btn flat label="Home" :to="{ name: 'home' }" />
          
          <q-btn-dropdown flat label="About Us">
            <q-list>
              <q-item clickable v-close-popup :to="{ name: 'about-nsbe' }">
                <q-item-section>NSBE</q-item-section>
              </q-item>
              <q-item clickable v-close-popup :to="{ name: 'about-membership' }">
                <q-item-section>Membership</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn flat label="Events" :to="{ name: 'events' }" />

          <q-btn-dropdown flat label="Programs">
            <q-list>
              <q-item clickable v-close-popup :to="{ name: 'programs-competitions' }">
                <q-item-section>Competitions</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn flat label="Partnerships" :to="{ name: 'partnerships' }" />

          <q-btn flat label="Gallery" :to="{ name: 'gallery' }" />
        </div>

        <!-- Mobile Menu Button -->
        <q-btn v-if="$q.screen.lt.md" flat dense round icon="menu" @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-toolbar>
    </q-header>

    <!-- Mobile Navigation Drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered v-if="$q.screen.lt.md">
      <q-list>
        <q-item clickable :to="{ name: 'home' }" v-close-popup>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item label="About Us" icon="info">
          <q-item clickable :to="{ name: 'about-nsbe' }" v-close-popup>
            <q-item-section>NSBE</q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'about-membership' }" v-close-popup>
            <q-item-section>Membership</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable :to="{ name: 'events' }" v-close-popup>
          <q-item-section>
            <q-item-label>Events</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item label="Programs" icon="school">
          <q-item clickable :to="{ name: 'programs-competitions' }" v-close-popup>
            <q-item-section>Competitions</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable :to="{ name: 'partnerships' }" v-close-popup>
          <q-item-section>
            <q-item-label>Partnerships</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable :to="{ name: 'gallery' }" v-close-popup>
          <q-item-section>
            <q-item-label>Gallery</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-center">
            © {{ new Date().getFullYear() }} NSBE Jr. Chapter. All rights reserved.
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MainLayout',
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen
    }
  }
}
</script>

<style scoped>
.desktop-menu {
  margin-left: auto;
}
</style>

