import PostItem from './post-item';
import {getPostMetaFieldValue} from "./helpers";
import {useEffect, useState} from "@wordpress/element";

function MainSlider({attributes, postResults}) {
  const {postQuery: {postType}} = attributes;
  return (
    <>
      {postResults.length > 0 &&
        postResults.map((post) => {
          const videoLink = getPostMetaFieldValue(post?.ID, 'zolo_post_video_link', postType);
          console.log(videoLink);
          return (
            <PostItem
              key={post.ID}
              post={post}
              attributes={attributes}
              videoLink={videoLink}
            />
          );
        })}
    </>
  );
}

export default MainSlider;
