import { addFilter } from '@wordpress/hooks';

import { createHigherOrderComponent } from '@wordpress/compose';
import { registerFormatType, applyFormat, removeFormat, useAnchor } from '@wordpress/rich-text';
import { BlockControls } from '@wordpress/block-editor';
import {
    ToolbarGroup,
    ToolbarButton,
    Popover,
    __experimentalInputControl as InputControl,
    Flex,
    FlexItem,
    Button,
    RangeControl,
    Tooltip,
} from '@wordpress/components';
import { useState, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
const { ColorControl } = window.zoloModule;
import { useSelect, useDispatch } from '@wordpress/data';
import { rawHandler } from '@wordpress/blocks';
import clsx from 'clsx';


const Input = () => {
    const ref = useRef();
    const { reset, setPrompt, setScreen, requestAI } = useDispatch('zoloai/popup');
    const { isOpen, prompt } = useSelect((select) => {
        const { isOpen: checkIsOpen, getPrompt } = select('zoloai/popup');
        return {
            isOpen: checkIsOpen(),
            prompt: getPrompt(),
        };
    });

    function onKeyDown(e) {
        if (e.key === 'Enter') {
            requestAI();
        }
    }

    return (
        <div className="zolo-popup-input">
            <textarea
                ref={ref}
                placeholder={__('Ask AI to write anything…', 'zoloblocks')}
                value={prompt}
                onChange={(e) => {
                    setPrompt(e.target.value);
                }}
                onKeyDown={onKeyDown}
                // disabled={loading}
                rows={1}
            />
        </div>
    );
};
const Content = () => {
    const { open, reset, setPrompt, setScreen, requestAI } = useDispatch('zoloai/popup');
    const { isOpen, prompt, response } = useSelect((select) => {
        const { isOpen: checkIsOpen, getPrompt, getResponse } = select('zoloai/popup');

        return {
            isOpen: checkIsOpen(),
            prompt: getPrompt(),
            response: getResponse(),
        };
    });
    return (
        <div className="zolo-popup-content">
            <div className="zolo-popup-response">
                <div className="zolo-popup-response-content" dangerouslySetInnerHTML={{ __html: response?.content }} />
            </div>
        </div>
    );
};
const Toolbar = () => {
    const { toggle} = useDispatch('zoloai/popup');





    return (
        <BlockControls>
            <ToolbarGroup>
                <ToolbarButton
                    className="zolo-highlight-button"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                            <path
                                d="M14.0712 9.69993L14.9982 7.55057C15.152 7.19386 15.6539 7.19843 15.8014 7.55789L16.6354 9.59063C17.172 10.8987 18.2031 11.9386 19.5112 12.4441C20.2436 12.7271 20.9451 12.9933 21.726 13.3027C22.097 13.4496 22.0896 13.979 21.716 14.1188L19.6811 14.8802C18.2774 15.4055 17.1629 16.513 16.619 17.9233L15.8161 20.0053C15.6715 20.3804 15.1465 20.3798 15.0025 20.0045L14.2087 17.9342C13.6895 16.58 12.6432 15.5009 11.3145 14.9493L9.33125 14.1259C8.97253 13.977 8.96964 13.4642 9.32666 13.3112L11.3146 12.4589C12.5487 11.9299 13.5353 10.9424 14.0712 9.69993Z"
                                fill="black"
                            />
                            <path
                                d="M6.01488 3.07497L6.36536 2.26453C6.51939 1.90834 7.02058 1.91291 7.16823 2.27186L7.45362 2.96564C7.9915 4.2732 9.02484 5.3084 10.3342 5.81066C10.5983 5.91198 10.8636 6.01393 11.14 6.12187C11.512 6.26717 11.505 6.79641 11.1309 6.93603L10.5019 7.17075C9.09773 7.69476 7.98233 8.80125 7.43724 10.2109L7.18294 10.8686C7.0381 11.2431 6.51378 11.2426 6.36966 10.8678L6.11046 10.1936C5.59 8.83976 4.54261 7.76153 3.21341 7.21116L2.56601 6.9431C2.20678 6.79436 2.20389 6.28094 2.56142 6.12807L3.25573 5.83122C4.49031 5.30336 5.47779 4.31692 6.01488 3.07497Z"
                                fill="black"
                            />
                            <path
                                d="M4.71182 15.9861L4.7511 15.8956C4.88762 15.5812 5.33013 15.5852 5.461 15.9021C5.93846 17.0583 6.85588 17.9676 8.01378 18.4132L8.10773 18.4495C8.42754 18.573 8.4217 19.0269 8.10037 19.1463C6.89622 19.5939 5.93558 20.5497 5.46676 21.7574C5.34152 22.08 4.88724 22.0809 4.76262 21.7581C4.30772 20.5795 3.39184 19.6358 2.2334 19.158C1.91983 19.0287 1.92376 18.5778 2.23586 18.4449C3.33693 17.976 4.23152 17.0924 4.71182 15.9861Z"
                                fill="black"
                            />
                        </svg>
                    }
                    title={__('Zolo AI', 'zoloblocks-pro')}
                    onClick={(e) => {
                        e.preventDefault();
                        toggle();
                    }}
                    isPressed={false}
                />
            </ToolbarGroup>
            {/* {panel && (
                <Popover position="bottom center" focusOnMount={false} className="zolo-highlight-popover">
                    <Input />
                    <Content />
                </Popover>
            )} */}
        </BlockControls>
    );
}


const  allowedBlocks = [
    'core/paragraph',
    'core/heading',
    'zolo/advanced-heading',
    'zolo/advanced-paragraph',
]
const isToolbarAllowed = (props) => {
    const { name } = props;
    return allowedBlocks.includes(name);
}



const withToolbarControl = createHigherOrderComponent((OriginalComponent) => {
    function MindToolbarToggle(props) {
        const allow = isToolbarAllowed(props);

        if (!allow) {
            return <OriginalComponent {...props} />;
        }

        return (
            <>
                <OriginalComponent {...props} />
                <BlockControls group="other">
                    <Toolbar />
                </BlockControls>
            </>
        );
    }

    return MindToolbarToggle;
}, 'withToolbarControl');

addFilter('editor.BlockEdit', 'mind/block-toolbar-toggle', withToolbarControl);
