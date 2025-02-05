const LottiePreview = (props) => {
    const { url, trigger, speed, loop, direction, isSelected } = props;
    return (
        <lottie-player
            key={`lottie-${trigger}-${speed}-${loop}-${direction}`}
            src={url}
            direction={direction}
            background="transparent"
            mode="normal"
            {...(trigger !== 'scroll' ? { speed } : {})}
            {...(trigger !== 'scroll' && loop ? { loop: 'loop' } : {})}
            {...(trigger === 'load' ? { autoplay: 'autoplay' } : {})}
            {...(trigger === 'hover' ? { hover: 'hover' } : {})}
            style={{
                width: '100%',
                height: 'auto',
            }}
        />
    );
};
export default LottiePreview;
