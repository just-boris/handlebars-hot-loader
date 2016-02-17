var Model = require('backbone').Model;

module.exports = Backbone.Model.extend({
    increment: function() {
        var count = this.get('count');
        this.set('count', ++count);
    },

    decrement: function() {
        var count = this.get('count');
        this.set('count', --count);
    }
});
