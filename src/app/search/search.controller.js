angular.module('musicApp')
    .controller('SearchController', function($scope, $http, spotify, bookmarks) {

        $scope.search = function(q) {
            spotify.searchAlbums(q).then(function(albums) {
                $scope.albums = albums;
            });
        };
        $scope.search('batman');

        $scope.saveBookmark = function(album) {
            bookmarks.add(album);
        };

        $scope.getAllBookmarks = function() {
            return bookmarks.getAll();
        };
    });