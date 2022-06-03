import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import NotFoundPageComponent from './pages/not-found-page.vue';
import HomePageFilterComponent from './pages/home-page/home-page-filter.vue';
import EmployeesListComponent from './components/employees-list/employees-list.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule').directive('vNotFoundPage', (createVueComponent) => {
  return createVueComponent(Vue.component('NotFoundPageComponent', NotFoundPageComponent));
});

angular.module('appModule').directive('vEmployeesList', (createVueComponent) => {
  return createVueComponent(Vue.component('EmployeesListComponent', EmployeesListComponent));
});

angular.module('appModule').directive('vHomeFilterPage', (createVueComponent) => {
  return createVueComponent(Vue.component('HomePageFilterComponent', HomePageFilterComponent));
});

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});
