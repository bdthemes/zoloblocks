# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

ZoloBlocks is a WordPress Gutenberg blocks plugin (84 blocks) by BdThemes. This repo is the **free** plugin; the pro version is a separate plugin that hooks in via filters at runtime. Requires WP ≥ 6.1, PHP ≥ 7.4. The plugin version is hardcoded in two places in `zoloblocks.php` (the plugin header and the `ZOLO_VERSION` constant) — keep them in sync.

## Commands

```bash
npm install && composer install   # one-time setup
npm start                         # development build with file watching (wp-scripts)
npm run build                     # production build into build/
npm run make-pot                  # regenerate languages/zoloblocks.pot (requires WP-CLI)
npm run plugin-zip                # package zoloblocks.zip (packages/create-zip.js)
npm run publish                   # build + make-pot + plugin-zip
```

- `composer install` installs zero packages — it only generates the PSR-4 autoloader (`Zolo\` → `includes/`). Without it the plugin fatals on `vendor/autoload.php`.
- **There is no test suite** (no jest, no phpunit). A successful `npm run build` is the verification gate.
- Prettier config lives inline in `package.json`: 4-space indent, single quotes, semicolons, printWidth 140. Linting comes from `@wordpress/scripts` defaults (`npx wp-scripts lint-js`).
- CI: pushing any git tag triggers `.github/workflows/release.yml`, which runs `npm run publish` and creates a GitHub release.

## Architecture

### Bootstrap chain

`zoloblocks.php` (singleton, defines `ZOLO_*` constants) → `includes/zoloblocks-loader.php` (`ZoloBlocks_Loader`) instantiates every subsystem singleton on `plugins_loaded`. All PHP classes use `Zolo\Traits\SingletonTrait` (`getInstance()`).

### Block registration (PHP side)

The canonical block registry is `includes/Blocks/Blocks.php` — an associative array keyed by block slug, filterable via `zolo_blocks_list_data`. Enable/disable state is stored in the `zolo_blocks_settings` option (managed from the admin dashboard via `zolo/v1/*` REST routes in `includes/Admin/Settings.php`).

`includes/Classes/Registration.php` iterates that list on `init` and calls `register_block_type()` on `build/blocks/<name>/` — registration reads the **built** `block.json`, never `src/`, so PHP-visible block changes require a build first. If a registry entry has a `class` key, the block is dynamic: a render class in `includes/Blocks/` (query-driven blocks extend `PostBlock`) renders via templates in `views/`. Disabled blocks are additionally unregistered client-side by `src/editor-common/unregister.js`.

### Block source convention (JS side)

Each block lives in `src/blocks/<name>/`:

- `block.json` — apiVersion 3, name `zolo/<name>`, category `zoloblocks`; webpack auto-discovers entries from these
- `index.js` (registerBlockType), `edit.js`, `save.js` (absent for server-rendered blocks), `attributes.js`, `inspector.js`, `style.js`, `style.scss`
- `frontend.js` — registered as `viewScript` for blocks needing front-end JS
- `constants/` (attribute prefix keys shared by attributes/inspector/style), `deprecated/`

### Shared code is accessed via window globals, not imports

- `src/modules/index.js` is a barrel re-exporting all reusable controls (`src/controls/`), helpers (`src/helpers/`), and the style engine, built as webpack library `window.zoloModule`. Blocks destructure from it: `const { ZoloPanelBody, generateCSS } = window.zoloModule;`
- `src/zolo-icons/` → `window.zoloIcons` (`BlockIcons['<slug>']`)
- A new reusable control/helper must be exported from `src/modules/index.js` to be reachable.
- PHP passes data to JS as `zoloParams` (editor) and `zoloSettings` (editor + frontend), localized in `includes/Classes/ZoloEnqueues.php` — which also registers third-party assets (swiper, etc.) that blocks reference by handle in `block.json`.

### Dynamic style pipeline

Each block's `style.js` generates CSS at edit time and stores it in the `zoloStyles` attribute. On the frontend, `includes/Classes/StyleGenerator.php` hooks `render_block`, compiles every `zolo/*` block's `zoloStyles`, and prints one inline `<style id="zolo-block-inline-styles">`; it also adds `zolo-block` / `{uniqueId}` wrapper classes. `src/global/hooks/` injects the shared attributes (`uniqueId`, `zoloStyles`, `resMode`, …) into every `zolo/*` block via the `blocks.registerBlockType` filter.

### Free vs pro

No pro code in this repo. Pro is detected via `class_exists('Zolo_Blocks_Pro')` / `defined('ZOLO_PRO_VERSION')`, exposed to JS as `zoloParams.zolo_pro_status`. The pro plugin injects its blocks through the `zolo_blocks_list_data` filter with a `block_path` key pointing at its own `build/blocks/`. `includes/Blocks/ProBlocks.php` and `includes/Extensions/pro-extensions.php` are marketing metadata only — never registered here.

### Other surfaces

- **Admin dashboard**: React SPA at `src/admin/index.js`, mounted on `#zolo-dashboard` (PHP shell: `includes/Admin/Dashboard.php`)
- **Template library**: second editor React app at `src/template-library/` with its own `@wordpress/data` store
- **Extensions**: JS in `src/extensions/<name>/` (webpack auto-scans for `index.js`/`frontend.js`), PHP classes in `includes/Extensions/`, registry in `includes/Extensions/extensions.php` + `zolo_extensions_settings` option
- **REST**: everything under `zolo/v1/` — posts/meta/fonts/AI controllers in `includes/API/`
- **Webpack** (`webpack.config.js`, extends wp-scripts): alias `@` → `src/`

### Adding a new block — checklist

1. Create `src/blocks/<slug>/` following the convention above (webpack picks it up from `block.json`)
2. Add icon under the slug key in `src/zolo-icons/block-icons.js`
3. Add registry entry in `includes/Blocks/Blocks.php` — **mandatory, or the block is never registered**
4. Dynamic blocks only: render class in `includes/Blocks/` (require it at the top of `Blocks.php`, add `'class' => ...` to the entry) + template in `views/`
5. Run `npm run build`

## Conventions

- Text domain is `zoloblocks`; all user-facing strings must be translation-ready (`__()`, `_e()`)
- Follow existing naming/folder conventions under `src/` for new blocks and controls
