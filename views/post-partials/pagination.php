<?php

use Zolo\Helpers\ZoloHelpers;

$zolo_paginationType = $settings['paginationType'] ?? 'normal';
$zolo_loadMoreText   = $settings['loadMoreText'] ?? __( 'Load More', 'zoloblocks' );
$zolo_blockName      = $settings['blockName'] ?? 'post-grid';
$zolo_totalPage      = $post_results['total_page'] ?? 1;
if ( ! empty( $settings['postQuery']['showPagination'] ) && ! empty( $post_results['total_page'] ) ) {
	?>
	<div class="zolo-pagination-wrap <?php echo esc_attr( $settings['uniqueId'] ?? '' ); ?>"
		 data-paginationtype="<?php echo esc_attr( $zolo_paginationType ); ?>" data-blockname="<?php echo esc_attr( $zolo_blockName ); ?>" data-totalpage="<?php echo esc_attr( $zolo_totalPage ); ?>">

		<?php if ( 'number' === $zolo_paginationType || 'normal' === $zolo_paginationType ) : ?>
			<div class="zolo-pagination-nav">
				<?php echo wp_kses( ZoloHelpers::pagination( $post_results['total_page'], $settings, $post_results['paged'] ), ZoloHelpers::wp_kses_allowed_svg() ); ?>
			</div>
		<?php endif; ?>

		<?php if ( 'button' === $zolo_paginationType ) : ?>
			<a class="zolo-pagination-button"
			   data-pagenumber="<?php echo esc_attr( $post_results['paged'] ); ?>"><?php echo esc_html( $zolo_loadMoreText ); ?></a>
		<?php endif; ?>

	</div>
<?php } ?>
