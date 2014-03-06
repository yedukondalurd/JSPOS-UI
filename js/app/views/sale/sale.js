/**
 * Created by yedukondalu.v on 1/20/14.
 */
define(function (require) {
    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var sale = require('text!tpl/sale/index.html');
    return Backbone.View.extend({
        $contentSelector: '.main-wrapper',
        init: function () {
            console.log('Sales initialized');
            var _ = require('underscore');
            var saleTemplate = _.template(sale);
            $(this.$contentSelector).html(saleTemplate());
        }
    });
});