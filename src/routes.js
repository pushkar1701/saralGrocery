angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('wishlist', {
            url: '/wishlist',
            templateUrl: 'app/wishlist.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'app/about.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'app/register.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/login.html'
        })
        .state('shipping', {
            url: '/shipping',
            templateUrl: 'app/shipping.html'
        })
        .state('kitchen', {
            url: '/kitchen',
            templateUrl: 'app/kitchen.html'
        })
        .state('terms', {
            url: '/terms',
            templateUrl: 'app/terms.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/contact.html'
        })
        .state('offer', {
            url: '/offer',
            templateUrl: 'app/offer.html'
        })
        .state('faqs', {
            url: '/faqs',
            templateUrl: 'app/faqs.html'
        });
}
