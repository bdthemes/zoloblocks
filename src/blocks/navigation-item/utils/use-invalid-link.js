import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
const useIsInvalidLink = (kind, type, id) => {
    const isPostType = kind === 'post-type' || type === 'post' || type === 'page';
    const hasId = Number.isInteger(id);
    const postStatus = useSelect(
        (select) => {
            if (!isPostType) {
                return null;
            }
            const { getEntityRecord } = select(coreStore);
            return getEntityRecord('postType', type, id)?.status;
        },
        [isPostType, type, id]
    );

    const isInvalid = isPostType && hasId && postStatus && 'trash' === postStatus;
    const isDraft = 'draft' === postStatus;

    return [isInvalid, isDraft];
};

export default useIsInvalidLink;
