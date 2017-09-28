
const webpack = require('webpack');

module.exports = {
    entry:{
        'home': __dirname + "/assets/main.js",
    },
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    devtool: 'none',
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                   "presets": [
                      ["es2015", {"modules": false}]
                    ]
                }
              },
            exclude: '/node_modules/'
          }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: ['node_modules'],
        alias: {}        
    },
    plugins: []
};
