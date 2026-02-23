import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { useMemo, useEffect, useRef } from '@wordpress/element';
import classnames from 'classnames';


export const getChangedAttributes = (prev = {}, next = {}) => {
    const changes = [];

    const allKeys = new Set([
        ...Object.keys(prev),
        ...Object.keys(next),
    ]);

    allKeys.forEach((key) => {
        const prevVal = prev[key];
        const nextVal = next[key];

        // deep compare using JSON stringify (debug use only)
        const isEqual =
            JSON.stringify(prevVal) === JSON.stringify(nextVal);

        if (!isEqual) {
            changes.push({
                key,
                before: prevVal,
                after: nextVal,
            });
        }
    });

    return {
        count: changes.length,
        keys: changes.map(c => c.key),
        changes,
    };
};


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
                if(uniqueId === newUniqueId) return;
                if (JSON.stringify(oldAttributes.current) !== JSON.stringify(attributes)) {
                    const changedAttributes = getChangedAttributes(oldAttributes.current, attributes);
                    console.log({
                        [name]: changedAttributes
                    });
                    
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