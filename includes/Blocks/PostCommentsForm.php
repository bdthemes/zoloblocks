<?php

namespace Zolo\Blocks;

use Zolo\Helpers\ZoloHelpers;

/**
 * Post Comments Form block
 */
class PostCommentsForm {

	/**
	 * @var array $settings .
	 */
	protected $settings;

	/**
	 * Default block attributes
	 *
	 * @var string[]
	 */
	protected $default_block_attributes = [
		'showForm'         => true,
		'showCommentTitle' => true,
		'showCommentCount' => true,
		'commentFormTitle' => 'Leave a Reply',
		'cancelReply'      => 'Cancel Reply',
		'loginAsText'      => 'Logged in as',
		'logOutText'       => 'Log Out?',
		'submitBtnText'    => 'Post Comment',

	];

	/**
	 * Constructor function
	 */
	public function __construct() {
		add_filter( 'comment_form_fields', [ $this, 'move_comment_field_to_bottom' ] );
		add_filter( 'comment_form_default_fields', [ $this, 'custom_comment_form_fields' ], 11 );
		add_action( 'comment_form_before_fields', [ $this, 'wrap_fields_start' ] );
		add_action( 'comment_form_after_fields', [ $this, 'wrap_fields_end' ] );

		// Remove comment cookies field.
		remove_action( 'set_comment_cookies', 'wp_set_comment_cookies' );
	}

	/**
	 * Post category block frontend.
	 *
	 * @param array  $attributes .
	 * @param string $content .
	 * @param object $block .
	 * @return false|string
	 */
	public function render( $attributes, $content, $block ) {
		if ( empty( $block->context['postId'] ) ) {
			return '';
		}

		$post_id            = $block->context['postId'];
		$settings           = wp_parse_args( $attributes, $this->default_block_attributes );
		$this->settings     = $settings;
		$wrapper_class      = trim( ZoloHelpers::get_wrapper_class( $settings, '' ) . ' ' . implode( ' ', $settings['parentClasses'] ?? [] ) );
		$wrapper_attributes = get_block_wrapper_attributes( [ 'class' => esc_attr( $wrapper_class ) ] );

		$output = '<div ' . wp_kses_data( $wrapper_attributes ) . ' >';
		if ( get_comments_number( $post_id ) > 0 ) {
			$comments_number = get_comments_number( $post_id );
			$comments_text   = sprintf( _n( '<span>%s</span> comment', '<span>%s</span> comments', $comments_number, 'zoloblocks' ), esc_html( $comments_number ) );
			$output         .= '<div class="zolo-comment-count">' . $comments_text . '</div>';
		}
		$output .= $this->render_content( $post_id );
		$output .= '</div>';

		return $output;
	}


	/**
	 * Render Content.
	 *
	 * @param number $post_id .
	 * @return string|void|null
	 */
	public function render_content( $post_id ) {
		$post_type = get_post_type( $post_id );

		// Only display comment form for post types that have comment support.
		if ( post_type_supports( $post_type, 'comments' ) ) {
			$comments = get_comments(
				[
					'post_id' => $post_id,
					'status'  => 'approve',
				]
			);

			$comment_list = wp_list_comments(
				[
					'per_page'          => 10,
					'avatar_size'       => 100,
					'reverse_top_level' => false,
					'echo'              => false,
				],
				$comments
			);

			if ( ! empty( $comment_list ) ) {
				$comment_list = '<ul class="zolo-comment-list">' . $comment_list . '</ul>';
			}

			if ( ! empty( $this->settings['showForm'] ) ) {
				ob_start();
				comment_form( $this->get_comment_args(), $post_id );
				$comment_form  = ob_get_clean();
				$comment_list .= $comment_form;
			}

			return $comment_list;
		}

		return '';
	}

	/**
	 * Get comment form arguments with class property settings.
	 *
	 * @return array Comment form arguments.
	 */
	public function get_comment_args() {
		$user          = wp_get_current_user();
		$user_identity = $user->exists() ? esc_html( $user->display_name ) : '';

		$args = [
			'id_form'              => 'commentform',
			'class_form'           => 'zolo-comment-form',
			'id_submit'            => 'submit',
			'title_reply'          => wp_kses_post( $this->settings['commentFormTitle'] ?? '' ),
			'title_reply_to'       => wp_kses_post( $this->settings['commentFormTitle'] ?? '' ),
			'cancel_reply_link'    => wp_kses_post( $this->settings['cancelReply'] ?? '' ),
			'label_submit'         => wp_kses_post( $this->settings['submitBtnText'] ?? '' ),
			'comment_field'        => $this->get_comment_field(),
			'must_log_in'          => $this->get_must_log_in_text(),
			'logged_in_as'         => $this->get_logged_in_as_text( $user_identity ),
			'comment_notes_before' => '',
			'comment_notes_after'  => '',
		];

		return $args;
	}

	/**
	 * Moves the comment field to the bottom of the comment form.
	 *
	 * @param array $fields Comment form fields.
	 * @return array
	 */
	public function move_comment_field_to_bottom( $fields ) {
		$comment_field = $fields['comment'];
		unset( $fields['comment'] );
		$fields['comment'] = $comment_field;
		return $fields;
	}

	/**
	 * Customizes the comment form fields with placeholders and layout classes.
	 *
	 * @param array $fields Comment form fields.
	 * @return array
	 */
	public function custom_comment_form_fields( $fields ) {
		$commenter = wp_get_current_commenter();

		// Placeholder texts for fields.
		$placeholders = [
			'author' => esc_html__( 'Name', 'zoloblocks' ),
			'email'  => esc_html__( 'Email Address *', 'zoloblocks' ),
			'url'    => esc_html__( 'Website', 'zoloblocks' ),
		];

		// Define the fields.
		foreach ( [ 'author', 'email', 'url' ] as $field ) {
			$fields[ $field ] = $this->get_input_field( $field, 'author' == $field ? $commenter[ "comment_$field" ] : $commenter[ "comment_author_$field" ], $placeholders[ $field ] );
		}

		return $fields;
	}

	/**
	 * Outputs the opening wrapper div for the comment fields.
	 */
	public function wrap_fields_start() {
		echo '<div class="zolo-form-group-control">';
	}

	/**
	 * Outputs the closing wrapper div for the comment fields.
	 */
	public function wrap_fields_end() {
		echo '</div>';
	}

	/**
	 * Generates an input field for the comment form.
	 *
	 * @param string $name Field name.
	 * @param string $value Field value.
	 * @param string $placeholder Placeholder text.
	 * @return string
	 */
	private function get_input_field( $name, $value, $placeholder ) {

		return sprintf(
			'<div class="zolo-form-group"><input id="%1$s" name="%1$s" type="text" placeholder="%2$s" value="%3$s" size="30" /></div>',
			esc_attr( $name ),
			esc_attr( $placeholder ),
			esc_attr( $value )
		);
	}

	/**
	 * Generate the comment field markup.
	 *
	 * @return string Comment field HTML.
	 */
	private function get_comment_field() {
		return sprintf(
			'<div class="zolo-form-group"><textarea id="comment" name="comment" cols="45" rows="6" placeholder="%s" aria-required="true"></textarea></div>',
			esc_attr__( 'Comment', 'zoloblocks' )
		);
	}

	/**
	 * Generate the "must log in" text.
	 *
	 * @return string Must log in HTML.
	 */
	private function get_must_log_in_text() {
		return sprintf(
			'<p class="must-log-in">%s</p>',
			sprintf(
				esc_html__( 'You must be %1$slogged in%2$s to post a comment.', 'zoloblocks' ),
				'<a href="' . esc_url( wp_login_url( get_permalink() ) ) . '">',
				'</a>'
			)
		);
	}

	/**
	 * Generate the "logged in as" text.
	 *
	 * @param string $user_identity Current user display name.
	 * @return string Logged in as HTML.
	 */
	private function get_logged_in_as_text( $user_identity ) {
		if ( empty( $user_identity ) ) {
			return '';
		}

		return sprintf(
			'<p class="logged-in-as">%s</p>',
			sprintf(
				wp_kses_post( $this->settings['loginAsText'] ?? '' ) . esc_html__( ' %1$s%2$s. %3$s%4$s%5$s', 'zoloblocks' ),
				'<a href="' . esc_url( admin_url( 'profile.php' ) ) . '">' . $user_identity,
				'</a>',
				'<a href="' . esc_url( wp_logout_url( get_permalink() ) ) . '" title="' . esc_attr( $this->settings['logOutText'] ?? '' ) . '">',
				esc_html( $this->settings['logOutText'] ?? '' ),
				'</a>'
			)
		);
	}
}
