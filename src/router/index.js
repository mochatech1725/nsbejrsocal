import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: () => import('../pages/HomePage.vue') },

            // About Us
            { path: '/about/about-nsbe', name: 'about-nsbe', component: () => import('../pages/about/AboutNsbePage.vue') },
      { path: '/about/student-executive-board', name: 'executive-board', component: () => import('../pages/about/StudentExecutiveBoardPage.vue') },

      { path: '/events', name: 'events', component: () => import('../pages/EventsPage.vue') },

      { path: '/competitions', name: 'competitions', component: () => import('../pages/CompetitionsPage.vue') },

      { path: '/partnerships', name: 'partnerships', component: () => import('../pages/PartnershipsPage.vue') },

      { path: '/gallery', name: 'gallery', component: () => import('../pages/GalleryPage.vue') },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

