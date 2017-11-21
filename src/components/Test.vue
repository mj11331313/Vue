<template>
<div>
  <h1 class="test">{{msg}}</h1>
  <!--切换里面的组件时增加动画，name值自定义-->
  <transition name="myTrans">
    <router-view/>  <!--告诉router子组件渲染到这里-->    
  </transition>
</div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'test vue-router'
    }
  }
}
</script>
<!--scoped表示该样式只对当前组件有效-->
<style scoped>
.test{
    background: #0f0;
}
.myTrans-enter{
  opacity: 0;
}
.myTrans-leave{
  opacity: 1;
}
.myTrans-enter-active{
  transition: opacity 1s;
}
.myTrans-leave-active{
  transition: opacity 0.5s;
}
</style>

<!--组件写完后需要在APP.vue里配置,即调用,才能显示-->
