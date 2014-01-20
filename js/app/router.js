define(function (require) {

    "use strict";
    var BaseRouter = require('app/baseRoute');
    var router = BaseRouter.extend({

        routes: {
            "login": "login",
            "manage-stock": "manageStock",
            "*default": "dashboard"

        },
        before: function () {
            //var Authentication = require('app/authentication');
            /*Authentication.getAuth(function (response) {
             router.__super__.stopNavigation = true;
             if (response === 'starting') {
             Backbone.history.navigate('login', {trigger: true});
             } else if (response === 'already_started') {
             } else {*/
            var _mainWrapper = require('views/mainWrapper');
            _mainWrapper.init();
            this.manageSideMenuStyles(Backbone.history.fragment);
            /* Backbone.history.navigate('dashboard', {trigger: true});
             }
             });*/
        },
        after: function () {
        },
        login: function () {
            var Login = require('views/login');
            var _login = new Login();
            _login.init();
        },
        dashboard: function () {
            var Dashboard = require('views/dashboard');
            var _dashboard = new Dashboard();
            _dashboard.init();
        },
        manageStock: function () {
            var ManageStock = require('views/manageStock/manageStock');
            var _manageStock = new ManageStock();
            _manageStock.init();
        },
        manageSideMenuStyles: function (currentView) {
            $('.side-menu').find('li').removeClass('current');
            if ($('#' + currentView).length !== 0) {
                $('#' + currentView).addClass('current');
            } else {
                alert("Current Route Id Doesn't exist")
            }

        }

    });
    return router;
})
;