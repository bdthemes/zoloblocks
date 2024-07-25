import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        zoloId,
        progressValue,
        progressDuration,
        progressTitle,
        toggleLabel,
        progressFillColor,
        circleColor,
        progPieMultiColor,
        progPiePrefixPostfix,
        proPieperpostToggle,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            {...(progressValue && {
                'data-progressvalue': progressValue,
            })}
            {...(progressDuration && {
                'data-progressDuration': progressDuration,
            })}
            {...(progressTitle && {
                'data-progresstitle': progressTitle,
            })}
            {...(toggleLabel !== undefined && {
                'data-toggleLabel': toggleLabel,

            })}
            {...(progressFillColor && {
                'data-progressFillColor': progressFillColor,
            })}
            {...(circleColor && {
                'data-circleColor': circleColor,
            })}
            data-progpiemulticolor={JSON.stringify(progPieMultiColor)}
            {...(progPiePrefixPostfix &&
                (progPiePrefixPostfix?.Prefix !== '' || progPiePrefixPostfix?.Postfix !== '') && {
                    'data-propieprefixpostfix': JSON.stringify(progPiePrefixPostfix),
                })}
            {...(proPieperpostToggle !== undefined && {
                'data-propieperposttoggle': proPieperpostToggle,
            })}
        ></div>
    );
};

export default Save;
