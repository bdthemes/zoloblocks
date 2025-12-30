import { createHigherOrderComponent } from '@wordpress/compose';
import classNames from 'classnames';

const withClassManagerWrapperProp = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        const { attributes } = props;
        const wrapperProps = {
            ...props.wrapperProps,
        };

        if (attributes?.classManager?.length > 0) {
            let classes = [];
            attributes?.classManager?.forEach((classItem) => {
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