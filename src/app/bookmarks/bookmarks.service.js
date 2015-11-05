angular.module('bookmarks')
    .factory('bookmarks', function($window) {

        var items = angular.fromJson($window.localStorage.bookmarks) || [];

        return {
            add: add,
            getAll: getAll,
            has: has
        };

        function add(item) {
            items.push(item);
            sync();
        }

        function getAll() {
            return items.slice();
        }

        function has(id) {
            return items.some(function(item) {
                return item.id === id;
            });
        }

        function sync() {
            $window.localStorage.bookmarks = angular.toJson(items);
        }

    });