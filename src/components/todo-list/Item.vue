<template>
  <li>
    <input type="checkbox" v-model="checked" @change="handleChange">
    <span>{{item.value}}</span>
  </li>
</template>

<script>
export default {
  name: "item",
  props: ["item"],
  data() {
    return {
      checked: this.item.checked
    };
  },
  methods: {
    handleChange: function(checked) {}
  }
};
</script>