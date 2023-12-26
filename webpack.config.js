const path = require('path');
let getFrontend = require('./src/frontend-config');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const plugins = defaultConfig.plugins.filter(
    (plugin) => plugin.constructor.name != 'MiniCssExtractPlugin' && plugin.constructor.name != 'CleanWebpackPlugin'
);

const blocksFolder = __dirname + '/blocks';
let frontendEntries = getFrontend(blocksFolder);

let allEntries = {
    ...frontendEntries,
    ['build/dist']: './src/index.js',
    ['build/module']: {
        import: path.resolve(__dirname, 'src/module-export.js'),
        library: {
            name: 'zoloModule',
            type: 'window',
        },
    },
};

module.exports = {
    ...defaultConfig,
    entry: allEntries,
    output: {
        path: path.resolve(__dirname),
        filename: '[name]/index.js',
    },
    // module: {
    //   rules: [
    //     // ... other rules ...

    //     // Rule for handling JSX files
    //     {
    //       test: /\.jsx?$/,
    //       exclude: /node_modules/,
    //       use: {
    //         loader: 'babel-loader',
    //         options: {
    //           presets: ['@babel/preset-env', '@babel/preset-react'],
    //         },
    //       },
    //     },
    //     // Rule for handling SCSS files
    //     {
    //       test: /\.scss$/,
    //       use: [
    //         'style-loader', // Adds styles to the DOM
    //         'css-loader',   // Translates CSS into CommonJS
    //         'sass-loader',  // Compiles Sass to CSS
    //       ],
    //     },
    //   ],
    // },
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
