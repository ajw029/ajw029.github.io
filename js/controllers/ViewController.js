app.controller('ViewController', ['$scope', '$location', '$anchorScroll', '$rootScope',
  function($scope, $location, $anchorScroll, $rootScope) {
		triggered_times = 0;
		skill_triggered_times = 0;
		mywork_triggered_times = 0;

    $rootScope.show=false;

		var initialHeight = $( window ).height();

		$scope.scrollTo = function(id) {
		  $location.hash(id);
		  $anchorScroll();
		}
    resizeDJController();
	}

]);
