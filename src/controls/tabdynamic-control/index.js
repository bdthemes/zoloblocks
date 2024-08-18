import {useState} from "@wordpress/element";
import {Button} from "@wordpress/components";

const TabDynamicControl = (props) => {
  const {names} = props;
  const [activeTab, setActiveTab] = useState(names[0]);
  const renderContent = () => {
    return props[activeTab] || null;
  }
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="zolo-tabs-container">
      <div className="zolo-tabs">
        {names.map((name, index) => (
          <Button
            key={index}
            variant={activeTab === name ? 'primary' : 'secondary'}
            onClick={() => setActiveTab(name)}
          >
            {capitalize(name)}
          </Button>
        ))}
      </div>
      <div className="zolo-tab-content">
        {renderContent()}
      </div>
    </div>
  )
}

export default TabDynamicControl;
