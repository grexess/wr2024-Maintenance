import { createRouter, createWebHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue';
import { useAuthStore } from '@/stores';

const routes = [
  {
    path: '/',
    component: defineAsyncComponent(() => import('@/views/Page1.vue')),
    meta: { title: 'Page1', show: true },
  },
  {
    path: '/page2',
    component: defineAsyncComponent(() => import('@/views/Page2.vue')),
    meta: { title: 'Page2', show: true },
  },
  {
    path: '/login',
    component: defineAsyncComponent(() => import('@/views/LoginPage.vue')),
    meta: { title: 'Login', show: false },
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes,
});

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();
  if (authRequired && !auth.user) {
    auth.returnUrl = to.fullPath;
    return '/login';
  }
});
