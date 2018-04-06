petApp.controller('PetController', ['PetHotelService', function(PetHotelService) {
    console.log('Pet Controller Loaded!');

    let self = this;

    self.owners = PetHotelService.owners;

    self.pets = PetHotelService.pets;

    self.getPet = PetHotelService.getPet;

    self.addPet = PetHotelService.addPet;
    
}]);