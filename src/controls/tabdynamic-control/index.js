import {useState} from "@wordpress/element";
import {Button} from "@wordpress/components";

const TabDynamicControl = (props) => {
  const {names} = props;
  const [activeTab, setActiveTab] = useState(names[0]);
  const renderContent = () => {
    return props[activeTab] || null;
  }
  const transformText=(text)=> {
    if(text.includes('-')){
      return text
        .split('-')
        .map(word =>
          word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(' ');
    }else{
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  }

  return (
    <div className="zolo-tabs-container">
      <div className="zolo-tabs">
        {names.map((name, index) => (
          <Button
            key={index}
            variant={activeTab === name ? 'primary' : 'secondary'}
            onClick={() => setActiveTab(name)}
          >
            {transformText(name)}
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
