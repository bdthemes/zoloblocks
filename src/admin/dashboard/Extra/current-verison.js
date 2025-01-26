import { __ } from '@wordpress/i18n';

const CurrentVersion = ({ version, pro }) => {
    return (
        <div className="zolo-current-version single-info">
            <a className="logos-panel-btn zolo-version" href="https://feedback.zoloblocks.com/announcements" target="_blank">
                <span>{__(`Core v${version}`, 'zolo-blocks')}</span>
                {pro && <span>{__(` | Pro v${pro}`, 'zolo-blocks')}</span>}
            </a>
        </div>
    );
};
export default CurrentVersion;
