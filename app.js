var app =angular.module("myApp",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider) {
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