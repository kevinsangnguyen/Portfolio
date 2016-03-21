board.controller('Main', function($scope,$location,$routeParams,$timeout,$document,$window) {

	$scope.start = true;
	$scope.current_section = "top";

	$scope.scroll_to = function(section){
		$document.scrollToElementAnimated(document.getElementById(section));
	}


});
