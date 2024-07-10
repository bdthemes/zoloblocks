/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import classNames from 'classnames';
import { useBlockProps, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal depencencies
 */
import Inspector from './inspector';
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const { uniqueId, popupType, popupBoxPosition, enableOverlay, isDismissable, closeBtnPosition, closeBtnId } = attributes;

    const blockPros = useBlockProps({
        className: classNames(className, uniqueId, popupType, `${enableOverlay ? 'zolo-popup-overlay' : ''}`),
    });

    // chech if the innerblocks has child or not
    const hasChildBlocks = useSelect(
        (select) => {
            const { getBlockOrder } = select('core/block-editor');
            const blockOrder = getBlockOrder(props.clientId);
            return blockOrder.length > 0;
        },
        [props.clientId]
    );

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockPros}>
                <div className={classNames('zolo-popup-inner', popupType, `${popupType === 'popup_box' ? popupBoxPosition : ''}`)}>
                    <InnerBlocks
                        templateLock={false}
                        renderAppender={hasChildBlocks ? false : InnerBlocks.ButtonBlockAppender}
                        template={[
                            [
                                'zolo/advanced-image',
                                {
                                    photo: {
                                        url: zoloPlaceholders?.popupBg,
                                    },
                                },
                            ],
                            [
                                'zolo/container',
                                {
                                    FlexDirectionZRPAlign: 'column',
                                    TABFlexDirectionZRPAlign: 'column',
                                    MOBFlexDirectionZRPAlign: 'column',
                                    zolo_advBtnPaddingTop: '3',
                                    zolo_advBtnPaddingRight: '4',
                                    zolo_advBtnPaddingBottom: '3',
                                    zolo_advBtnPaddingLeft: '4',
                                    zolo_advBtnPaddingUnit: 'em',
                                    zolo_advBtnPaddingIsLinked: false,
                                },
                                [
                                    [
                                        'zolo/advanced-heading',
                                        {
                                            titleText: 'Welcome to <strong>Our Website</strong>. Grab The <strong>Exclusive</strong> Offer',
                                            titleAlignZRPAlign: 'center',
                                            TABtitleAlignZRPAlign: 'center',
                                            MOBtitleAlignZRPAlign: 'center',
                                            titleColor: 'rgba(52,53,57,1)',
                                            zolo_titleFontFamily: 'Inter',
                                            zolo_titleFontSize: 30,
                                            zolo_titleFontWeight: '400',
                                            zolo_titleLineHeight: 1.5,
                                        },
                                    ],
                                    [
                                        'zolo/advanced-heading',
                                        {
                                            titleText:
                                                'Sign up for our <em>no hassle</em> one click newsletter and get <strong>10% off</strong> your first purchase.',
                                            titleTagName: 'p',
                                            titleAlignZRPAlign: 'center',
                                            TABtitleAlignZRPAlign: 'center',
                                            MOBtitleAlignZRPAlign: 'center',
                                            titleColor: 'rgb(115, 115, 116)',
                                            zolo_titleFontSize: 16,
                                            zolo_titleFontFamily: 'Inter',
                                            zolo_titleFontWeight: '400',
                                            zolo_titleLineHeight: 1.7,
                                        },
                                    ],
                                    [
                                        'zolo/advanced-button',
                                        {
                                            preset: 'button-1',
                                            label: 'Subscribe Now',
                                            iconType: 'iconText',
                                            iconPosition: 'right',
                                            buttonAlignmentZRPAlign: 'center',
                                            zolo_buttonTypographyFontFamily: 'Inter',
                                            zolo_buttonTypographyFontSize: 15,
                                            zolo_buttonBorderRadiusLeft: 4,
                                            zolo_buttonBorderRadiusRight: 4,
                                            zolo_buttonBorderRadiusTop: 4,
                                            zolo_buttonBorderRadiusBottom: 4,
                                            buttonBgbackgroundColor: 'rgba(0,0,0,0.96)',
                                            mainBoxShadowshadowColor: '#7c7c7c',
                                            zolo_advBtnMarginTop: 10,
                                            zolo_advBtnMarginUnit: 'px',
                                            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"></path></svg>',
                                        },
                                    ],
                                ],
                            ],
                        ]}
                    />
                    {isDismissable && (
                        <button className={classNames('zolo-popup-close-btn', closeBtnPosition)} id={closeBtnId}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
