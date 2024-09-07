<?php
use Zolo\Helpers\ZoloHelpers;
$paginationType = $settings['paginationType'] ?? 'normal';
$loadMoreText   = $settings['loadMoreText'] ?? __( 'Load More', 'zoloblocks' );

if ( ! empty( $settings['postQuery']['showPagination'] ) && ! empty( $post_results['total_page'] ) ) {
	?>
	<?php if ( 'number' === $paginationType || 'normal' === $paginationType ) : ?>
		<div class="zolo-pagination-wrap <?php echo esc_attr( $settings['uniqueId'] ?? '' ); ?>" data-paginationType="<?php echo esc_attr( $paginationType ); ?>">
			<div class="zolo-pagination-nav">
				<?php echo wp_kses( ZoloHelpers::pagination( $post_results['total_page'], $settings, $post_results['paged'] ), ZoloHelpers::wp_kses_allowed_svg() ); ?>
			</div>
		</div>
	<?php endif; ?>

	<?php if ( 'button' === $paginationType && $post_results['paged'] < $post_results['total_page'] ) : ?>
		<div class="zolo-pagination-wrap <?php echo esc_attr( $settings['uniqueId'] ?? '' ); ?>" data-paginationType="<?php echo esc_attr( $paginationType ); ?>">
			<a class="zolo-pagination-button" data-pagenumber="<?php echo esc_attr( $post_results['paged'] ); ?>"><?php echo esc_html( $loadMoreText ); ?></a>
		</div>
	<?php endif; ?>
<?php } ?>
