app.controller('AlbumController', ['$scope', '$location', '$routeParams', '$anchorScroll', 'dataFactory',
  function($scope, $location,$routeParams, $anchorScroll, dataFactory) {
    var id = $routeParams.albumID;
    triggered_times = 0;
		skill_triggered_times = 0;
		work_triggered_times = 0;
    /*
    $scope.album = {
      id: $routeParams.albumID,
      name: 'San Francisco',
      description: 'Photography taken from the Bay.',
      coverphotourl: $routeParams.ablumID,
      photos: [
        {
          id: '1',
          coverphotourl: '123'
        },
        {
          id: '2',
          coverphotourl: '123'
        }
      ]
    }
    */

    getAlbum(id);

    function getAlbum(id) {
        dataFactory.getAlbum(id)
            .success(function (album) {
                $scope.album = album;
            })
            .error(function (error) {
                $scope.status = 'Unable to load data: ' + error.message;
            });
    }

	}

]);
