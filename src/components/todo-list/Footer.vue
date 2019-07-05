<template>
  <div id="todolist-footer" class="footer-container">
    <ul id="filters" class="filters">
      <FooterBtn
        v-for="(btn, index) in btns"
        :key="index"
        v-bind:btn="btn"
        :index="index"
        v-on:filterItems="filterItems"
      />
    </ul>
  </div>
</template>

<script>
import FooterBtn from "./FooterBtn.vue";
export default {
  name: "todolist-footer",
  data() {
    return {
      btns: [
        {
          selected: true,
          text: "ALL"
        },
        {
          selected: false,
          text: "Active"
        },
        {
          selected: false,
          text: "Complete"
        }
      ]
    };
  },
  methods: {
    filterItems: function(index) {
      let selectedIndex = 0;
      let selectedBtn = this.btns.find((item, index) => {
        selectedIndex = index;
        return item.selected == true;
      });
      selectedBtn.selected = false;
      this.btns.splice(selectedIndex, 1, selectedBtn);

      let newSelectedBtn = this.btns[index];
      newSelectedBtn.selected = true;
      this.btns.splice(index, 1, newSelectedBtn);

      this.$emit("filterToDoList", newSelectedBtn.text);
    }
  },
  components: {
    FooterBtn
  }
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
</style>