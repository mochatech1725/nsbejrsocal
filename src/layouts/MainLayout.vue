<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header-custom">
      <!-- Chapter Identity Section -->
      <div class="chapter-identity-section">
        <router-link to="/" class="chapter-link">
          <div class="chapter-content">
            <img src="@/assets/images/nsbe-jr-logo.png" alt="NSBE Jr. Logo" class="chapter-logo" />
            <div class="chapter-text">
              <div class="chapter-main-title">Region VI Southern California Chapter</div>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Navigation Bar -->
      <q-toolbar class="navigation-bar">
        <!-- Desktop Menu -->
        <div v-if="$q.screen.gt.sm" class="desktop-menu row q-gutter-sm">
          <q-btn flat label="Home" :to="{ name: 'home' }" />

          <q-btn-dropdown flat label="About Us">
            <q-list>
              <q-item clickable v-close-popup :to="{ name: 'about-nsbe' }">
                <q-item-section>About NSBE</q-item-section>
              </q-item>
              <q-item clickable v-close-popup :to="{ name: 'executive-board' }">
                <q-item-section>Student Executive Board</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn flat label="News & Events" :to="{ name: 'events' }" />

          <q-btn flat label="Competitions" :to="{ name: 'programs-competitions' }" />

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
            <q-item-section>About NSBE</q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'executive-board' }" v-close-popup>
            <q-item-section>Student Executive Board</q-item-section>
          </q-item>
        </q-expansion-item>

        <q-item clickable :to="{ name: 'events' }" v-close-popup>
          <q-item-section>
            <q-item-label>News & Events</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable :to="{ name: 'programs-competitions' }" v-close-popup>
          <q-item-section>
            <q-item-label>Competitions</q-item-label>
          </q-item-section>
        </q-item>

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

    <q-footer elevated class="footer-custom">
      <q-toolbar class="footer-toolbar">
        <div class="footer-content">
          <!-- Logo -->
          <div class="footer-logo">
            <img src="@/assets/images/nsbe-jr-logo.png" alt="NSBE Jr. Logo" class="footer-logo-img" />
          </div>

          <!-- Copyright -->
          <div class="footer-copyright">
            © NSBE Jr. 2025
          </div>

          <!-- Social Links -->
          <div class="footer-social">
            <q-btn round dense icon="photo_camera" href="https://www.instagram.com/nsbejr/" target="_blank"
              rel="noopener noreferrer" size="md">
              <q-tooltip>Follow us on Instagram</q-tooltip>
            </q-btn>
          </div>
        </div>
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
.header-custom {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Chapter Identity Section - Separate from Navigation */
.chapter-identity-section {
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.chapter-link {
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s ease;
}

.chapter-link:hover {
  opacity: 0.8;
}

.chapter-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.chapter-logo {
  height: 50px;
  width: auto;
  object-fit: contain;
}

.chapter-text {
  text-align: left;
}

.chapter-main-title {
  font-family: 'Raleway', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #2E7D32;
  margin-bottom: 4px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.chapter-subtitle {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  color: #2E7D32;
}

/* Navigation Bar - Modern and Styled */
.navigation-bar {
  background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%);
  min-height: 56px;
  justify-content: center;
  border-top: 2px solid #388E3C;
}

.desktop-menu {
  margin: 0 auto;
}

.desktop-menu .q-btn {
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
}

.desktop-menu .q-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #43A047;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.desktop-menu .q-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.desktop-menu .q-btn:hover::after {
  width: 80%;
}

.desktop-menu .q-btn.router-link-active::after {
  width: 80%;
}

/* Dropdown Menu Styling */
.desktop-menu .q-list {
  min-width: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.desktop-menu .q-item {
  padding: 12px 20px;
  transition: all 0.2s ease;
  color: #2C3E50 !important;
}

.desktop-menu .q-item:hover {
  background: linear-gradient(135deg, #f0f7f1 0%, #e8f5e9 100%);
  padding-left: 24px;
}

.desktop-menu .q-item-section {
  color: #2C3E50 !important;
  font-weight: 500;
  font-size: 0.95rem;
}

.desktop-menu .q-item .q-item-label {
  color: #2C3E50 !important;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .chapter-identity-section {
    padding: 10px 12px;
  }

  .chapter-content {
    gap: 12px;
  }

  .chapter-logo {
    height: 40px;
  }

  .chapter-main-title {
    font-size: 1.3rem;
    letter-spacing: 1px;
  }

  .chapter-subtitle {
    font-size: 0.75rem;
    letter-spacing: 1.2px;
  }

  .navigation-bar {
    justify-content: flex-end;
  }
}

@media (min-width: 601px) and (max-width: 1023px) {
  .chapter-identity-section {
    padding: 12px 16px;
  }

  .chapter-main-title {
    font-size: 1.6rem;
    letter-spacing: 1.2px;
  }

  .chapter-subtitle {
    font-size: 0.85rem;
    letter-spacing: 1.5px;
  }
}

@media (min-width: 1024px) {
  .chapter-identity-section {
    padding: 14px 24px;
  }

  .chapter-logo {
    height: 60px;
  }

  .chapter-main-title {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .chapter-subtitle {
    font-size: 1.05rem;
    letter-spacing: 2.2px;
  }
}

/* Footer Styling */
.footer-custom {
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  border-top: 3px solid #388E3C;
}

.footer-toolbar {
  min-height: 60px;
  padding: 12px 24px;
}

.footer-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.footer-logo-img {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.footer-copyright {
  flex: 1;
  text-align: center;
  color: #2E7D32;
  font-size: 1.1rem;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
}

.footer-social {
  display: flex;
  gap: 8px;
}

.footer-social .q-btn {
  background: #388E3C;
  transition: all 0.3s ease;
}

.footer-social .q-btn:hover {
  background: #2E7D32;
  transform: scale(1.1);
}

@media (max-width: 600px) {
  .footer-content {
    flex-direction: column;
    gap: 12px;
  }

  .footer-logo-img {
    height: 32px;
  }

  .footer-copyright {
    font-size: 0.85rem;
  }
}
</style>
