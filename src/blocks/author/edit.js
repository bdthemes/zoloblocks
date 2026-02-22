import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';
import './style.scss';
const { classArrayToStr, SidebarOpener } = window.zoloModule;
import Style from './styles';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const { preview, uniqueId, parentClasses, authorQuery, preset } = attributes;
    
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} zolo-author-wrap zolo-${preset}`, classArrayToStr(parentClasses)),
    });
    useEffect(() => {
        if (typeof authorQuery === 'undefined') {
            setAttributes({
                authorQuery: {
                    exclude: [],
                    role: [],
                    itemLimit: 6,
                    orderby: 'display_name',
                    order: 'desc',
                    avatarSize: '250',
                },
            });
        }
    }, []);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.postCategory} alt={__('Author Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <RenderView attributes={attributes} setAttributes={setAttributes} />
            </div>
        </>
    );
}
