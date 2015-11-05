angular.module('spotify')
    .service('spotify', function($http) {
        this.name = 'Spotify';

        var apiUrl = "https://api.spotify.com/v1/";

        this.searchAlbums = function(q) {
            // var deferred = $q.defer();
            return $http.get(apiUrl + 'search?type=album&q=' + q).then(function(response) {
                return response.data.albums.items;
            });
            // return deferred.promise;
        };

        this.getAlbum = function(id) {
            return $http.get(apiUrl + 'albums/' + id).then(function(response) {
                return response.data;
            });
        };
    });