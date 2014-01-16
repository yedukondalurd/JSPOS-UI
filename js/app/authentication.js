/**
 * Created by yedukondalu.v on 1/9/14.
 */
define(function (require) {

    "use strict";
    var Backbone = require('backbone');
    var UserModel = require('models/users/user');
    var _userModel = new UserModel();
    var AuthenticationModel = Backbone.Model.extend({
        isAuthenticated: true,
        loginStage: '',
        isStarting: true,
        initialize: function () {
            if (typeof(Storage) !== "undefined") {
                this.supportStorage = true;
            }
        },
        showLoginScreen: function () {
            console.log('Show login screen');
        },
        checkAuth: function () {
            var self = this;
            var AjaxRequest = require('app/ajaxConfig/ajaxConfiguration');
            var _ajaxRequest = new AjaxRequest();
            _ajaxRequest.authApp('').done(function (response) {
                self.isAuthenticated = true;
            });
        },
        getAuth: function (callback) {
            var self = this;
            this.checkAuth();
            if (!self.isAuthenticated) {
                if (!self.isStarting) {
                    self.loginStage = 'already_started';
                } else {
                    self.isStarting = false;
                    self.loginStage = 'starting';
                }
            }
            callback(self.loginStage);

            /*var self = this;
             var userExists = _userModel.isUserExists('yedukondalurd@gmail.com', '123456');

             userExists.done(function (response) {
             self.isAuthenticated = true;
             }).fail(function (response) {
             self.isAuthenticated = false;
             });
             callback(self.isAuthenticated);*/
        }
    });

    return new AuthenticationModel();
});