import { useEffect } from '@wordpress/element';
import classNames from 'classnames';

const ResetBtn = ({ onReset, customClass = '' }) => {
    // run onReset when the user clicks undo
    useEffect(() => {
        const undo = (e) => {
            if (e.ctrlKey && e.keyCode === 90) {
                onReset();
            }
        };
        document.addEventListener('keydown', undo);
        return () => {
            document.removeEventListener('keydown', undo);
        };
    }, [onReset]);

    return (
        <div className="zb-reset-control-container">
            <button className={classNames('zb-reset-button', customClass)} onClick={onReset}>
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.75 2C3.16421 2 3.5 2.33579 3.5 2.75V6.5H7.25C7.66421 6.5 8 6.83579 8 7.25C8 7.66421 7.66421 8 7.25 8H2.75C2.33579 8 2 7.66421 2 7.25V2.75C2 2.33579 2.33579 2 2.75 2Z"
                        fill="#4d4d4d"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.29365 3.75C6.56527 3.75 5.07807 4.79769 4.42654 6.30028C4.26196 6.67984 3.82318 6.8531 3.4465 6.68726C3.06981 6.52143 2.89787 6.07929 3.06245 5.69972C3.94232 3.6705 5.95253 2.25 8.29365 2.25C11.4452 2.25 14 4.82436 14 8C14 11.1756 11.4452 13.75 8.29365 13.75C6.42651 13.75 4.76879 12.8456 3.72895 11.451C3.48203 11.1198 3.54828 10.6497 3.87693 10.4009C4.20558 10.1521 4.67217 10.2188 4.91909 10.55C5.68985 11.5837 6.91443 12.25 8.29365 12.25C10.623 12.25 12.5114 10.3472 12.5114 8C12.5114 5.65279 10.623 3.75 8.29365 3.75Z"
                        fill="#4d4d4d"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ResetBtn;
