
//directive version of movieItem
//*won't work if you remove comments because of $ctrl in html template*
/*app.directive("movieItem", function() {
	return {
		templateUrl: 'movie.html',
		scope: {
			//two-way binding between movie-data of individual movie scope and root-scope movie-data
			data: '=',
			//two-way binding for deleteMode/isDeleting
			deleteMode: '=',
			//one-way binding of delete expression/function from root-scope to individual movie scope
			deleteItem: '&'
		},
		link: function (scope) {
			scope.deleteClick = function () {
				if(scope.deleteMode) {
					scope.deleteItem();
				}
			}
		}
	}
});*/

//component version of movieItem
app.component('movieItem', {
		templateUrl: 'movie.html',
		controller: 'movieItemCtrl',
		bindings: {
			//one-way value (movie data) from root scope
			data: '<',
			//one-way value (delete toggle) from root scope
			deleteMode: '<',
			//one-way binding of delete expression/function from root-scope to individual movie scope
			deleteItem: '&'
		}
})