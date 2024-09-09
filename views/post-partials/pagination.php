<?php

use Zolo\Helpers\ZoloHelpers;

$paginationType = $settings['paginationType'] ?? 'normal';
$loadMoreText   = $settings['loadMoreText'] ?? __( 'Load More', 'zoloblocks' );
$blockName      = $settings['blockName'] ?? 'post-grid';
$totalPage      = $post_results['total_page'] ?? 1;
if ( ! empty( $settings['postQuery']['showPagination'] ) && ! empty( $post_results['total_page'] ) ) {
	?>
	<div class="zolo-pagination-wrap <?php echo esc_attr( $settings['uniqueId'] ?? '' ); ?>"
		 data-paginationtype="<?php echo esc_attr( $paginationType ); ?>" data-blockname="<?php echo esc_attr( $blockName ); ?>" data-totalpage="<?php echo esc_attr( $totalPage ); ?>">

		<?php if ( 'number' === $paginationType || 'normal' === $paginationType ) : ?>
			<div class="zolo-pagination-nav">
				<?php echo wp_kses( ZoloHelpers::pagination( $post_results['total_page'], $settings, $post_results['paged'] ), ZoloHelpers::wp_kses_allowed_svg() ); ?>
			</div>
		<?php endif; ?>

		<?php if ( 'button' === $paginationType ) : ?>
			<a class="zolo-pagination-button"
			   data-pagenumber="<?php echo esc_attr( $post_results['paged'] ); ?>"><?php echo esc_html( $loadMoreText ); ?></a>
		<?php endif; ?>

	</div>
<?php } ?>
