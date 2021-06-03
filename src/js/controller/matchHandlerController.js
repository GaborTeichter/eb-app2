app.controller('matchHandlerController', [
    '$scope',
    'matchFactory',
    '$timeout',
    'teamFactory',
    function($scope, matchFactory, $timeout) {
      
        // Meccsek listája.
        $scope.getMatches = function() {
          matchFactory.getMatchList()
              .then(function(matchList){
                  console.log(matchList);
                  $scope.matchList = matchList;
              });
        };
        
        // Új meccs létrehozása.
        $scope.createMatch = function(match){
            console.log( match );
            matchFactory.createMatch(match)
                .then(function(result){
                    $scope.matchCreated = true;
                    $timeout(function(){
                        $scope.matchCreated = false;
                    }, 3000);
                    $scope.getMatches();
                    $scope.match = {};
                }, function(){
                    $scope.matchCreatedError = true;
                    $timeout(function(){
                        $scope.matchCreatedError = false;
                    }, 3000);
                });
        };
      
        // Meccs törlése.
        $scope.deleteMatch = function(match){
            matchFactory.deleteMatch(match._id)
                .then(function(deleteResult){
                    $scope.getMatches();
                });
        };
      
        // Új meccs létrehozása.
        $scope.updateMatch = function(match){
            matchFactory.updateMatch(match)
                .then(function(result){
                    $scope.matchUpdated = true;
                    $timeout(function(){
                        $scope.matchUpdated = false;
                    }, 3000);
                    // $scope.getMatches();
                }, function(){
                    $scope.matchUpdatedError = true;
                    $timeout(function(){
                        $scope.matchUpdatedError = false;
                    }, 3000);
                });
        };
      
        $scope.getMatches();
        
    }
]);