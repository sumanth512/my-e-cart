var app=angular.module("myApp")
app.service("cartSvc",function () {
var cart=[];

    this.getItems=function(){
       return cart;
    }

    this.addItem=function(product){
        cart.push(product);

    };

    this.getCount=function(){
        return cart.length;

    }
    this.removeItem=function(product){
        var index=cart.indexOf(product);
        cart.splice(index,1)

    };
    this.updateItem=function(product){

    };

    this.isAdded=function(product){

    }
})
