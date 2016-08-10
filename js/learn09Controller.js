app.controller('learn09Controller',['$scope', 'operacoes','Pessoa', function($scope, operacoes,Pessoa){
    $scope.pessoa = new Pessoa();
    
    console.log("Iniciando controller");
    

    console.log(operacoes.somar(10,10));                                
                                    
}]);