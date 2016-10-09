var spinnerModule = angular.module("angularSpinner", []);


spinnerModule.directive('showSpinner', ['$http', function ($http) {
    return {
      restrict: 'A',
      scope :{
        customFunction : '&'
      },
      link: function (scope, element, attrs) {
        var showSpinner;
        // if the loading funciton is not provided use the default  loading function.
        if(!!scope.customFunction || typeof scope.customFunction !== 'function'  ){
          showSpinner = function () {
            return $http.pendingRequests.length > 0;
          };
        }else{
          showSpinner = scope.customFunction;
        }
        scope.$watch(showSpinner, function (value) {
          if (value) {
            element.removeClass('ng-hide');
          } else {
            element.addClass('ng-hide');
          }
        });
       }
    }
}]);



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
