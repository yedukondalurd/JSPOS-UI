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
        }

    });
    return router;
})
;