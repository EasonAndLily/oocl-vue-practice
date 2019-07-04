<template>
  <div id="app">
    <CounterGroup v-on:cal-number-sum="calNumberSum"/>
    <CounterSum v-bind:counterNumberSum="counterNumberSum"/>
  </div>
</template>

<script>
// import Counter from './components/Counter.vue'
import CounterGroup from './components/CounterGroup.vue';
import CounterSum from './components/CounterSum.vue';

export default {
  name: 'app',
  data: function() {
    return {
      counterNumberSum: 0
    }
  },
  methods: {
    calNumberSum: function(sum) {
      this.counterNumberSum = sum
    }
  },
  components: {
    CounterGroup,
    CounterSum
  }
}
</script>
