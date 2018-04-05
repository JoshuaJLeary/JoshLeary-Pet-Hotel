petApp.controller('OwnerController', ['$http', function($http) {
    console.log('Owner Controller Loaded!');
    let self = this;

    self.owners = { list: [] };

    self.addOwner = function(owner) {
        $http({
            method: 'POST',
            url: '/owner',
            data: owner
        }).then(function(response) {
            console.log('OwnerController/addOwner', response)
        }).catch(function(error) {
            console.log('OwnerController/addOwner/error', error);
        });
}}]);
