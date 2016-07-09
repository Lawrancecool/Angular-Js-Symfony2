/**
 * Created by lawrance on 30/5/16.
 */

starsytemsmodule.controller('starEvents', function($scope)
{

    $scope.toggleVar = false;
    $scope.toggle = function() {
        $scope.toggleVar = !$scope.toggleVar;
    };
});

