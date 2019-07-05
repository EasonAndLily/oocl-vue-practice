<template>
  <div id="todolist-body" class="body-container">
    <div id="add-todoList" class="add-panel">
      <input type="text" class="item-input" v-model="inputItem" placeholder="enter a todo item">
      <input type="button" value="Add" class="add-btn" @click="addItem">
    </div>
    <div id="show-todoList" class="show-panel">
      <ListItems v-bind:todoItems="todoItems"/>
    </div>
  </div>
</template>

<script>
import ListItems from "./ListItems.vue";

export default {
  name: "todolist-body",
  data() {
    return {
      inputItem: "",
      todoItems: ["JavaScript", "Node.js", "Ruby"]
    };
  },
  methods: {
    addItem: function() {
      this.todoItems.push(this.inputItem);
      this.inputItem = "";
    }
  },
  components: {
    ListItems
  }
};
</script>

<style scope>
.body-container {
  display: flex;
  flex-direction: column;
}
.add-panel {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item-input {
  padding: 4px 15px 4px 4px;
  flex-grow: 10;
  height: 20px;
  font-size: 12px;
  border: 1px solid #9f9b9b;
  border-radius: 3px;
}
.add-btn {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  padding: 5px 15px;
  flex-grow: 1;
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  cursor: pointer;
}
input:focus {
  outline: none;
}
.show-panel {
  margin-top: 20px;
}
ol {
  padding-inline-start: 25px;
}

ol li {
  margin-top: 5px;
}

ol li span {
  margin-left: 5px;
}
</style>