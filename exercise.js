var app = angular.module('myApp', []);
app.controller('myController',function($scope) {
	$scope.abc = true;
    $scope.$watch('serchText', function(){
    	if($scope.serchText === '' || $scope.serchText == null){
    		$scope.abc=true;
    		$scope.aaa=false;
    	}else{
    		$scope.abc=false;
    		$scope.aaa=true;
    	}
    });

});