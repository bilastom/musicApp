angular.module('musicApp')
    .controller('BookmarksController', function($scope, bookmarks) {
        $scope.getAllBookmarks = bookmarks.getAll;
    });