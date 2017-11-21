<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <!--点击实现单页面局部切换：-->
      <router-link to="/">首页</router-link> <!--相当于a标签-->
      <router-link to="/test">测试</router-link>
      <!--传参方式一：v-bind
        name:组件的name值；params:要传的参数，后面是一个对象
      -->
      <router-link :to="{name: 'Test1',params: {name:'Cynthia',age:20}}">子路由1</router-link>
      <router-link to="/test/test2">子路由2</router-link>
      <!--传参方式二：url-->
      <router-link to="/testUrl/Cynthia/5">测试url传参</router-link>
      <!--重定向：-->
      <router-link to="/home">重定向</router-link>
      <!--重定向传参：-->
      <router-link to="/redirectparam/zhangsan/18">重定向传参</router-link>
    </div>
    <router-view/><!--改变路径时只切换该位置,可理解为占位符-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
