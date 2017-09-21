const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app', 'app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};
