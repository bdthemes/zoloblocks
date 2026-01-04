import { createHigherOrderComponent } from '@wordpress/compose';
import classNames from 'classnames';
import { useClasses } from './utils';

const withClassManagerWrapperProp = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        const { attributes, name } = props;
        const wrapperProps = {
            ...props.wrapperProps,
        };

        const allClasses = useClasses(attributes?.classManager);
        
        if (allClasses?.length > 0 && name?.includes('zolo')) {
            let classes = [];
            allClasses?.forEach((classItem) => {
                if (attributes?.unseenClass !== classItem?.title) {
                    classes.push(classItem.title);
                }
            })
            
            wrapperProps.className = classNames(wrapperProps.className, classes);
        }
        return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
    };
}, 'withClassManagerWrapperProp');

export default withClassManagerWrapperProp;