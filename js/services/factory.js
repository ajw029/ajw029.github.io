var urlEndpoint = "http://localhost:5000";

app.factory('dataFactory', ['$http', function($http) {

	var dataFactory = {};
	dataFactory.getAlbum = function (id) {
         return $http.get(urlEndpoint + '/getalbum?id=' + id);
     };
 return dataFactory;
}]);
