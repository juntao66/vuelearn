<template>
  <div>
    <!-- 轮播图 -->
    <div class="banner">
      <img v-for="(v,i) in imgArray" :key="i" :src="v" v-show="n==i"/>

      <div>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>

    </div>
    <!-- 导航 -->
    <div>

    </div>
    <!-- 列表展示 -->
    <div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// 
import Map from '@/components/Map.vue'

export default {
  name:'Home',
  components:{
    Map
  }
}
</script>
