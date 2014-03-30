/**
 * Created by kondalu on 3/18/14.
 */
/**
 * Created by yedukondalu.v on 1/20/14.
 */
define(function (require) {
    "use strict"
    var $ = require('jquery');
    var Backbone = require('backbone');
    var _ = require('underscore');
    var categories_html = require('text!tpl/categories/index.html');
    var add_row_html = require('text!tpl/categories/add_row.html');
    return Backbone.View.extend({
        events: {
            "click .category_buttons .add_item_category_button": "addCategory"
        },
        el: '#application-content-host',
        template: _.template(categories_html),
        categoryTemplate: _.template(add_row_html),
        init: function () {
            var self = this;
            console.log('Categories initialized');
            var tableCollection = {};
            tableCollection.fields = ['ID', 'Category Name', 'Status', 'Action'];
            tableCollection.data = [
                {"id": "1", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "2", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "3", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "4", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "5", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "6", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "7", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "8", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "9", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "10", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "11", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "12", "category_name": "Shampoo packets", "status": "Active"},
                {"id": "13", "category_name": "Shampoo packets", "status": "Active"},
                {'id': '14', 'category_name': 'Shampoo bottles', 'status': 'InActive'}
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
                                "sLengthMenu": "Show _MENU_ categories",
                                "sInfo": "Showing _START_ to _END_ of _TOTAL_ categories",
                                "sInfoFiltered": "(filtered from _MAX_ categories)"
                            }
                        }).each(function () {
                            var a, t, e;
                            return a = $(this),
                                e = a.closest(".dataTables_wrapper").find("div[id$=_filter] input"),
                                e.attr("placeholder", "Search category"),
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
            $(this.$el).html(this.template({categories: tableCollection, categoryTemplate: this.categoryTemplate}));
        },
        addCategory: function (e) {
            console.log($(e));
            require(['jquery-ui'], function () {
                $("#item-categories-form").dialog({
                    autoOpen: true,
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