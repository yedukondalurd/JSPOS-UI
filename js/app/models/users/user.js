/**
 * Created by yedukondalu.v on 1/8/14.
 */
define(function (require) {
    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var PromiseFactory = require('app/promiseFactory');
    var users = [
        {'name': 'yedukondalu', 'password': '123456', 'email': 'yedukondalurd@gmail.com'}
    ];
    return Backbone.Model.extend({
        findUserByEmailAndPass: function (email, pass) {

        },
        isUserExists: function (email, pass) {
            var userExists = false;
            var checkInArray = $.each(users, function (i) {
                if (users[i]['email'] === email && users[i]['password'] === pass) {
                    userExists = true;
                    PromiseFactory.resolve(userExists);
                } else {
                    PromiseFactory.reject(userExists);
                }
            });
            return PromiseFactory;
        }
    });
});