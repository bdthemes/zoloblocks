const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');
const path = require('path');
const fs = require('fs');

// Function to get all extensions and their entry points
const getExtensionsEntries = (extensionsPath) => {
    const entries = {};

    const scanExtensions = (basePath, relativePath = '') => {
        const items = fs.readdirSync(basePath);

        items.forEach((item) => {
            const itemPath = path.join(basePath, item);
            const itemRelativePath = relativePath ? `${relativePath}/${item}` : item;

            if (fs.lstatSync(itemPath).isDirectory()) {
                scanExtensions(itemPath, itemRelativePath); // Recursively scan subdirectories
            } else if (item === 'index.js' || item === 'frontend.js') {
                const entryKey = `extensions/${itemRelativePath.replace(/\/(index|frontend)\.js$/, '')}/${item.replace('.js', '')}`;
                entries[entryKey] = [`./${path.relative(process.cwd(), itemPath)}`];
            }
        });
    };

    scanExtensions(extensionsPath);
    return entries;
};

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
        ...getExtensionsEntries('./src/extensions'),
        'admin/index': ['./src/admin/index.js'],
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
        'zolo-icons/index': {
            import: ['./src/zolo-icons/index.js'],
            library: {
                name: 'zoloIcons',
                type: 'window',
            },
        },
    },
};
