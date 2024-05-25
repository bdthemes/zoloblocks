const path = require('path');
let getFrontend = require('./src/frontend-config');
const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const plugins = defaultConfig.plugins.filter(
    (plugin) => plugin.constructor.name !== 'MiniCssExtractPlugin' && plugin.constructor.name !== 'CleanWebpackPlugin'
);

const blocksFolder = path.resolve(__dirname, 'blocks');
let frontendEntries = getFrontend(blocksFolder);

const vendorLibraries = [
    '@vis.gl/react-google-maps',
    'apexcharts',
    'react-apexcharts',
    'react-countup',
    'react-compare-slider',
    'uuid',
    'webfontloader',
];

const editorVendorLibraries = [
    '@codemirror/lang-css',
    '@dnd-kit/core',
    '@dnd-kit/sortable',
    '@dnd-kit/utilities',
    '@uiw/react-codemirror',
    'bezier-easing-editor',
    'classnames',
    'react-google-autocomplete',
    'react-select',
    'react-multi-select-component',
];

let allEntries = {
    ...frontendEntries,
    'build/dist': './src/index.js',
    'build/admin': './src/admin/index.js',
    'build/animation': './src/animation/index.js',
    'build/module': {
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
    plugins: [
        ...plugins,
        new MiniCSSExtractPlugin({
            filename: '[name]/style.css',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor-bundle',
                    chunks: 'all',
                    enforce: true,
                    test: (module) => {
                        return module.context && vendorLibraries.some((library) => module.context.includes(library));
                    },
                    filename: 'vendor-bundle/index.js',
                },
                editorVendor: {
                    name: 'vendor-editor-bundle',
                    chunks: 'all',
                    enforce: true,
                    test: (module) => {
                        return module.context && editorVendorLibraries.some((library) => module.context.includes(library));
                    },
                    filename: 'vendor-editor-bundle/index.js',
                },
            },
        },
    },
};
