   'use strict';
    angular.module('confusionApp',[])
     .controller('MenuController',['$scope',function($scope){
        $scope.tab =1 ;
        $scope.fillText = "";
        $scope.showDetails = false ; 
        $scope.dishes=[
                         {
                           name:'Uthapizza',
                           image: 'images/uthapizza.png',
                           category: 'mains',
                           label:'Hot',
                           price:'4.99',
                           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'images/zucchipakoda.png',
                           category: 'appetizer',
                           label:'',
                           price:'1.99',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'images/vadonut.png',
                           category: 'appetizer',
                           label:'New',
                           price:'1.99',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'ElaiCheese Cake',
                           image: 'images/elaicheesecake.png',
                           category: 'dessert',
                           label:'',
                           price:'2.99',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        }
                        ];
        
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

 .controller('DishDetailController', ['$scope', function($scope) {

            var drating = 5;
            var dish={
                          name:'Uthapizza',
                          image: 'images/uthapizza.png',
                          category: 'mains', 
                          label:'Hot',
                          price:'4.99',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                    };
            
            $scope.radioData = [
              { label:'1', value:1 },
              { label:'2', value:2 },
              { label:'3', value:3 },
              { label:'4', value:4 },
              { label:'5', value:5 ,}
            ];
           
            $scope.addComment =  function(){
             
              if($scope.commentForm.$valid)
              {
                $scope.dish.comments.push({
                  rating : $scope.comments.rating ,
                  comment: $scope.comments.comment ,
                  author : $scope.comments.author ,
                  date: $scope.time , 
                });
              }
              $scope.comments.rating = 5 ;
              $scope.comments.comment = "";
              $scope.comments.author="";
              $scope.commentForm.$setPristine();
              console.log($scope.comments);
              console.log($scope.dish);
              console.log($scope.time);
              console.log($scope.dish.comments[5].date);
            };

            $scope.dish = dish;
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

     ;