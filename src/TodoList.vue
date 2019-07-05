<template>
  <div id="TodoList" class="container">
    <Header/>
    <Body v-bind:todoList="todoList"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/todo-list/Header.vue";
import Body from "./components/todo-list/Body.vue";
import Footer from "./components/todo-list/Footer.vue";

export default {
  name: "TodoList",
  data() {
    return {
      todoList: [
        {
          id: 0,
          value: "JavaScript",
          isCompleted: true
        },
        {
          id: 1,
          value: "Node.js",
          isCompleted: false
        },
        {
          id: 2,
          value: "Ruby",
          isCompleted: false
        }
      ]
    };
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