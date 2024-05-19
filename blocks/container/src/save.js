import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        isBlockRootParent,
        containerWidthType,
        contentWidthType,
        parentClasses,
        zoloId,
        enableParticlesAnimation,
        particleOptions,
    } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    uniqueId,
                    isBlockRootParent ? `${containerWidthType} zolo-root-container` : '',
                    'frontend',
                    classArrayToStr(parentClasses)
                ),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {enableParticlesAnimation && <div className="zolo-particles-background" data-options={JSON.stringify(particleOptions)}></div>}
            {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                <div className="zolo-container-inner-blocks-wrap">
                    <InnerBlocks.Content />
                </div>
            ) : (
                <InnerBlocks.Content />
            )}
        </div>
    );
};

export default Save;
