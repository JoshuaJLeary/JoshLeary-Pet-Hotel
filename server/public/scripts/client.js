let petApp = angular.module('PetApp', ['ngRoute']);

petApp.config(function($routeProvider) {
    console.log('config loaded!');

    $routeProvider
    .when('/pet', {
        templateUrl: '/views/pet.html',
        controller: 'PetController as vm'
    })
    .when('/owner', {
        templateUrl: '/views/owner.htm',
        controller:'OwnerController as vm'
    })
    .otherwise( {
        redirectTo: '/pet'
    })
});