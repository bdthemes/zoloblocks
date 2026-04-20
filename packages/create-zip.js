/**
 * External dependencies
 */
const AdmZip = require( 'adm-zip' );
const { sync: glob } = require( 'fast-glob' );
const { sync: packlist } = require( 'npm-packlist' );
const { dirname, join } = require( 'path' );
const { stdout } = require( 'process' );

/**
 * Internal dependencies
 */
const { hasPackageProp, getPackageProp } = require( '@wordpress/scripts/utils' );

const name = getPackageProp( 'name' );
stdout.write( `Creating archive for \`${ name }\` plugin... 🎁\n\n` );
const zip = new AdmZip();

let files = [];
if ( hasPackageProp( 'files' ) ) {
	stdout.write(
		'Using the `files` field from `package.json` to detect files:\n\n'
	);
	files = packlist();
} else {
	stdout.write(
		'Using Plugin Handbook best practices to discover files:\n\n'
	);
	// See https://developer.wordpress.org/plugins/plugin-basics/best-practices/#file-organization.
	files = glob(
		[
			'admin/**',
			'build/**',
			'includes/**',
			'languages/**',
			'public/**',
			`${ name }.php`,
			'uninstall.php',
			'block.json',
			'changelog.*',
			'license.*',
			'readme.*',
		],
		{
			caseSensitiveMatch: false,
		}
	);
}

const EXCLUDE_BASENAMES = new Set([
    'package.json',
    'README.md',
    '.DS_Store',
    '.editorconfig',
    '.gitignore',
    '.distignore',
    '.gitattributes',
    'Thumbs.db',
]);

files
    .filter((file) => {
        // Drop any hidden file / path segment (e.g. .DS_Store, .github/..., .git/...).
        const segments = file.split(/[\\/]/);
        if (segments.some((seg) => seg.startsWith('.'))) {
            return false;
        }
        // Drop archive artifacts that should never be bundled.
        if (/\.(zip|tar\.gz|sql)$/i.test(file)) {
            return false;
        }
        return !EXCLUDE_BASENAMES.has(segments[segments.length - 1]);
    })
    .forEach((file) => {
        stdout.write(`  Adding \`${file}\`.\n`);
        const zipDirectory = join(name, dirname(file));
        zip.addLocalFile(file, zipDirectory !== '.' ? zipDirectory : name);
    });

zip.writeZip( `${ name }.zip` );
stdout.write( `\nDone. \`${ name }.zip\` is ready! 🎉\n` );