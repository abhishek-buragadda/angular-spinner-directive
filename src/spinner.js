

spinnerModule.directive("angularSpinner", ['$templateRequest','$http','$compile', function($templateRequest,$http,$compile){

	var link = function(scope,elem, attr){
		elem.css('position',"relative");
		var loadingDiv = angular.element('<div show-spinner custom-function="loadFunc()"><div class="spinner-overlay"></div></div>');
		var spinnerDiv = angular.element('<div class="spinner-style"></div>');
		if(angular.isDefined(scope.templateUrl)){
				$templateRequest(scope.templateUrl).then(function(html){
						spinnerDiv.append(html); // custom spinner user can upload.
				},function(error){
					//this is the default spinner.
					spinnerDiv.append('<img src="res/spinner.gif"/>');
				});
		}else{   // default spinner when custom spinner is not provided.
      spinnerDiv.append('<img src="res/spinner.gif"/>');
    }
 		loadingDiv.append(spinnerDiv);
	  elem.append($compile(loadingDiv)(scope));
}
return {
    restrict: 'A',
    scope: {
        templateUrl: '@',
        loadFunc : '&'
    },
    link: link
}
}]);
