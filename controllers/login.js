var app = angular.module("myApp")
app.controller("loginCtrl",function(loginSvc,$scope,$state){
    $scope.login=function(){
        $scope.customer={
            user:$scope.email,
            pwd:$scope.password
        }
        loginSvc.details()
            .then(function (response) {
                $scope.details=response.data
                if($scope.customer.user== $scope.details.email && $scope.customer.pwd== $scope.details.password){
                    $state.go("cart")
                }
                else{
                    $scope.error="invalid credationals"
                }
            })
    }

$scope.FBlogin=function(){
        FB.login(function(response){
            if(response.authResponse){
                console.log("fetching fata")
                FB.api('/me',function(response){
                    console.log("welcome")
                    var acessToken=FB.getAuthResponse();
                    console.log(acessToken)
                })
            }
            else{
                console.log("error")
            }
        })
}
})
