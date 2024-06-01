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
        toggleCustomOption,
        particleOptions,
        optPreset,
        colorItem,
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
            {enableParticlesAnimation && (
                <div
                    className="zolo-particles"
                    data-id={`zolo-particles-${uniqueId}`}
                    id={`zolo-particles-${uniqueId}`}
                    data-options={JSON.stringify(particleOptions)}
                    data-optpreset={optPreset}
                    data-coloritem={JSON.stringify(colorItem)}
                    data-togglcustomoption={toggleCustomOption}
                ></div>
            )}
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
