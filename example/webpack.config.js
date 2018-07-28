const { resolve } = require('path');
const root = path => resolve(__dirname, path);

module.exports = {
    entry: root('source'),
    output: {
        path: root('.'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.org$/,
                loader: '../index'
            }
        ]
    },
    resolve: {
        extensions: ['.org']
    }
}
