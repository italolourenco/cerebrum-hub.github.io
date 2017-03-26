		angular.module("app").controller("cerebrum_ctrl", function($scope, $http) {

				$scope.user_selection = false;
				$scope.pesquisa = false
				$scope.campoUser = false;

				$scope.buscar = function(){
					if($scope.busca!='') {
						$http({
							method: 'GET',
							url: 'https://api.github.com/search/users?q=' + $scope.busca + '+in:%3Efullname'})
							.then(
								function(success){
									$scope.dados = success.data.items;
									$scope.pesquisa = true;
									$scope.campoUser = false;
								},
								function(error){
									console.log("The request failed:" + error);
								}

							);
					}
					else{
						$scope.pesquisa = false;
						$scope.campoUser = false;
					}

				}
				
				$scope.selecionar_usuario = function(user){
					$scope.user_selection = user;
					$scope.campoUser = true;
					$scope.pesquisa = false;
					$scope.buscarUser(user.url);
				}

				$scope.buscarUser = function(user_url){
						$http({
							method: 'GET',
							url: user_url
							}).then(function(success){
								$scope.userDados = success.data
						});
				}

		});