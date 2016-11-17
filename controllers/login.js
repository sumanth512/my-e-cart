var app = angular.module("myApp")
app.controller("loginCtrl",function(loginSvc,$scope,$location){
    $scope.login=function(){
        $scope.customer={
            user:$scope.email,
            pwd:$scope.password
        }
        loginSvc.details()
            .then(function (response) {
                $scope.details=response.data
                if($scope.customer.user== $scope.details.email && $scope.customer.pwd== $scope.details.password){
                    $location.path("/cart")
                }
                else{
                    $scope.error="invalid credationals"
                }
            })
    }


})
