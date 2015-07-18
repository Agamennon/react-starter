var path = require('path');
var root =  path.resolve(__dirname);
module.exports = {
      root:root,
      app:path.resolve(root, 'app'),
      node: path.resolve(root, 'node_modules'),
      build: path.resolve(root, 'public', 'build'),
      webpack: path.resolve(root, 'webpack'),
      bundler: path.resolve(root, 'webpack', 'bundler', 'bundler.js')
};
