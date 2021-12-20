(function (){
    "use strict";

    angular.module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = "";
        $scope.totalMenuItems = "";

        $scope.check = function () {
            console.log($scope.menu)

            //var totalMenuItems = calculateItems(value);
            //$scope.totalMenuItems = totalMenuItems;
            let totalItemValue = $scope.menu.split(",");
            totalItemValue = totalItemValue.filter((i)=> i.trim().length > 0)
            let items = totalItemValue.length;
            console.log(items)

            if (items === 0) {
                $scope.totalMenuItems = "Please enter data first";
            } else if (items <= 3) {
                $scope.totalMenuItems = "Enjoy!";
            } else {
                $scope.totalMenuItems = "Too much!";
            }
        };
    }

})();