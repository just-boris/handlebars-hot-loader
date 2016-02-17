var Marionette = require('backbone.marionette');
var CounterView = require('../CounterView/CounterView')
var template = require('./AppView.hbs');

module.exports = Marionette.LayoutView.extend({
    template: template,
    regions: {
        counter: '.counter'
    },

    onRender() {
        this.getRegion('counter').show(new CounterView());
    }
});
