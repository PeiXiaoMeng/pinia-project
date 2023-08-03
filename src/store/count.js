import { defineStore } from 'pinia';

// 定义用户仓库, defineStore()接收的第一个参数为该仓库唯一标识ID
// 第二个参数为定义的仓库内容
const useCountStore = defineStore('count', {
  state() {
    return {
      countNum: 0,
    };
  },
  getters: {
    doubleCount() {
      return this.countNum * 2
    },
    tripleCount: state => state.countNum * 3
  },
  actions: {
    increment() {
      this.countNum++;
    },
    decrement() {
      this.countNum--;
    }
  }
});

export default useCountStore;