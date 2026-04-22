<!-- 創建 動態路由 -->
<!-- 。檔名可自訂 -->
<template>
  <h2>prop+動態路由範例</h2>
  <div>可以點選以下網址測試</div>
  <!-- 範例用參數c4cb945ffc1eac99測試 -->
  <div class="">
    <a
      href="https://tjup02.github.io/vite-router-project/#/newPage/dynamicRouterByProps/c4cb945ffc1eac99"
      >github</a
    >
  </div>
  <div class="">
    <a href="http://localhost:5173/#/newPage/dynamicRouterByProps/c4cb945ffc1eac99">localhost</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // https://randomuser.me/api/
  // 會根據 seed 對應不同的人物資料

  //用 props 接收從 route.params(寫在router/index.js) 轉換而來的資料
  props: ['id'],
  async created() {
    console.log('prop', this.id)
    const seed = this.id
    try {
      const res = await axios.get(`https://randomuser.me/api/?seed=${seed}`)
      console.log(res)
    } catch (error) {
      console.log(error.response.data)
    }
  },
}
</script>
