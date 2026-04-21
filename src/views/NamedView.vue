<!-- 命名視圖 -->
<template>
  <div class="row">
    <div class="col-6 border border-danger">
      <RouterView name="left"></RouterView>
    </div>
    <div class="col-6 border border-danger">
      <RouterView name="right"></RouterView>
    </div>
  </div>
</template>
