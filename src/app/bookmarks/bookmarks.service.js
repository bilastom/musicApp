angular.module('bookmarks')
    .factory('bookmarks', function() {
        var items = [];

        return {
            add: add,
            getAll: getAll,
            has: has
        };

        function add(item) {
            items.push(item);
        }

        function getAll() {
            return items.slice();
        }

        function has(id) {
            return items.some(function(item) {
                return item.id === id;
            });
        }

    });