import { __ } from '@wordpress/i18n';
import CodeMirror from '@uiw/react-codemirror';
import { css } from "@codemirror/lang-css";
import { TextHighlight } from '@wordpress/components';

const CustomCSSControl = ({ attributes, setAttributes }) => {

  const { customCss } = attributes;
  let defaultCss = `\n {{ZOLO}} { \n  /*background-color: #001feb;*/ \n } \n`;

  return (
    <div className='zolo-codemirror-wrap'>
      <CodeMirror
        value={customCss || defaultCss}
        height="200px"
        extensions={[css()]}
        onChange={(value) => setAttributes({ customCss: value })}
      />
      <div className='zolo-help-text'>
        <TextHighlight
          text={__("To confine style changes to specific elements, add the {{ ZOLO }} prefix before the selector. This ensures a targeted, non-global application of your styles.", "zolo-blocks")}
          highlight="{{ ZOLO }}" />
      </div>
    </div>
  )
}

export default CustomCSSControl;
