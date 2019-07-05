<template>
  <div id="TodoList" class="container">
    <Header/>
    <Body ref="bodyList"/>
    <Footer v-on:filterToDoList="filterToDoList"/>
  </div>
</template>

<script>
import Header from "./components/todo-list/Header.vue";
import Body from "./components/todo-list/Body.vue";
import Footer from "./components/todo-list/Footer.vue";

export default {
  name: "TodoList",
  methods: {
    filterToDoList: function(value) {
      this.$refs.bodyList.filterItems(value);
    }
  },
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style scope>
.container {
  background-color: #fff;
  width: 400px;
  padding: 20px;
  padding-bottom: 10px;
  margin-top: 40px;
  border-radius: 5px;
}
</style>