/**
 * Created by yedukondalu.v on 1/9/14.
 */
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    "use strict";
    var BaseRouter = Backbone.Router.extend({
        stopNavigation: false,
        before: function () {
        },
        after: function () {
        },
        route: function (route, name, callback) {
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            if (_.isFunction(name)) {
                callback = name;
                name = '';
            }
            if (!callback) callback = this[name];

            var router = this;

            Backbone.history.route(route, function (fragment) {
                var args = router._extractParameters(route, fragment);

                router.before.apply(router, arguments);
                if (router.stopNavigation) {
                    router.stopNavigation = false;
                    return;
                }
                callback && callback.apply(router, args);
                router.after.apply(router, arguments);

                router.trigger.apply(router, ['route:' + name].concat(args));
                router.trigger('route', name, args);
                Backbone.history.trigger('route', router, name, args);
            });
            return this;
        }
    });

    return BaseRouter;
});