import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/newPage',
      name: '新頁面',
      component: () => import('../views/NewPage.vue'),
      children: [
        {
          path: 'a',
          component: () => import('../views/ComponentA.vue'),
        },
        {
          path: 'b',
          component: () => import('../views/ComponentB.vue'),
        },
        {
          // 動態路由示範
          //  。綁上:id(可自己命名)
          path: 'dynamicRouter/:id',
          component: () => import('../views/DynamicRouter.vue'),
        },

        {
          // <!-- 命名視圖示範 -->
          path: 'namedView',
          component: () => import('../views/NamedView.vue'),
          children: [
            {
              path: 'b2c',
              components: {
                left: () => import('../views/ComponentB.vue'),
                right: () => import('../views/ComponentC.vue'),
              },
            },
            {
              path: 'c2a',
              components: {
                left: () => import('../views/ComponentC.vue'),
                right: () => import('../views/ComponentA.vue'),
              },
            },
          ],
        },
      ],
    },
  ],
})

export default router
