import {registerPlugin} from "@wordpress/plugins";
import {useSelect, useDispatch} from "@wordpress/data";
import {PluginDocumentSettingPanel} from "@wordpress/editor";
import {TextControl} from "@wordpress/components";

registerPlugin('zolo-block-post-video-link', {

  render: () => {

    const postFormat = useSelect((select) =>
      select('core/editor').getEditedPostAttribute('format')
    );

    const videoLink = useSelect((select) =>
      select('core/editor').getEditedPostAttribute('meta')["zolo_post_video_link"]
    );

    const {editPost} = useDispatch('core/editor');


    return (
      <>
        {'video' === postFormat && (

          <PluginDocumentSettingPanel
            title="ZoloBlocks Aditional"
            initialOpen={true}
            //icon="video-alt3"
          >
            <TextControl
              label="Video Link"
              value={videoLink || ''}
              onChange={(value) =>
                editPost({
                  meta: {zolo_post_video_link: value}
                })
              }
            />
          </PluginDocumentSettingPanel>

        )}

      </>
    );

  }
})
