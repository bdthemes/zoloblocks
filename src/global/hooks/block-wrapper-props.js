import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useMemo, useEffect, useRef } from '@wordpress/element';
import classnames from 'classnames';

const withBlockWrapperProps = createHigherOrderComponent((BlockListBlock) => {
    return (props) => {
        const { attributes, clientId, name, setAttributes } = props;
        if (name.includes('zolo/')) {
            const { uniqueId } = attributes;
            const prefix = name.split('/')[1];
            const newUniqueId = useMemo(() => {
                return `${prefix}-${clientId.slice(-6)}`;
            }, [clientId]);
           
            let oldAttributes = useRef(attributes);
            useEffect(() => {
                if (!uniqueId) {
                    setAttributes({
                        uniqueId: newUniqueId,
                    })
                }
            }, []);

            useEffect(() => {
                if (JSON.stringify(oldAttributes.current) !== JSON.stringify(attributes)) {
                    setAttributes({
                        uniqueId: newUniqueId,
                    })

                    oldAttributes.current = attributes;
                }
            }, [attributes]);

            const wrapperProps = {
                ...props,
                wrapperProps: {
                    ...props.wrapperProps,
                    className: classnames(props.wrapperProps.className, uniqueId, `parent-${uniqueId}`, 'zolo-block'),
                },
            };

            return <BlockListBlock {...wrapperProps} />;
        }
        return <BlockListBlock {...props} />;
    };
}, 'withBlockWrapperProps');

addFilter('editor.BlockListBlock', 'zoloblocks/hoc-block-wrapper', withBlockWrapperProps);