define(function (require) {

    "use strict";
    var BaseRouter = require('app/baseRoute');
    var Authentication = require('app/authentication');
    var router = BaseRouter.extend({

        routes: {
            "login": "auth",
            "logout": "auth",
            "manage-stock": "manageStock",
            "categories": "categories",
            "suppliers": "suppliers",
            "sale": "sale",
            "*default": "dashboard"
        },
        historyArray: [],
        before: function () {
            var self = this;
            self.historyArray.push(Backbone.history.fragment);
            self.cleaPrevView();
            if (Backbone.history.fragment !== "logout") {
                /*var checkSession = Authentication.checkAuth();
                 checkSession.done(function (response) {
                 console.log(response);
                 if (response.status === 'auth error' && Backbone.history.fragment !== "login") {
                 Backbone.history.navigate('login', {trigger: true});
                 } else if (response.status === 'success' && Backbone.history.fragment === "login") {
                 Backbone.history.navigate('dashboard', {trigger: true});
                 }
                 }).fail(function (err) {
                 console.log(err);
                 if (Backbone.history.fragment !== "login") {
                 Backbone.history.navigate('login', {trigger: true});
                 }
                 });*/
                var _mainWrapper = require('views/mainWrapper');
                _mainWrapper.init();
                self.manageSideMenuStyles(Backbone.history.fragment);
            }
        },
        after: function () {
        },
        previous: function () {
            var self = this;
            return self.historyArray[self.historyArray.length - 2];
        },
        auth: function () {
            if (Backbone.history.fragment === "login") {
                Authentication.showLoginPage();
            } else if (Backbone.history.fragment === "logout") {
                Authentication.logoutUser();
            }
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
        categories: function () {
            var Categories = require('views/categories/itemCategories');
            var _categories = new Categories();
            _categories.init();
        },
        suppliers: function () {
            var Suppliers = require('views/suppliers/itemSuppliers');
            var _suppliers = new Suppliers();
            _suppliers.init();
        },
        sale: function () {
            var Sale = require('views/sale/sale');
            var _sale = new Sale();
            _sale.init();
        },
        cleaPrevView: function () {
            var self = this;
            switch (self.previous()) {
                case 'manage-stock':
                    var ManageStock = require('views/manageStock/manageStock');
                    var _manageStock = new ManageStock();
                    _manageStock.cleanup();
                    break;
                case 'categories':
                    var Categories = require('views/categories/itemCategories');
                    var _categories = new Categories();
                    _categories.cleanup();
                    break;
                case 'suppliers':
                    var Suppliers = require('views/suppliers/itemSuppliers');
                    var _suppliers = new Suppliers();
                    _suppliers.cleanup();
                    break;
                default :
            }
        },
        manageSideMenuStyles: function (currentView) {
            if (currentView) {
                if ($('li.' + currentView).length !== 0) {
                    $('.side-menu').find('li').removeClass('current');
                    $('li.' + currentView).addClass('current');
                } else {

                }
            }
        }

    });
    return router;
});