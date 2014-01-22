/**
 * Created by yedukondalu.v on 1/10/14.
 */
define(function (require) {
    "use strict";
    return function () {
        var self = this;
        var AjaxOptions = require('app/ajaxConfig/ajaxOptions');
        var _ajaxSettings = new AjaxOptions();
        var Url = require('app/ajaxConfig/urls');
        self.authApp = function (method, data) {
            var auth = Url.auth;
            var url;
            var type = 'POST';
            if (method === 'login') {
                url = auth.loginUser;
            } else if (method === 'logout') {
                url = auth.logoutUser;
            } else {
                url = auth.checkSession;
            }
            return _sendRequest(url, type, data);
        };
        var _sendRequest = function (url, method, requestData, contentType) {
            var def = $.Deferred();
            _ajaxSettings.url = url;
            _ajaxSettings.type = method;
            _ajaxSettings.data = requestData || '';
            _ajaxSettings.success = function (response, status, xhr) {
                var response = $.parseJSON(response);
                def.resolve(response);
            };
            $.ajax(_ajaxSettings);
            return def;
        };
    };
});