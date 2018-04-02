   'use strict';
    angular.module('confusionApp')
     .controller('MenuController',['$scope','MenuService',function($scope,MenuService){
         $scope.showMenu = false ;
         $scope.message = "loading .. ";
        $scope.tab =1 ;
        $scope.fillText = "";
        $scope.showDetails = false ; 
        $scope.dishes = MenuService.getDishes().query(
            function(response) {
                $scope.dishes = response;
                $scope.showMenu = true;
            },
            function(response) {
                $scope.message = "Error: "+response.status + " " + response.statusText;
            }
        );
       /* $scope.dishes = {};
        MenuService.getDishes()
          .then(function(response){
              $scope.dishes = response.data ;
              $scope.showMenu = true ; 
          },
        function(response){
            $scope.message = "error : "+response.status+" "+respons.statusText;

        })
        ;*/
        
        $scope.select = function(setTab){
            $scope.tab = setTab ;
            if(setTab == 2)
                $scope.fillText = "appetizer";
            else if(setTab==3)
                $scope.fillText ="main";
            else if (setTab==4)
                $scope.fillText="dessert";
            else
                $scope.fillText="";
        }

        $scope.isSelected = function(checkTab){
                return ($scope.tab===checkTab);
        }

        $scope.toggleButton = function()
        {
            $scope.showDetails = !$scope.showDetails;
        }
        
        
    }])
.controller('ContactController',['$scope',function($scope){

  $scope.feedback = {  
      mychannel : "",
      firstname : "" ,
      lastname : "",
      agree : false ,
      email : ""
   }
   var channels = [{
    value:"tel" ,
    label:"tel"
   },
   {
    value:"email",
    label:"email"
   }];
   $scope.channel = channels;
   $scope.invalidChannelSelection = false ;

}])


.controller('FeedbackController',['$scope',function($scope){
  $scope.sendFeedback = function(){
      console.log($scope.feedback);
      if ($scope.feedback.agree && ($scope.feedback.mychannel == "")&& !$scope.feedback.mychannel) {

         $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                       agree:false, email:"" };
                    $scope.feedback.mychannel="";

                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
  }

}])

 .controller('DishDetailController', ['$scope','MenuService','$stateParams', function($scope,MenuService,$stateParams) {

            var drating = 5;
            $scope.showDish = false ; 
            $scope.message = "loading ...! ";
            $scope.dish =  {};
            MenuService.getDishes().get({id:parseInt($stateParams.id,10)}).$promise.then(
                function(response){
                    $scope.dish = response;
                    $scope.showDish = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                }
            );
           /* .then(function(response){
                $scope.dish = response.data ; 
                $scope.showDish = true ;
            },function(response){
                $scope.message = "error : "+response.status+" "+response.statusText;
            })
            ;  */          
            $scope.radioData = [
              { label:'1', value:1 },
              { label:'2', value:2 },
              { label:'3', value:3 },
              { label:'4', value:4 },
              { label:'5', value:5 ,}
            ];
            $scope.comments = {rating:5,comment:"",author:""};
            $scope.addComment =  function(){
             
              if(this.commentForm.$valid)
              {
                $scope.dish.comments.push({
                  rating : $scope.comments.rating ,
                  comment: $scope.comments.comment ,
                  author : $scope.comments.author ,
                  date: $scope.time , 
                });
                MenuService.getDishes().update({id:parseInt($stateParams.id,10)},$scope.dish);
              }
              $scope.comments.rating = 5 ;
              $scope.comments.comment = "";
              $scope.comments.author="";
              console.log($scope.commentForm);
              this.commentForm.$setPristine();
              console.log($scope.comments);
              
              console.log($scope.dish);
              console.log($scope.time);
              console.log($scope.dish.comments[5].date);
            };

           // $scope.dish = dish;
            $scope.defRad = function(r){
              if(r==5)
              {
                $scope.comments.rating = 5 ;
              }
            } ;
            $scope.time =  Date.now();
                   
            console.log($scope.dish);
            
        }])

.controller('TimeContoller',['$scope','$interval',function($scope,$interval){
  $scope.timeNow = new Date().toUTCString() ;
  $interval(function(){
    $scope.timeNow = new  Date().toUTCString() ;
  },1000);
}])
.controller('indexController',['$scope','corporateFactory','MenuService','menuFactory',function($scope,corporateFactory,MenuService,menuFactory){
    $scope.showDish = false;
    $scope.message="Loading ...";
    $scope.leader = corporateFactory.getLeader(2);
  $scope.promo= menuFactory.getPromotion(0);
  $scope.dish = MenuService.getDishes().get({id:0}).$promise.then(
    function(response){
        $scope.dish = response;
        $scope.showDish = true;
    },
    function(response) {
        $scope.message = "Error: "+response.status + " " + response.statusText;
    }
);
 /* $scope.dish =  {};
            MenuService.getDish(2)
            .then(function(response){
                $scope.dish = response.data ; 
                $scope.showDish = true ; 

            },
            function(response){
                $scope.message = "error : "+response.status+" "+response.statusText;
            }
        );
*/

}])
.controller('aboutController',['$scope','corporateFactory',function($scope,corporateFactory){
      $scope.leaders = corporateFactory.getLeaders();
}])
     ;