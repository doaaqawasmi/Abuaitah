import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import WhoWe from '../views/WhoWe.vue'
import ProductPage from '../views/ProductPage.vue'
import EventS from '../views/EventS.vue'
import StodiO from '../views/StodiO.vue'
import JobS from '../views/JobS.vue'
import ContactUs from '../views/ContactUs.vue'
import JobDetails from '../views/JobDetails.vue'
import JobDetails2 from '../views/JobDetails2.vue'
import EventDetails from '../views/EventDetails.vue'
import SearchResult from '../views/SearchResult.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/WhoWe',
    name: 'WhoWe',
    component: WhoWe
  },
  {
    path: '/ProductPage',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/EventS',
    name: 'EventS',
    component: EventS
  },
  {
    path: '/StodiO',
    name: 'StodiO',
    component: StodiO
  },
  {
    path: '/JobS',
    name: 'JobS',
    component: JobS
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/JobDetails',
    name: 'JobDetails',
    component: JobDetails
  },
  {
    path: '/JobDetails2',
    name: 'JobDetails2',
    component: JobDetails2
  },
  {
    path: '/EventDetails',
    name: 'EventDetails',
    component: EventDetails
  },
  {
    path: '/SearchResult',
    name: 'SearchResult',
    component: SearchResult
  },
]

document.title = "abuaitah";

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
