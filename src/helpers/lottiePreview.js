
import Lottie from 'react-lottie-player';

const LottiePreview = (props) => {
    const { url, trigger, speed, loop, direction, isSelected } = props;
    return (
        <Lottie
            key={`lottie-${trigger}-${speed}-${loop}-${direction}`}
            src={url}
            direction={direction}
            background="transparent"
            mode="normal"
            {...(trigger !== 'scroll' ? { speed } : {})}
            {...(trigger !== 'scroll' && loop ? { loop: 'loop' } : {})}
            {...(!trigger && isSelected ? { autoPlay: 'autoplay' } : {})}
            {...(trigger === 'hover' ? { hover: 'hover' } : {})}
            style={{
                width: '100%',
                height: 'auto',
            }}
        />
    );
};
export default LottiePreview;
