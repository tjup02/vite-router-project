<template>
  <!-- $route -->
  <div class="border-bottom border-danger py-3">
    <h3>$route</h3>
    <p>目前路由（資料），可取得路由的屬性</p>
    <p>範例: this.$route.fullPath 可用來調取"路由的完整路徑"</p>
    <a href="https://next.router.vuejs.org/zh/api/#routelocationnormalized">參考資料連結</a>
    <h5>常用屬性介紹</h5>
    <ul>
      <li>
        <strong class="d-block">params</strong>
        <mark>路由的路徑參數</mark>
        <ol class="text-info">
          <li>必填</li>
          <li>在 path 裡</li>
          <li>通常代表主要資料 id</li>
        </ol>
      </li>
      <li>
        <strong class="d-block">query</strong>
        <mark>路由的查詢參數</mark>
        <ol class="text-info">
          <li>可有可無</li>
          <li>在 ? 後面</li>
          <li>通常用在分頁、搜尋、篩選</li>
          <li>全部都是字串</li>
        </ol>
      </li>
      <li>
        <strong class="d-block">fullPath</strong>
        <mark>路由的完整路徑</mark>
      </li>
    </ul>
    <button type="button" @click="getRoute">$route(打開console面板看內容)</button>
  </div>

  <!-- $router -->
  <div class="border-bottom border-danger py-3">
    <h3>$router</h3>
    <p>控制路由（動作、方法）</p>
    <p>範例: this.$router.go(-1) 回上一頁</p>
    <a href="https://next.router.vuejs.org/zh/api/#router-方法">參考資料連結</a>
    <button type="button" @click="getRouter">$router(打開console面板看內容)</button>
    <h5>常用方法介紹</h5>
    <ul>
      <li>
        <!-- push -->
        <strong class="d-block">push</strong>
        <mark class="d-block">跳轉頁面</mark>
        <button @click="push" type="button">push</button>
      </li>
      <li>
        <!-- replace -->
        <strong class="d-block">replace</strong>
        <mark class="d-block">跳轉頁面(不會有歷史紀錄)</mark>
        <mark class="d-block">可用於登入後轉跳，避免使用者按上一頁回到登入頁面</mark>
        <button @click="replace" type="button">replace</button>
      </li>
      <li>
        <!-- go -->
        <strong class="d-block">go</strong>
        <mark class="d-block">操作歷史紀錄</mark>
        <button @click="goBack" type="button">go(-1)可回到上一頁</button>
        <p>go(1)可跳到下一頁</p>
      </li>
      <li>
        <!-- addRoute -->
        <strong class="d-block">addRoute</strong>
        <mark class="d-block">新增路由</mark>
        <mark class="d-block">常用於權限管理、後台等情況</mark>
        <button @click="addRoute" type="button">新增路由</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    getRoute() {
      console.log(this.$route)
    },
    getRouter() {
      console.log(this.$router)
    },
    push() {
      // 跳轉頁面

      // 可以接路由的path或name
      this.$router.push({ name: 'about' })
      //   this.$router.push('/newPage/dynamicRouter/c4cb945ffc1eac99')
    },
    replace() {
      // 跳轉頁面(不會有歷史紀錄，可用於login避免)

      // 可以接路由的path或name
      this.$router.replace({ name: 'about' })
      //   this.$router.push('/newPage/dynamicRouter/c4cb945ffc1eac99')
    },
    goBack() {
      // 操作歷史紀錄

      // 可回到上一頁，用法等同this.$router.back
      this.$router.go(-1)
      // 可跳到下一頁，用法等同this.$router.forward
      // this.$router.go(1)
    },

    addRoute() {
      // 新增路由
      this.$router.addRoute({
        path: '/toNew',
        name: 'toNew',
        component: () => import('./AboutView.vue'),
      })
      //轉跳到新增的路由
      this.$router.push('/toNew')
    },
  },
}
</script>
