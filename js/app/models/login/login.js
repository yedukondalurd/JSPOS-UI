/**
 * Created by yedukondalu.v on 1/16/14.
 */
define(function (require) {
    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var Login = require('text!tpl/login.html');
    var loginForm = Backbone.Model.extend({
        url: '',
        template: _.template(Login),
        schema: {
            email: {
                validators: ['required', 'email']
            },
            password: {
                validators: ['required'],
                type: 'password'
            }
        }
    });
    return loginForm;
});