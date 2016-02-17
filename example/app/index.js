var Handlebars = require('handlebars/runtime');
var Marionette = require('backbone.marionette');
require('regions-extras').register({
    Handlebars: Handlebars,
    Marionette: Marionette
});

var AppView = require('./views/AppView/AppView');
var Model = require('backbone').Model;
var app = new AppView({
    el: '#app',
    model: new Model({appName: 'Handlebars hotload app'})
});

app.render();
