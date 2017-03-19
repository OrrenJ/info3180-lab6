var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function($scope){

	$scope.products = [ "Milk", "Bread", "Cheese" ];

	$scope.addItem = function(){
		$scope.products.push($scope.newItem);
		$("#new_item").val("");
	}

	$scope.removeItem = function(item){
		$scope.products.splice(item, 1);
	}

});
