angular.module("app").controller("controller", function($scope, service, serviceBerlin, serviceTokyo){

    $scope.getInfo = function() {
    service.getInfo().then(function(dataFromService) {
        console.log(dataFromService);


        $scope.housing = dataFromService.categories[0];
        console.log($scope.housing);

        $scope.costOfLiving = dataFromService.categories[1];
        console.log($scope.cost0fLiving);


        $scope.startups = dataFromService.categories[2];
        console.log($scope.startups);


      $scope.ventureCapital = dataFromService.categories[3];
      console.log($scope.ventureCapital);

      });
    };


  $scope.getInfo();

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




  });
