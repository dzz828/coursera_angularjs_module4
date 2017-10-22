(function () {
    angular.module('MenuApp')
        .controller('CategoriesStateController', CategoriesStateController);

    CategoriesStateController.$inject = ['categories'];
    function CategoriesStateController(categories) {
        var ctrl = this;
        ctrl.categories = categories;
    }
})();