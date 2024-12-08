import React, { useEffect, useState } from 'react';
import { useDispatch, useSelect } from '@wordpress/data';

const Input = () => {
    const { setBlockContent, requestAI } = useDispatch('zoloai/popup');

    const { response, isOpen } = useSelect((select) => {
        const { getResponse, isOpen: checkIsOpen } = select('zoloai/popup');
        return {
            response: getResponse() || '', // Default to an empty string if null
            isOpen: checkIsOpen(),
        };
    });

    const getContextFromSelectedBlocks = () => {
        const { getBlock, getSelectedBlockClientIds } = wp.data.select('core/block-editor');
        const selectedBlocks = getSelectedBlockClientIds().map((clientId) => getBlock(clientId));
        let blockContent = '';
        selectedBlocks.forEach((block) => {
            if (block?.attributes?.content) {
                blockContent += block.attributes.content;
            }
        });
        return blockContent;
    };

    const [blockContent, setLocalBlockContent] = useState(getContextFromSelectedBlocks());

    useEffect(() => {
        // Update block content when response changes
        if (response.content) {
            setLocalBlockContent(response.content);
            setBlockContent(response.content);
        }
    }, [response.content, setBlockContent]);

    const handleInputChange = (e) => {
        const newContent = e.target.value;
        setLocalBlockContent(newContent);
        setBlockContent(newContent);
    };

    return (
        <div>
            <textarea
                value={blockContent}
                onChange={handleInputChange}
                placeholder="Type your content here..."
                rows={6}
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default Input;
