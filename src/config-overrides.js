// config-overrides.js
const webpack = require('webpack');

module.exports = {
    webpack: (config, env) => {
        config.resolve.fallback = {
            stream: require.resolve('stream-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            url: require.resolve('url/'),
        };
        config.plugins.push(
            new webpack.ProvidePlugin({
                process: 'process/browser',
                Buffer: ['buffer', 'Buffer'],
            })
        );
        return config;
    },
};
