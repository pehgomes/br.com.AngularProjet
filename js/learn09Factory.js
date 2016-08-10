app.factory('Pessoa', function(){
    
    console.log("Iniciando factory");
    var Pessoa = function(){
        this.nome = "Pedro";
    }
    
    return Pessoa;
});