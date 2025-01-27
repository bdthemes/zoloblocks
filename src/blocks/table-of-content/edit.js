import {__} from '@wordpress/i18n';
import {RichText, useBlockProps} from '@wordpress/block-editor';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';
import Style from './styles';
import {useEffect} from "@wordpress/element";
import useHeader from "./use-header";
import {parseList, formatHeaders} from "./helper";

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
    return <img src={zoloParams.blocksPreview?.tableOfContent} alt={__('Table of Content', 'zoloblocks')}/>;
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
                <svg width="1em" height="1em" aria-hidden="true" className="e-font-icon-svg e-fas-chevron-up" viewBox="0 0 448 512"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
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
