<?php

namespace Zolo\Blocks;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
	exit;
}

if (! class_exists('ChartsBlock')) {

	/**
	 * Class ChartsBlock
	 *
	 * @since 2.6.0
	 */
	class ChartsBlock {

		use SingletonTrait;

		/**
		 * Constructor
		 *
		 * @since 2.6.0
		 *
		 * @return void
		 */
		public function __construct() {
			add_filter('render_block_zolo/charts', [$this, 'render_charts_block'], 10, 2);
		}

		/**
		 * Render charts block
		 *
		 * @since 2.6.0
		 *
		 * @return string
		 */
		public function render_charts_block($block_content, $block) {
			$attrs = $block['attrs'] ?? [];

			$unique_id      = $attrs['uniqueId'] ?? '';
			$parent_classes = $attrs['parentClasses'] ?? [];
			$zolo_id        = $attrs['zoloId'] ?? '';

			// Extra classes
			$class_str = ! empty($parent_classes) ? implode(' ', array_filter($parent_classes)) : '';
			$classes   = "zolo-block-charts {$unique_id} {$class_str}";

			// Default Data
			$default_bar_series = [
				[
					'name' => 'label 1',
					'data' => [30, 40, 35, 50, 200, 210, 100, 49, 60, 70, 91, 125],
				],
				[
					'name' => 'label 2',
					'data' => [35, 45, 50, 60, 220, 235, 120, 55, 65, 75, 96, 130],
				],
				[
					'name' => 'label 3',
					'data' => [45, 55, 60, 70, 240, 255, 130, 65, 75, 85, 106, 140],
				],
			];

			$default_bar_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

			$default_pie_series = [44, 55, 13, 43, 22];
			$default_pie_labels = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];

			// Title Object defaults
			$title_defaults = [
				'text'  => 'Zolo Block Advanced Chart',
				'align' => 'left',
				'style' => [
					'color' => '#000000',
				],
			];

			// Subtitle Object defaults
			$subtitle_defaults = [
				'text'  => 'Category Names as DataLabels inside bars',
				'align' => 'center',
				'style' => [
					'color' => '#000000',
				],
			];

			// Legend Object defaults
			$legend_defaults = [
				'position'        => 'bottom',
				'horizontalAlign' => 'center',
				'floating'        => false,
				'offsetY'         => 8,
				'offsetX'         => 0,
				'labels'          => [
					'colors'          => null,
					'useSeriesColors' => false,
				],
			];

			// Tooltip Object defaults
			$tooltip_defaults = [
				'shared'          => false,
				'intersect'       => false,
				'enabled'         => true,
				'followCursor'    => false,
				'inverseOrder'    => false,
				'hideEmptySeries' => true,
				'fillSeriesColor' => false,
				'theme'           => 'light',
			];

			// Grid Object defaults
			$grid_defaults = [
				'borderColor'     => '#90A4AE',
				'strokeDashArray' => 0,
				'position'        => 'back',
				'row'             => [
					'colors'  => null,
					'opacity' => 0.5,
				],
				'column'          => [
					'colors'  => null,
					'opacity' => 0.5,
				],
				'padding'         => [
					'top'    => 0,
					'right'  => 0,
					'bottom' => 0,
					'left'   => 0,
				],
			];

			// Build stable chart options for frontend hydration
			$chart_options = [
				'chartType'       => $attrs['chartType'] ?? 'bar',
				'chartHeight'     => $attrs['chartHeight'] ?? 300,
				'chartBackground' => $attrs['chartBackground'] ?? '#ffffff',

				// Raw data series and labels with proper fallback logic
				'barChartData'    => [
					'series'  => $attrs['barChartData']['series'] ?? $default_bar_series,
					'options' => [
						'labels' => $attrs['barChartData']['options']['labels'] ?? $default_bar_labels,
					],
				],
				'pieChartData'    => [
					'series' => $attrs['pieChartData']['series'] ?? $default_pie_series,
					'labels' => $attrs['pieChartData']['labels'] ?? $default_pie_labels,
				],

				// Scalar display attributes
				'showTitle'       => $attrs['showTitle'] ?? false,
				'titleObject'     => array_replace_recursive($title_defaults, $attrs['titleObject'] ?? []),

				'showSubTitle'    => $attrs['showSubTitle'] ?? false,
				'subTitleObject'  => array_replace_recursive($subtitle_defaults, $attrs['subTitleObject'] ?? []),

				'showLegend'      => $attrs['showLegend'] ?? true,
				'legendObject'    => array_replace_recursive($legend_defaults, $attrs['legendObject'] ?? []),

				'showTooltip'     => $attrs['showTooltip'] ?? true,
				'tooltipObject'   => array_replace_recursive($tooltip_defaults, $attrs['tooltipObject'] ?? []),

				'showGrid'        => $attrs['showGrid'] ?? true,
				'showGridY'       => $attrs['showGridY'] ?? false,
				'showGridX'       => $attrs['showGridX'] ?? true,
				'gridObject'      => array_replace_recursive($grid_defaults, $attrs['gridObject'] ?? []),

				'showDropshadow'  => $attrs['showDropshadow'] ?? false,
				'pieChartColor'   => $attrs['pieChartColor'] ?? [],
				'xAxisColor'      => $attrs['xAxisColor'] ?? '#000000',
				'xAxisFontSize'   => $attrs['xAxisFontSize'] ?? 12,
				'yAxisColor'      => $attrs['yAxisColor'] ?? '#000000',
				'yAxisFontSize'   => $attrs['yAxisFontSize'] ?? 12,

				'showToolbar'     => $attrs['showToolbar'] ?? false,
				'showDownload'    => $attrs['showDownload'] ?? true,
				'showSelection'   => $attrs['showSelection'] ?? true,
				'showZoom'        => $attrs['showZoom'] ?? true,
				'showZoomIn'      => $attrs['showZoomIn'] ?? true,
				'showZoomOut'     => $attrs['showZoomOut'] ?? true,
				'showPanel'       => $attrs['showPanel'] ?? true,
				'showReset'       => $attrs['showReset'] ?? true,

				'uniqueId'        => $unique_id,
			];

			ob_start();
?>
			<div class="<?php echo esc_attr($classes); ?>" <?php echo ! empty($zolo_id) ? ' id="' . esc_attr($zolo_id) . '"' : ''; ?> data-options='<?php echo esc_attr(wp_json_encode($chart_options)); ?>'>
			</div>
<?php
			return ob_get_clean();
		}
	}
}
