import {__} from '@wordpress/i18n';
import {RichText, useBlockProps} from '@wordpress/block-editor';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';
import Style from './styles';
import {useEffect} from "@wordpress/element";
import useHeader from "@/blocks/table-of-content/use-header";
import {parseList, formatHeaders} from "@/blocks/table-of-content/helper";

const {classArrayToStr, SidebarOpener} = window.zoloModule;

export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId} = props;
  const {
    showHeading,
    showCollapsible,
    isCollapsed,
    headingText,
    headers,
    listStyle,
    allowedHeading,
    preview,
    uniqueId,
    parentClasses,
  } = attributes;
  const ListTag = listStyle === 'ol' ? 'ol' : 'ul';

  const headerList = useHeader();

  useEffect(() => {
    if (JSON.stringify(headerList) !== JSON.stringify(headers)) {
      setAttributes({headers: headerList});
    }
  }, [headerList]);

  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} `, classArrayToStr(parentClasses), {'collapsed': isCollapsed === false}),
  });

  const toggleCollapse = () => {
    setAttributes({isCollapsed: !isCollapsed});
  };

  // preview image
  if (preview) {
    return <img src={zoloParams.blocksPreview?.tableOfContent} alt={__('Post Title', 'zoloblocks')}/>;
  }

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}
      <Style props={props}/>
      <div {...blockProps}>
        <SidebarOpener clientId={clientId}/>
        {showHeading && (
          <div className="zolo-toc-heading">
            <RichText
              className="title"
              placeholder="Table of content"
              value={headingText}
              onChange={(headingText) => setAttributes({headingText})}
            />
            {showCollapsible && (
              <button className="zolo-toc-toggle-btn" onClick={toggleCollapse}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M6 10l6 6l6 -6h-12"/>
                </svg>
              </button>
            )}
          </div>
        )}

        {isCollapsed && (
          <div className="zolo-toc-content">
            {headers.length > 0 ? (
              <ListTag className="zolo-toc-list">
                {parseList(formatHeaders(headers, allowedHeading), ListTag)}
              </ListTag>
            ) : (
              <p>{__('Add heading to create table of content', 'zoloblocks')}</p>
            )}
          </div>
        )}

      </div>
    </>
  )
}
