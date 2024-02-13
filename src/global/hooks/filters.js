const { createHigherOrderComponent } = wp.compose;
const withMyWrapperProp = createHigherOrderComponent((BlockListBlock) => {
    // console.log('BlockListBlock', BlockListBlock);

    return (props) => {
        const wrapperProps = {
            ...props.wrapperProps,
            'data-my-property': 'the-value',
        };
        return <BlockListBlock {...props} wrapperProps={wrapperProps} />;
    };
}, 'withMyWrapperProp');
wp.hooks.addFilter('editor.BlockListBlock', 'my-plugin/with-my-wrapper-prop', withMyWrapperProp);

/**
 * Frontend Only
 */
function addBackgroundColorStyle(props) {
    const extraProps = zoloProps;

    console.log('zoloProps', zoloProps);

    // run loop for extraProps
    if (extraProps && zoloProps?.hasValue === '1') {
        for (const [key, value] of Object.entries(extraProps)) {
            props[key] = value;
        }
    }

    return {
        ...props,
    };
}

wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'my-plugin/add-background-color-style', addBackgroundColorStyle);
