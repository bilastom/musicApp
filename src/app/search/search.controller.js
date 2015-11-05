angular.module('musicApp')
    .controller('SearchController', function($scope, $http, spotify) {

        $scope.search = function(q) {
            spotify.searchAlbums(q).then(function(albums) {
                $scope.albums = albums;
            });
        };
        $scope.search('batman');
    });