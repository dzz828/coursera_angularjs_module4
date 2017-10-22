(function () {
    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/templates/categories.component.template.html',
            bindings: {
                'allCategories' : '<'
            }
        });
})();