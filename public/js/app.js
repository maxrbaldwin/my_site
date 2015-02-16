var app = angular.module('mySiteApp', ['ngRoute']);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/views/mostRecent.hbs',
            controller: 'templateController'
        });
});

app.factory('botFactory', function() {
    botFunctions = {};

    botFunctions.generateNumber = function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            number = numbers[Math.floor(Math.random() * numbers.length)];
        return number;
    };
    botFunctions.validate = function(number1, number2, answer) {
        var num1 = parseInt(number1),
            num2 = parseInt(number2),
            ans = parseInt(answer),
            add = num1 + num2;

        if (add === ans) {
            return true;
        } else if (add !== ans) {
            return false;
        }
    };
    botFunctions.valid = function() {
        console.log('Valid');
    };

    return botFunctions;
});

app.factory('functionFactory', function() {
    functions = {};

    functions.characterCount = function() {

    };

    return functions;
});

app.controller('formController', function($scope, botFactory, functionFactory) {
    $scope.number1 = botFactory.generateNumber();
    $scope.number2 = botFactory.generateNumber();
    $scope.name = "Full Name";
    $scope.email = "YourName@email.com";
    $scope.message = "140 Characters...";

    console.log(botFactory);

    $scope.eqValidate = function() {
        var number1 = $scope.number1,
            number2 = $scope.number2,
            answer = $scope.answer,
            check = botFactory.validate(number1, number2, answer);

        if (check === true) {
            botFactory.valid();
        } else if (check === false) {
            $scope.number1 = botFactory.generateNumber();
            $scope.number2 = botFactory.generateNumber();
            $scope.answer = 'Try again';
            $scope.test = 'invalid';
        }
    };
    $scope.message
});
