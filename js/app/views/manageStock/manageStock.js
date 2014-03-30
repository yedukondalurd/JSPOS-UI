/**
 * Created by yedukondalu.v on 1/20/14.
 */
define(function (require) {
    "use strict"
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var manageStock = require('text!tpl/manage-stock/index.html');
    var itemRowHtml = require('text!tpl/manage-stock/add/index.html');
    return Backbone.View.extend({
        events: {
            "click .item_buttons .add_item_button": "addItem",
            "click .datatable .delete-item": 'deleteItem'
        },
        el: '#application-content-host',
        template: _.template(manageStock),
        itemTemplate: _.template(itemRowHtml),
        dataTableHolder: '',
        init: function () {
            var self = this;
            console.log('Manage stock initialized');
            var tableCollection = {};
            tableCollection.fields = ['ID', 'Item Name', 'Item Supplier', 'Item Category', 'Stock', 'Action'];
            tableCollection.data = [
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {'item_name': 'Clinic Plus Hair Therapy', 'item_supplier': 'Clinic Plus', 'item_category': 'Shampoo', "item_stock": "23"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"},
                {"item_name": "Dove Hair Therapy", "item_supplier": "Dove", "item_category": "Shampoo", "item_stock": "2"}
            ];
            this.render(tableCollection);
            require(['dataTables'], function () {
                require(['plugins/datatable-bootstrap'], function () {
                    self.dataTableHolder = $(".datatable").dataTable(
                        {aoColumnDefs: [
                            {
                                bSortable: !1,
                                aTargets: [0, 6]
                            }
                        ],
                            "sDom": "<'row'<'span6'l><'span6'f>r>t<'row'<'span6'i><'span6'p>>",
                            "sPaginationType": "bootstrap",
                            aaSorting: [],
                            "fnRowCallback": function (nRow, aData, iDisplayIndex) {
                                $("td:eq(1)", nRow).html(iDisplayIndex + 1);
                                return nRow;
                            },
                            "oLanguage": {
                                "sSearch": "",
                                "sLengthMenu": "Show _MENU_ items",
                                "sInfo": "Showing _START_ to _END_ of _TOTAL_ items",
                                "sInfoFiltered": "(filtered from _MAX_ items)"
                            }
                        }).each(function () {
                            var a, t, e;
                            return a = $(this),
                                e = a.closest(".dataTables_wrapper").find("div[id$=_filter] input"),
                                e.attr("placeholder", "Search item"),
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
            $(this.$el).html(this.template({items: tableCollection, itemTemplate: this.itemTemplate}));
        },
        addItem: function (e) {
            console.log($(e));
            var self = this;
            var availableTags = [
                "ActionScript",
                "AppleScript",
                "Asp",
                "BASIC",
                "C",
                "C++",
                "Clojure",
                "COBOL",
                "ColdFusion",
                "Erlang",
                "Fortran",
                "Groovy",
                "Haskell",
                "Java",
                "JavaScript",
                "Lisp",
                "Perl",
                "PHP",
                "Python",
                "Ruby",
                "Scala",
                "Scheme"
            ];
            require(['jquery-ui'], function () {
                $("#add-item-form").dialog({
                    autoOpen: true,
                    width: 380,
                    modal: true,
                    buttons: {
                        "Add Item": function () {
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
                    open: function () {
                        $(this).dialog('open');
                        $("input[name=item_category]").autocomplete({source: availableTags});
                        setTimeout(function () {
                            $('.ui-dialog').after($('.ui-autocomplete'));
                        }, 500);
                        $('.add-spinner').spinner();
                    },
                    close: function (ev, ui) {
                        self.add(self.getFormAsJson());
                        $('.add-spinner').spinner('destroy');
                        $("input[name=item_category]").autocomplete("destroy");
                        $(this).dialog('destroy');
                    }
                });

            });
            e.preventDefault();
        },
        getFormAsJson: function () {
            var formArray = $('#add-item-form form').serializeArray();
            var formJson = {};

            jQuery.each(formArray, function () {
                formJson[this.name] = this.value || '';
            });

            return formJson;
        },
        add: function (options) {
            var self = this;
            console.log(self.itemTemplate(options));
            this.dataTableHolder.fnAddData([
                '<div class="checkbox"><input type="checkbox"/></div>',
                '',
                options.item_name,
                options.item_supplier,
                options.item_category,
                options.item_stock,
                '<a href="#" class="btn btn-default btn-xs"><i class="icon-pencil"></i> edit</a><a href="#" class="btn btn-danger btn-xs delete-item"><i class="icon-remove"></i></a>'
            ]);
        },
        edit: function () {
            /*$('#myModal .close-reveal-modal').click();
             notify(options.responseData.message, 'bottomRight', options.responseData.status);
             options.currentTableData.fnUpdate([
             options.responseData.data.first_name,
             options.responseData.data.last_name,
             options.responseData.data.email,
             options.responseData.data.phone_number,
             '<a href="customers/editCustomer" customer_id="' + options.responseData.data.id + '" class="editEnqBtn">Edit</a><a href="#" customer_id="' + options.responseData.data.id + '" class="delEnqBtn">Delete</a>'], parseInt(options.rowPosition));
             */
        },
        deleteItem: function (e) {
            var aPos = this.dataTableHolder.fnGetPosition(e.currentTarget.parentNode);
            this.dataTableHolder.fnDeleteRow(aPos[0]);
            e.preventDefault();
        },
        cleanup: function () {
            var self = this;
            console.log('Manage stock clean up');
            self.$el.off();
            self.undelegateEvents();
            $(self.el).empty();
        }

    });
});