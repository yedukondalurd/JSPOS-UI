/**
 * Created by kondalu on 3/12/14.
 */
define(function (require) {
    "use strict"
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var manageStock = require('text!tpl/manage-stock/index.html');
    return Backbone.View.extend({
        events: {
            "click .item_buttons .add_item_button": "addItem"
        },
        el: '#application-content-host',
        template: _.template(manageStock),
        init: function () {
            console.log('Manage stock initialized');
            this.render();
        },
        render: function () {
            $(this.$el).html(this.template());
        },
        addItem: function (e) {
            console.log($(e));
            e.preventDefault();
        }

    });
});