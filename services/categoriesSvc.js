var app=angular.module('myApp')
app.service("categoriesSvc",function ($http,$q) {
    var categories=""
    this.getCatg=function () {
        var dfd = $q.defer()
        if (categories == ""){
            $http({
                method: "GET",
                url: "http://localhost/cafeapi/categories.php"
            })
                .then(function (response) {
                    categories=response.data.product_categories
                    dfd.resolve(categories)

                })
                .catch(function (response) {
                    dfd.reject = (response)
                })
    }
        else{
            dfd.resolve(categories)
        }
        return dfd.promise
    }

})