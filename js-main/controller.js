angular.module("app").controller("controller", function($scope, serviceAtlanta, serviceBerlin, serviceTokyo, serviceCapeTown, serviceSaltLakeCity){

    $scope.getInfoAtlanta = function() {
    serviceAtlanta.getInfoAtlanta().then(function(dataFromService) {
        console.log(dataFromService);


        $scope.housingAtlanta = dataFromService.categories[0];
        console.log($scope.housingAtlanta);

        $scope.costOfLivingAtlanta = dataFromService.categories[1];
        console.log($scope.cost0fLivingAtlanta);


        $scope.startupsAtlanta = dataFromService.categories[2];
        console.log($scope.startupsAtlanta);


      $scope.ventureCapitalAtlanta = dataFromService.categories[3];
      console.log($scope.ventureCapitalAtlanta);

      });
    };


  $scope.getInfoAtlanta();

      $scope.getInfoBerlin = function() {
      serviceBerlin.getInfoBerlin().then(function(dataFromService) {
          console.log(dataFromService);


          $scope.housingBerlin = dataFromService.categories[0];
          console.log($scope.housingBerlin);

          $scope.costOfLivingBerlin = dataFromService.categories[1];
          console.log($scope.cost0fLivingBerlin);


          $scope.startupsBerlin = dataFromService.categories[2];
          console.log($scope.startupsBerlin);


        $scope.ventureCapitalBerlin = dataFromService.categories[3];
        console.log($scope.ventureCapitalBerlin);

        });
      };


    $scope.getInfoBerlin();

    $scope.getInfoTokyo = function() {
    serviceTokyo.getInfoTokyo().then(function(dataFromService) {
        console.log(dataFromService);


        $scope.housingTokyo = dataFromService.categories[0];
        console.log($scope.housingTokyo);

        $scope.costOfLivingTokyo = dataFromService.categories[1];
        console.log($scope.cost0fLivingTokyo);


        $scope.startupsTokyo = dataFromService.categories[2];
        console.log($scope.startupsTokyo);


      $scope.ventureCapitalTokyo = dataFromService.categories[3];
      console.log($scope.ventureCapitalTokyo);

    });
  };


    $scope.getInfoTokyo();

    $scope.getInfoCapeTown = function() {
    serviceCapeTown.getInfoCapeTown().then(function(dataFromService) {
        console.log(dataFromService);


        $scope.housingCapeTown = dataFromService.categories[0];
        console.log($scope.housingCapeTown);

        $scope.costOfLivingCapeTown = dataFromService.categories[1];
        console.log($scope.cost0fLivingCapeTown);


        $scope.startupsTCapeTown = dataFromService.categories[2];
        console.log($scope.startupsTCapeTown);


      $scope.ventureCapitalCapeTown = dataFromService.categories[3];
        console.log($scope.ventureCapitalCapeTown);

      });
    };


    $scope.getInfoCapeTown();


    $scope.getInfoSaltLakeCity = function() {
    serviceSaltLakeCity.getInfoSaltLakeCity().then(function(dataFromService) {
        console.log(dataFromService);


        $scope.housingSaltLakeCity = dataFromService.categories[0];
        console.log($scope.housingSaltLakeCity);

        $scope.costOfLivingSaltLakeCity= dataFromService.categories[1];
        console.log($scope.cost0fLivingSaltLakeCity);


        $scope.startupsSaltLakeCity = dataFromService.categories[2];
        console.log($scope.startupsSaltLakeCity);


      $scope.ventureCapitalSaltLakeCity= dataFromService.categories[3];
        console.log($scope.ventureCapitalSaltLakeCity);

      });
    };


    $scope.getInfoSaltLakeCity();



  });
