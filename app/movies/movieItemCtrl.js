app.controller('movieItemCtrl', function ($scope) {
	//enables data (rather than $ctrl.data on html) to hold movie data
	this.$onInit = function () {
		$scope.data = this.data;
	}

	//click will use deleteItem function only if deleteMode is active
	this.deleteClick = function () {
		if(this.deleteMode) {
			this.deleteItem();
		}
	}
});