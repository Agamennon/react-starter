var webpack = require('webpack');
var path = require('path');
var p = require('./paths.js');



module.exports = {
    context: p.root,
    entry: {
        app: [
            path.resolve(p.app, 'main.jsx')
        ],
        vendors:['react/addons','react-router']
    },
    output: {
        path: p.build,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                exclude: [p.node,p.build]
            },
            {
                test: /\.css$|scss/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.ProvidePlugin({  //qualquer hora que usar React ele preenche com require ('react/addons');
            "React": "react/addons",   //http://stackoverflow.com/questions/23305599/webpack-provideplugin-vs-externals
            "Router": "react-router",
            "classnames": 'classnames',
            "sa": "superagent",
            "Reflux":"reflux",
            "_": "lodash"
        })

    ]
};

/*

module.exports =  {
    devtool:'source-map',
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/dev-server',
        path.resolve(appPath, 'main.jsx')
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            exclude: [nodeModulesPath,buildPath]
        }, {
            test: /\.css$|scss/,
            loader: 'style!css!sass'
        }]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.ProvidePlugin({  //qualquer hora que usar React ele preenche com require ('react/addons');
            "React": "react/addons",   //http://stackoverflow.com/questions/23305599/webpack-provideplugin-vs-externals
            "Router": "react-router",
            "classnames": 'classnames',
            "sa": "superagent",
            "Reflux":"reflux",
            "_": "lodash"
        })
    ]
};
*/

