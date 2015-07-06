var webpack = require('webpack');
var _ = require('lodash');
var cfg =  require('./base.js');

cfg.devtool = 'cheap-module-eval-source-map';

cfg.entry.app = _.union([
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server'
],cfg.entry.app);

cfg.plugins = _.union([
    new webpack.HotModuleReplacementPlugin()
],cfg.plugins);

module.exports = cfg;

