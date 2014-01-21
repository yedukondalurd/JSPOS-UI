/**
 * Created by yedukondalu.v on 1/8/14.
 */
define(function (require) {

    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var Login = require('text!tpl/login.html');
    var Auth = require('app/ajaxConfig/ajaxConfiguration');
    return Backbone.View.extend({
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
            console.log('Login submitted');
            //console.log($('form.login-form', this.$el).serialize());
            var serData = $('form.login-form', this.$el).serialize();
            console.log(serData);
            var _auth = new Auth();
            var loggedIn = _auth.authApp('login', serData);
            //console.log(loggedIn);
            return false;
        }

    });

});