/**
 * Created by kondalu on 3/18/14.
 */
define(function (require) {
    "use strict"
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var supplier_html = require('text!tpl/suppliers/index.html');
    var add_row_html = require('text!tpl/suppliers/add_row.html');
    return Backbone.View.extend({
        events: {
            "click .supplier_buttons .add_item_supplier_button": "addSupplier"
        },
        el: '#application-content-host',
        template: _.template(supplier_html),
        supplierTemplate: _.template(add_row_html),
        init: function () {
            var self = this;
            console.log('Suppliers initialized');
            var tableCollection = {};
            tableCollection.fields = ['ID', 'Supplier Name', 'Status', 'Action'];
            tableCollection.data = [
                {"id": "1", "supplier_name": "Dove", "status": "Active"},
                {'id': '2', 'supplier_name': 'Clinic Plus', 'status': 'InActive'}
            ];
            this.render(tableCollection);
            /*require('dataTables');
             $(".datatable").dataTable({aoColumnDefs: [
             {bSortable: !1, aTargets: [0, 6]}
             ], aaSorting: []});*/
            require('jquery-ui');
            /*$("#item-categories-form").dialog({
             autoOpen: false,
             width: 380,
             modal: true,
             buttons: {
             "Add Category": function () {
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
             });*/
        },
        render: function (tableCollection) {
            $(this.$el).html(this.template({suppliers: tableCollection, supplierTemplate: this.supplierTemplate}));
        },
        addSupplier: function (e) {
            console.log($(e));
            //$("#item-categories-form").dialog("open");
            $("#item-suppliers-form").dialog({
                autoOpen: true,
                width: 380,
                modal: true,
                buttons: {
                    "Add Supplier": function () {
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
                },
                close: function (ev, ui) {
                    $(this).dialog('destroy');
                }
            });
            e.preventDefault();
        },
        cleanup: function () {
            var self = this;
            self.$el.off();
            self.undelegateEvents();
            $(self.el).empty();
        }

    });
});