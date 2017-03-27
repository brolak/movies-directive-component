app.controller('movieItemCtrl', function ($scope) {
	this.$onInit = function () {
		$scope.data = this.data;
	}

	this.deleteClick = function () {
		if(this.deleteMode) {
			this.deleteItem();
		}
	}
});