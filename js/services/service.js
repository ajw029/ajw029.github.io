app.service('dataService', ['$http', function($http) {

	var dataFactory = {};
	this.getAlbum = function (id) {
         return $http.get(urlEndpoint + '/getalbum/' + id);
     };
 return dataFactory;
}]);
