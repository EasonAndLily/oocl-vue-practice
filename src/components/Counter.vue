<template>
  <div id="counter">
    <span>现在的数字是：{{ number }}</span><br/>
    <input type="button" v-on:click="$emit('increase-number', index)" title="+" value="点击+增加数字" /><br/>
    <input type="button" v-on:click="$emit('decrease-number', index)" title="-" value="点击-减少数字" />
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: ["number","index"]
}
</script>