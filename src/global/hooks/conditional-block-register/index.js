import { registerPlugin } from '@wordpress/plugins';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { registerBlockType, unregisterBlockType } from '@wordpress/blocks';

const Component = () => {
    const { currentPostId, getBlockType } = useSelect((select) => {
        const { getCurrentPostId } = select('core/editor');
        const { getBlockType } = select('core/blocks');
        return {
            currentPostId: getCurrentPostId(),
            getBlockType,
        };
    }, []);

    useEffect(() => {
        if (currentPostId && !String(currentPostId).includes('//single') && getBlockType('zolo/post-content')) {
            unregisterBlockType('zolo/post-content');
        }else if (currentPostId && String(currentPostId).includes('//single') && !getBlockType('zolo/post-content')) {
            registerBlockType('zolo/post-content');
        }
    }, [currentPostId]);    

    return <></>;
};

registerPlugin('zolo-blocks-conditional', {
    render: Component,
});