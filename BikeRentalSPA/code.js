/// <reference path="Scripts/angular.js" />
 /// <reference path="Scripts/angular.js" />

var activeEmail;

var MyApp = angular.module("MyApp", ['ngRoute','BikeService']);

MyApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/Home', {
            templateUrl: 'Views/Home.html',
            controller: 'HomeController'
        }).
        when('/Contact', {
                templateUrl: 'Views/Contact.html',
                controller: 'ContactController'
        }).
         when('/T&C', {
             templateUrl: 'Views/T&C.html',
             controller: 'T&CController'
         }).
        when('/UserLogin', {
            templateUrl: 'Views/UserLogin.html',
            controller: 'LoginController'
        }).
        when('/Bicycles', {
            templateUrl: 'Views/Bicycles.html',
            controller: 'BicyclesController'
        }).
        
        when('/Motorcycles', {
            templateUrl: 'Views/Motorcycles.html',
            controller: 'MotorcyclesController'
        }).
       when('/Scooters', {
           templateUrl: 'Views/Scooters.html',
           controller: 'ScootersController'
       }).
       when('/OffRoad', {
           templateUrl: 'Views/OffRoad.html',
           controller: 'OffRoadController'
       }).
       when('/SuperBikes', {
           templateUrl: 'Views/SuperBikes.html',
           controller: 'SuperBikesController'
       }).
       
       when('/RentalHistory', {
           templateUrl: 'Views/RentalHistory.html',
           controller: 'RentalHistoryController'
       }).     
        when('/BillingDetails', {
            templateUrl: 'Views/BillingDetails.html',
            controller: 'BillingDetailsController'
        });
        
        //otherwise({
        //    redirectTo: 'index'
        //});
    }]);



MyApp.controller("IndexController", function ($scope) {
    
    //$rootScope.hideit = true;


});

MyApp.controller("HomeController", function ($rootScope,$scope) {
    $rootScope.hideit = true;
    
});
MyApp.controller("T&CController", function ($rootScope, $scope) {
    $rootScope.hideit = true;

});
MyApp.controller("ContactController", function ($rootScope, $scope) {
    $rootScope.hideit = true;

});
MyApp.controller("BicyclesController", function ($rootScope, $scope, $location,BiApi,BiService){
    $rootScope.hideit = true;
    

    getBicycleDetails();
    

    function getBicycleDetails() {
        BiApi.getBicycles().then(function onSuccess(response) {
            $scope.BiD = response.data;
        })
        .catch(function onError(error) {
            $scope.status = 'Unable to load Bicycle data:' + error.message;
        });
    }
    $scope.getParticularRecord = function(index)
    {
        //console.log(index);
        //console.log($scope.BiD);
        //console.log($scope.BiD[index]);
        $scope.activeRecord = $scope.BiD[index];
    }
    $scope.activeBook = BiService.activeBook;

    $scope.checkLogin = function (ind) {
        
        $scope.activeRecord = $scope.BiD[ind];
        BiService.activeBook.push($scope.activeRecord);
        $scope.useremail = cookies.get('userEmail');
        if ($scope.useremail != null) {
            
            $location.path("/BillingDetails");
        }

        else
        {
            window.alert("Login using your google account to book the item ");
            
        } 
    }
   
});

MyApp.controller("MotorcyclesController", function ($rootScope, $scope, $location, MoApi, BiService) { //SharedBookIndex) {
    $rootScope.hideit = true;


    getMotorcycleDetails();


    function getMotorcycleDetails() {
        MoApi.getMotorcycles().then(function onSuccess(response) {
            $scope.MiD = response.data;
        })
        .catch(function onError(error) {
            $scope.status = 'Unable to load Motorcycle data:' + error.message;
        });
    }
    $scope.getParticularRecord = function (index) {
       
        $scope.activeRecord = $scope.MiD[index];
    }
    $scope.activeBook = BiService.activeBook;

    $scope.checkLogin = function (ind) {

        $scope.activeRecord = $scope.MiD[ind];
        BiService.activeBook.push($scope.activeRecord);
        $scope.useremail = cookies.get('userEmail');
        if ($scope.useremail != null) {

            $location.path("/BillingDetails");
        }

        else {
            window.alert("Login using your google account to book the item ");

        }
    }
});

MyApp.controller("ScootersController", function ($rootScope, $scope, $location, ScApi, BiService) { //SharedBookIndex) {
    $rootScope.hideit = true;


    getScooterDetails();


    function getScooterDetails() {
        ScApi.getScooters().then(function onSuccess(response) {
            $scope.SciD = response.data;
        })
        .catch(function onError(error) {
            $scope.status = 'Unable to load scooters data:' + error.message;
        });
    }
    $scope.getParticularRecord = function (index) {
       
        $scope.activeRecord = $scope.SciD[index];
    }
    $scope.activeBook = BiService.activeBook;
    $scope.checkSLogin = function (ind) {
        
        $scope.activeRecord = $scope.SciD[ind];
        //console.log($scope.activeRecord);
        BiService.activeBook.push($scope.activeRecord);
        $scope.useremail = cookies.get('userEmail');
        if ($scope.useremail != null) {

            $location.path("/BillingDetails");
        }

        else {
            window.alert("Login using your google account to book the item ");

        }
    }
    
});

MyApp.controller("OffRoadController", function ($rootScope, $scope, $location, OfApi, BiService) { //SharedBookIndex) {
    $rootScope.hideit = true;


    getOffRoadDetails();


    function getOffRoadDetails() {
        OfApi.getOffRoadBikes().then(function onSuccess(response) {
            $scope.OiD = response.data;
        })
        .catch(function onError(error) {
            $scope.status = 'Unable to load off road bike data:' + error.message;
        });
    }
    $scope.getParticularRecord = function (index) {
        
        $scope.activeRecord = $scope.OiD[index];
    }
    $scope.activeBook = BiService.activeBook;

    $scope.checkLogin = function (ind) {

        $scope.activeRecord = $scope.OiD[ind];
        BiService.activeBook.push($scope.activeRecord);
        $scope.useremail = cookies.get('userEmail');
        if ($scope.useremail != null) {

            $location.path("/BillingDetails");
        }

        else {
            window.alert("Login using your google account to book the item ");

        }
    }
});

MyApp.controller("SuperBikesController", function ($rootScope, $scope, $location, SuApi,BiService){ 
    $rootScope.hideit = true;


    getSuperBikeDetails();


    function getSuperBikeDetails() {
        SuApi.getSuperBikes().then(function onSuccess(response) {
            $scope.SiD = response.data;
        })
        .catch(function onError(error) {
            $scope.status = 'Unable to load Super bike data:' + error.message;
        });
    }
    $scope.getParticularRecord = function (index) {
        
        $scope.activeRecord = $scope.SiD[index];
    }
    $scope.activeBook = BiService.activeBook;

    $scope.checkLogin = function (ind) {

        $scope.activeRecord = $scope.SiD[ind];
        BiService.activeBook.push($scope.activeRecord);
        $scope.useremail = cookies.get('userEmail');
        if ($scope.useremail != null) {

            $location.path("/BillingDetails");
        }

        else {
            window.alert("Login using your google account to book the item ");

        }
    }
});

MyApp.controller("BillingDetailsController", function ($scope,$window,BdApi,BiService) {
    
    $scope.activeBk = BiService.activeBook;
    console.log($scope.activeBk);
    $scope.userEmail = cookies.get('userEmail');
    
    
    
    $scope.today = new Date();
    
    $scope.ProceedToPay = function () {

        console.log();
        

        var rental = document.getElementById("activeRentalPrice");
        
        $scope.RentalPrice = rental.getAttribute('value');
        var modelNo=document.getElementById("modelNo");
        $scope.modelNo = modelNo.getAttribute('value');
        var brand = document.getElementById("brand");
        $scope.brand = brand.getAttribute('value');
        var scope = this;
        
        scope.calcDiff = function(){

            var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
            var diffDays = (Math.round(Math.abs(($scope.fromDate.getTime() - $scope.endDate.getTime()) / (oneDay)))) + 1;
            //console.log(diffDays)
            return diffDays;
            
     }
        
        $scope.diff = scope.calcDiff();
       
        //calculate the total rental fee
        $scope.totalRentalFee = $scope.diff * $scope.RentalPrice; 
        
        //console.log($scope.totalRentalFee);
    }
       
    $scope.deleteItem = function ($index) {
     
        $scope.activeBk.splice(this.$index, 1);  
    }
    
    $scope.bookNow = function (indx) {
        $scope.delbook = indx;
        $scope.book = $scope.activeBk[indx];
        console.log($scope.book);
    }

    $scope.clearbooked = function () {
        $scope.book.splice(this.$scope.delbook, 1);
    }

    
    $scope.AddBill = function () {
        var addBillDet = {
            'Email': $scope.userEmail,
            'FirstName': $scope.firstName,
            'LastName': $scope.lastName,
            'Contact_No': $scope.contactNo,
            'FromDate': $scope.fromDate,
            'EndDate': $scope.endDate,
            'Rental_Fee': $scope.Rental_Price,
            'Total_Fee': $scope.totalRentalFee,
            'Model_No': $scope.modelNo,
            'Brand':$scope.brand
        };
        BdApi.addBillingDetails(addBillDet)
                    .then(function onSuccess(response) {
                        alert("Order Placed");
                        $scope.userEmail = undefined;
                        $scope.firstName = undefined;
                        $scope.lastName = undefined;
                        $scope.contactNo = undefined;
                        $scope.fromDate = undefined;
                        $scope.endDate = undefined;
                        $scope.RentalPrice = undefined;
                        $scope.totalRentalFee = undefined;
                        $scope.modelNo = undefined;
                        $scope.brand = undefined;
                    })
        .catch(function onError(error) {
            $scope.status = 'Order not placed' + error.message;
        });
    }   
   

});
MyApp.controller("RentalHistoryController", function ($rootScope,$scope, BdApi, BiService) {
    $rootScope.hideit = true;
    $scope.userEmail = cookies.get('userEmail');
    getRentalDetails();

    $scope.selectedItem = "Select BillingId";
    $scope.isDeleteItemVisible = false;
    function getRentalDetails() {
        BdApi.getRentalHistory().then(function onSuccess(response) {
            $scope.RhiD = response.data;
            console.log($scope.RhiD);
            //console.log($scope.RhiD[0]);
            console.log($scope.RhiD[0]);

        })
        .catch(function onError(error) {
            $scope.status = 'Unable to load Rental history:' + error.message;
        });

    }

    $scope.dropboxitemselected = function (item) {
        $scope.isDeleteItemVisible = true;
        $scope.selectedItem = item.BillingId;
        $scope.fName = item.FirstName;
        $scope.lName = item.LastName;
        $scope.cNumber = item.Contact_No;
        $scope.billId = item.BillingId;
    };

   

    $scope.DeleteRental = function () {
        var deleteRent = {
            'BillingId': $scope.billId
        };
        BdApi.deleteRentalHistory(deleteRent).then(function onSuccess(response) {
            alert("Your Rental cancelled.. Refund will be followed shortly");
            $scope.fName = undefined;
            $scope.lName = undefined;
            $scope.cNumber = undefined;
            $scope.billId = undefined;
            $scope.selectedItem = "Select BillingId";
            $scope.isDeleteItemVisible = false;
            getRentalDetails();
        })
        .catch(function onError(error) {
            $scope.status = 'Unable to update the rental' + error.message;
        });
    }
});

MyApp.factory('BiService', BiService);
function BiService() {
    var service = {
        activeBook: []
    }
    return service;
}