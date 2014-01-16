/**
 * Created by yedukondalu.v on 1/8/14.
 */

define(['require', 'backbone'], function ($, Backbone, require) {

    "use strict";

    return Backbone.Collection.extend({

        model: Employee,

        sync: function (method, model, options) {
            if (method === "read") {
                findByManager(this.parent.id).done(function (data) {
                    options.success(data);
                });
            }
        }

    });
});