=== ZoloBlocks ===
Contributors: bdthemes, selimmw, mizan42047, abutalib, muhammadasik, shamim496
Donate link: http://zoloblocks.com/
Tags: blocks, block editor, dynamic content, patterns, templates
Requires at least: 6.1
Tested up to: 6.9
Requires PHP: 7.4
Stable tag: 2.7.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

ZoloBlocks adds a library of advanced blocks, patterns, and page templates to the WordPress block editor.

== Description ==

ZoloBlocks is a collection of blocks, patterns, and page templates for the WordPress block editor. It helps you design complete pages using the native editor without a third-party page builder.

[**Live Demo**](https://zoloblocks.com/demo/) | [**Pro Version**](https://zoloblocks.com/pricing) | [**Documentation**](https://bdthemes.com/knowledge-base-zoloblocks/)

= What ZoloBlocks Provides =

- A library of advanced blocks that extend the default WordPress block editor.
- Pre-designed patterns and page templates you can insert into pages.
- Full Site Editing compatibility with block themes.
- Dynamic content options for site, post, or user data.
- Query loop options for posts, products, or custom post types.
- Animation and visual effect options for supported blocks.
- Optional AI text generation to help draft headings and paragraphs (third-party service, see "External services" below).
- Pattern import and export for reuse across sites.

= Key Features =

- Layout building with pre-built sections and templates.
- Responsive containers for mobile, tablet, and desktop.
- Mega menu for multi-level navigation.
- Dynamic content and query loop for posts or custom post types.
- Entrance and scroll-based animations on supported blocks.
- Optional AI text generation inside the editor (third-party service).
- Pattern import / export for reuse across pages or sites.

= Available Blocks =

ZoloBlocks ships 60+ free and pro blocks across categories such as Image, Slider & Carousel, Post, Review, Form, Popup, Utility, Creative, Loop & Animation, Grid & List, Single Page Elements, and Advanced. A full list with live demos is available at https://zoloblocks.com/demo/.

= Who Is It For =

Website designers, freelancers, agencies, bloggers, content creators, small business owners, portfolio builders, and digital marketers who want to design WordPress pages directly in the block editor.

= Support =

The team behind ZoloBlocks ships regular updates. For help, [contact support](https://bdthemes.com/support/). Visit [BdThemes](https://bdthemes.com/) for more plugins and documentation.

== Source code ==

The compiled JavaScript and CSS files in the `build/` and `assets/` directories are generated from the source code in the `src/` directory.

Public source repository: https://github.com/bdthemes/zoloblocks

Build instructions:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to generate the production assets in `build/`.
4. Run `composer install` to install PHP dependencies (used for development tooling only).

== External services ==

This plugin connects to several third-party services. Each service is only contacted when the related feature is used or configured. No personal data is sent unless the corresponding feature is enabled or the user interacts with it.

**1. Google reCAPTCHA**
Used by the Form block when the site administrator enables reCAPTCHA protection and provides site / secret keys in ZoloBlocks settings.
- What is sent: the reCAPTCHA token generated in the visitor's browser, the visitor's IP address, and the configured secret key, sent to `https://www.google.com/recaptcha/api/siteverify` on form submission. The Google reCAPTCHA JavaScript (`https://www.google.com/recaptcha/api.js`) is loaded on pages containing a form when reCAPTCHA is enabled.
- When: only when reCAPTCHA is enabled and a form is submitted.
- Provider: Google LLC. Terms: https://policies.google.com/terms  Privacy: https://policies.google.com/privacy

**2. Google Maps**
Used by the Google Map block when added to a page.
- What is sent: the configured Google Maps API key and a request to load the Google Maps JavaScript API from `https://maps.googleapis.com/maps/api/js`. The browser of any visitor viewing a page containing a Google Map block will load map tiles from Google.
- When: only when a Google Map block is present on a page.
- Provider: Google LLC. Terms: https://cloud.google.com/maps-platform/terms  Privacy: https://policies.google.com/privacy

**3. Google Fonts list (WordPress.org mirror)**
Optional. Used by the typography controls only when a site administrator enables **Settings → Editor Options → Load Google Fonts catalog (WordPress.org mirror)** in the ZoloBlocks dashboard.
- What is sent: a simple HTTP GET request (no personal data) to `https://s.w.org/images/fonts/wp-7.0/collections/google-fonts-with-preview.json` to retrieve the list of Google Fonts.
- When: only after the option is enabled, and only when the block editor needs to refresh the font list.
- Provider: WordPress.org. Terms and privacy: https://wordpress.org/about/privacy/

**4. Zolo AI (AI text generation by Sigmative)**
Used by the optional AI text generation feature inside the block editor.
- What is sent: the prompt text entered by the site administrator in the editor, and the API key configured in ZoloBlocks settings, sent to `https://ai.sigmative.com/api/prompt/v1/generation/chat/completions`.
- When: only when an administrator clicks the AI generation action in the editor.
- Provider: Sigmative. Privacy: https://sigmative.com/privacy-policy

**5. Mailchimp (optional Form integration)**
Used only when a site administrator configures a Form block to send subscriber data to Mailchimp.
- What is sent: the visitor's email address, optional first name, the configured Mailchimp API key and list ID, sent to `https://<dc>.api.mailchimp.com/3.0/lists/{list_id}/members` (where `<dc>` is the data center prefix derived from the API key).
- When: only when a visitor submits a form whose Mailchimp integration has been configured by the administrator.
- Provider: Intuit Mailchimp. Terms: https://mailchimp.com/legal/terms/  Privacy: https://www.intuit.com/privacy/statement/

**6. Custom Webhooks (optional Form integration)**
Used only when a site administrator pastes a custom webhook URL into the Form block settings.
- What is sent: the visitor's email address and optional first name, sent as a JSON POST request to the URL configured by the administrator.
- When: only when a visitor submits a form whose webhook URL has been configured by the administrator.
- Provider: the third-party service chosen by the administrator. The administrator is responsible for ensuring the destination has an appropriate privacy policy.

== Installation ==

= Plugin Installation Method: =

1. Go to the WordPress dashboard
2. Got to the **Plugins** > **Add New**
3. Type **"ZoloBlocks"** in the search box
4. Click on **"Install"** button
5. After install the plugin **Activate** the plugin

= Installation via Zip file: =

1. Download ZoloBlocks block **plugin zip** file from WordPress
2. Go to site **Dashboard** > **Plugins** > **Add New** > **Upload Plugins**
3. Select the ZoloBlocks zip file and proceed to install
4. Activate ZoloBlocks.


https://youtu.be/WH-Afb6b4KQ

= Plugin settings: =

- Please turn on/off required features from ZoloBlocks dashboard (most features are turned on by default)

== Upgrade Notice ==

There are no requirement for upgrade notice. Just click the update button and updated the plugin.

== Frequently Asked Questions ==

= What features does the plugin offer? =
ZoloBlocks offers a range of features designed to enhance your web design experience. These includes customizable blocks, layouts, patterns,  drag-and-drop interface, advanced styling options, flexibility, responsiveness and more.

= Does ZoloBlocks work with all WordPress themes? =
Most certainly all WordPress themes are compatible with the ZoloBlocks framework as the plugin is built for maximum compatibility with WordPress itself.

= What if I update to the Premium version? =
If you upgrade to the pro plugin version, you will unlock more unique features and customizations. Additionally, you will be able to receive personalized support from team BdThemes.

= Do I need any page builder (such as Elementor/Divi) to use it? =
No. With this plugin, you will actually replace all popular page builder plugins. On top of that, you can enjoy a similar yet faster and more robust customization experience in the Gutenberg environment.

= Does it conflict with other Gutenberg plugins? =
This plugin will not conflict with any other Gutenberg or page builder plugins. Moreover, developers are consistently maintaining the quality to ensure no conflict occurs.

= Will ZoloBlocks break my site after an update? =
As a Native Gutenberg plugin, ZoloBlocks does not break your site after new updates. However, a rare case might occur if the plugin fails to properly update. If you are facing such an issue, please roll back to the previous version and contact support for help.

= How long do I get support & updates? =
You will continue to receive support as long as the plugin is alive. Also, we promise frequent updates to maintain product quality. So, you can expect a well-scheduled update for the plugin.

= Can I translate ZoloBlocks into my language? =
Yes, our plugin offers multi-lingual support as a compliment being developed from the raw essence of WordPress.

= Can I White Label ZoloBlocks? =
The White Label option can only be enjoyed by paid customers belonging to a specific tier mentioned in the plugin's Terms of Use.

= Can we get more widgets in the near future? =
Of course. Please expect new features within the frequent plugin updates. Also, you can contribute by suggesting features and your opinions to us.

= Can I use ZoloBlocks on client sites? =
The plugin has been developed to be used by all WordPress users, regardless of their freelancer-client relationship. And there are paid tiers of the plugin designed especially for giving out client-based web services.

= Does the plugin require WordPress mastery? =
No. In fact, it might be your first day at WordPress and you are using ZoloBlocks for the first time. Still, you will be able to grasp all the features and functionality of the plugin shortly. We also have documentation, feature videos, and Live Chat support to further guide you.

= Will my site load slower if I install the plugin? =
Absolutely no chance of slowing down your website. ZoloBlocks boosts a lightweight framework with only fresh green codes. Best thing can happen is that your site will get faster and more beautiful.

= Does the plugin provide SEO improvements? =
Yes, the plugin is optimized to let you harvest all of your SEO goals easily. With robust WordPress compatibility, the plugin can work alongside popular SEO plugins and makes sure your site ranking is well-preserved.

= Will these slow down my site? =
Not at all. We have optimized all of these blocks for better performance.

= Where do I report security bugs found in this plugin? =
Please report security bugs found in the source code of the ZoloBlocks plugin through the [Patchstack Vulnerability Disclosure Program](https://patchstack.com/database/vdp/1b60e035-ed99-4a70-a2c8-5c2cf4405e68). The Patchstack team will assist you with verification, CVE assignment, and notify the developers of this plugin.

== Screenshots ==

1. ZoloBlocks Page Builder Blocks Addons for Gutenberg
2. ZoloBlocks Best Features
3. Most Popular Widget List 01
4. Most Popular Widget List 02
5. Why you Should use ZoloBlocks
6. Why you Should use ZoloBlocks
7. Check out our others popular plugin

== Changelog ==

### 2.7.4 [April 26, 2026]

#### Compliance
- **Trialware:** Pro features (blocks and extensions) are no longer rendered as locked entries inside the active Blocks/Extensions lists. They now appear only on a dedicated "Upgrade" tab as plain marketing text, with no toggles.
- **Pro registry split:** `includes/Extensions/extensions.php` and `includes/Blocks/Blocks.php` contain only fully functional free entries. Pro marketing metadata moved to `includes/Extensions/pro-extensions.php` and `includes/Blocks/ProBlocks.php`.
- **Phone home:** Removed unused `biggopti.js` / `biggopti.css` admin assets.
- **Security:** Removed `'sslverify' => false` from outbound HTTP requests in the Mailchimp integration and Zolo AI client; SSL verification is now enabled by default for all external calls.
- **Disclosure:** Added Mailchimp and Custom Webhook entries to the readme `== External services ==` section.
- **Readme:** Trimmed promotional cross-promo sections.

### 2.7.3 [April 23, 2026]

#### Compliance
- **WordPress.org review:** Form “Save response” and “Save & send” actions work in this plugin without a separate Pro plugin; form entries are available under Form Entries in the admin menu.
- **Privacy:** Google Fonts catalog fetch from WordPress.org is off by default and can be enabled under ZoloBlocks → Settings → Editor Options.
- **Privacy:** Removed promotional admin script code that called a remote recommendations API.
- **Security:** Escaped block render output and dynamic CSS where flagged; reCAPTCHA site key is escaped in the form block output filter.
- **Readme:** Documented opt-in for the Google Fonts list; clarified Sigmative privacy link.

### 2.7.2 [April 20, 2026]

#### Compliance / Improvements
- **Plugin Name:** Renamed display title to "ZoloBlocks" to follow WordPress.org plugin naming guidelines.
- **Readme:** Rewrote description to remove promotional and keyword-stuffed language.
- **Readme:** Added "External services" section documenting every third-party service used by the plugin, along with terms and privacy policy links.
- **Readme:** Added "Source code" section with build instructions and a link to the public source repository.
- **Settings:** Added proper `sanitize_callback` to every `register_setting()` call in the admin Settings.
- **Admin Menu:** Lowered the top-level ZoloBlocks admin menu position so it no longer competes with WordPress core items.

### 2.7.1 [March 17, 2026]

#### Improvements
- **Typography:** Enhanced typography controls and consistency across all blocks. Full Google Fonts library is now available in the typography control.
- **Heading Block:** Added margin options for improved spacing control.
- **List Block:** Introduced heading option for better content organization.

#### Tweaks
- **List Block:** Removed default Facebook icon from the repeater control.

### 2.7.0 [March 10, 2026]

#### New Features
- **Tag Cloud Block:** Introduced animated skin for enhanced visual appeal.
- **List Block:** Added badge color options and gap control for improved customization.
- **Counter Block:** Added hover controls for interactive styling.
- **Pricing Table Block:** Added list color, background color, and vertical alignment controls.
- **Tabs Block:** Added new border style option to the Vertical layout.
- **Advanced Heading:** Added additional separator options for greater layout flexibility.
- **Post List Block:** Added read more options for better content display.

#### Bug Fixes
- **Advanced Icon Box Block:** Fixed image radius issue in Preset Style 3.
- **Navigation Block:** Resolved submenu not opening issue.
- **Lightbox Block:** Fixed animation color issue.
- **Advanced Icon Box Block:** Fixed image size issue in Preset Style 1 and mobile margin issue.
- **Review Carousel Block:** Resolved pagination issue.
- **Video Block:** Fixed video link functionality issue.
- **Post Carousel Block:** Fixed column number issue.
- **Review Carousel Block:** Fixed column number issue.
- **Post Timeline Block:** Fixed pagination issue.
- **Media Upload Control:** Resolved control not working issue.
- **All Blocks:** Fixed box sizing issue.
- **General:** Fixed responsive issues and plugin checker compatibility.
- **Multi Block Selection:** Fixed error occurring when selecting multiple blocks simultaneously.
- **Review Carousel Block:** Fixed padding inconsistency affecting layout display.

#### Improvements
- Optimized overall plugin performance for faster loading and smoother interactions.
- Enhanced Review Carousel, Progress Pie, and Post List blocks with improved UI and functionality.
- Improved Video, Social Share, and Team blocks performance (resolved block recovery issues).
- Replaced image size control with height and width controls in Advanced Icon Block.
- Refined control UI across multiple blocks for better user experience.

### 2.6.0 [February 05, 2026]

#### New Features
- **Class Manager:** Introduced for easy customization.
- **Flexbox Block:** Extended with overflow option.

#### Bug Fixes
- **Table of Content Block:** Resolved various issues.
- **Post Category Block:** Added style 4 preset.
- **Advanced Heading Block:** Fixed spacing issue.

### 2.5.2 [January 13, 2026]

#### Improvements
- **User Interface:** Resolved minor inconsistencies for improved user experience.

### 2.5.1 [January 6, 2026]

#### New Features
- **Image Block:** Added Custom Masking option. (pro)

#### Bug Fixes
- **Dual Button:** Fixed color issue.

Details [changelog here](https://feedback.zoloblocks.com/announcements)

