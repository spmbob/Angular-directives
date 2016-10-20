angular.module("exampleApp",[])
.directive("orderedList", function () {
        return function (scope, element, attributes) {
            var data = scope[attributes["orderedList"]];
            var expression = attributes["displayProperty"];

            if (angular.isArray(data)) {
                var e = angular.element("<ul>");
                element.append(e);
                for (var i=0; i<data.length;i++) {
                    (function () {
                        var item=angular.element('<li>');
                        e.append(item);
                        var index=i;

                        var watcherFunction = function (watchScope) {
                            return watchScope.$eval(expression, data[index]);
                        }

                        scope.$watch(watcherFunction, function (newValue, oldValue) {
                            item.text(newValue);
                        });
                    }());
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

        $scope.changePricesUp = function () {
            for (var i=0;i<$scope.items.length;i++) {
                $scope.items[i].price++;
            }
        }
        $scope.changePricesLow = function () {
            for (var i=0;i<$scope.items.length;i++) {
                $scope.items[i].price--;
            }
        }
    });