var path = require("path");

module.exports = {
    context: __dirname + "/app/src",
    entry: "./App",
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/app/js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts"]
    },
    resolveLoader: {
        moduleDirectories: ["node_modules"]
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            }, {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    stats: {
        errorDetails: true
    },
    progress: false
};