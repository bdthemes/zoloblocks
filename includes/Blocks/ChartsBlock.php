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

			// Build stable chart options for frontend hydration
			$chart_options = [
				'chartType'      => $attrs['chartType'] ?? 'bar',
				'chartHeight'    => $attrs['chartHeight'] ?? 300,
				'chartBackground' => $attrs['chartBackground'] ?? '#ffffff',
				// Raw data series and labels
				'barChartData'   => [
					'series'  => $attrs['barChartData']['series'] ?? [],
					'options' => [
						'labels' => $attrs['barChartData']['options']['labels'] ?? [],
					],
				],
				'pieChartData'   => [
					'series' => $attrs['pieChartData']['series'] ?? [],
					'labels' => $attrs['pieChartData']['labels'] ?? [],
				],
				// Scalar display attributes
				'showTitle'       => $attrs['showTitle'] ?? false,
				'titleObject'     => $attrs['titleObject'] ?? [
					'text' => $attrs['titleObject']['text'] ?? '',
					'align' => $attrs['titleObject']['align'] ?? 'center',
					'style' => $attrs['titleObject']['style'] ?? [
						'color' => $attrs['titleObject']['style']['color'] ?? '#000000',
					],
				],
				'showSubTitle'    => $attrs['showSubTitle'] ?? false,
				'subTitleObject'  => $attrs['subTitleObject'] ?? [
					'text' => $attrs['subTitleObject']['text'] ?? '',
					'align' => $attrs['subTitleObject']['align'] ?? 'center',
					'style' => $attrs['subTitleObject']['style'] ?? [
						'color' => $attrs['subTitleObject']['style']['color'] ?? '#000000',
					],
				],
				'showLegend'      => $attrs['showLegend'] ?? true,
				'legendObject'    => $attrs['legendObject'] ?? [
					'position' => $attrs['legendObject']['position'] ?? 'bottom',
					'horizontalAlign' => $attrs['legendObject']['horizontalAlign'] ?? 'center',
					'floating' => $attrs['legendObject']['floating'] ?? false,
					'offsetY' => $attrs['legendObject']['offsetY'] ?? 0,
					'offsetX' => $attrs['legendObject']['offsetX'] ?? 0,
					'labels' => $attrs['legendObject']['labels'] ?? [
						'colors' => $attrs['legendObject']['labels']['colors'] ?? '#000000',
						'useSeriesColors' => $attrs['legendObject']['labels']['useSeriesColors'] ?? false,
					],
				],
				'showTooltip'     => $attrs['showTooltip'] ?? true,
				'tooltipObject'   => $attrs['tooltipObject'] ?? [
					'shared' => $attrs['tooltipObject']['shared'] ?? true,
					'followCursor' => $attrs['tooltipObject']['followCursor'] ?? false,
					'intersect' => $attrs['tooltipObject']['intersect'] ?? false,
					'inverseOrder' => $attrs['tooltipObject']['inverseOrder'] ?? false,
					'hideEmptySeries' => $attrs['tooltipObject']['hideEmptySeries'] ?? false,
					'fillSeriesColor' => $attrs['tooltipObject']['fillSeriesColor'] ?? false,
					'theme' => $attrs['tooltipObject']['theme'] ?? 'light',
				],
				'showGrid'        => $attrs['showGrid'] ?? true,
				'showGridY'       => $attrs['showGridY'] ?? false,
				'showGridX'       => $attrs['showGridX'] ?? true,
				'gridObject'      => $attrs['gridObject'] ?? [
					'show' => $attrs['gridObject']['show'] ?? true,
					'xaxis' => $attrs['gridObject']['xaxis'] ?? [
						'lines' => $attrs['gridObject']['xaxis']['lines'] ?? [
							'show' => $attrs['gridObject']['xaxis']['lines']['show'] ?? false,
						],
					],
					'yaxis' => $attrs['gridObject']['yaxis'] ?? [
						'lines' => $attrs['gridObject']['yaxis']['lines'] ?? [
							'show' => $attrs['gridObject']['yaxis']['lines']['show'] ?? false,
						],
					],
				],
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
			];

			$id_attr = ! empty($zolo_id) ? ' id="' . esc_attr($zolo_id) . '"' : '';

			ob_start();
			?>
			<div class="<?php echo esc_attr($classes); ?>"<?php echo $id_attr; ?> data-options='<?php echo esc_attr(wp_json_encode($chart_options)); ?>'>
			</div>
			<?php
			return ob_get_clean();
		}
	}
}
