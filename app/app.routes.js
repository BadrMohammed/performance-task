angular
  .module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false,
    });
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state({
        name: 'app',
        url: '/home-page/:id',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
        params: {
          id: { squash: true, value: null },
        },
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state({
        name: 'home-page-filter',
        url: '/home-page-filter',
        template: '<v-home-filter-page></v-home-filter-page>',
      })
      .state({
        name: 'employees-list',
        url: '/employees-list',
        template: '<v-employees-list></v-employees-list>',
      })

      .state({
        name: 'not-found-page',
        url: '/404-page',
        template: '<v-not-found-page></v-not-found-page>',
      });
    $urlRouterProvider.otherwise('/404-page');
  });
