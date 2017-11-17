const path = require('path');

module.exports = {
    entry: ['babel-polyfill','./src/index.js'],
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['react', 'es2015', 'stage-1'],
              },
            },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
