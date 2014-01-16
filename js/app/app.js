/**
 * Created by yedukondalu.v on 1/8/14.
 */
define(function (require) {

    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');

    var ApplicationModel = Backbone.Model.extend({
        start: function () {
            var Router = require('app/router');
            var _router = new Router();
            Backbone.history.start();
        }
    });
    return new ApplicationModel();
});