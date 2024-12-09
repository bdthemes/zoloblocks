import React, { useEffect, useState } from 'react';
import { useDispatch, useSelect } from '@wordpress/data';

const Prompt = () => {
    const { setBlockContent } = useDispatch('zoloai/popup');

    const { response, isOpen } = useSelect((select) => {
        const { getResponse, isOpen: checkIsOpen } = select('zoloai/popup');
        return {
            response: getResponse() || {}, // Default to an empty object if null
            isOpen: checkIsOpen(),
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
        }
    }, [isOpen, setBlockContent]);

    useEffect(() => {
        if (response?.content) {
            setBlockContentState(response.content);
            setBlockContent(response.content);
        }
    }, [response, setBlockContent]);

    const handleInputChange = (e) => {
        const newContent = e.target.value;
        setBlockContentState(newContent);
        setBlockContent(newContent);
    };

    return (
        <textarea
            value={blockContent}
            onChange={handleInputChange}
            placeholder="Type your content here..."
            rows={6}
            style={{ width: '100%' }}
        />
    );
};

export default Prompt;
