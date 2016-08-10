app.service('operacoes', function(){
    
    console.log('Criando um service chamado de operacoes');
    
    
    this.somar = function(valor1,valor2){
        return valor1 + valor2;
    };
    
    this.subtrair = function(valor1, valor2){
        return valor1 - valor2;    
    };
    
});