var myFormApp = angular.module("myFormApp", []);
myFormApp.controller("myFormController", [
  "$scope",
  "$http",
  function($scope, $http) {
    $scope.getnumbers = function() {
      $http.get("http://localhost:5000/api/items").then(function(response) {
        $scope.highbid = Math.max(
          response.data[0].number,
          response.data[1].number
        );
      });
    };
    $scope.putnumber1 = function() {
      var x = { number: $scope.number1 };
      $http
        .put(
          "http://localhost:5000/api/items/5cdff2a3d712990f38d55307",
          JSON.stringify(x)
        )
        .then(function(response) {
          console.log(response);
        });
    };
    $scope.putnumber2 = function() {
      var x = { number: $scope.number2 };
      $http
        .put(
          "http://localhost:5000/api/items/5cdff456d712990f38d55308",
          JSON.stringify(x)
        )
        .then(function(response) {
          console.log(response);
        });
    };
  }
]);
