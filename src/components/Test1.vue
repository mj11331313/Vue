<template>
  <div>
    <h1>子路由1</h1>
    <!--获取参数：$route.params.参数名-->
    <h1>姓名：{{$route.params.name}} 年龄：{{$route.params.age}}</h1>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>

</style>
