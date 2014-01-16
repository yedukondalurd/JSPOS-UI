/**
 * Created by yedukondalu.v on 1/8/14.
 */
define(function (require) {

    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var Login = require('text!tpl/login.html');
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
            console.log(e);
            console.log($('form.login-form', this.$el).serialize());
            return false;
        }

    });

});