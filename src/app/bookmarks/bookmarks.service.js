angular.module('bookmarks')
    .factory('bookmarks', function() {
        var items = [];

        return {
            add: add,
            getAll: getAll
        };

        function add(item) {
            items.push(item);
        }

        function getAll() {
            return items.slice();
        }

    });