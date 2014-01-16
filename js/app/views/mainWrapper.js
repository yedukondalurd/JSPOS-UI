/**
 * Created by yedukondalu.v on 1/9/14.
 */
define(function (require) {

    "use strict";
    var $ = require('jquery');
    var Backbone = require('backbone');
    var mainWrapper = require('text!tpl/mainWrapper.html');
    var sideBarNavigation = require('text!tpl/sideMenu.html');
    var mainWrapperView = Backbone.View.extend({
        $wrapperElement: 'body',
        $sidebarSelector: '#side-bat-navigation',
        init: function () {
            var _ = require('underscore');
            var wrapperTemplate = _.template(mainWrapper);
            var sidebarTemplate = _.template(sideBarNavigation);
            $(this.$wrapperElement).empty().html(wrapperTemplate());
            $(this.$sidebarSelector).html(sidebarTemplate());
        }
    });
    return new mainWrapperView();
});