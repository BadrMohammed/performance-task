<template>
  <div>
    <div class="c-users-list__main-info">
      <img class="c-users-list__avatar" @src="employee.profile.avatar" @alt="employee.profile.name">
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
  props: ["employee"],

   updated() {
    debugger
  },

};
</script>
