var app=angular.module("myApp")
app.service("productViewSvc",function($http){

    this.getProductsDetails=function(){
        return $http.get("http://localhost/cafeapi/products.php")
    }

})