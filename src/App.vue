<template>
  <h2>{{ count }}</h2>
  <h2>2倍数据： {{ countDouble }}</h2>
  <button @click="decrement">减少</button>
  <button @click="increment">增加</button>
</template>

<script>
import { storeToRefs } from 'pinia'
import useCountStore from './store/count'


export default {
  name: 'App',
  setup() {
    const countStore = useCountStore();
    const { countNum } = storeToRefs(countStore); // 使用storeToRefs可以保证解构出来的数据也是响应式的

    return {
      countDouble: countStore.doubleCount,
      count: countNum,
      increment: countStore.increment,
      decrement: countStore.decrement,
    }
  }
}
</script>
