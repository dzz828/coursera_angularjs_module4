(function () {
    angular.module('MenuApp')
        .controller('ItemsStateController', ItemsStateController);

    ItemsStateController.$inject = ['items'];
    function ItemsStateController(items) {
        var ctrl = this;
        ctrl.items = items.menu_items;
        ctrl.category = items.category.name;
    }
})();