var firstModule = angular.module('modul',[]);

firstModule.filter('test', function(){
    return function(nome){
        return "Bem vindo " + nome + " !"; 
    }               
});