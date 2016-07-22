app.controller('aula06Controller', function($scope){
    $scope.nome = "Curso Angular Devmedia";
    
    
    $scope.olaMundo = function(qualquerNome){
        alert("Olá "+ qualquerNome +" !");
    }
    
    console.log("Controller foi executado com sucesso!");
});