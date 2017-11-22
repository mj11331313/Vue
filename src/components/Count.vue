<template>
  <div>
      <h1>计数器：{{$store.state.count}}</h1>
      <button @click="$store.commit('add')">增加</button>
      <button @click="$store.commit('reduce')">减少</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  data () {
      return {}
  },
  store
}
</script>

<style scoped>

</style>
