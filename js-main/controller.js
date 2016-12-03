angular.module("app").controller("controller", function($scope, service){

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

    //    $scope.housing = dataFromService.categories[0];
      //  console.log($scope.housing);


        //$scope.housing = dataFromService.categories[0];
        //console.log($scope.housing);


        //$scope.housing = dataFromService.categories[0];
        //console.log($scope.housing);


        //$scope.housing = dataFromService.categories[0];
        //console.log($scope.housing);
      });
    };

    $scope.submit = function() {
      $scope.arr.push($scope.text);

    };
    $scope.arr = [];


  $scope.getInfo();
  $scope.awesomeClicked = function(){
    $scope.isAwesome = !$scope.isAwesome;
  };

  });
