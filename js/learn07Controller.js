app.controller('aula07Controller',function($scope){
    $scope.nomes = ['Pedro','Jenny','Marta','Jailson','Letícia','Beatriz'];
    
    $scope.pessoas = [];
    
    $scope.pessoas.push(
        { nome: 'Pedro', idade: 20, status: true }
    );
    
    console.log($scope.pessoas);
    
    $scope.adiciona = function(){
        var nome  = document.getElementById("nomepessoa");
        var idade = document.getElementById("idadepessoa");
        
        $scope.pessoas.push(
            {nome: nome.value, idade: idade.value }
        );
        nome.value  = "";
        idade.value = "";
    }
    
    $scope.limpar = function(){
        $scope.pessoas.
    }
    
});