var app = angular.module('myApp')
app.controller("productsCtrl", function ($scope, productSvc, $stateParams, $localStorage) {
    productSvc.getProducts($stateParams.name)
        .then(function (response) {
            var products = [];
            var prd = response;

            for (var i = 0; i < prd.length; i++) {
                var name = prd[i].categories[0]
                // console.log(name)
                if (name == $stateParams.name) {
                    products.push(prd[i])
                    // console.log(products)
                }
            }
            $scope.productlist = products;

            // localStorage.pr= $scope.productlist
            $scope.cart = [];

            $scope.count = 0
            $scope.myCount = []
            // console.log($scope.cart)

            $scope.addToCart = function (product) {

                $scope.cart.push(product);
                console.log($scope.cart)
                // $scope.add.push(count++)
                // console.log(cart)
                $scope.mycart = $scope.cart;
                $scope.myCount = ++$scope.count
                console.log($scope.mycart)
                console.log($scope.myCount)

            }

        })
        .catch(function (response) {
            $scope.error = "error"
        })


})
