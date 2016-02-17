var webpack = require('webpack');
var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');
var port = process.env.PORT || 3000;

config.entry.app.unshift(`webpack-dev-server/client?http://localhost:${port}`, 'webpack/hot/dev-server');
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase: './dist',
    stats: { colors: true },
    inline: true,
    hot: true
});
server.listen(port);
