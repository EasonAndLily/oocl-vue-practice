<template>
    <div id="todolist-header" class="header-container">
        <h2 class="title">To Do List</h2>
        <p class="sub-title">
            <em>Simple Todo List with adding and filter by diff status.</em>
        </p>
    </div>
</template>

<script>
export default {
    name: "todolist-header"
}
</script>

<style scope>
    .header-container {
        height: 60px;
    }
    .title {
        text-align: center;
    }
    .sub-title {
        display: flex;
        justify-content:center;
    }
</style>