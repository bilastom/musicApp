angular.module('common')
    .directive('hasError', function() {
        return {
            restrict: 'A',
            scope: {
                field: '=hasError'
            },
            link: function(scope, element) {
                scope.$watch('field.$invalid', function() {
                    if (scope.field.$dirty && scope.field.$invalid) {
                        element.addClass('has-error');
                    } else {
                        element.removeClass('has-error');
                    }
                });
            }
        };
    });