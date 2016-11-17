var app=angular.module("myApp")
app.controller("cartCtrl",function ($scope,cartSvc) {

        $scope.myCart=cartSvc.getItems();
console.log($scope.myCart)
})