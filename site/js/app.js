var app = angular.module('mySiteApp', ['ngRoute']);

app.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/views/mostRecent.hbs',
            controller: 'templateController'
        })
});

app.factory('botFactory', function() {

    return {
        generateNumber: function() {
            var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                number = numbers[Math.floor(Math.random() * numbers.length)];
            return number;
        },
        validate: function(number1, number2, answer) {
            var num1 = parseInt(number1),
                num2 = parseInt(number2),
                ans = parseInt(answer),
                add = num1 + num2;

            if (add === ans) {
                return true;
            } else if (add !== ans) {
                return false;
            }
        },
        valid: function() {
            console.log('Valid');
        }
    };

});

app.controller('formController', function($scope, botFactory) {
    $scope.number1 = botFactory.generateNumber();
    $scope.number2 = botFactory.generateNumber();

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
    }
});

app.controller('templateController', function($scope){
    console.log('running');
});
