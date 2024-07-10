import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

const Save = ({ attributes }) => {
    const {
        uniqueId,
        popupType,
        pushContent,
        infoBoxPosition,
        popupBoxPosition,
        enableOverlay,
        fixedBackground,
        isDismissable,
        closeBtnPosition,
        closeBtnId,
        hideOnDesktop,
        hideOnTablet,
        hideOnMobile,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    uniqueId,
                    popupType,
                    'frontend',
                    `${popupType === 'info_bar' && pushContent ? '' : infoBoxPosition + ' not-push'}`,
                    `${hideOnDesktop ? 'zolo-popup-hod' : ''}`,
                    `${hideOnTablet ? 'zolo-popup-hot' : ''}`,
                    `${hideOnMobile ? 'zolo-popup-hom' : ''}`,
                    `${enableOverlay ? 'zolo-popup-overlay' : ''}`,
                    `${popupType === 'popup_box' ? popupBoxPosition + ' frontend' : ''}`
                ),
            })}
            data-type={popupType}
            data-bg-fixed={fixedBackground}
        >
            <div
                className={classnames('zolo-popup-inner', popupType)}
            >
                <InnerBlocks.Content />
                {isDismissable && (
                    <button className={classnames('zolo-popup-close-btn', closeBtnPosition)} id={closeBtnId}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Save;
