/**
 * Created by yedukondalu.v on 1/8/14.
 */
define(function (require) {

    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var Login = require('text!tpl/login.html');
    var AjaxConfig = require('app/ajaxConfig/ajaxConfiguration');
    var login = Backbone.View.extend({
        el: 'body',
        template: _.template(Login),
        events: {
            "click .btn-login": "loginUser"
        },
        init: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template);
            return this;
        },
        loginUser: function (e) {
            var serData = $('form.login-form', this.$el).serialize();
            var _ajaxConfig = new AjaxConfig();
            var loggedIn = _ajaxConfig.authApp('login', serData);
            loggedIn.done(function (response) {
                if (response.status === 'success') {
                    Backbone.history.navigate('dashboard', {trigger: true});
                }
            }).fail(function (err) {
                    console.log(err);
                });
            return false;
        }
    });
    return new login();
});