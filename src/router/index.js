import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component : About
  },
  {
    path:'/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobsDetail',
    component: JobsDetails,
    props: true
  },
  // redirect
  {
    path: '/all-jobs',
    redirect : '/Jobs'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
