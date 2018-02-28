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


.controller('TimeContoller',['$scope','$interval',function($scope,$interval){
  $scope.timeNow = new Date().toUTCString() ;
  $interval(function(){
    $scope.timeNow = new  Date().toUTCString() ;
  },1000);
}])

     ;