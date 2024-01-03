/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { Fragment, useEffect } from '@wordpress/element';

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style.js';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
    const {
        uniqueId,
        preset,
        parentClasses,
        memberPhoto,
        memberName,
        addDetailPageLink,
        memberDetailPageLink,
        showDesignation,
        memberDesignation,
        showShortBio,
        memberShortBio,
        showSocialProfiles,
        socialProfiles,
        detailIcon,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${preset ? preset : ''}`, classArrayToStr(parentClasses)),
    });

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            preset: context['zolo/preset'],
            addDetailPageLink: context['zolo/addDetailPageLink'],
            showDesignation: context['zolo/showDesignation'],
            showShortBio: context['zolo/showShortBio'],
            showSocialProfiles: context['zolo/showSocialProfiles'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {memberPhoto && (
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        memberPhoto: media,
                                    });
                                }}
                                allowedTypes={['image']}
                                value={memberPhoto && memberPhoto.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zolo-blocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                        <ToolbarGroup>
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zolo-blocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        memberPhoto: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>

            <div {...blockProps}>
                <div className="zolo-flip-box_wrap zolo-flip-box_animation_style-1">
                <div className="zolo-flip-box_item zolo-flip-box_hover">
                    <div className="zolo-flip-box_inner-item">
                    <div className="zolo-flip-box_face zolo-flip-box_front">
                            <div className="zolo-flip-box_img">
                                <img src="https://demo.elementpack.pro/wp-content/uploads/2020/07/01-2-1-1.jpg" alt="image"/>
                            </div>
                            <div className="zolo-flip-box-content zolo-flip-box_front-content">
                            <div className="zolo-flip-box_icon">
                                <span className="zolo-flip-box_inner-icon">
                                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                        <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z"/>
                                        <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                                    </g>
                                    </svg>
                                </span>
                            </div>
                            <h3 className="zolo-flip-box_title">Flip Box Item</h3>
                            <p className="zolo-flip-box_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                            </div>
                    </div>
                        <div className="zolo-flip-box_face zolo-flip-box_back">
                        <div className="zolo-flip-box-content zolo-flip-box_back-content">
                            <h3 className="zolo-flip-box_title">Flip Box Item</h3>
                            <p className="zolo-flip-box_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                            <div className="zolo-flip-box_link-button-wrap">
                            <a className="zolo-flip-box_link-btn" href="#">
                                <span>Explore</span>
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14.153 15 19 8l-4.847-7H1l4.848 7L1 15h13.153Z" />
                                </svg>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
