   'use strict';
    angular.module('confusionApp',['ui.router'])
        .config(function($stateProvider,$urlRouterProvider){
            $stateProvider 
            .state('app',{
                url : '/',
                views : {
                    header : {
                        templateUrl : 'views/header.html'   
                    },
                    content : {
                        templateUrl : 'views/home.html' ,
                        controller : 'indexController'
                    },
                    footer : {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
            
            .state('app.aboutus',{
                url : 'aboutus',
                views : {
                    'content@': {
                        templateUrl : 'views/aboutus.html'
                    }
                }
            })

            .state('app.contactus',{
                url : 'contactus',
                views : {
                    'content@':{
                        templateUrl : 'views/contactus.html',
                        controller : 'ContactController'
                    }
                }
            })
            .state('app.menu',{
                url : 'menu',
                views : {
                    'content@' : {
                        templateUrl:'views/menu.html',
                        controller : 'MenuController'
                    }
                    
                }
            })
            .state('app.dishDetail',{
                url : 'menu/:id',
                views : {
                    'content@':{
                        templateUrl : 'views/dishdetail.html',
                        controller : 'DishDetailController'
                    }
                }
            });
            $urlRouterProvider.otherwise('/');


        })
       /* 
       ngRoute syntax
       .config(function($routeProvider){
            $routeProvider

            //route for contact us
            .when('/contactus',{
                templateUrl : 'contactus.html',
                controller : 'ContactController'
            })
            //route for menu
            .when('/menu',{
                templateUrl : 'menu.html',
                controller : 'MenuController'
            })
            //route for dish detail
            .when('/menu/:id',{
                templateUrl : 'dishdetail.html',
                controller : 'DishDetailController'
            })
            //default route 
            .otherwise('/contactus');
        })*/
    
    /*
  

    */
    ;