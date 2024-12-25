import { useSelect } from '@wordpress/data';
import {
	BlockControls,
} from '@wordpress/block-editor';
import {
	ToolbarButton,
	ToolbarGroup
} from '@wordpress/components';

import { __ } from '@wordpress/i18n';

const BlockToolbar = ({ recordId, handleEditOriginal }) => {
    const canUserEdit = useSelect(
        (select) => {
            const { canUser } = select('core');
            return canUser('update', 'loop-template', recordId);
        },
        [recordId]
    );

    return (
        <>
            {canUserEdit && !!handleEditOriginal && (
                <BlockControls>
                    <ToolbarGroup>
                        <ToolbarButton onClick={handleEditOriginal}>
                            {__('Edit original')}
                        </ToolbarButton>
                    </ToolbarGroup>
                </BlockControls>
            )}
        </>
    )
}

export default BlockToolbar;