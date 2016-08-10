    app.controller('aula08Controller',function($scope){

        $scope.estados = ['CE','PB','PE'];

      


    });


        function novaPessoa(){
            return {
                nome : "",
                email : "",
                sexo : "f",
                estado: "CE"
            }
        }

