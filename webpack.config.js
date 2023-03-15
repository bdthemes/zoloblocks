const path = require('path');
let getFrontend = require('./src/frontend-config');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const plugins = defaultConfig.plugins.filter(
    (plugin) =>
        plugin.constructor.name != 'MiniCssExtractPlugin' &&
        plugin.constructor.name != 'CleanWebpackPlugin'
);

const blocksFolder = __dirname + '/blocks';
let frontendEntries = getFrontend(blocksFolder);

let allEntries = {
    ...frontendEntries,
    dist: './src/index.js',
    modules: {
        import: path.resolve(__dirname, "src/module-export.js"),
        library: {
            name: "zoloModule",
            type: "window",
        }
    }
};

const config = {
    ...defaultConfig,
    entry: allEntries,
    output: {
        path: path.resolve(__dirname),
        filename: '[name]/index.js',
    },
    plugins: [
        ...plugins,
        new MiniCSSExtractPlugin({
            filename: '[name]/style.css',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor-bundle',
                    chunks: 'all',
                },
            },
        },
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
};

module.exports = config;
