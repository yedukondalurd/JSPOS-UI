/**
 * Created by yedukondalu.v on 1/20/14.
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
            var tableCollection = {};
            tableCollection.fields = ['ID', 'Item Name', 'Item Supplier', 'Item Category', 'Stock', 'Action'];
            tableCollection.data = [
                {"id": "1", "item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "stock": "2"},
                {'id': '2', 'item_name': 'Clinic Plus Hair Therapy', 'item_supplier': 'Clinic Plus', 'item_category': 'Shampoo', "stock": "23"}
            ];
            this.render(tableCollection);
            /*require('dataTables');
             $(".datatable").dataTable({aoColumnDefs: [
             {bSortable: !1, aTargets: [0, 6]}
             ], aaSorting: []});*/
            require('jquery-ui');
            $("#loginDialog").dialog({
                autoOpen: false,
                buttons: {
                    "Login": function () {
                        $(this).dialog("close");
                    }
                },
                dialogClass: "no-title",
                hide: {
                    effect: "scale",
                    easing: "easeInBack"
                },
                show: {
                    effect: "scale",
                    easing: "easeOutBack"
                }
            });

        },
        render: function (tableCollection) {
            $(this.$el).html(this.template(tableCollection));
        },
        addItem: function (e) {
            console.log($(e));
            $("#loginDialog").dialog("open");
            e.preventDefault();
        }

    })
        ;
})
;