const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');
const path = require('path');
module.exports = {
    ...defaultConfig,
    ...{
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            },
        },
    },
    entry: {
        ...defaultConfig.entry(),
        'admin/index': ['./src/admin/index.js'],
        'animation/index': ['./src/animation/index.js'],
        'extensions/export-pattern/index': ['./src/extensions/export-pattern/index.js'],
        'extensions/import-pattern/index': ['./src/extensions/import-pattern/index.js'],
        'extensions/shape-divider/index': ['./src/extensions/shape-divider/index.js'],
        'extensions/particles/index': ['./src/extensions/particles/index.js'],
        'extensions/particles/frontend': ['./src/extensions/particles/frontend.js'],
        'template-library/index': ['./src/template-library/index.js'],
        'editor-common/index': ['./src/editor-common/index.js'],
        'common/index': ['./src/common/index.js'],
        'modules/index': {
            import: ['./src/modules/index.js'],
            library: {
                name: 'zoloModule',
                type: 'window',
            },
        },
        'blocks-icons/index': {
            import: ['./src/blocks-icons/index.js'],
            library: {
                name: 'zoloIcons',
                type: 'window',
            },
        },
    },
};
