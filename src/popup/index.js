import { useState } from '@wordpress/element';
import { registerPlugin } from '@wordpress/plugins';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { Button, ButtonGroup, SelectControl, ToggleControl, BaseControl, PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import { useEntityProp } from '@wordpress/core-data';

// internal dependencies
const { ColorControl } = window.zoloModule;

// import style
import './style.scss';

const positions = [
    { label: __('Top', 'zoloblocks'), value: 'popup_top' },
    { label: __('Bottom', 'zoloblocks'), value: 'popup_bottom' },
];

const ZoloPopupSettings = () => {
    const [selectedTab, setSelectedTab] = useState('basic');

    // meta
    const [meta, setMeta] = useEntityProp('postType', 'zolo-popup', 'meta');

    return (
        <>
            <PluginDocumentSettingPanel className="zolo-popup-settings-panel">
                <h4 className="zolo-popup-setting-title">{__('Popup Settings', 'zoloblocks')}</h4>
                <div className="zolo-panel-control">
                    <ButtonGroup className="zolo-tab-group">
                        <Button
                            className={classNames(
                                'zolo-tab',
                                `${selectedTab === 'basic' ? 'active__tab' : ''}${selectedTab === 'style' ? 'prev__tab' : ''}`
                            )}
                            key="basic"
                            onClick={() => setSelectedTab('basic')}
                        >
                            <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 100 100">
                                <path
                                    d="M45.07,75.33H25.34a4.1,4.1,0,0,1-4.08-4.08v-46a4.1,4.1,0,0,1,4.08-4.08h46a4.1,4.1,0,0,1,4.08,4.08V45a2.5,2.5,0,0,0,5,0V25.22a9.08,9.08,0,0,0-9.08-9.08h-46a9.08,9.08,0,0,0-9.08,9.08v46a9.08,9.08,0,0,0,9.08,9.08H45.07a2.5,2.5,0,1,0,0-5ZM82.16,59.06,49.28,45.91A2.51,2.51,0,0,0,46,49.16L59.19,82a2.5,2.5,0,0,0,2.32,1.57h0A2.49,2.49,0,0,0,63.83,82L69,68.9l13.13-5.19a2.5,2.5,0,0,0,0-4.65Zm-16,5.59a2.54,2.54,0,0,0-1.41,1.41l-3.28,8.29L52.84,52.72l21.63,8.65Z"
                                    style={{
                                        fill: '#39394d',
                                    }}
                                />
                                <rect
                                    width="100"
                                    height="100"
                                    style={{
                                        fill: 'none',
                                    }}
                                />
                            </svg>

                            <h5 className="zolo-tab-label">{__('Basic', 'zoloblocks')}</h5>
                        </Button>
                        <Button
                            className={classNames(
                                'zolo-tab',
                                `${selectedTab === 'style' ? 'active__tab' : ''}${selectedTab === 'basic' ? 'next__tab' : ''}${
                                    selectedTab === 'extra' ? 'sup_prev__tab' : ''
                                }`
                            )}
                            key="style"
                            onClick={() => setSelectedTab('style')}
                        >
                            <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 100 100">
                                <path
                                    d="M85,24.38a9.4,9.4,0,0,0-16-6.65L56.52,30.18l-3.41-3.41a9,9,0,0,0-12.7,0L35.23,32a2.52,2.52,0,0,0,0,3.54L37,37.25c-5.62,7.53-11.36,8.84-19.93,10.27a2.49,2.49,0,0,0-1.54,4l26,32.53a2.48,2.48,0,0,0,1.95.94,2.55,2.55,0,0,0,1.11-.26c5.64-2.82,16-12.53,19.64-20.25l.25.26a2.51,2.51,0,0,0,3.54,0l5.18-5.18a9,9,0,0,0,0-12.71l-3.4-3.4L82.27,31A9.37,9.37,0,0,0,85,24.38ZM44.12,79.29,31.79,63.87l23,5.75A55.16,55.16,0,0,1,44.12,79.29Zm14-14L26.63,57.42l-4.58-5.73c7.31-1.49,13.05-3.83,18.51-10.88L60.41,60.67A15.1,15.1,0,0,1,58.12,65.3ZM78.73,27.49,64.51,41.71a2.52,2.52,0,0,0,0,3.54l5.17,5.16a4,4,0,0,1,0,5.65l-3.41,3.4L64.8,58h0L42,35.22h0l-1.49-1.49,3.4-3.4a4,4,0,0,1,5.64,0l5.17,5.18a2.51,2.51,0,0,0,3.54,0L72.51,21.27a4.4,4.4,0,1,1,6.22,6.22Z"
                                    style={{
                                        fill: '#39394d',
                                    }}
                                />
                                <rect
                                    width="100"
                                    height="100"
                                    style={{
                                        fill: 'none',
                                    }}
                                />
                            </svg>

                            <h5 className="zolo-tab-label">{__('Style', 'zoloblocks')}</h5>
                        </Button>
                        <Button
                            className={classNames(
                                'zolo-tab',
                                `${selectedTab === 'extra' ? 'active__tab' : ''}${selectedTab === 'style' ? 'next__tab' : ''}`
                            )}
                            key="extra"
                            onClick={() => setSelectedTab('extra')}
                        >
                            <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 100 100">
                                <path
                                    d="M50,36.74A13.26,13.26,0,1,0,63.26,50,13.28,13.28,0,0,0,50,36.74Zm0,21.52A8.26,8.26,0,1,1,58.26,50,8.26,8.26,0,0,1,50,58.26Zm34.47,2.88a9.68,9.68,0,0,0-4.57-5.92L79.44,55A4.72,4.72,0,0,1,77.1,50.9V49.09a4.68,4.68,0,0,1,.62-2.34A4.81,4.81,0,0,1,79.47,45l.51-.3A9.7,9.7,0,0,0,83.5,31.49l-.79-1.37A9.66,9.66,0,0,0,69.6,26.55l-.62.33a4.7,4.7,0,0,1-4.65,0L62.78,26a4.7,4.7,0,0,1-1.7-1.7,4.75,4.75,0,0,1-.63-2.34v-.65a9.57,9.57,0,0,0-2.83-6.83,9.68,9.68,0,0,0-6.83-2.84H49.21a9.68,9.68,0,0,0-9.66,9.67v.64a4.73,4.73,0,0,1-.62,2.34A4.81,4.81,0,0,1,37.21,26l-1.54.89a4.64,4.64,0,0,1-4.72,0l-.47-.25a9.67,9.67,0,0,0-13.19,3.53l-.79,1.37A9.68,9.68,0,0,0,20,44.66l.48.32.13.08a4.62,4.62,0,0,1,1.7,1.7,4.75,4.75,0,0,1,.64,2.31V50.9A4.67,4.67,0,0,1,20.53,55l-.51.3A9.68,9.68,0,0,0,16.5,68.51l.79,1.37a9.66,9.66,0,0,0,13.13,3.56l.6-.32a4.7,4.7,0,0,1,4.65,0l1.55.9a4.67,4.67,0,0,1,2.33,4v.65a9.75,9.75,0,0,0,2.83,6.84,9.6,9.6,0,0,0,6.83,2.83h1.58a9.66,9.66,0,0,0,9.66-9.67v-.65a4.72,4.72,0,0,1,2.34-4l1.53-.89a4.68,4.68,0,0,1,4.74,0l.46.25a9.64,9.64,0,0,0,7.33,1,9.78,9.78,0,0,0,5.88-4.53l.77-1.38A9.64,9.64,0,0,0,84.47,61.14ZM79.16,66l-.77,1.37A4.66,4.66,0,0,1,72,69l-.46-.25a9.85,9.85,0,0,0-9.68,0l-1.53.9a9.71,9.71,0,0,0-4.83,8.37v.65a4.68,4.68,0,0,1-4.66,4.67H49.21A4.59,4.59,0,0,1,45.92,82a4.7,4.7,0,0,1-1.37-3.3v-.66a9.69,9.69,0,0,0-4.82-8.36l-1.55-.9a9.64,9.64,0,0,0-9.6,0l-.6.33a4.66,4.66,0,0,1-6.36-1.71L20.83,66a4.67,4.67,0,0,1,1.74-6.4l.5-.31a9.71,9.71,0,0,0,4.83-8.4V49.05a9.69,9.69,0,0,0-4.75-8.27l-.48-.32-.13-.08A4.68,4.68,0,0,1,20.83,34l.79-1.36a4.69,4.69,0,0,1,2.83-2.18,4.78,4.78,0,0,1,3.6.51l.46.25a9.82,9.82,0,0,0,9.68,0l1.53-.9a9.65,9.65,0,0,0,4.83-8.37v-.65A4.7,4.7,0,0,1,45.92,18a4.59,4.59,0,0,1,3.29-1.37h1.58A4.66,4.66,0,0,1,54.08,18a4.6,4.6,0,0,1,1.37,3.3v.65a9.73,9.73,0,0,0,4.82,8.37l1.55.9a9.88,9.88,0,0,0,9.59,0l.61-.33a4.64,4.64,0,0,1,3.53-.47,4.69,4.69,0,0,1,2.83,2.17L79.17,34a4.69,4.69,0,0,1-1.73,6.4l-.5.3A9.73,9.73,0,0,0,72.1,49.1v1.78A9.7,9.7,0,0,0,77,59.35l.46.24A4.71,4.71,0,0,1,79.16,66Z"
                                    style={{
                                        fill: '#39394d',
                                    }}
                                />
                                <rect
                                    width="100"
                                    height="100"
                                    style={{
                                        fill: 'none',
                                    }}
                                />
                            </svg>
                            <h5 className="zolo-tab-label">{__('Extra', 'zoloblocks')}</h5>
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="zolo-tab-content">
                    {selectedTab === 'basic' && (
                        <Fragment>
                            <PanelBody title={__('General', 'zoloblocks')} initialOpen={true}>
                                <SelectControl
                                    label={__('Popup Type', 'zoloblocks')}
                                    labelPosition="side"
                                    options={[
                                        { label: __('Info Bar', 'zoloblocks'), value: 'info_bar' },
                                        { label: __('Popup Box', 'zoloblocks'), value: 'popup_box' },
                                    ]}
                                    onChange={(v) => {
                                        setMeta({ ...meta, zolo_popup_type: v });
                                    }}
                                    value={meta?.zolo_popup_type}
                                />
                                {meta?.zolo_popup_type === 'info_bar' && (
                                    <ToggleControl
                                        label={__('Push Content', 'zoloblocks')}
                                        checked={meta?.zolo_popup_push_content}
                                        onChange={() => setMeta({ ...meta, zolo_popup_push_content: !meta?.zolo_popup_push_content })}
                                    />
                                )}

                                {meta?.zolo_popup_type === 'info_bar' && meta?.zolo_popup_push_content === true && (
                                    <BaseControl label={__('Position', 'zoloblocks')} className="info-bar-position">
                                        <ButtonGroup>
                                            {positions &&
                                                positions.map((position) => {
                                                    return (
                                                        <Button
                                                            className={classNames(
                                                                'info-bp-btn',
                                                                `${meta?.zolo_popup_position === position.value ? 'active' : ''}`
                                                            )}
                                                            onClick={() => setMeta({ ...meta, zolo_popup_position: position.value })}
                                                        >
                                                            {position.label}
                                                        </Button>
                                                    );
                                                })}
                                        </ButtonGroup>
                                    </BaseControl>
                                )}
                            </PanelBody>
                            {meta?.zolo_popup_type === 'popup_box' && (
                                <PanelBody title={__('Popup Box', 'zoloblocks')} initialOpen={false}>
                                    <RangeControl
                                        label={__('Max Width', 'zoloblocks')}
                                        value={meta?.zolo_popup_max_width}
                                        onChange={(v) => setMeta({ ...meta, zolo_popup_max_width: v })}
                                        min={100}
                                        max={1600}
                                    />
                                    <SelectControl
                                        label={__('Position', 'zoloblocks')}
                                        labelPosition="side"
                                        options={[
                                            { label: __('Top Left', 'zoloblocks'), value: 'pbp_top_left' },
                                            { label: __('Top Center', 'zoloblocks'), value: 'pbp_top_center' },
                                            { label: __('Top Right', 'zoloblocks'), value: 'pbp_top_right' },
                                            { label: __('Center Left', 'zoloblocks'), value: 'pbp_center_left' },
                                            { label: __('Center Center', 'zoloblocks'), value: 'pbp_center_center' },
                                            { label: __('Center Right', 'zoloblocks'), value: 'pbp_center_right' },
                                            { label: __('Bottom Left', 'zoloblocks'), value: 'pbp_bottom_left' },
                                            { label: __('Bottom Center', 'zoloblocks'), value: 'pbp_bottom_center' },
                                            { label: __('Bottom Right', 'zoloblocks'), value: 'pbp_bottom_right' },
                                        ]}
                                        onChange={(v) => {
                                            setMeta({ ...meta, zolo_popup_box_position: v });
                                        }}
                                        value={meta?.zolo_popup_box_position}
                                    />
                                    <ToggleControl
                                        label={__('Enable Overlay', 'zoloblocks')}
                                        checked={meta?.zolo_popup_box_overlay}
                                        onChange={() => setMeta({ ...meta, zolo_popup_box_overlay: !meta?.zolo_popup_box_overlay })}
                                    />
                                    <ToggleControl
                                        label={__('Fixed Background', 'zoloblocks')}
                                        checked={meta?.zolo_popup_box_overlay_bg_fixed}
                                        onChange={() =>
                                            setMeta({ ...meta, zolo_popup_box_overlay_bg_fixed: !meta?.zolo_popup_box_overlay_bg_fixed })
                                        }
                                        help={__(
                                            'The background scroll and click events will be disabled once this popup is visible',
                                            'zoloblocks'
                                        )}
                                    />
                                </PanelBody>
                            )}

                            <PanelBody title={__('Repetition', 'zoloblocks')} initialOpen={false}>
                                <ToggleControl
                                    label={__('Infinite Repeat', 'zoloblocks')}
                                    checked={meta?.zolo_popup_infinite_repeat}
                                    onChange={() => setMeta({ ...meta, zolo_popup_infinite_repeat: !meta?.zolo_popup_infinite_repeat })}
                                />
                                {meta?.zolo_popup_infinite_repeat === false && (
                                    <RangeControl
                                        label={__('Repetition per browser', 'zoloblocks')}
                                        value={meta?.zolo_popup_repeat_num}
                                        onChange={(v) => setMeta({ ...meta, zolo_popup_repeat_num: v })}
                                        min={1}
                                        max={10}
                                    />
                                )}
                            </PanelBody>
                            <PanelBody title={__('Close', 'zoloblocks')} initialOpen={false}>
                                <ToggleControl
                                    label={__('Dismissible', 'zoloblocks')}
                                    checked={meta?.zolo_popup_dismissible}
                                    onChange={() => setMeta({ ...meta, zolo_popup_dismissible: !meta?.zolo_popup_dismissible })}
                                />
                                {meta?.zolo_popup_dismissible && (
                                    <SelectControl
                                        label={__('Position', 'zoloblocks')}
                                        labelPosition="side"
                                        options={[
                                            { label: __('Top Right', 'zoloblocks'), value: 'cbp_top_right' },
                                            { label: __('Top Left', 'zoloblocks'), value: 'cbp_top_left' },
                                        ]}
                                        onChange={(v) => {
                                            setMeta({ ...meta, zolo_popup_close_btn_position: v });
                                        }}
                                        value={meta?.zolo_popup_close_btn_position}
                                    />
                                )}
                            </PanelBody>
                        </Fragment>
                    )}
                    {selectedTab === 'style' && (
                        <Fragment>
                            {meta?.zolo_popup_box_overlay && (
                                <PanelBody title={__('Popup Box', 'zoloblocks')} initialOpen={true}>
                                    <ColorControl
                                        label={__('Overlay Background', 'zoloblocks')}
                                        color={meta?.zolo_popup_box_overlay_bg}
                                        onChange={(v) => setMeta({ ...meta, zolo_popup_box_overlay_bg: v })}
                                    />
                                </PanelBody>
                            )}
                        </Fragment>
                    )}
                    {selectedTab === 'extra' && <Fragment>advanced</Fragment>}
                </div>
            </PluginDocumentSettingPanel>
        </>
    );
};

registerPlugin('zolo-popup-settings', { render: ZoloPopupSettings });
