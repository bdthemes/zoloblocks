import CurrentVersion from './current-verison';
import ChangeLogs from './components/changelog';
// console.log(zoloBlocks)
const ExtraInfo = () => {
    return (
        <div className="zolo-extra-info">
            <CurrentVersion version={zoloBlocks.plugin_version} pro={zoloBlocks?.pro_version} />
            {/* <ChangeLogs /> */}
        </div>
    );
};

export default ExtraInfo;
