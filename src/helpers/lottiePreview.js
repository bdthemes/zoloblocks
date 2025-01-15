// import Lottie from 'react-lottie-player';
import '@lottiefiles/lottie-player';

const LottiePreview = (props) => {
    const { url, trigger, speed, loop, direction, isSelected } = props;
    return (

        <lottie-player
            key={`lottie-${trigger}-${speed}-${loop}-${direction}`}
            // ref={lottieRef}
            src={url}
            direction={direction}
            background="transparent"
            mode="normal"
            {...(trigger !== 'scroll' ? { speed } : {})}
            {...(trigger !== 'scroll' && loop ? { loop: 'loop' } : {})}
            {...(!trigger || isSelected ? { autoplay: 'autoplay' } : {})}
            {...(trigger === 'hover' ? { hover: 'hover' } : {})}
            style={{
                width: '100%',
                height: 'auto',
            }}
        />
    );
};
export default LottiePreview;
