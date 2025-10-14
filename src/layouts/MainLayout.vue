<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header-custom">
      <!-- Chapter Identity Section -->
      <div class="chapter-identity-section">
        <img src="@/assets/images/nsbe-jr-socal-logo.png" alt="NSBE Jr. Logo" class="chapter-logo" />
        <div class="chapter-text">
          <div class="chapter-main-title">Region VI Southern California Chapter</div>
        </div>
        <img src="@/assets/images/nsbe-prof-logo.png" alt="NSBE Professionals Logo" class="partner-logo" />
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

          <q-btn-dropdown flat label="Programs">
            <q-list>
              <q-item clickable v-close-popup :to="{ name: 'programs-competitions' }">
                <q-item-section>Competitions</q-item-section>
              </q-item>
              <q-item clickable v-close-popup :to="{ name: 'programs-conventions' }">
                <q-item-section>Conventions</q-item-section>
              </q-item>
              <q-item clickable v-close-popup :to="{ name: 'programs-calendar' }">
                <q-item-section>2025-2026 Calendar</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn flat label="Partnerships" :to="{ name: 'partnerships' }" />

          <q-btn flat label="Gallery" :to="{ name: 'gallery' }" />
        </div>

        <!-- Mobile Menu Button -->
        <q-btn v-if="$q.screen.lt.md" flat dense round icon="menu" color="green-8"
          @click="leftDrawerOpen = !leftDrawerOpen" />
      </q-toolbar>
    </q-header>

    <!-- Mobile Navigation Drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered v-if="$q.screen.lt.md">
      <q-list>
        <!-- Home -->
        <q-item clickable :to="{ name: 'home' }" v-close-popup>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>

        <!-- About Us -->
        <q-expansion-item label="About Us" icon="info">
          <q-item clickable :to="{ name: 'about-nsbe' }" v-close-popup>
            <q-item-section>About NSBE</q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'executive-board' }" v-close-popup>
            <q-item-section>Student Executive Board</q-item-section>
          </q-item>
        </q-expansion-item>

        <!-- News & Events -->
        <q-item clickable :to="{ name: 'events' }" v-close-popup>
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>
          <q-item-section>
            <q-item-label>News & Events</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Programs -->
        <q-expansion-item label="Programs" icon="school">
          <q-item clickable :to="{ name: 'programs-competitions' }" v-close-popup>
            <q-item-section>Competitions</q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'programs-conventions' }" v-close-popup>
            <q-item-section>Conventions</q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'programs-calendar' }" v-close-popup>
            <q-item-section>2025-2026 Calendar</q-item-section>
          </q-item>
        </q-expansion-item>

        <!-- Partnerships -->
        <q-item clickable :to="{ name: 'partnerships' }" v-close-popup>
          <q-item-section avatar>
            <q-icon name="handshake" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Partnerships</q-item-label>
          </q-item-section>
        </q-item>

        <!-- Gallery -->
        <q-item clickable :to="{ name: 'gallery' }" v-close-popup>
          <q-item-section avatar>
            <q-icon name="photo_library" />
          </q-item-section>
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
            <img src="@/assets/images/nsbe-jr-socal-logo.png" alt="NSBE Jr. Logo" class="footer-logo-img" />
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.header-partner-logo {
  display: flex;
  align-items: center;
}

.partner-logo {
  height: 60px;
  width: auto;
  position: absolute;
  right: 16px;
}

.chapter-logo {
  height: 50px;
  width: auto;
  object-fit: contain;
  position: absolute;
  left: 16px;
}

.chapter-text {
  text-align: center;
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

/* Navigation Bar - Clean & Modern with Color */
.navigation-bar {
  background: linear-gradient(135deg, #F1F8F4 0%, #E8F5E9 100%);
  min-height: 64px;
  justify-content: center;
  border-bottom: 2px solid #C8E6C9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.desktop-menu {
  margin: 0 auto;
  gap: 8px;
}

.desktop-menu .q-btn {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.3px;
  color: #1B5E20;
  padding: 8px 20px;
  border-radius: 10px;
  transition: all 0.3s ease;
  text-transform: none;
  background: linear-gradient(135deg, #ffffff 0%, #f8fdf9 100%);
  border: 1.5px solid #C8E6C9;
  position: relative;
}

/* Hover state - Medium green background */
.desktop-menu .q-btn:hover {
  background: linear-gradient(135deg, #66BB6A 0%, #4CAF50 100%);
  color: #ffffff;
  border-color: #4CAF50;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(76, 175, 80, 0.35);
}

/* Active/current page state */
.desktop-menu .q-btn.router-link-active {
  background: linear-gradient(135deg, #388E3C 0%, #2E7D32 100%);
  color: #ffffff;
  border-color: #2E7D32;
  box-shadow: 0 4px 12px rgba(56, 142, 60, 0.4);
}

.desktop-menu .q-btn.router-link-active:hover {
  background: linear-gradient(135deg, #43A047 0%, #388E3C 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(56, 142, 60, 0.5);
}

/* Dropdown Button Styling */
.desktop-menu .q-btn-dropdown__arrow {
  color: currentColor;
  transition: transform 0.3s ease;
}

/* Dropdown Menu Styling */
.desktop-menu .q-list {
  min-width: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 4px;
}

.desktop-menu .q-item {
  padding: 12px 20px;
  transition: all 0.2s ease;
  color: #2C3E50 !important;
  font-family: 'Raleway', sans-serif;
}

.desktop-menu .q-item:hover {
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
  padding-left: 24px;
  color: #1B5E20 !important;
}

.desktop-menu .q-item-section {
  color: inherit !important;
  font-weight: 500;
  font-size: 0.95rem;
}

.desktop-menu .q-item .q-item-label {
  color: inherit !important;
}

/* Mobile Drawer Styling */
.q-drawer .q-item {
  font-family: 'Raleway', sans-serif;
  transition: all 0.2s ease;
}

.q-drawer .q-item:hover {
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
}

/* Mobile drawer active link - Green instead of blue */
.q-drawer .q-item.q-router-link--active,
.q-drawer .q-item--active {
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
  color: #2E7D32 !important;
}

.q-drawer .q-item.q-router-link--active .q-icon,
.q-drawer .q-item--active .q-icon {
  color: #388E3C !important;
}

.q-drawer .q-item.q-router-link--active .q-item-label,
.q-drawer .q-item--active .q-item-label {
  color: #2E7D32 !important;
  font-weight: 600;
}

/* Mobile drawer expansion items */
.q-drawer .q-expansion-item {
  font-family: 'Raleway', sans-serif;
}

.q-drawer .q-expansion-item__toggle-icon {
  color: #388E3C;
}

.q-drawer .q-expansion-item--active .q-expansion-item__toggle-icon {
  color: #2E7D32;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .chapter-identity-section {
    padding: 10px 12px;
    flex-direction: column;
    gap: 8px;
  }

  .partner-logo {
    height: 40px;
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
