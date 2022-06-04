<template>
  <div>
    <div class="c-users-list__main-info">
       <div> {{search-value}} </div>

      <!-- <img class="c-users-list__avatar" :src="{employee.profile.avatar}"> -->
      <!-- <div>{{ employee.profile.name }}</div> -->
    </div>
  </div>
  <!-- <div> {{ employee.email }} </div>
    <div> {{ employee.profile.address }} </div>
    <div> {{ employee.start_date | date }} </div>
    <div> {{ employee.performance_index }} </div>
    <div> {{ employee.profile.about }} </div> -->
</template>
<script>
export default {
  name: "EmployessList",
  props: ["search-value"],

  updated() {
    console.log(window.location.search)
  },
};
</script>
