<template>
  <div class="c-search-container">
    <input type="search" placeholder="search keyword" name="search" v-model="searchValue" @input="handleFilter" />
    <button class="c-button" v-on:click="handleClear">clear</button>
  </div>
</template>
<script>
export default {
  name: "HomePageFilter",
  props: ["employees-list"],
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    handleFilter(event) {
      history.replaceState(
        null,
        null,
        `/home-page?searchvalue=${event.target.value}`
      );
    },
    handleClear() {
      this.searchValue = ""
      history.replaceState(
        null,
        null,
        `/home-page`
      );
    }
  },
};
</script>
