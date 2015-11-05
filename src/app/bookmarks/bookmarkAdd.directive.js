angular.module('bookmarks')
    .directive('bookmarkAdd', function(bookmarks) {
        return {
            restrict: 'E',
            templateUrl: 'app/bookmarks/bookmarkAdd.directive.html',
            scope: {
                item: '=',
            },
            link: function(scope) {
                scope.isBookmarked = function(item) {
                    return bookmarks.has(item.id);
                };

                scope.saveBookmark = bookmarks.add;
            }
        };
    });