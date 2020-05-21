<template>
  <div id="app">
    <!-- 上面展示 -->
    <div>Hello World</div>
    <router-view />
    <!-- 底部导航 -->
    <div class="nav-bottom">
      <router-link to="/Home">
        <i class="iconfont"></i>
        <label>首页</label><br>
      </router-link>
      <router-link to="/about">
        <i class="iconfont"></i>
        <label>订单</label><br>
      </router-link>
      <router-link to="/my">
        <i class="iconfont"></i>
        <label>我的</label>
      </router-link>

    </div>

  </div>
</template>

<style>
/* #app{
  height: 500px;
  width: 400px;
  background-color: aqua;
  margin: 100px auto;
}
label{
  font-size: 20px;
}
#app.nav-bottom.active{
  color: yellow;
} */

</style>
