var Marionette = require('backbone.marionette');
var CounterModel = require('../../models/CounterModel');
var template = require('./CounterView.hbs');

module.exports = Marionette.ItemView.extend({
    template: template,

    events: {
        'click .button-plus': function() {
            this.model.increment();
        },
        'click .button-minus': function() {
            this.model.decrement();
        }
    },

    initialize: function() {
        this.model = new CounterModel({count: 0});
        this.model.on('change:count', this.render, this);
    }
})
