angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false,
    });
  })
  .config(($stateProvider) => {
    // $urlRouterProvider.otherwise('/404');
    $stateProvider
      // .state({
      //   name: 'app',
      //   url: '/',
      //   templateUrl: './pages/home-page/home-page.html',
      //   controller: 'homeController',
      //   controllerAs: 'homePageVm',
      // })
      .state({
        name: 'app',
        url: '/home-page/?search',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
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

      .state('error', {
        name: 'NotFound',
        url: '/404',
        template: '<v-notFound-page></v-notFound-page>',
      });
  });
