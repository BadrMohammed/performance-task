<template>
  <div class="c-search-container">
    <input type="search" placeholder="search keyword" name="search" v-model="searchValue" @input="handleFilter" />
    <button class="c-button-find" v-on:click="handleFind">Find</button>
    <button class="c-button" v-on:click="handleClear">Clear</button>
  </div>
</template>
<script>
export default {
  name: "HomePageFilter",
  props: ["search_value"],
  data() {
    return {
      searchValue: "",
    };
  },
  mounted() {
    if (window.location.href.split('=')[1]) { this.searchValue = window.location.href.split('=')[1].toLocaleLowerCase() }
  },

  methods: {
    handleFilter(event) {
      // this.search_value=event.target.value;
      history.pushState(
        null, null,
        `/#!/home-page?searchvalue=${event.target.value}`
      );
    },
    handleFind() {
      if (window.location.href.split('=')[1]) {
        window.location.reload()
      }
    },
    handleClear() {
      if (window.location.href.split('=')[1]) {
        this.searchValue = ""
        history.pushState(
          null,
          null,
          `/#!/home-page`
        );
        window.location.reload()
      }

    },
  },
};
</script>
