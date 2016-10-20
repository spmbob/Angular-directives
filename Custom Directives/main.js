angular.module("exampleApp",[])
.directive("orderedList", function () {
        return function (scope, element, attributes) {
            var data = scope[attributes["orderedList"]];
            var prop = attributes["displayProperty"];

            if (angular.isArray(data)) {
                var elem = angular.element("<ol>");
                element.append(elem);
                for (var i=0; i<data.length;i++) {
                    elem.append(angular.element('<li>').text(data[i][prop]));
                }
            }
        }
    })
.controller("defaultCtrl", function ($scope){
        $scope.items = [
            {name:"Table", price: 44.10},
            {name:"Chair", price: 21.20},
            {name:"Pillow", price: 12.20},
            {name:"Picture", price: 112.70},
            {name:"Lamp", price: 28.31}
        ];
    });