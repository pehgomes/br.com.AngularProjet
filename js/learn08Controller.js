    app.controller('aula08Controller',function($scope){

        $scope.estados = ['CE','PB','PE'];

        $scope.pessoa = novaPessoa();


    });


        function novaPessoa(){
            return {
                nome : "",
                email : "",
                sexo : "f",
                estado: "CE"
            }
        }

