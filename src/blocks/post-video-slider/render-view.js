import PostItem from './post-item';
import {getPostMetaFieldValue} from "./helpers";

function RenderView({attributes, postResults}) {
  return (
    <>
      {postResults.length > 0 &&
        postResults.map((post) => {
          const videoLink = getPostMetaFieldValue(post?.ID, 'zolo_post_video_link');
          return (
            <PostItem key={post.ID} post={post} attributes={attributes} videoLink={videoLink || false}/>
          );
        })}
    </>
  );
}

export default RenderView;
