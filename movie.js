/*app.directive("movieItem", function() {
	return {
		templateUrl: 'movie.html',
		scope: {
			data: '=',
			deleteMode: '=',
			deleteItem: '&'
		},
		link: function (scope,elem) {
			//console.log(scope.deleteMode == false);
			//scope.$watch("deleteMode",function(newval){console.log(newval);})
			scope.deleteClick = function () {
				if(scope.deleteMode) {
					console.log("delete this");
					scope.deleteItem();
				}
			}
		}
	}
});*/

app.component('movieItem', {
		templateUrl: 'movie.html',
		controller: 'movieItemCtrl',
		bindings: {
			data: '<',
			deleteMode: '<',
			deleteItem: '&'
		}
})