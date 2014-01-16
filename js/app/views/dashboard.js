/**
 * Created by yedukondalu.v on 1/8/14.
 */
define(function (require) {

    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var Dashboard = require('text!tpl/dashboard/dashboard.html');
    return Backbone.View.extend({
        $contentSelector: '#application-content-host',
        init: function () {
            console.log('Dashboard initialized');
            var _ = require('underscore');
            var dashboardTemplate = _.template(Dashboard);
            $(this.$contentSelector).html(dashboardTemplate());
        }

    });

});