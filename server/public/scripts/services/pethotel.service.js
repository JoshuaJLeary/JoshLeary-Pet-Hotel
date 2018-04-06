petApp.service('PetHotelService', ['$http', function($http) {
    console.log('PetHotelService has been loaded!');

    const self = this;
    self.pets = { list: [] };
    self.owners = { list: [] };


    self.addOwner = function(owner) {
        console.log('button clicked again!');
        $http({
            method: 'POST',
            url: '/owner',
            data: owner
        }).then(function(response) {
            console.log('OwnerController/addOwner', response)
            self.getOwner();
        }).catch(function(error) {
            console.log('OwnerController/addOwner/error', error);
        });
    }

    self.getOwner = function() {
        $http({
            method: 'GET',
            url: '/owner',
        }).then(function(response) {
            console.log('OwnerController/getOwner', response);
            self.owners.list = response.data;
        }).catch(function(error) {
            console.log('OwnerController/getOwner/error', error);
        });
    }

    self.addPet = function(pet) {
        console.log('add pet clicked!', pet);
        $http({
            method: 'POST',
            url: '/pet',
            data: pet
        }).then(function(response) {
            console.log('PetController/addPet', response)
            self.getOwner();
            self.getPet();
        }).catch(function(error) {
            console.log('PetController/addPet/error', error);
        });
    }

    self.getPet = function() {
        $http({
            method: 'GET',
            url: '/pet',
        }).then(function(response) {
            console.log('PetController/getPet', response);
            self.pets.list = response.data;
        }).catch(function(error) {
            console.log('PetController/getPet/error', error);
        });
    }

    self.deletePet = function(petId) {
        console.log(petId);
        $http({
            method: 'DELETE',
            url: `/pet/${petId}`
        }).then((response) => {
            self.getPet();
            alert('Success!');
        }).catch((error) => {
            console.log('error making rent get request', error);
            alert('Something went wrong! Check the server.');
        });
    }

    self.deleteOwner = function(ownerId) {
        console.log(ownerId);
        $http({
            method: 'DELETE',
            url: `/owner/${ownerId}`
        }).then((response) => {
            self.getPet();
            self.getOwner();
            alert('Success!');
        }).catch((error) => {
            console.log('error making get request', error);
            alert('Something went wrong! Check the server.');
        });
    }
    self.getPet();
    self.getOwner();

}]);




