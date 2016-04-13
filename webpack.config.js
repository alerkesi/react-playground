var path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src/scripts'),
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'out/scripts'),
        filename: 'app.js'
    },
    
    resolve: {
        root: path.resolve(__dirname, 'src/scripts'),
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },

    stats: {
        colors: true,
        reasons: true,
        timings: true
    },
    
    module: {
        loaders: [
            {
                test: /\.(t)sx?$/,
                loaders: ['awesome-typescript-loader']
            }
        ]
    }
};