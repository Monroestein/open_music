import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FunkView from '@/views/FunkView.vue'
import GrungeView from '@/views/GrungeView.vue'
import MetalView from '@/views/MetalView.vue'
import PopView from '@/views/PopView.vue'
import HipHopView from '@/views/HipHopView.vue'
import RockView from '@/views/RockView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/funk',
    name: 'funk',
    component: FunkView
  },
  {
    path: '/grunge',
    name: 'grunge',
    component: GrungeView
  },
  {
    path: '/metal',
    name: 'metal',
    component: MetalView
  },
  {
    path: '/pop',
    name: 'pop',
    component: PopView
  },
  {
    path: '/hip-hop',
    name: 'hiphop',
    component: HipHopView
  },
  {
    path: '/rock',
    name: 'rock',
    component: RockView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
