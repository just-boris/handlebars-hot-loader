# Handlebars-hot-loader

> Hot reload for Handlebars templates within Backbone or Marionette.

Webpack has [Hot Module Replacement](http://webpack.github.io/docs/hot-module-replacement-with-webpack.html) feature.
It means that you can update your modules without full page reload. Now you can do it with Handlebars templates as well!

## Getting started
This thing intended to use in [Marionette.js](http://marionettejs.com/) project. Also you need to have configured Webpack build for your project.
If you still haven't done yet, read the [Webpack docs](http://webpack.github.io/docs/configuration.html).

We work as separate loader on top your handlebars-loader, so you still need to use
[handlebars-loader](https://github.com/altano/handlebars-loader).

See [example](example) directory to see how it works.

## Installation

Once you have working Webpack build with hot reload, do the following:

1. `npm install handlebars-hot-loader`
2. `npm install regions-extras` – this step is nessesary, because we need to instrument our marionette packages
3. Add the loader into your Webpack configuration
```
module: {
  loaders: [
    {
      test: /\.hbs/,
      loader: 'handlebars-hot!handlebars'
    }
  ]
},
```
4. Instrument Marionette Views to work with hotload. Add the following in your application code.
```
require('regions-extras').register({
    Handlebars: Handlebars,
    Marionette: Marionette
});
```
