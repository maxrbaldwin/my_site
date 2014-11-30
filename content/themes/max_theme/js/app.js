var app = angular.module('mySiteApp', []);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

app.factory('botFactory', function() {

    return {
        equation: function() {
            var generateNumber = function() {
                var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    number = numbers[Math.floor(Math.random() * numbers.length)];
                return number;
            },
                firstNumber = generateNumber(),
                secondNumber = generateNumber(),
                statement = firstNumber + ' + ' + secondNumber + ' = ?';
            return statement;

        },
        validate: function(equation) {
            var parts = equation.split(' ');
            console.log(parts);
        }
    };
});

app.controller('formController', function($scope, botFactory) {
    $scope.bot = botFactory.equation();

    $scope.eqValidate = botFactory.validate($scope.bot);
});
