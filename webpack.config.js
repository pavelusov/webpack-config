const path = require('path');
const HtmlWP = require('html-webpack-plugin');
const app = 'app';

module.exports = {
    entry: path.resolve(__dirname, app, 'app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWP({
            title: 'Application',
            template: path.resolve(__dirname, app, 'index.html'),
            hash: true
        })
    ]
};
