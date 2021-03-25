import { createRouter, createWebHistory } from 'vue-router';

interface RoutesType {
  path: string;
  name: string;
  component: () => {};
  meta?: {
    index?: number;
    keepAlive?: boolean;
  };
  children?: RoutesType[];
}

const routes: RoutesType[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../components/HelloWorld.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "home" */ '../components/About.vue'),
  },
]

const router = createRouter({
  // // createWebHistory 第一个参数为以前路由的base
  history: createWebHistory(),
  routes
})

export default router
