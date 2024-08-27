import {__} from '@wordpress/i18n';
import {useBlockProps} from '@wordpress/block-editor';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';
import './style.scss';
const {classArrayToStr, SidebarOpener} = window.zoloModule;
import Style from './styles';
export default function Edit(props) {
  const {attributes, setAttributes, className, isSelected, clientId} = props;
  const {preview, uniqueId, parentClasses, preset,showHome,showCurrent} = attributes;
  // this useEffect is for creating a unique id for each block's unique className by a random unique number
  const blockProps = useBlockProps({
    className: classnames(className, `${uniqueId} zolo-breadcrumbs-wrap zolo-breadcrumbs-${preset}${!showHome?' hide-home':''}${!showCurrent?' hide-current':''}`, classArrayToStr(parentClasses)),
  });

  // preview image
  if (preview) {
    return <img src={zoloParams?.blocksPreview?.breadcrumbs} alt={__('Breadcrumbs Preview', 'zoloblocks')}/>;
  }

  return (
    <>
      {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes}/>}
      <Style props={props}/>
      <div {...blockProps}>
        <SidebarOpener clientId={clientId}/>
        <RenderView attributes={attributes} setAttributes={setAttributes}/>
      </div>
    </>
  );
}
