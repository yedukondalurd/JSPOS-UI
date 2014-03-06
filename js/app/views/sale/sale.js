/**
 * Created by yedukondalu.v on 1/20/14.
 */
define(function (require) {
    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var sale = require('text!tpl/sale/index.html');
    return Backbone.View.extend({
        $contentSelector: '#application-content-host',
        init: function () {
            console.log('Manage stock initialized');
            var _ = require('underscore');
            var manageStockTemplate = _.template(manageStock);
            $(this.$contentSelector).html(manageStockTemplate());
        }
    });
});