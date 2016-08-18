function learn10Controller($scope, $filter){
    console.log("Iniciando do Controller...");
    
    console.log($filter('primeiroFiltro')('Pedro H. Gomes'));
    
    $scope.pessoa = {
        nome: "Pedro",
        idade: 20
    }
}

app.controller('learn10Controller',learn10Controller);