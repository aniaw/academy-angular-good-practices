(function ()
{
    'use strict';
    function ergastAPI($http)
    {
        function getDrivers()
        {
            return $http.get('http://ergast.com/api/f1/2013/driverStandings.json').then(function (result)
            {
                return result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            }).catch(function ()
            {
                //TODO
            });
        }

        function getDriver(id)
        {
            return $http.get('http://ergast.com/api/f1/2013/drivers/' + id + '/driverStandings.json').then(function (result)
            {
                return result.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
            });
        }

        function getDriverRaces(id)
        {
            return $http.get('http://ergast.com/api/f1/2013/drivers/' + id + '/results.json').then(function (result)
            {
                return result.data.MRData.RaceTable.Races;
            });
        }

        return {
            getDrivers: getDrivers,
            getDriver: getDriver,
            getDriverRaces: getDriverRaces
        };
    }

    angular.module('app').factory('ergastAPI', ['$http', ergastAPI]);
})();
