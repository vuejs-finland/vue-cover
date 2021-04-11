import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

export type RoutesType = RouteRecordRaw & {
  path: string;
  name: string;
  component: () => {};
  meta?: {
    index?: number;
    keepAlive?: boolean;
  };
  children?: RoutesType[];
};

const routes: RoutesType[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
