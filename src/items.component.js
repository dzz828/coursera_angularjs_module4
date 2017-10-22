(function () {
    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/templates/items.component.template.html',
            bindings: {
                'allItems' : '<',
                'category' : '<'
            }
        });
})();