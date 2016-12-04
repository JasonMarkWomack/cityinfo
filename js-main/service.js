angular.module("app").service("service", function($http){
  this.getInfo = function() {

  return  $http({
        method: 'GET',
        url: 'https://api.teleport.org/api/urban_areas/slug:atlanta/scores/'
    }).then(function(response) {var parsedResponse = response.data.Economy;
      return response.data;
		})


	}
});
  angular.module("app").service("serviceBerlin", function($http){
    this.getInfoBerlin = function(){

  return  $http({
        method: 'GET',
        url: 'https://api.teleport.org/api/urban_areas/slug:berlin/scores/'
    }).then(function(response) {var parsedResponse = response.data.Economy;
      return response.data;
		})
}
});

  angular.module("app").service("serviceTokyo", function($http){
    this.getInfoTokyo = function(){

  return  $http({
        method: 'GET',
        url: 'https://api.teleport.org/api/urban_areas/slug:tokyo/scores/'
    }).then(function(response) {var parsedResponse = response.data.Economy;
      return response.data;
		})
}
});
