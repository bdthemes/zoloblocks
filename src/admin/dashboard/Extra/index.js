import CurrentVersion from './current-verison';
import ChangeLogs from './change-logs';
import FrillWidget from './components/FrillWidget';

const ExtraInfo = () => {
    return (
        <div className="zolo-extra-info">
            <CurrentVersion version={zoloBlocks.plugin_version} />
            {/* <ChangeLogs /> */}
            <FrillWidget />
        </div>
    );
};

export default ExtraInfo;
