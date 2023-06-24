const {
  DynamicTag,
} = window.zoloModule;
function RenderView({ attributes, setAttributes, postResults }) {
  const { titleTag } = attributes;
  return [
    postResults.length > 0 && (
      postResults.map((post) => {

        return (
          <div className="zolo-post-item">

            <div className="zolo-post-image">
              <a href="#">
                <img className="zolo-img" src="blog-2.jpg" alt="" />
              </a>

              <div className="zolo-post-secount-dateTime">
                <div className="zolo-post-date">August 5, 2020</div>
                <span>,</span>
                <span className="zolo-post-estimate">9 min read</span>
              </div>

              <div className="zolo-post-meta-box">
                <a href="#">
                  <img src="https://lh3.googleusercontent.com/a/AEdFTp4UHZDwTB1QD7TYOXe6x2_IadB8aAeSEj3U7vLg=s288-p-rw-no" alt="" />
                </a>
                <div className="zolo-post-meta-content">
                  <span>posted by</span>
                  <a href="#">muhammad asik</a>
                </div>
              </div>

            </div>

            <div className="zolo-post-content">

              <div className="zolo-post-dateTime">
                <div className="zolo-post-date">August 5, 2020</div>
                <span>,</span>
                <span className="zolo-post-estimate">9 min read</span>
              </div>

              <DynamicTag tagName={titleTag} className="zolo-post-title">
                <a href={post.permalink}>{post.title}</a>
              </DynamicTag>

              <div className="zolo-post-desc">
                <p>Using a Query A CSS pseudo-class is a keyword.</p>
              </div>

              <div className="zolo-post-category">
                <a href="#">digital</a>
                <a href="#">marketing</a>
              </div>

            </div>

            <div className="zolo-post-link-btn">
              <a href="#">
                <span>read more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                </svg>
              </a>
            </div>

          </div>
        )

      })
    )
  ]

}

export default RenderView;
