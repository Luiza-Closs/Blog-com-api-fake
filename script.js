angular.module('blog',[])
angular.module('blog').controller('Rest', function($scope, $http){
    $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
    .success(function(data) {
        $scope.publicacoes = data;
    })
    .error(function(error) {
        console.log('Erro na solicitação:', error);
    })
});

