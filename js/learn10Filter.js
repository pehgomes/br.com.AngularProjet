app.filter('primeiroFiltro',function(){
    return function(nome){
        return "Bem vindo "+ nome +" .";
    } 
});