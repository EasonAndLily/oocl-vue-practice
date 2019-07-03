<template>
  <div id="app">
    <span>现在的数字是：{{ number }}</span></br>
    <input type="button" v-on:click="increaseNumber" title="+" value="点击+增加数字" /></br>
    <input type="button" v-on:click="decreaseNumber" title="+" value="点击-减少数字" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: function() {
    return {
      number: 0
    }
  },
  methods: {
    increaseNumber: function() {
      this.number++;
    },
    decreaseNumber: function() {
      this.number--;
    }
  }
}
</script>
