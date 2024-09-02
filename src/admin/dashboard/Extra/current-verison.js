import { __ } from '@wordpress/i18n';

const CurrentVersion = ({ version }) => {
    return (
        <div className="zolo-current-version single-info">
            {__('Version')} {version}
        </div>
    );
};
export default CurrentVersion;
