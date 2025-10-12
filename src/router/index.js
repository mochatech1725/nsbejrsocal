import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: () => import('../pages/HomePage.vue') },

      // About Us
      { path: '/about/nsbe', name: 'about-nsbe', component: () => import('../pages/about/NSBEPage.vue') },
      { path: '/about/student-executive-board', name: 'executive-board', component: () => import('../pages/about/StudentExecutiveBoardPage.vue') },
      { path: '/about/contact', name: 'about-contact', component: () => import('../pages/about/ContactPage.vue') },

      { path: '/events', name: 'events', component: () => import('../pages/EventsPage.vue') },

      { path: '/programs/competitions', name: 'programs-competitions', component: () => import('../pages/programs/CompetitionsPage.vue') },

      { path: '/partnerships', name: 'partnerships', component: () => import('../pages/partnerships/PartnershipsPage.vue') },

      { path: '/gallery', name: 'gallery', component: () => import('../pages/GalleryPage.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

