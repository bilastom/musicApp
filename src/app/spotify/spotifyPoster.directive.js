angular.module('spotify')
    .directive('spotifyPoster', function() {
        return {
            restrict: 'E',
            template: '<img />'
        };
    });