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
                {"id": "2", "supplier_name": "Dove", "status": "Active"},
                {"id": "3", "supplier_name": "Dove", "status": "Active"},
                {"id": "4", "supplier_name": "Dove", "status": "Active"},
                {"id": "5", "supplier_name": "Dove", "status": "Active"},
                {"id": "6", "supplier_name": "Dove", "status": "Active"},
                {"id": "7", "supplier_name": "Dove", "status": "Active"},
                {"id": "8", "supplier_name": "Dove", "status": "Active"},
                {"id": "9", "supplier_name": "Dove", "status": "Active"},
                {"id": "10", "supplier_name": "Dove", "status": "Active"},
                {"id": "11", "supplier_name": "Dove", "status": "Active"},
                {"id": "12", "supplier_name": "Dove", "status": "Active"},
                {"id": "13", "supplier_name": "Dove", "status": "Active"},
                {"id": "14", "supplier_name": "Dove", "status": "Active"},
                {"id": "15", "supplier_name": "Dove", "status": "Active"},
                {'id': '16', 'supplier_name': 'Clinic Plus', 'status': 'InActive'}
            ];
            this.render(tableCollection);
            require(['dataTables'], function () {
                require(['plugins/datatable-bootstrap'], function () {
                    $(".datatable").dataTable(
                        {aoColumnDefs: [
                            {
                                bSortable: !1,
                                aTargets: [0, 4]
                            }
                        ],
                            "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
                            "sPaginationType": "bootstrap",
                            aaSorting: [],
                            "oLanguage": {
                                "sSearch": "",
                                "sLengthMenu": "Show _MENU_ suppliers",
                                "sInfo": "Showing _START_ to _END_ of _TOTAL_ suppliers",
                                "sInfoFiltered": "(filtered from _MAX_ suppliers)"
                            }
                        }).each(function () {
                            var a, t, e;
                            return a = $(this),
                                e = a.closest(".dataTables_wrapper").find("div[id$=_filter] input"),
                                e.attr("placeholder", "Search supplier"),
                                e.addClass("form-control input-sm"),
                                t = a.closest(".dataTables_wrapper").find("div[id$=_length] select"),
                                t.addClass("form-control input-sm"),
                                t = a.closest(".dataTables_wrapper").find("div[id$=_info]"),
                                t.css("margin-top", "18px")
                        });
                });
            });
        },
        render: function (tableCollection) {
            $(this.$el).html(this.template({suppliers: tableCollection, supplierTemplate: this.supplierTemplate}));
        },
        addSupplier: function (e) {
            console.log($(e));
            require(['jquery-ui'], function () {
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