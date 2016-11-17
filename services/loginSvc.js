var app = angular.module("myApp")
app.service("loginSvc",function($q,$http){
    this.details=function(){
        return $http.get("json/login.json")
        // var dfd=$q.defer();
        // $http({
        //     method:"POST",
        //     url:"data",
        //     data:""
        // })
        //     .then(function (response) {
        //         dfd.resolve("response.data")
        //
        //     })
        //     .ctact(function(response){
        //         dfd.reject("error")
        //     })
    }
})
