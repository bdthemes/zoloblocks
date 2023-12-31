/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, StarRating, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';
import GoogleMap from './render-maps';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses, location, language, zoom, latitude, longitude, mapType } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.starRating} alt={__('Google Map Preview', 'zolo-blocks')} />;
    }

     return (
         <>
             {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
             <Style props={props} />
             <div
                 {...blockProps}
                 style={{
                     padding: '30px',
                     // maxWidth: '100%',
                     background: '#f2f2f2',
                 }}
             >
                 <div className={classnames('google-maps-wrapper')}>
                     <GoogleMap attributes={attributes} />
                 </div>
             </div>
         </>
     );
}
