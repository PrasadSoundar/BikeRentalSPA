/// <reference path="Scripts/angular.js" />
var BikeService = angular.module("BikeService", []);
BikeService.factory('BiApi', function ($http) {
    var urlBase = "http://localhost:4546/api";
    var BiApi = {};
    BiApi.getBicycles = function () {
        return $http.get(urlBase + '/Bicycle');
    };
    return BiApi;
});
BikeService.factory('MoApi', function ($http) {
    var urlBase = "http://localhost:4546/api";
    var MoApi = {};
    MoApi.getMotorcycles = function () {
        return $http.get(urlBase + '/Motorcycle');
    };
    return MoApi;
});
BikeService.factory('ScApi', function ($http) {
    var urlBase = "http://localhost:4546/api";
    var ScApi = {};
    ScApi.getScooters = function () {
        return $http.get(urlBase + '/Scooter');
    };
    return ScApi;
});
BikeService.factory('OfApi', function ($http) {
    var urlBase = "http://localhost:4546/api";
    var OfApi = {};
    OfApi.getOffRoadBikes = function () {
        return $http.get(urlBase + '/OffRoadBike');
    };
    return OfApi;
});
BikeService.factory('SuApi', function ($http) {
    var urlBase = "http://localhost:4546/api";
    var SuApi = {};
    SuApi.getSuperBikes = function () {
        return $http.get(urlBase + '/SuperBike');
    };
    return SuApi;
});
BikeService.factory('BdApi', function ($http) {
    var urlBase = "http://localhost:4546/api";
    var BdApi = {};
    BdApi.addBillingDetails = function (bill) {

        return $http.post(urlBase + '/BillingDetail', bill);
    };
    

    BdApi.getRentalHistory = function () {
        return $http.get(urlBase + '/BillingDetail');
    };
  
   

    BdApi.deleteRentalHistory = function (deleteRent) {
        return $http.delete(urlBase + '/BillingDetail/' + deleteRent.BillingId);
    };
    return BdApi;

});
