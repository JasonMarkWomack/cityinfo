angular.module("app", ['ui.router'])


.config(function($urlRouterProvider, $stateProvider){
  $stateProvider




  .state('seeall',{
    templateUrl: '/html/seeall.html',
    url: '/seeall'



  })



  .state('atlanta',{
    templateUrl: '/html/atlanta.html',
    url: '/atlanta'

  })

  .state('saltlake',{
    templateUrl: '/html/saltlake.html',
    url: '/saltlake'

  })

  .state('berlin',{
    templateUrl: '/html/berlin.html',
    url: '/berlin'

  })

  .state('tokyo',{
    templateUrl: '/html/tokyo.html',
    url: '/tokyo'

  })

  .state('capetown',{
    templateUrl: '/html/capetown.html',
    url: '/capetown'

  })

});
