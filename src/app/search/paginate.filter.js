angular.module('common')
.filter('paginate', function(){
	return function(arr, page, perPage) {
		perPage = perPage || 10;
		var start = (page - 1) * perPage;
		return (arr || []).slice(start, start + perPage);
	};
});