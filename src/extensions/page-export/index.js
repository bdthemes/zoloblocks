const { registerPlugin } = wp.plugins;
const { PluginSidebarMoreMenuItem } = wp.editPost;
const { withSelect, select } = wp.data;
const { Button } = wp.components;
const { Fragment } = wp.element;
const { __ } = wp.i18n;

const handleCurrentPostExport = () => {
    // current block content code view
    const blockContent = select('core/editor').getEditedPostContent();


    const patternName = select('core/editor').getEditedPostAttribute('title');

    const blob = new Blob(
        [
            JSON.stringify(
                {
                    __file: 'wp_block',
                    content: blockContent,
                    zoloVersion: zoloParams?.zolo_version || '1.0.0',
                    title: patternName,
                    syncStatus: 'unsynced',
                },
                null,
                2
            ),
        ],
        {
            type: 'application/json',
        }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${patternName === '' ? 'block' : patternName.replace(/\s/g, '-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);

    // show notice
    const { createSuccessNotice } = wp.data.dispatch('core/notices');
    createSuccessNotice(__('Great! The pattern is exported successfully.', 'zoloblocks'), {
        type: 'default',
    });
};

registerPlugin('custom-export-button', {
    render: () => (
        <Fragment>
            <PluginSidebarMoreMenuItem
                target="custom-export-button"
                icon="admin-post"
                onClick={() => {
                    handleCurrentPostExport();
                }}
            >
                {__('Export as Pattern', 'zoloblocks')}
            </PluginSidebarMoreMenuItem>
        </Fragment>
    ),
});
