var firstModule = angular.module('hello',[]);

firstModule.filter('test', function(){
    return function(nome){
        return "Bem vindo " + nome + " !"; 
    }               
});