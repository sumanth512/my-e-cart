var app=angular.module("myApp")
app.service("productSvc",function($http,$q){
    var products=""
this.getProducts=function(){
    var dfd=$q.defer();
    if(products == ""){
        $http({
        method:"GET",
        url:"http://localhost/cafeapi/products.php"
        })
            .then(function (response) {
                products=response.data.products;
                dfd.resolve(products);


            })
            .catch(function (response){
                dfd.reject=("error")
            })

    }
    else{
        dfd.resolve(products)
    }
     return dfd.promise

    }
})