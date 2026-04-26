const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');
const path = require('path');
const fs = require('fs');

// List of specific folders to scan recursively
const recursiveFolders = ['motion-effects'];

const getExtensionsEntries = (extensionsPath) => {
    const entries = {};

    const scanExtensions = (basePath, relativePath = '') => {
        const items = fs.readdirSync(basePath);

        items.forEach((item) => {
            const itemPath = path.join(basePath, item);
            const itemRelativePath = relativePath ? `${relativePath}/${item}` : item;

            if (fs.lstatSync(itemPath).isDirectory()) {
                if (recursiveFolders.includes(relativePath || item)) {
                    // Recursively scan for specific folders listed in recursiveFolders
                    scanExtensions(itemPath, itemRelativePath);
                } else {
                    // Add only top-level index.js or frontend.js for non-recursive folders
                    const topLevelIndex = path.join(itemPath, 'index.js');
                    const topLevelFrontend = path.join(itemPath, 'frontend.js');

                    if (fs.existsSync(topLevelIndex)) {
                        entries[`extensions/${item}/index`] = [`./${path.relative(process.cwd(), topLevelIndex)}`];
                    }
                    if (fs.existsSync(topLevelFrontend)) {
                        entries[`extensions/${item}/frontend`] = [`./${path.relative(process.cwd(), topLevelFrontend)}`];
                    }
                }
            } else if (item === 'index.js' || item === 'frontend.js') {
                // Add files from nested folders
                const entryKey = `extensions/${itemRelativePath.replace(/\/(index|frontend)\.js$/, '')}/${item.replace('.js', '')}`;
                entries[entryKey] = [`./${path.relative(process.cwd(), itemPath)}`];
            }
        });
    };

    // Only top-level scan for base extensions directory
    scanExtensions(extensionsPath);
    return entries;
};

module.exports = {
    ...defaultConfig,
    ...{
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src/'),
                '@emotion/react': path.resolve(__dirname, 'node_modules/@emotion/react'),
                '@emotion/styled': path.resolve(__dirname, 'node_modules/@emotion/styled'),
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
