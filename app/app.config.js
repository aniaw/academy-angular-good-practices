(function ()
{
    'use strict';
    function config($compileProvider)
    {
        $compileProvider.preAssignBindingsEnabled(true);
    }

    angular.module('app').config(['$compileProvider', config]);

})();
