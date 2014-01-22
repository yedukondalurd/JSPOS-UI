/**
 * Created by yedukondalu.v on 1/9/14.
 */
define(function (require) {

    "use strict";
    var Backbone = require('backbone');
    var UserModel = require('models/users/user');
    var _userModel = new UserModel();
    var AjaxConfig = require('app/ajaxConfig/ajaxConfiguration');
    var _ajaxConfig = new AjaxConfig();
    var AuthenticationModel = Backbone.Model.extend({
        initialize: function () {
            if (typeof(Storage) !== "undefined") {
                this.supportStorage = true;
            }
        },
        showLoginScreen: function () {

        },
        checkAuth: function () {
            var checkSession = _ajaxConfig.authApp('checkSession', '');
            return checkSession;
        },
        getAuth: function (callback) {

        },
        showLoginPage: function () {
            var Login = require('views/login');
            Login.init();
        },
        logoutUser: function () {
            var logout = _ajaxConfig.authApp('logout', '');
            logout.done(function (response) {
                if (response.status === 'success') {
                    Backbone.history.navigate('login', {trigger: true});
                }
            }).fail(function (err) {
                    Backbone.history.navigate('dashboard', {trigger: true});
                });
        }
    });

    return new AuthenticationModel();
});