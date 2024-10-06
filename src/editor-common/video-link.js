import {registerPlugin} from "@wordpress/plugins";
import {useSelect, useDispatch} from "@wordpress/data";
import {PluginDocumentSettingPanel} from "@wordpress/edit-post";
import {TextControl} from "@wordpress/components";
import {useState, useEffect, useCallback} from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";

const ZoloBlockPostVideoLink = () => {
  const [isVideoLinkEnabled, setIsVideoLinkEnabled] = useState(false);
  const videoLink = useSelect(
    (select) => select("core/editor").getEditedPostAttribute("meta")?.zolo_post_video_link,
    []
  );
  const {editPost} = useDispatch("core/editor");

  // Function to fetch settings and set video link enable status
  const fetchSettings = useCallback(async () => {
    try {
      const response = await apiFetch({path: "/wp/v2/settings"});
      setIsVideoLinkEnabled(Boolean(response?.zolo_enable_video_link));
    } catch (error) {
      console.error("Failed to fetch settings:", error);
    }
  }, []);

  // Fetch settings when the component mounts
  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  // Conditionally render the video link setting panel
  if (!isVideoLinkEnabled) {
    return null;
  }

  return (
    <PluginDocumentSettingPanel title="ZoloBlocks Additional" initialOpen={true}>
      <TextControl
        label="Video Link"
        value={videoLink || ""}
        onChange={(value) =>
          editPost({
            meta: {zolo_post_video_link: value},
          })
        }
      />
    </PluginDocumentSettingPanel>
  );
};

registerPlugin("zolo-block-post-video-link", {render: ZoloBlockPostVideoLink});
