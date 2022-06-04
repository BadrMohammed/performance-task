<template>
  <div class="f-filter__form">
    <div class="f-filter-input__container">
      <form v-on:submit.prevent @submit.prevent="filterByDate(from, to)">
        <div>
          <!-- <label class="label">from</label> -->
          <input type="date" id="start" placeholder="start" value="from" v-model="from" required />
        </div>
        <div>
          <!-- <label class="label">to</label> -->
          <input type="date" id="end" placeholder="end" value="to" v-model="to" required />
        </div>
        <div>
          <button type="submit" class="c-button-find">Find</button>
          <button type="button" class="c-button"  v-on:click="fetchChartData">Reset</button>

        </div>

      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: "PerformanceFilterComponent",
  props: ["from", "to", "filterByDate","fetchChartData"],
};
</script>
