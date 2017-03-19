var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function($scope){

	$scope.products = [ "Milk", "Bread", "Cheese" ];

	$scope.addItem = function(){

		$scope.errortext = "";

		if(!$scope.newItem){
			return;
		}

		if($scope.products.indexOf($scope.newItem) == -1){
			$scope.products.push($scope.newItem);
			$("#new_item").val("");
		} else {
			$scope.errortext = "The item is already in your shopping list.";
		}
	}

	$scope.removeItem = function(item){
		$scope.errortext = "";
		$scope.products.splice(item, 1);
	}

});
