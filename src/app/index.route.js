(function() {
  'use strict';

  angular
    .module('musicApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
      })
      .state('album', {
        url: '/albums/:albumId',
        templateUrl: 'app/albums/album.html',
        controller: 'AlbumController',
        resolve: {
          album: function(spotify, $stateParams){
            return spotify.getAlbum($stateParams.albumId);
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
