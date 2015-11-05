angular.module('bookmarks')
    .directive('bookmarkRemove', function(bookmarks) {
        return {
            restrict: 'E',
            templateUrl: 'app/bookmarks/bookmarkRemove.directive.html',
            scope: {
                item: '=',
            },
            link: function(scope) {
                scope.isBookmarked = function(item) {
                    return bookmarks.has(item.id);
                };

                scope.removeBookmark = function(item) {
                    bookmarks.remove(item.id);
                };
            }
        };
    });