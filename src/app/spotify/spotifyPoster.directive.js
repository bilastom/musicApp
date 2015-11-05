angular.module('spotify')
    .directive('spotifyPoster', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/spotify/spotifyPoster.directive.html',
            transclude: true,
            scope: {
                album: '=',
                size: '@',
                title: '@'
            },
            link: function(scope) {
                var sizesDict = {
                    l: 0,
                    m: 1,
                    s: 2
                };
                var size = sizesDict[scope.size] || 0;

                scope.imgSrc = scope.album.images[size].url;

            }
        };
    });