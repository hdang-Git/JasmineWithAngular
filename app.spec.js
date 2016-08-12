describe('tests math component', function(){
    beforeEach(module('math'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_
    }));

    describe('math operations ', function(){
        it('tests the add method: $scope.add', function(){
            var $scope = {};
            var controller = $controller('Operations', {$scope: $scope});
            $scope.x = 8;
            $scope.y = 9;
            $scope.add();
            expect($scope.z).toBe(17);
        });
    });
});



