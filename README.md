# ZoloBlocks

[![WP compatibility](https://plugintests.com/plugins/wporg/zoloblocks/wp-badge.svg)](https://plugintests.com/plugins/wporg/zoloblocks/latest)
[![PHP compatibility](https://plugintests.com/plugins/wporg/zoloblocks/php-badge.svg)](https://plugintests.com/plugins/wporg/zoloblocks/latest)
[![License: GPL v2+](https://img.shields.io/badge/License-GPLv2%2B-blue.svg)](https://www.gnu.org/licenses/gpl-2.0.html)

> A library of advanced blocks, patterns, and page templates for the WordPress block editor.

ZoloBlocks extends the native WordPress editor with 60+ blocks, pre-designed patterns, and full page templates — so you can design complete pages without relying on a third-party page builder.

- **Website:** [zoloblocks.com](https://zoloblocks.com/)
- **Live Demo:** [zoloblocks.com/demo](https://zoloblocks.com/demo/)
- **Documentation:** [bdthemes.com/knowledge-base-zoloblocks](https://bdthemes.com/knowledge-base-zoloblocks/)
- **Pro Version:** [zoloblocks.com/pricing](https://zoloblocks.com/pricing)
- **Support:** [bdthemes.com/support](https://bdthemes.com/support/)

---

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Project Structure](#project-structure)
- [External Services](#external-services)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)

---

## Features

- **60+ Blocks** across Image, Slider & Carousel, Post, Review, Form, Popup, Utility, Creative, Loop & Animation, Grid & List, Single Page Elements, and Advanced categories.
- **Patterns & Templates** — pre-designed patterns and page templates ready to insert.
- **Full Site Editing** compatibility with block themes.
- **Dynamic Content** for site, post, and user data.
- **Query Loop** for posts, products, and custom post types.
- **Responsive Controls** for mobile, tablet, and desktop.
- **Mega Menu** with multi-level navigation.
- **Animations** — entrance and scroll-based effects on supported blocks.
- **Optional AI Text Generation** inside the editor (third-party service — see [External Services](#external-services)).
- **Pattern Import / Export** for reuse across pages and sites.

A full, up-to-date block list with live previews is available at [zoloblocks.com/demo](https://zoloblocks.com/demo/).

---

## Requirements

| Requirement | Minimum Version |
| --- | --- |
| WordPress | 6.1 |
| PHP | 7.4 |
| Tested up to (WP) | 7.1 |

---

## Installation

### From the WordPress Dashboard

1. Navigate to **Plugins → Add New**.
2. Search for **"ZoloBlocks"**.
3. Click **Install Now**, then **Activate**.

### From a ZIP File

1. Download the latest release ZIP.
2. Go to **Plugins → Add New → Upload Plugin**.
3. Choose the ZIP file and click **Install Now**.
4. Click **Activate**.

After activation, configure features from the **ZoloBlocks** admin dashboard (most features are enabled by default).

---

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/bdthemes/zoloblocks.git
cd zoloblocks
npm install
composer install
```

Available scripts:

| Command | Description |
| --- | --- |
| `npm start` | Start development build with file watching. |
| `npm run build` | Generate production-ready assets in `build/`. |
| `composer install` | Install PHP development tooling. |

> **Note:** `composer install` installs development tooling only and is not required at runtime.

## Build

The compiled JavaScript and CSS files in the `build/` and `assets/` directories are generated from source files in `src/`. Run `npm run build` before packaging or deploying.

---

## Project Structure

```
zoloblocks/
├── assets/         # Static assets (images, icons, compiled CSS)
├── build/          # Compiled block bundles (generated)
├── includes/       # PHP classes, block registrations, integrations
├── src/            # Source files for blocks, controls, and scripts
├── templates/      # Page templates and patterns
├── zoloblocks.php  # Plugin bootstrap file
└── readme.txt      # WordPress.org readme
```

---

## External Services

ZoloBlocks connects to several third-party services **only when the related feature is used or configured**. No personal data is sent unless the corresponding feature is enabled or the user interacts with it.

| Service | Purpose | Provider |
| --- | --- | --- |
| [Google reCAPTCHA](https://policies.google.com/privacy) | Form spam protection (opt-in). | Google LLC |
| [Google Maps](https://policies.google.com/privacy) | Rendering maps via the Google Map block. | Google LLC |
| [Google Fonts list (WP.org mirror)](https://wordpress.org/about/privacy/) | Optional font catalog fetch (opt-in). | WordPress.org |
| [Zolo AI](https://sigmative.com/privacy-policy) | Optional AI text generation inside the editor. | Sigmative |
| [Mailchimp](https://www.intuit.com/privacy/statement/) | Optional Form → Mailchimp integration. | Intuit Mailchimp |
| Custom Webhooks | Optional Form → Webhook integration. | Administrator-defined |

See the `== External services ==` section of `readme.txt` for full disclosure, including exact endpoints and data transmitted.

---

## Contributing

Contributions, bug reports, and feature requests are welcome.

- **Issues & PRs:** [github.com/bdthemes/zoloblocks](https://github.com/bdthemes/zoloblocks)
- **Feature requests & roadmap:** [feedback.zoloblocks.com](https://feedback.zoloblocks.com/announcements)

Before submitting a pull request, please make sure:

1. `npm run build` completes without errors.
2. New blocks or controls follow existing naming and folder conventions under `src/`.
3. User-facing strings are translation-ready (`__()`, `_e()`, text domain `zoloblocks`).

---

## Security

Please report security vulnerabilities through the [Patchstack Vulnerability Disclosure Program](https://patchstack.com/database/vdp/1b60e035-ed99-4a70-a2c8-5c2cf4405e68). The Patchstack team will coordinate verification, CVE assignment, and vendor notification.

Do **not** report security issues via public GitHub issues or the support forum.

---

## License

ZoloBlocks is licensed under the [GNU General Public License v2.0 or later](https://www.gnu.org/licenses/gpl-2.0.html).

© [BdThemes](https://bdthemes.com/). All rights reserved.
