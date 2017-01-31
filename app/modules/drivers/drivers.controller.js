(function ()
{
    'use strict';
    function DriversController(ergastAPI)
    {
        var ctrl = this;
        ctrl.nameFilter = null;
        ctrl.driversList = [];

        function init()
        {
            ergastAPI.getDrivers().then(function (drivers)
            {
                ctrl.driversList = drivers;
            });
        }

        init();
    }

    angular.module('app').controller('DriversController', ['ergastAPI', DriversController]);

})();
