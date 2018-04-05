petApp.controller('PetController', ['$http', function($http) {
    console.log('Pet Controller Loaded!');

    let self = this;

    self.pets = { list: [] };

    self.addPet = function(pet) {
        $http({
            method: 'POST',
            url: '/pet',
            data: pet
        }).then(function(response) {
            console.log('PetController/addPet', response)
        }).catch(function(error) {
            console.log('PetController/addPet/error', error);
        });
}}]);