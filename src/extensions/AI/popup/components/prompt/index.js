import React, { useEffect, useState } from 'react';
import { useDispatch, useSelect } from '@wordpress/data';
import { useRef } from '@wordpress/element';

const Prompt = (props) => {
    const { onInsert } = props;
    const { setBlockContent, setPrompt } = useDispatch('zoloai/popup');
    const ref = useRef(null);
    const { prompt, response, isOpen, loading } = useSelect((select) => {
        const { getResponse, isOpen: checkIsOpen, getPrompt, isLoading } = select('zoloai/popup');
        return {
            response: getResponse() || {}, // Default to an empty object if null
            isOpen: checkIsOpen(),
            prompt: getPrompt(),
            loading: isLoading(),
        };
    });
    const [blockContent, setBlockContentState] = useState('');

    const getContextFromSelectedBlocks = () => {
        const { getBlock, getSelectedBlockClientIds } = wp.data.select('core/block-editor');
        return getSelectedBlockClientIds()
            .map((id) => getBlock(id)?.attributes?.content || '')
            .map((content) => {
                const selection = window.getSelection();
                return selection?.rangeCount > 0 && selection.toString() ? selection.toString() : content;
            })
            .join('');
    };

    useEffect(() => {
        if (isOpen) {
            const initialContent = getContextFromSelectedBlocks();
            setBlockContentState(initialContent);
            setBlockContent(initialContent);
            setPrompt(initialContent);
        }
    }, [isOpen, setBlockContent]);

    useEffect(() => {
        if (response?.content) {
            setBlockContentState(response.content);
            setBlockContent(response.content);
            setPrompt(response.content);
        }
    }, [response, setBlockContent]);

    // Automatic height.
    useEffect(() => {
        if (ref?.current) {
            ref.current.style.height = '0px';
            const scrollHeight = ref.current.scrollHeight;
            ref.current.style.height = scrollHeight + 'px';
        }
    }, [ref, prompt, response, blockContent]);

    // Set focus on Input.
    useEffect(() => {
        if (isOpen && !loading && ref?.current) {
            ref.current.focus();
        }
    }, [isOpen, loading, ref]);

    const handleInputChange = (e) => {
        const newContent = e?.target?.value;
        setBlockContentState(newContent);
        setBlockContent(newContent);
        setPrompt(newContent);
    };

    return (
        <textarea
            ref={ref}
            value={blockContent || ''}
            onChange={handleInputChange}
            placeholder="Type your content here..."
            rows={1}
            style={{ width: '100%' }}
        />
    );
};

export default Prompt;
