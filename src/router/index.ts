import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MessagesView from '../views/MessagesView.vue'
import PaymentsView from '../views/PaymentsView.vue'
import BookingsView from '../views/bookings/BookingsView.vue'
import BookingDetailsView from '../views/bookings/BookingDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: BookingsView
    },
    {
      path: '/bookings/:id',
      name: 'BookingDetails',
      component: BookingDetailsView
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsView
    }
  ]
})

export default router
