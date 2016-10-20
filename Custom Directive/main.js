angular.module("exampleModel",[])
.directive("orderedList", function () {
        return function (scope, element, attributes) {
            var attrValue = attributes["orderedList"];
            var data = scope[attrValue];

            if (angular.isArray(data)) {
                var e = angular.element("<ol>");
                element.append(e);
                for (var i=0; i<data.length;i++) {
                    e.append(angular.element('<li>').text(data[i].name));
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