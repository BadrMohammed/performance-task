<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <performance-filter-component :from="from" :to="to" :filterByDate="filterByDate" :fetchChartData="fetchChartData" />
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :chartData="chartData" />
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../../components/vue-components/performance-chart.vue";
import PerformanceFilterComponent from "../../components/vue-components/preformance-filter.vue";
import axios from "axios";

export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    PerformanceFilterComponent,
  },
  methods: {

    //filter function
    filterByDate(start, end) {
      if (new Date(start) > new Date(end)) {
        alert("start date cannot be greater then end date");
      } else {
        let filterdChartData = this.chartData.filter(
          (item) =>
            new Date(item.date_ms) > new Date(start) &&
            new Date(item.date_ms) <= new Date(end)
        );
        this.chartData = filterdChartData;
      }
    },

    fetchChartData() {
      axios
        .get("https://fe-task.getsandbox.com/performance")
        .then((response) => {
          if (response.status === 200) {
            this.chartData = response.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      chartData: [],
      from: "",
      to: "",
    };
  },
  mounted() {
    this.fetchChartData()
  },
};
</script>
