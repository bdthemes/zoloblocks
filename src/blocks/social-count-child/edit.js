import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { useEffect } from '@wordpress/element';
import Inspector from './inspector';
import Counter from './counter';
// import style
import Style from './style';

const { DisplayZoloIcon, classArrayToStr, SidebarOpener, sanitizeText, sanitizeUrl } = window.zoloModule;

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId, context } = props;
    const { uniqueId, preset, parentClasses, socialIcon, socialLink, socialCounter, socialMeta } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} zolo-${preset}`, classArrayToStr(parentClasses)),
    });

    const socailCountLinkProps = {
        href: sanitizeUrl(socialLink?.url),
        target: socialLink?.openInNewTab ? '_blank' : undefined,
        rel: socialLink?.openInNewTab ? 'noopener noreferrer' : undefined,
        className: 'zolo-item zolo-social-icon',
        onClick: (e) => e.preventDefault(),
    };

    /**
     * context
     */
    useEffect(() => {
        if(!context) return;

        if (JSON.stringify(attributes?.preset) !== JSON.stringify(context['zolo/preset'])) {
            setAttributes({ preset: context['zolo/preset'] });
        }
    }, [context['zolo/preset']]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <Style props={props} />

            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />

                <a {...socailCountLinkProps}>
                    <div className="zolo-icon">
                        <DisplayZoloIcon icon={socialIcon} />
                    </div>

                    <div className="zolo-content">
                        <Counter endValue={socialCounter} />
                        <div className="zolo-meta">
                            <span>{sanitizeText(socialMeta)}</span>
                        </div>
                    </div>
                </a>
            </div>
        </>
    );
}
