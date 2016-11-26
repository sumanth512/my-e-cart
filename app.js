var app =angular.module("myApp",['ui.router','ngStorage']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('categories', {
            url:'/categories',
            templateUrl : "views/categories.html",
            controller: "categoriesCtrl"
        })
        .state("products", {
            url:"/products/:name",
            templateUrl : "views/products.html",
            controller: "productsCtrl"
        })
        .state("product-view", {
            url:"/product-view/:name",
            templateUrl : "views/productsview.html",
            controller: "productViewCtrl"
        })
        .state("cart", {
            url:"/cart",
            templateUrl : "views/cartview.html",
            controller:"cartCtrl"
        })
        .state("login",{
            url:"/login",
            templateUrl : "views/login.html",
            controller:"loginCtrl"
        })

    $urlRouterProvider.otherwise("/categories");


});
window.fbAsyncInit = function() {
    FB.init({
        appId      : '1271883099535891',
        xfbml      : true,
        version    : 'v2.7'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
// var app =angular.module("myApp",['ngRoute']);
//
// app.config(function($routeProvider) {
//     $routeProvider
//         .when("/", {
//             templateUrl : "views/categories.html",
//             // controller: "categoriesCtrl"
//         })
//         .when("/products/:name", {
//             templateUrl : "views/products.html",
//             controller: "productsCtrl"
//         })
//         .when("/product-view/:name", {
//             templateUrl : "views/productsview.html",
//             controller: "productViewCtrl"
//         })
//         .when("/cart", {
//             templateUrl : "views/cartview.html",
//             controller:"cartCtrl"
//         })
//         .when("/login",{
//             templateUrl : "views/login.html",
//             controller:"loginCtrl"
//         })
//
// });