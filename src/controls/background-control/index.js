import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

import BGControl from './bg-control';
import OverflowControl from './overlay-control';

const BackgroundControl = ({
    requiredProps,
    controlName,
    noOverlay = false,
    noMainBGImg = false,
    noOverlayBGImg = false,
    noTransition = false,
    particles = false,
    video = false,

}) => {
    const { setAttributes, attributes } = requiredProps;

    const { [`${controlName}isBgOverlay`]: isBgOverlay, mainBgbackgroundType, advBtnBgbackgroundType } = attributes;
    const backdropFilters = applyFilters('zolo.extensions.controls.backdropFilters', [], requiredProps);

    return (
        <>
            <BGControl controlName={controlName} requiredProps={requiredProps} noMainBGImg={noMainBGImg} noTransition={noTransition} video={video} />
        {
            mainBgbackgroundType !== 'video' && advBtnBgbackgroundType !== 'video' && (
                <>
                    <ToggleControl
                        label={__('Enable Overlay', 'zoloblocks')}
                        checked={isBgOverlay}
                        onChange={() =>
                            setAttributes({
                                [`${controlName}isBgOverlay`]: !isBgOverlay,
                            })
                        }
                    />

                    {isBgOverlay && (
                        <OverflowControl
                            controlName={controlName}
                            requiredProps={requiredProps}
                            noOverlayBGImg={noOverlayBGImg}
                            noTransition={noTransition}
                        />
                    )}
                    {particles && particles}
                    {backdropFilters && backdropFilters.length > 0 && backdropFilters}
                </>

            )
        }

        </>
    );
};

export default BackgroundControl;
