(function ()
{
    'use strict';

    function search()
    {
        return function (drivers, text)
        {
            var search = new RegExp(text, 'i');
            return drivers.filter(function (driver)
            {
                return !text || search.test(driver.Driver.givenName) || search.test(driver.Driver.familyName);
            });
        };
    }

    angular.module('app').filter('search', search);
})();
