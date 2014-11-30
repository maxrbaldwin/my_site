var app = angular.module('mySiteApp', []);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

app.controller('formController', function($scope){
    $scope.validate = function() {

    };
    var send = function() {

    },
    botEquation = function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            firstNumber = numbers[Math.floor(Math.random() * numbers.length)],
            secondNumber = numbers[Math.floor(Math.random() * numbers.length)],
            statement = firstNumber + ' + ' + secondNumber + ' = ?';
        return statement;
    };

    $scope.bot = botEquation();
});