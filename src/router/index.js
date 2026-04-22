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
          //  。 :id 是動態路由參數，用來接收 URL 中的變數
          path: 'dynamicRouter/:id',
          component: () => import('../views/DynamicRouter.vue'),
        },
        {
          // 動態路由+prop示範
          //  。 :id 是動態路由參數，用來接收 URL 中的變數
          path: 'dynamicRouterByProps/:id',
          component: () => import('../views/DynamicRouterByProps.vue'),
          // props屬性
          // 。 用來傳遞prop到頁面元件
          // 。 參數route代表目前的路由資訊
          // 。 路由的參數會放在 params 裡
          // 。 props function 將 route.params.id 轉成 props 傳入元件
          props: (route) => {
            console.log('route', route)
            return {
              id: route.params.id,
            }
          },
          // props: () => ({
          //   id: 'c4cb945ffc1eac99',
          // }),
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
