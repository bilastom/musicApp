angular.module('spotify')
    .service('spotify', function($http) {
        this.name = 'Spotify';

        var apiUrl = "https://api.spotify.com/v1/search?type=album&q=";

        this.searchAlbums = function(q) {
            // var deferred = $q.defer();
            return $http.get(apiUrl + q).then(function(response) {
                return response.data.albums.items;
            });
            // return deferred.promise;
        };
    });