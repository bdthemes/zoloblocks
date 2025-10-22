/**
 * WordPress dependencies
 */

import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { DisplayZoloIcon, classArrayToStr, SidebarOpener, ZoloToolbarGroup, ZoloToolbarButton, sanitizeText, sanitizeUrl } =
    window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';
import { cloneDeep } from 'lodash';
export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const {
        preview,
        uniqueId,
        preset,
        contentLayout,
        layout,
        parentClasses,
        listProfiles,
        iconToggle,
        titleToggle,
        DscToggle,
        linkHoverIcon,
        globalIcon,
        showBadge,
    } = attributes;

    const deepCloneProfiles = cloneDeep(listProfiles);
    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(
            className,
            preset,
            preset !== 'zolo-list-style-1' ? contentLayout : '',
            uniqueId,
            classArrayToStr(parentClasses)
        ),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

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
                        url: sanitizeUrl('#'),
                        openInNewTab: false,
                    },
                    text: sanitizeText('List Item ' + Number(listProfiles.length + 1)),
                    badge: sanitizeText('New'),
                    badgeColor: '',
                    badgeBgColor: '',
                    desc: sanitizeText('Customize widget dimension beyond normal scale'),
                },
            ],
        });
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                <ZoloToolbarGroup>
                    <ZoloToolbarButton onClick={handleButtonClick} icon="insert" />
                </ZoloToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                {deepCloneProfiles &&
                    deepCloneProfiles.map((profile, index) => {
                        return (
                            <React.Fragment key={index}>
                                {preset == 'zolo-list-style-1' && (
                                    <div className="zolo-list-item-wrapper">
                                        <RichText
                                            href={profile.link && profile.link.url}
                                            key={index}
                                            target={profile.link && profile.link.openInNewTab ? '_blank' : undefined}
                                            rel={profile.link && profile.link.openInNewTab ? 'noopener noreferrer' : undefined}
                                            className={`zolo-list-item ${preset == 'zolo-list-style-1' ? 'zolo-list-title' : ''}`}
                                            tagName="a"
                                            value={profile.text}
                                            onChange={(v) => {
                                                const newItems = [...deepCloneProfiles];
                                                newItems[index].text = v;
                                                setAttributes({ listProfiles: newItems });
                                            }}
                                        />
                                        {showBadge && profile.badge && <span className="zolo-list-badge">{profile.badge}</span>}
                                    </div>
                                )}
                                {preset !== 'zolo-list-style-1' && (
                                    <div className="zolo-list-item">
                                        {preset === 'zolo-list-style-4' ? (
                                            <div className="zolo-list-icon-and-content-wrap">
                                                {iconToggle && preset !== 'zolo-list-style-1' && (
                                                    <div className="zolo-list-icon">
                                                        {profile.icon ? (
                                                            <DisplayZoloIcon icon={profile.icon} />
                                                        ) : (
                                                            <DisplayZoloIcon icon={globalIcon} />
                                                        )}
                                                    </div>
                                                )}
                                                {preset !== 'zolo-list-style-1' && (
                                                    <div className="zolo-list-content">
                                                        {titleToggle && (
                                                            <div className="zolo-list-title-wrapper">
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
                                                                {showBadge && profile.badge && <span className="zolo-list-badge">{profile.badge}</span>}
                                                            </div>
                                                        )}
                                                        {DscToggle && contentLayout !== 'horizontal' && (
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
                                                {iconToggle && preset !== 'zolo-list-style-1' && contentLayout !== 'horizontal' && (
                                                    <div className="zolo-list-icon">
                                                        {profile.icon ? (
                                                            <DisplayZoloIcon icon={profile.icon} />
                                                        ) : (
                                                            <DisplayZoloIcon icon={globalIcon} />
                                                        )}
                                                    </div>
                                                )}

                                                {contentLayout === 'horizontal' && preset !== 'zolo-list-style-1' && (
                                                    <>
                                                        <div className="zolo-list-icon-title-wrap">
                                                            {iconToggle && (
                                                                <div className="zolo-list-icon">
                                                                    {profile.icon ? (
                                                                        <DisplayZoloIcon icon={profile.icon} />
                                                                    ) : (
                                                                        <DisplayZoloIcon icon={globalIcon} />
                                                                    )}
                                                                </div>
                                                            )}
                                                            {titleToggle && (
                                                                <div className="zolo-list-title-wrapper">
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
                                                                    {showBadge && profile.badge && <span className="zolo-list-badge">{profile.badge}</span>}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </>
                                                )}

                                                {preset !== 'zolo-list-style-1' && (
                                                    <div className="zolo-list-content">
                                                        {titleToggle && contentLayout !== 'horizontal' && (
                                                            <div className="zolo-list-title-wrapper">
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
                                                                {showBadge && profile.badge && <span className="zolo-list-badge">{profile.badge}</span>}
                                                            </div>
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
                                            <>
                                                {contentLayout === 'horizontal' && (
                                                    <>
                                                        <div className="zolo-list-desc-hover-icon">
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
                                                            <div className="zolo-list-hover-icon">
                                                                <DisplayZoloIcon icon={linkHoverIcon} />
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                                {contentLayout !== 'horizontal' && (
                                                    <div className="zolo-list-hover-icon">
                                                        <DisplayZoloIcon icon={linkHoverIcon} />
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
