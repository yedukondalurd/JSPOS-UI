require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        tpl: '../tpl',
        views: '../app/views',
        models: '../app/models',
        collections: '../app/collections',
        require: 'require'
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'app/app'], function ($, App) {
    App.start();
});