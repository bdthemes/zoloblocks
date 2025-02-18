import { ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

import BGControl from './bg-control';
import OverflowControl from './overlay-control';
import { CardDivider } from '@wordpress/components';

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
    const splineViewer = applyFilters('zolo.extensions.controls.splineViewer', [], requiredProps);

    return (
        <>
            <BGControl
                controlName={controlName}
                requiredProps={requiredProps}
                noMainBGImg={noMainBGImg}
                noTransition={noTransition}
                video={video}
            />
            {mainBgbackgroundType !== 'video' && advBtnBgbackgroundType !== 'video' && (
                <>
                    <CardDivider />
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
                    {splineViewer && splineViewer.length > 0 && splineViewer}
                </>
            )}
        </>
    );
};

export default BackgroundControl;
