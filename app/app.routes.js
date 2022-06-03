angular.module('appModule')
  .config(($locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
    });
  })
  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/404');
    $stateProvider
      .state({
        name: 'app',
        url: '/',
        templateUrl: './pages/home-page/home-page.html',
        controller: 'homeController',
        controllerAs: 'homePageVm',
      })
      .state({
        name: 'team-performance',
        url: '/team-performance',
        template: '<v-performance-page></v-performance-page>',
      })
      .state('error', {
        name: 'NotFound',
        url: '/404',
        template: '<v-404Page-page></v-404Page-page>',
      });
    // .state('404', {
    //   name: '404-page',
    //   url: '/404',
    //   template: '<v-404Page-page></v-404Page-page>',
    // });
  });
