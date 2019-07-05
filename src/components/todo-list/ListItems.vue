<template>
  <ol id="list-items">
    <li v-for="(item, key) in todoItems" :key="key">
      <input type="checkbox">
      <span>{{item}}</span>
    </li>
  </ol>
</template>

<script>
export default {
  name: "list-items",
  props: ["todoItems"]
};
</script>