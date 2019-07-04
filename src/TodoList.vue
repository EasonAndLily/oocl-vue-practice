<template>
    <div id="TodoList" class="container">
        <Header/>
        <Body/>
        <Footer/>
    </div >
</template>

<script>
import Header from './components/todo-list/Header.vue';
import Body from './components/todo-list/Body.vue';
import Footer from './components/todo-list/Footer.vue';

export default {
    name: "TodoList",
    components: {
        Header,
        Body,
        Footer
    }
}
</script>

<style scope>
.container {
  background-color: #fff;
  height: 200px;
  width: 400px;
  padding: 20px;
  padding-bottom: 10px;
  margin-top: 40px;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
}
</style>