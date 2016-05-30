angular.module('connectUApp')
  .controller('MainController', ['$http', 'ConnectUService', function($http, ConnectUService){
    var vm = this;

    vm.someUsers = ConnectUService.someUsers;
    console.log("maincontroller", vm.someUsers);

    vm.zip_code = '';

    vm.newUser = {};
    vm.newUser.internships = [];

// if vm.loggedIn = true - shows Profle and Log Out, if vm.loggedIn = false - shows Alumni login
// MUST ADD IF STATEMENT TO CHANGE TRUE/FALSE
    vm.loggedIn = false;

    vm.registerUser = function(){
      console.log('vm.newUser from mainController:', vm.newUser);
      console.log('vm.newUser.internships[0] from mainController:', vm.newUser.internships[0]);
      console.log('vm.newUser.internships[1] from mainController:', vm.newUser.internships[1]);


      // for(var it = 0; it <= vm.newUser.internship[it]; it++){
      //   vm.newUser.totalInternships.push(vm.newUser.internship[it]);
      //   console.log('vm.newUser.totalInternships:', vm.newUser.totalInternships);
      //   vm.newUser.internship = vm.newUser.totalInternships;
      //   console.log('vm.newUser.internship:', vm.newUser.internship);
      // }

      ConnectUService.postUsers(vm.newUser, vm.zip_code);
      vm.newUser = {};
      // ConnectUService.getUsers();
    }

  }]);
