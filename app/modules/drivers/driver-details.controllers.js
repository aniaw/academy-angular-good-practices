(function ()
{
    'use strict';

    function DriverDetailsController($routeParams, ergastAPI)
    {
        var ctrl = this;
        ctrl.name = $routeParams.id;
        ctrl.races = [];
        ctrl.driver = null;

        function init()
        {
            ergastAPI.getDriverRaces(ctrl.name).then(function (races)
            {
                ctrl.races = races;
            });
        }

        init();
    }

    angular.module('app').controller('DriverDetailsController', ['$routeParams', 'ergastAPI', DriverDetailsController]);

})();
