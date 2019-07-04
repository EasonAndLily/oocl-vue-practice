<template>
  <div id="todolist-footer" class="footer-container">
    <ul id="filters" class="filters">
      <li>
        <a href="#" data-filter="all">ALL</a>
      </li>
      <li>
        <a href="#" data-filter="active">Active</a>
      </li>
      <li>
        <a href="#" data-filter="complete">Complete</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todolist-footer"
};
</script>

<style scope>
.footer-container {
  height: 20px;
  position: relative;
  bottom: 0px;
}
.filters {
  text-align: center;
}

.filters li {
  display: inline;
  margin: 0 0 5px 0;
  padding: 8px;
  list-style: none;
  outline: none;
}

.filters li a {
  color: #fc999b;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}
</style>