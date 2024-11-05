import { InspectorControls } from '@wordpress/block-editor';
import { ToggleControl, TextControl, CardDivider } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';

import {
    HEADING_TYPOGRAPHY,
    AUTHOR_TYPOGRAPHY,
    META_TYPOGRAPHY,
    MESSAGE_TYPOGRAPHY,
    REPLY_TYPOGRAPHY,
    FORMH_TYPOGRAPHY,
    CANCEL_TYPOGRAPHY,
    FORMINFO_TYPOGRAPHY,
    INPUT_TYPOGRAPHY,
    SUBMITBTN_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import {
    HEADINGB_SPACE,
    //Comment list
    COMMENT_SPACE,
    COMMENT_PADDING,
    AVATAR_BORDER,
    AVATAR_BORDER_RADIUS,
    AVATAR_PADDING,
    AVATAR_IMG_SIZE,
    AVATAR_SHADOW,
    //Reply Btn
    REPLY_PADDING,
    REPLY_BORDER,
    REPLY_BORDER_RADIUS,
    REPLY_SHADOW,
    REPLY_HOVER_BORDER,
    REPLY_HOVER_BRADIUS,
    REPLY_HOVER_SHADOW,
    //input field
    FORM_HB_SPACE,
    INPUT_SPACE,
    INPUT_PADDING,
    INPUT_MARGIN,
    INPUT_BORDER,
    INPUT_BORDER_RADIUS,
    //submit btn
    SUBMITBTN_PADDING,
    SUBMITBTN_BORDER_RADIUS,
    SUBMITBTN_MARGIN,
    SUBMITBTN_BORDER,
} from './constants';
import { Card } from '@wordpress/components';

const {
    ResDimensionsControl,
    BorderControl,
    BoxShadowControl,
    HeaderTabs,
    ColorControl,
    TypographyDropdown,
    AdvancedOptions,
    ZoloPanelBody,
    TabPanelControl,
    ResRangeControl,
} = window.zoloModule;
export default function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        showCommentTitle,
        showCommentCount,
        showForm,
        commentFormTitle,
        cancelReply,
        submitBtnText,
        loginAsText,
        logoutText,
        headingColor,
        //comment list
        authorColor,
        authorHoverColor,
        metaColor,
        metaHoverColor,
        messageColor,
        messageHoverColor,
        //reply btn
        replyColor,
        replyBackground,
        replyHoverColor,
        replyHoverBackground,
        replyHoverBorder,
        formHeadingColor,
        //cancel
        cancelColor,
        cancelHoverColor,
        //form field
        formInfoColor,
        formInfoHoverColor,
        inputColor,
        inputBgColor,
        inputFocusColor,
        inputFocusBgColor,
        //submit btn
        submitBtnColor,
        submitBtnBgColor,
        submitBtnHoverColor,
        submitBtnBgHoverColor,
    } = attributes;
    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/post-comments-form"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Show/hide elements', 'zoloblocks')}
                            </div>

                            <ToggleControl
                                label={__('Comment Title', 'zoloblocks')}
                                checked={showCommentTitle}
                                onChange={(showCommentTitle) => setAttributes({ showCommentTitle })}
                            />
                            {showCommentTitle && (
                                <ToggleControl
                                    label={__('Comment Count', 'zoloblocks')}
                                    checked={showCommentCount}
                                    onChange={(showCommentCount) => setAttributes({ showCommentCount })}
                                />
                            )}
                            <ToggleControl
                                label={__('Comment Form', 'zoloblocks')}
                                checked={showForm}
                                onChange={(showForm) => setAttributes({ showForm })}
                            />

                            <CardDivider />
                            <TextControl
                                label={__('Form Title', 'zoloblocks')}
                                value={commentFormTitle}
                                onChange={(commentFormTitle) => setAttributes({ commentFormTitle })}
                            />
                            <TextControl
                                label={__('Cancel Reply', 'zoloblocks')}
                                value={cancelReply}
                                onChange={(cancelReply) => setAttributes({ cancelReply })}
                            />
                            <TextControl
                                label={__('Login Text', 'zoloblocks')}
                                value={loginAsText}
                                onChange={(loginAsText) => setAttributes({ loginAsText })}
                            />
                            <TextControl
                                label={__('Logout Text', 'zoloblocks')}
                                value={logoutText}
                                onChange={(logoutText) => setAttributes({ logoutText })}
                            />
                            <TextControl
                                label={__('Button Text', 'zoloblocks')}
                                value={submitBtnText}
                                onChange={(submitBtnText) => setAttributes({ submitBtnText })}
                            />
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Comment Heading', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={headingColor}
                                onChange={(color) =>
                                    setAttributes({
                                        headingColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={HEADING_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <ResRangeControl
                                label={__('Bottom Space', 'zoloblocks')}
                                controlName={HEADINGB_SPACE}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Comment List', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={COMMENT_PADDING}
                                requiredProps={requiredProps}
                            />
                            <ResRangeControl
                                label={__('Bottom Space', 'zoloblocks')}
                                controlName={COMMENT_SPACE}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                            <div className="zolo-custom-heading">{__('Avatar', 'zoloblocks')}</div>
                            <ResRangeControl
                                label={__('Size', 'zoloblocks')}
                                controlName={AVATAR_IMG_SIZE}
                                requiredProps={requiredProps}
                                min={0}
                                max={200}
                                step={1}
                            />
                            <CardDivider />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={AVATAR_PADDING}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={AVATAR_BORDER} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={AVATAR_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                            <BoxShadowControl controlName={AVATAR_SHADOW} requiredProps={requiredProps} enableTransition={false} />
                            <div className="zolo-custom-heading">{__('Author Name', 'zoloblocks')}</div>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={authorColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    authorColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={AUTHOR_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={authorHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    authorHoverColor: color,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                            <div className="zolo-custom-heading">{__('Meta', 'zoloblocks')}</div>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={metaColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    metaColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={META_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={metaHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    metaHoverColor: color,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                            <div className="zolo-custom-heading">{__('Message', 'zoloblocks')}</div>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={messageColor}
                                onChange={(color) =>
                                    setAttributes({
                                        messageColor: color,
                                    })
                                }
                            />

                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={MESSAGE_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Reply Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={replyColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    replyColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={REPLY_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={replyBackground}
                                            onChange={(color) =>
                                                setAttributes({
                                                    replyBackground: color,
                                                })
                                            }
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={REPLY_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={REPLY_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={REPLY_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={REPLY_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={replyHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    replyHoverColor: color,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={replyHoverBackground}
                                            onChange={(color) =>
                                                setAttributes({
                                                    replyHoverBackground: color,
                                                })
                                            }
                                        />

                                        <CardDivider />
                                        <ColorControl
                                            label={__('Border', 'zoloblocks')}
                                            color={replyHoverBorder}
                                            onChange={(color) =>
                                                setAttributes({
                                                    replyHoverBorder: color,
                                                })
                                            }
                                        />

                                        <BoxShadowControl
                                            controlName={REPLY_HOVER_SHADOW}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Form Heading', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('Color', 'zoloblocks')}
                                color={formHeadingColor}
                                onChange={(color) =>
                                    setAttributes({
                                        formHeadingColor: color,
                                    })
                                }
                            />
                            <TypographyDropdown
                                label={__('Typography', 'zoloblocks')}
                                typoPrefixConstant={FORMH_TYPOGRAPHY}
                                requiredProps={requiredProps}
                            />
                            <CardDivider />
                            <ResRangeControl
                                label={__('Bottom Space', 'zoloblocks')}
                                controlName={FORM_HB_SPACE}
                                requiredProps={requiredProps}
                                min={0}
                                max={100}
                                step={1}
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Cancel Reply', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={cancelColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    cancelColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={CANCEL_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={cancelHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    cancelHoverColor: color,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Comment Form', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Form Info', 'zoloblocks')}
                            </div>

                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={formInfoColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    formInfoColor: color,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={FORMINFO_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <ResRangeControl
                                            label={__('Space Between', 'zoloblocks')}
                                            controlName={INPUT_SPACE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={100}
                                            step={1}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={formInfoHoverColor}
                                            onChange={(color) =>
                                                setAttributes({
                                                    formInfoHoverColor: color,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />

                            <div className="zolo-custom-heading">{__('Form Fields', 'zoloblocks')}</div>
                            <TabPanelControl
                                options={[
                                    { label: __('Normal', 'zoloblocks'), value: 'normal' },
                                    { label: __('Focus', 'zoloblocks'), value: 'hover' },
                                ]}
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={inputColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    inputColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={INPUT_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={inputBgColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    inputBgColor: value,
                                                })
                                            }
                                        />

                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={INPUT_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={INPUT_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={INPUT_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={INPUT_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={inputFocusColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    inputFocusColor: value,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={inputFocusBgColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    inputFocusBgColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Submit Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={submitBtnColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    submitBtnColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={SUBMITBTN_TYPOGRAPHY}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <CardDivider />
                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={submitBtnBgColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    submitBtnBgColor: value,
                                                })
                                            }
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zoloblocks')}
                                            controlName={SUBMITBTN_PADDING}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Margin', 'zoloblocks')}
                                            controlName={SUBMITBTN_MARGIN}
                                            requiredProps={requiredProps}
                                        />
                                        <CardDivider />
                                        <BorderControl
                                            label={__('Border', 'zoloblocks')}
                                            controlName={SUBMITBTN_BORDER}
                                            requiredProps={requiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            controlName={SUBMITBTN_BORDER_RADIUS}
                                            requiredProps={requiredProps}
                                            forBorderRadius={true}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={submitBtnHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    submitBtnHoverColor: value,
                                                })
                                            }
                                        />
                                        <ColorControl
                                            label={__('Background', 'zoloblocks')}
                                            color={submitBtnBgHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    submitBtnBgHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/post-comments-form"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
