/**
 * Created by yedukondalu.v on 1/10/14.
 */
define(function (require) {
    "use strict";
    var ajaxSettings = function () {
        var self = this;
        self.url = '';
        self.type = '';
        self.contentType = '';
        self.data = {};
        self.cache = false;
        self.async = true;
        self.beforeSend = function () {
        };
        self.error = function () {
        };
        self.success = function () {
        };
    };
    return ajaxSettings;
});