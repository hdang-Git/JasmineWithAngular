var math = angular.module('math', []);

math.controller('Operations', function($http, $scope, $q){

    $scope.add = function() {
        $scope.z = $scope.x + $scope.y;
    };


});