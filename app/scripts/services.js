'use strict';
angular.module('confusionApp')
    .constant('baseUrl','http://localhost:3000/')
	.service('MenuService',['$resource','baseUrl',function($resource,baseUrl){
		 
                       
                       
                            
                        
                        this.getDishes = function()
                        {
                        	return $resource(baseUrl+"dishes/:id",null,{'update':{method:'PUT'}}) ;
                        }
                     /*   this.getDish = function(index)
                        {
                        	return $http.get(baseUrl+"/dishes/"+index);
                        }*/
                  

    }])
    .factory('menuFactory',['baseUrl','$resource',function(baseUrl,$resource){
        var menufac = {};
       /* var promotions = [
            {
                      _id:0,
                      name:'Weekend Grand Buffet', 
                      image: 'images/buffet.png',
                      label:'New',
                      price:'19.99',
                      description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
            }];*/
        menufac.getPromotion = function(){
         
            return $resource(baseUrl+"promotions/:id",null);
        
        };
        return menufac;

    }])
    .factory('corporateFactory',['baseUrl','$resource', function(baseUrl,$resource) {
    
        var corpfac = {};

        
 
        // Implement two functions, one named getLeaders,
        corpfac.getLeaders = function(){
            return $resource(baseUrl+"leadership/:id");
        }
        // the other named getLeader(index)
       /* corpfac.getLeader = function(index){
            return leadership[index];
        }*/
        // Remember this is a factory not a service
        return corpfac ; 
    }])
    .factory('feedbackFactory',['baseUrl','$resource',function(baseUrl,$resource){
        var feedfac = {};
        feedfac.getFeedback = function(){
            return $resource(baseUrl+"feedback");
        }

        return feedfac ; 

    }])

	;