(function ()
{
    'use strict';

    function driverProfile()
    {
        function DriverProfileController(ergastAPI)
        {
            var ctrl = this;

            function init()
            {
                ergastAPI.getDriver(ctrl.name).then(function (driver)
                {
                    ctrl.driver = driver;
                });
            }

            init();
        }

        return {
            bindToController: {
                name: '@'
            },
            controller: DriverProfileController,
            controllerAs: 'driverProfCtrl',
            templateUrl: 'modules/common/directives/driver-profile.tpl.html',
            restrict: 'E'
        };
    }

    angular.module('app').directive('driverProfile', driverProfile);

})();

