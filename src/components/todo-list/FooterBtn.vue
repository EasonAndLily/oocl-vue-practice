<template>
  <li>
    <a href="#" v-bind:class="{selected: btn.selected}" @click="handleClick">{{btn.text}}</a>
  </li>
</template>

<script>
export default {
  name: "footer-btn",
  props: ["btn", "index"],
  methods: {
    handleClick: function() {
      this.$emit("filterItems", this.index);
    }
  }
};
</script>

<style scoped>
li {
  display: inline;
  margin: 0 0 5px 0;
  padding: 8px;
  list-style: none;
  outline: none;
}

li a {
  color: #fc999b;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}

.selected {
  border-color: rgba(175, 47, 47, 0.1) !important;
  background-color: rgba(175, 47, 47, 0.1);
}
</style>
