import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';
import Style from './styles';
const {classArrayToStr, SidebarOpener} = window.zoloModule;
import TableOfContent from "./table-of-content";
export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId, context: {postType, postId}} = props;
  const {
    preview,
    uniqueId,
    parentClasses,
  } = attributes;

  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} `, classArrayToStr(parentClasses)),
  });

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
            <h1>Edit</h1>
          <TableOfContent blockProp={props}/>
        </div>
    </>
  );
}
