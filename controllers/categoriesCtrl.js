var app=angular.module('myApp')
app.controller("categoriesCtrl",function($scope,categoriesSvc,cartSvc) {
    function getlist(){
        categoriesSvc.getCatg()
            .then(function (response) {
                $scope.categories=response

            })
            .catch(function (response) {
                $scope.response="error response"

            })
    }

    getlist();

    $scope.myCart=cartSvc;
    $scope.$watch("myCart.getCount()",function(x,y){
        $scope.myCount=x;
        // console.log(y);
    })

})