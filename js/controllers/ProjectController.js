app.controller('ProjectController', ['$scope', '$location', '$window', '$routeParams', '$anchorScroll', '$rootScope',
function($scope, $location, $window, $routeParams, $anchorScroll, $rootScope) {
  $window.scrollTo(0, 0);

  $scope.project = {
    id: $routeParams.projectId
  }
  $rootScope.show=true;

  triggered_times = 0;
  skill_triggered_times = 0;
  work_triggered_times = 0;
}


]);
