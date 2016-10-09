
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
