<template>
  <div class="row px-2">
    <div class="col-4">
      <div class="list-group">
        <!-- active-class="active" -->
        <!-- 。選取該選項時，加上.active -->
        <RouterLink to="/newPage/a" class="list-group-item list-group-item-action"
          >元件 A</RouterLink
        >
        <RouterLink to="/newPage/b" class="list-group-item list-group-item-action"
          >元件 B</RouterLink
        >
        <RouterLink to="/newPage/namedView/b2c" class="list-group-item list-group-item-action"
          >命名視圖b2c</RouterLink
        >
        <RouterLink to="/newPage/namedView/c2a" class="list-group-item list-group-item-action"
          >命名視圖c2a</RouterLink
        >

        <RouterLink to="/newPage/dynamicRouter/:id" class="list-group-item list-group-item-action"
          >動態路由($route)</RouterLink
        >

        <RouterLink
          to="/newPage/dynamicRouterByProps/:id"
          class="list-group-item list-group-item-action"
          >動態路由(props)</RouterLink
        >
        <RouterLink to="/newPage/routerNavigation" class="list-group-item list-group-item-action"
          >路由方法介紹
        </RouterLink>
      </div>
    </div>
    <div class="col-8"><RouterView></RouterView></div>
  </div>
</template>
<style></style>
