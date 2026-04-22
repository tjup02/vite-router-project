<template>
  <div class="row px-2">
    <div class="col-4">
      <div class="list-group">
        <!-- active-class="active" -->
        <!-- 。選取該選項時，加上.active -->
        <RouterLink
          to="/newPage/a"
          active-class="active"
          class="list-group-item list-group-item-action"
          >元件 A</RouterLink
        >
        <RouterLink
          to="/newPage/b"
          active-class="active"
          class="list-group-item list-group-item-action"
          >元件 B</RouterLink
        >
        <RouterLink
          to="/newPage/namedView/b2c"
          active-class="active"
          class="list-group-item list-group-item-action"
          >b2c</RouterLink
        >
        <RouterLink
          to="/newPage/namedView/c2a"
          active-class="active"
          class="list-group-item list-group-item-action"
          >c2a</RouterLink
        >

        <RouterLink
          to="/newPage/dynamicRouter/:id"
          active-class="active"
          class="list-group-item list-group-item-action"
          >dynamicRouter</RouterLink
        >

        <RouterLink
          to="/newPage/dynamicRouterByProps/:id"
          active-class="active"
          class="list-group-item list-group-item-action"
          >dynamicRouterByProps</RouterLink
        >
      </div>
    </div>
    <div class="col-8"><RouterView></RouterView></div>
  </div>
</template>
<style></style>
