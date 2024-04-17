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
const { handleUniqueId, DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const { preview, uniqueId, parentClasses, showLabel, label, placeholder, showIcon, icon, isRequired, showRequiredSymbol } = attributes;

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
        className: classnames(
            className,
            `${uniqueId}`,
            classArrayToStr(parentClasses),
            `${showIcon ? 'zolo-field-icon' : ''}`,
            'form-group-editor'
        ),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.text} alt={__('Text Preview', 'zoloblocks')} />;
    }

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            showIcon: context['zolo/showFieldIcon'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="zolo-field-item">
                    {showLabel && (
                        <div className="zolo-label-wrapper">
                            <RichText
                                tagName="label"
                                className="zolo-label"
                                value={label}
                                onChange={(v) =>
                                    setAttributes({
                                        label: v,
                                    })
                                }
                                placeholder={__('Label', 'zoloblocks')}
                            />
                            {isRequired && showRequiredSymbol && <span className="zolo-required">{__('*', 'zoloblocks')}</span>}
                        </div>
                    )}

                    <div className="zolo-field-input-item">
                        {showIcon && (
                            <div className="zolo-input-icon">
                                <DisplayZoloIcon icon={icon} />
                            </div>
                        )}

                        <input type="text" name="name" required={isRequired} placeholder={placeholder} />
                    </div>
                </div>
            </div>
        </>
    );
}
