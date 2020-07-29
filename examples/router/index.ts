import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
const Basic = () => import('../components/basic')
const FixedHeader = () => import('../components/fixedHeader')

Vue.use(Router)

let routes: RouteConfig[] = [
  { path: '/', redirect: '/basic' },
  { path: '/basic', name: 'Basic', component: Basic },
  { path: '/fixed-header', name: 'FixedHeader', component: FixedHeader }
]
const router = new Router({
  routes
})

export default router
