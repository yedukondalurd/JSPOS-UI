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
                {'id': '2', 'category_name': 'Shampoo bottles', 'status': 'InActive'}
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
            $(this.$el).html(this.template({categories: tableCollection, categoryTemplate: this.categoryTemplate}));
        },
        addCategory: function (e) {
            console.log($(e));
            //$("#item-categories-form").dialog("open");
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