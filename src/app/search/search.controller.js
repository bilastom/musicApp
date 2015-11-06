angular.module('musicApp')
    .controller('SearchController', function(spotify) {
        var vm = this;
        vm.search = function(q) {
            spotify.searchAlbums(q).then(function(albums) {
                vm.albums = albums;
            });
        };
        vm.search('batman');
    });