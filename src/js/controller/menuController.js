// Control menu.
app.controller('menuController', ['$scope', 'matchFactory',
    function($scope, matchFactory){
        $scope.appName = 'EB-APP2';
      
        $scope.currentPage = location.href.replace(
            location.protocol+'//'+location.host,
            ''
        );
}]);