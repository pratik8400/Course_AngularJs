(function (){
    "use strict";

    angular.module("LunchCheck", [])
        .controller("LunchCheckController", function ($scope){
            $scope.menu = "";
            $scope.totalMenuItems = "";
            $scope.check = function (value){
               console.log(value)

            var totalMenuItems = calculateItems(value);
            $scope.totalMenuItems = totalMenuItems;

            };

            function calculateItems(string){
               console.log(string)

                /* const totalItemValue = string.split(",");
                let items = totalItemValue.length;

                if (items <= 3){
                    return "Enjoy!"
                }
                else if (items === 0) {
                    return "Please enter data first"
                }
                else{
                    return "Too much!"
                }*/
            }

        });
})();