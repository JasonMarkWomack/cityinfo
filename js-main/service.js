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
