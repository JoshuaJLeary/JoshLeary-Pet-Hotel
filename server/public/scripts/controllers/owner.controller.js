petApp.controller('OwnerController', ['PetHotelService', function(PetHotelService) {
    console.log('Owner Controller Loaded!');

    let self = this;

    self.owners = PetHotelService.owners;

    self.getOwner = PetHotelService.getOwner;

    self.addOwner = PetHotelService.addOwner;

}]);


