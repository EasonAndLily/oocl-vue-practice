import Vue from "vue";
// import App from "./App.vue";
import TodoList from "./TodoList.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(TodoList)
}).$mount("#app");
