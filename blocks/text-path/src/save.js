import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
         uniqueId, 
         parentClasses, 
          zoloId,
          textpathContent,
          textPathType,
          pathlink
        } =attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), ),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
           
                {/* style={{ width: '100%', height: 'auto' }} */}
             <svg   xmlns="http://www.w3.org/2000/svg" >
                {/* to hide the path, it is usually wrapped in a <defs> element */}
                {/* <defs> */}
                <path
                    className='zolo-path'
                    id={`MyPath-${uniqueId}`}
                    fill="none"
                    // stroke="red"
                    d={textPathType && textPathType}
                />
                {/* </defs> */}
                <text >
                    <textPath href={`#MyPath-${uniqueId}`}>
                    {textpathContent && (
                        <a
                            className='zolo-textpath'
                            href={pathlink && pathlink.url}
                            rel={pathlink && pathlink.openInNewTab && 'noreferrer noopener'}
                            target={pathlink && pathlink.openInNewTab && '_blank'}  
                            title={textpathContent}                          
                        >
                            {textpathContent && textpathContent}
                        </a>
                    )}  
                    
                     </textPath>
                </text>
            </svg>
            
        </div>
    );
};

export default Save;
