const webpack = require('webpack');
const config = require('./webpack.config');

export default () => new Promise((resolve, reject) => {
    webpack(config).run(function(err, stats) {
        if (err) {
            console.log('run error: ', err);
            return reject(err);
        }
        console.log(stats.toString(config.stats));
        return resolve();
    });
});