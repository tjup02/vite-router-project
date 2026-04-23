import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  // RouterLink 被選中時的 class(全域設定)
  // -被選中時，自動加上.active
  // -如果只希望指定RouterLink有這個功能，可以在指定RouterLink加上 active-class="active"
  linkActiveClass: 'active',

  // scrollBehavior():控制頁面切換後的捲動位置
  scrollBehavior(to, from, savedPosition) {
    // to → 目的地(路由物件)
    //       -to.path
    //       -to.name
    //       -to.params
    //       -to.query
    //       -to.fullPath
    // from → 出發地(路由物件)
    //       -from.path
    //       -from.name
    //       -from.params
    //       -from.query
    //       -from.fullPath

    // savedPosition → 上次滾動位置({top: xxx,left:xxx})
    // - 只有「上一頁 / 下一頁」時才會有值
    // - 如果是新頁面，通常是 null
    console.log(to, from, savedPosition)

    // 如果是返回頁面（上一頁 / 下一頁），滾輪會回到之前紀錄的位置
    if (savedPosition) {
      return savedPosition
    }

    // 如果跳轉的頁面完整路由網址包含'newPage'，載入頁面時跳到top:500
    if (to.fullPath.match('newPage')) {
      return {
        top: 500,
      }
    }

    // 新頁面 → 預設滾到最上方
    return { top: 0 }
  },
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
        {
          // 示範-路由方法介紹
          path: 'routerNavigation',
          component: () => import('../views/RouterNavigation.vue'),
        },
      ],
    },
    // =========================
    // 錯誤頁面處理（404）
    // =========================

    // ⚠️ newPage 專用錯誤
    // 。 可以放在newPage的children
    // 。 如果放在routes外層，要放在倒數，
    // 。 且根據路由匹配範圍：
    //       -越精準 → 越前面
    //       -越寬鬆 → 越後面

    // 這個範例:newPage 底下找不到頁面 → 重新導向首頁
    {
      // 檢查newPage的子路由是否全部匹配
      path: '/newPage/:pathMatch(.*)*',
      // redirect 用來設定重新導向（轉址）
      // 。 裡面可以放 path 或 name
      redirect: {
        path: '/',
        // name: 'home',
      },
    },
    // 全站找不到頁面 → 顯示 404 畫面
    // ⚠️ 一定要放在 routes 最後，因為 /:pathMatch(.*)* 會匹配所有路徑
    {
      // 檢查是否全部匹配 → /:pathMatch(.*)*
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
