petApp.controller('OwnerController', ['PetHotelService', function(PetHotelService) {
    console.log('Owner Controller Loaded!');

    let self = this;

    self.ownerToAdd = { name: ''};

    self.owners = PetHotelService.owners;

    self.getOwner = PetHotelService.getOwner;

    self.deleteOwner = PetHotelService.deleteOwner;

    self.addOwner = function(owner){
    PetHotelService.addOwner(owner);
    self.ownerToAdd = { name: ''};
    }

    self.deleteOwner = function (owner) {
        console.log(owner);
        if(owner.count > 0) {
            alert('You cannot delete an owner with pets in the Hotel!')
        } else {
            PetHotelService.deleteOwner(owner.id);
        }
    }

}]);
