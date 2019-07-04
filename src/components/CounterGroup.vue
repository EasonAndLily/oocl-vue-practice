<template>
  <div id="counter-group">
    <Counter v-for="(number, index) in counters" v-bind:key="index" v-bind:index="index" v-bind:number="number"
     v-on:increase-number="increaseNumber" v-on:decrease-number="decreaseNumber"/> 
  </div>
</template>

<script>
import Vue from "vue";
import Counter from './Counter.vue';
export default {
    name: "counter-group",
    components: {
        Counter
    },
    data: function() {
        return {
            counters: [0, 0, 0]
        }
    },
    methods: {
        increaseNumber: function(id) {
            Vue.set(this.counters, id, this.counters[id] + 1);
            this.calSum();
        },
        decreaseNumber: function(id) {
            Vue.set(this.counters, id, this.counters[id] - 1);
            this.calSum();
        },
        calSum: function() {
            this.$emit("cal-number-sum",this.counters.reduce((a,b)=> a+b, 0));
        }
    },
}
</script>