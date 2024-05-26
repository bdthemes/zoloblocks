import CurrentVersion from './current-verison';
import FrillWidget from './components/FrillWidget';

const ExtraInfo = () => {
    return (
        <div className="zolo-extra-info">
            <CurrentVersion version={zoloBlocks.plugin_version} />
            <FrillWidget />
        </div>
    );
};

export default ExtraInfo;
