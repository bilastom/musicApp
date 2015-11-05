angular.module('musicApp')
    .controller('SearchController', function($scope, $http, spotify, bookmarks) {

        $scope.search = function(q) {
            spotify.searchAlbums(q).then(function(albums) {
                $scope.albums = albums;
            });
        };
        $scope.search('batman');

        $scope.isBookmarked = function(album) {
            return bookmarks.has(album.id);
        };

        $scope.saveBookmark = function(album) {
            bookmarks.add(album);
        };

        $scope.removeBookmark = function(id) {
            bookmarks.remove(id);
        };

        $scope.getAllBookmarks = function() {
            return bookmarks.getAll();
        };
    });