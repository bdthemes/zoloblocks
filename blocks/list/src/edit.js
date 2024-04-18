/**
 * WordPress dependencies
 */

import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {RawHTML} from '@wordpress/element'
/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';
import { cloneDeep } from 'lodash';
export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const { preview, uniqueId, preset,layout, parentClasses, listProfiles, iconToggle, titleToggle, DscToggle, linkHoverIcon,globalIcon } = attributes;

    const deepCloneProfiles = cloneDeep(listProfiles);
    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, preset, uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.list} alt={__('List Block Preview', 'zoloblocks')} />;
    }

    const handleButtonClick = () => {
        setAttributes({
            listProfiles: [
                ...listProfiles,
                {
                    id: listProfiles.length + 1,
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
                    link: {
                        url: '#',
                        openInNewTab: false,
                    },
                    text: 'List Item ' + Number(listProfiles.length + 1),
                    desc: 'Customize widget dimension beyond normal scale',
                },
            ],
        });
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton onClick={handleButtonClick} icon="plus" />
                    </ToolbarGroup>
                </BlockControls>
                {deepCloneProfiles &&
                    deepCloneProfiles.map((profile, index) => {
                        return (
                            <>
                                {preset == 'zolo-list-style-1' && (
                                    <RichText
                                        href={profile.link && profile.link.url}
                                        key={index}
                                        target={profile.link && profile.link.openInNewTab && '_blank'}
                                        rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                                        className={`zolo-list-item ${preset == 'zolo-list-style-1' ? 'zolo-list-title' : ''}`}
                                        tagName="a"
                                        value={profile.text}
                                        onChange={(v) => {
                                            const newItems = [...deepCloneProfiles];
                                            newItems[index].text = v;
                                            setAttributes({ listProfiles: newItems });
                                        }}
                                    />
                                )}
                                {preset !== 'zolo-list-style-1' && (
                                    <div className="zolo-list-item">
                                        {preset === 'zolo-list-style-4' ? (
                                            <div className="zolo-list-icon-and-content-wrap">
                                                {iconToggle && preset !== 'zolo-list-style-1' && (
                                                    <div className="zolo-list-icon">
                                                       {profile.icon ? <DisplayZoloIcon icon={profile.icon }/> : <DisplayZoloIcon icon={globalIcon}/>}  
                                                    </div>
                                                )}
                                                {preset !== 'zolo-list-style-1' && (
                                                    <div className="zolo-list-content">
                                                        {titleToggle && (
                                                            <RichText
                                                                tagName="div"
                                                                className="zolo-list-title"
                                                                value={profile.text}
                                                                onChange={(v) => {
                                                                    const newItems = [...deepCloneProfiles];
                                                                    newItems[index].text = v;
                                                                    setAttributes({ listProfiles: newItems });
                                                                }}
                                                            />
                                                        )}
                                                        {DscToggle && (
                                                            <RichText
                                                                tagName="div"
                                                                className="zolo-list-desc"
                                                                value={profile.desc}
                                                                onChange={(v) => {
                                                                    const newItems = [...deepCloneProfiles];
                                                                    newItems[index].desc = v;
                                                                    setAttributes({ listProfiles: newItems });
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <>
                                                {iconToggle && preset !== 'zolo-list-style-1' && (
                                                    <div className="zolo-list-icon">
                                                       {profile.icon ? <DisplayZoloIcon icon={profile.icon }/> : <DisplayZoloIcon icon={globalIcon}/>}
                                                    </div>
                                                )}
                                                {preset !== 'zolo-list-style-1' && (
                                                    <div className="zolo-list-content">
                                                        {titleToggle && (
                                                            <RichText
                                                                tagName="div"
                                                                className="zolo-list-title"
                                                                value={profile.text}
                                                                onChange={(v) => {
                                                                    const newItems = [...deepCloneProfiles];
                                                                    newItems[index].text = v;
                                                                    setAttributes({ listProfiles: newItems });
                                                                }}
                                                            />
                                                        )}
                                                        {DscToggle && (
                                                            <RichText
                                                                tagName="div"
                                                                className="zolo-list-desc"
                                                                value={profile.desc}
                                                                onChange={(v) => {
                                                                    const newItems = [...deepCloneProfiles];
                                                                    newItems[index].desc = v;
                                                                    setAttributes({ listProfiles: newItems });
                                                                }}
                                                            />
                                                        )}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                        {preset == 'zolo-list-style-4' && (
                                            <div class="zolo-list-hover-icon">
                                                <DisplayZoloIcon icon={linkHoverIcon} />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </>
                        );
                    })}
            </div>
        </>
    );
}
