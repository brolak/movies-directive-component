app.controller('MoviesCtrl', ['$scope', 'factory', function($scope, factory) {
  $scope.isDeleting = false;

  $scope.movies = factory.getMovies();

  $scope.addMovie = function(){
    alert("This functionality will be available soon!");
  };
  
  $scope.deleteMovies = function(){
    $scope.isDeleting = true;
  };
  
  $scope.doneDeleteMovies = function(){
    $scope.isDeleting = false;
  };
  
  $scope.deleteMovie = function(id){
    //controller will pass movie id to factory
      factory.removeMovie(id);

  };
 }]);