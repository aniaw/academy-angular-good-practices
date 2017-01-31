(function ()
{
    'use strict';

    function routes($routeProvider, $locationProvider)
    {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $routeProvider.when('/drivers', {
            templateUrl: 'modules/drivers/drivers.tpl.html',
            controller: 'DriversController',
            controllerAs: 'driversCtrl'
        });
        $routeProvider.when('/drivers/:id', {
            templateUrl: 'modules/drivers/driver-details.tpl.html',
            controller: 'DriverDetailsController',
            controllerAs: 'driverCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/drivers'});
    }

    angular.module('app').config(['$routeProvider', '$locationProvider', routes]);

})();

