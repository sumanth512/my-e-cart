var app=angular.module("myApp")
app.directive("addtocart",function(){
    return{
        restrict:"E",
    scope:{

        productId:'='
    },
    //     $scope.cart=cartSvc;
    // $scope.$watch("cart.getCount()",function(old, new){
    //     alert(new)
    // })

        controller:function($scope,cartSvc){
            $scope.isAddedToCart=false;
                // cartSvc.isAdded($scope.productId);
            $scope.addToCart=function(){
                if($scope.isAddedToCart){
                    cartSvc.removeItem($scope.productId)
                    $scope.isAddedToCart=false;
                }
                else{
                    cartSvc.addItem($scope.productId);
                    $scope.isAddedToCart=true;
                }
            }
        },
        template:'<button class="btn btn-success" ng-show="!isAddedToCart" ng-click="addToCart()">Add To Cart</button><button class="btn btn-success" ng-show="isAddedToCart" ng-click="addToCart()">Added To Cart</button>'
        // template:'<button class="btn btn-success" ng-click="addToCart()"><b ng-show="!isAddedToCart">Add To Cart</b><b ng-show="isAddedToCart" ng-click="addToCart()">Added To Cart</b></button>'
    }
})