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
const { handleUniqueId, classArrayToStr,generateUniqueName } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';

// import style
import Style from './style';

import { convertToOptionsArray, transformToValueFormat } from '@/blocks/radio-field/helper';
export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected, context } = props;
    const {
        preview,
        preset,
        uniqueId,
        parentClasses,
        showLabel,
        label,
        isRequired,
        showRequiredSymbol,
        optionData,
        customNameAttribute,
        defaultValue,
        radioDirection,
    } = attributes;

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
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses), radioDirection, 'form-group-editor'),
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
            preset: context['zolo/preset'],
        });
    }, [context]);

    const optionArray = convertToOptionsArray(optionData);
    const defaultCheck = transformToValueFormat(defaultValue);
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
                        {optionArray.length > 0 &&
                            optionArray.map((option,index) => (
                                <label key={index} htmlFor={option.value}>
                                    <input
                                        type="radio"
                                        name={generateUniqueName(uniqueId,customNameAttribute,'radio_field')}
                                        value={option.value}
                                        defaultChecked={defaultCheck === option.value}
                                        required={isRequired}
                                    />{' '}
                                    {option.name}
                                </label>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
