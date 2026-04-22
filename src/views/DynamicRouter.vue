<!-- 創建 動態路由 -->
<!-- 。檔名可自訂 -->
<template>
  <h2>動態路由範例</h2>
  <div>可以點選以下網址測試</div>
  <!-- 範例用參數c4cb945ffc1eac99測試 -->
  <div class="">
    <a href="https://tjup02.github.io/vite-router-project/#/newPage/dynamicRouter/c4cb945ffc1eac99"
      >github</a
    >
  </div>
  <div class="">
    <a href="http://localhost:5173/#/newPage/dynamicRouter/c4cb945ffc1eac99">localhost</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async created() {
    // https://randomuser.me/api/
    // 會根據 seed 對應不同的人物資料

    // 設定 seed 變數，從路由取得 seed
    // 並將 seed 傳給 API，讓 API 回傳固定人物資料

    // $route 代表目前的路由資訊
    // 路由的參數會放在 params 裡

    // 在 router/index.js 中有設定 path: '/user/:id'
    // 這裡從路由取得 id，並當作 seed 使用
    const seed = this.$route.params.id
    console.log(seed)
    // const seed = 'c4cb945ffc1eac99'
    try {
      const res = await axios.get(`https://randomuser.me/api/?seed=${seed}`)
      console.log(res)
    } catch (error) {
      console.log(error.response.data)
    }
  },
}
</script>
