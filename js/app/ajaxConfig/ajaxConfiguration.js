/**
 * Created by yedukondalu.v on 1/10/14.
 */
define(function (require) {
    "use strict";
    return function () {
        var self = this;
        var AjaxOptions = require('app/ajaxConfig/ajaxOptions');
        var _ajaxSettings = new AjaxOptions();
        var Authentication = require('app/authentication');
        var Url = require('app/ajaxConfig/urls');
        self.authApp = function (method) {
            var loginUrl = Url.login;
            var url;
            var method = 'POST';
            if (method === 'login') {
                url = loginUrl.loginUser;
            } else if (method === 'logout') {
                url = loginUrl.logoutUser;
            } else {
                url = loginUrl.checkSession;
            }
            return _sendRequest(url, method);
        };
        var _sendRequest = function (url, method, requestData, contentType) {
            var def = $.Deferred();
            _ajaxSettings.url = url;
            _ajaxSettings.type = method;
            _ajaxSettings.data = requestData || '';
            _ajaxSettings.contentType = contentType || 'application/json';
            _ajaxSettings.success = function (response, status, xhr) {
                var response = $.parseJSON(response);
                console.log(response.status);
                if (response.status === 0) {
                    Authentication.showLoginScreen();
                } else {
                    def.resolve(response);
                }
            };
            $.ajax(_ajaxSettings);
            return def;
        };
    };
});