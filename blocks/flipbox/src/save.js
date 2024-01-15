import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;
import classnames from 'classnames';

const Save = ({ attributes }) => {
 const {
     uniqueId,
     zoloId,
     preset,
     flipEffect,
     parentClasses,
     isHover,
     selectedSide,
     frontIcon,
     backIcon,
     showFrontIcon,
     showFrontTitle,
     frontTitle,
     showFrontContent,
     frontContent,
     showBackIcon,
     showBackTitle,
     backTitle,
     showBackContent,
     backContent,
     showBackLinkBtn,
     buttonText,
     buttonIcon,
     showBackLinkBtnIcon,
     link,
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
        >
            <div className={`zolo-flip-box_wrap zolo-flip-box_animation_style-${flipEffect}`}>
                <div
                    className={`zolo-flip-box_item zolo-flip-box_hover`}
                >
                    <div className="zolo-flip-box_inner-item">
                        <div className="zolo-flip-box_face zolo-flip-box_front">
                            <div className="zolo-flip-box_img">
                                <img src="https://demo.elementpack.pro/wp-content/uploads/2020/07/01-2-1-1.jpg" alt="image" />
                            </div>
                            <div className="zolo-flip-box-content zolo-flip-box_front-content">
                                {showFrontIcon && (
                                    <div className="zolo-flip-box_icon">
                                        <span className="zolo-flip-box_inner-icon">
                                            {frontIcon && <DisplayZoloIcon icon={frontIcon} />}
                                        </span>
                                    </div>
                                )}
                                {showFrontTitle &&
                                    (link ? (
                                        <a href={link ? link : '#'} className="title-link">
                                            <h3 className="zolo-flip-box_title">{frontTitle}</h3>
                                        </a>
                                    ) : (
                                        <h3 className="zolo-flip-box_title">{frontTitle}</h3>
                                    ))}
                                {showFrontContent && <p className="zolo-flip-box_desc">{frontContent}</p>}
                            </div>
                        </div>
                        <div className="zolo-flip-box_face zolo-flip-box_back">
                            <div className="zolo-flip-box-content zolo-flip-box_back-content">
                                {showBackIcon && (
                                    <div className="zolo-flip-box_icon">
                                        <span className="zolo-flip-box_inner-icon">{backIcon && <DisplayZoloIcon icon={backIcon} />}</span>
                                    </div>
                                )}
                                {showBackTitle &&
                                    (link ? (
                                        <a href={link ? link : '#'} className="title-link">
                                            <h3 className="zolo-flip-box_title">{backTitle}</h3>
                                        </a>
                                    ) : (
                                        <h3 className="zolo-flip-box_title">{backTitle}</h3>
                                    ))}
                                {showBackContent && <p className="zolo-flip-box_desc">{backContent}</p>}
                                <div className="zolo-flip-box_link-button-wrap">
                                    {showBackLinkBtn && (
                                        <a href={link ? link : '#'} className="zolo-flip-box_link-btn">
                                            <span>{buttonText}</span>
                                            {buttonIcon && showBackLinkBtnIcon && <DisplayZoloIcon icon={buttonIcon} />}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
