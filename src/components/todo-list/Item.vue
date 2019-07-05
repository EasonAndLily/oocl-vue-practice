<template>
  <li>
    <input type="checkbox" v-model="checked" @change="handleChange">
    <span v-bind:class="{checked: checkedea}">{{item.value}}</span>
  </li>
</template>

<script>
export default {
  name: "item",
  props: ["item"],
  data() {
    return {
      checked: this.item.isCompleted
    };
  },
  methods: {
    handleChange: function() {
      this.$emit("completeItem", this.checked, this.item.id);
    }
  }
};
</script>

<style scoped>
.checked {
  color: #999;
  text-decoration: line-through;
}
</style>
