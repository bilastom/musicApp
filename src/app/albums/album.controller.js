angular.module('musicApp')
.controller('AlbumController', function(album){
	var vm = this;
	vm.album = album;
});