import { registerPlugin } from "@wordpress/plugins";
import {PluginSidebar, PluginSidebarMoreMenuItem, PluginDocumentSettingPanel} from "@wordpress/edit-post";
import {__} from "@wordpress/i18n";
const {
    ResDimensionsControl,
} = window.zoloModule;
console.log(ResDimensionsControl);


registerPlugin('zolo-sidebar', {
    render: () => (
        <PluginSidebar
            name="zolo-sidebar"
            title={__('ZoloBlocks', 'zoloblocks')}
            icon={
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 500 500"
                    style={{ enableBackground: 'new 0 0 500 500' }}
                    xmlSpace="preserve"
                >
                    <style
                        type="text/css"
                        dangerouslySetInnerHTML={{
                            __html: '\n\t.st0{fill:#2667FF;}\n\t.st1{fill:#ADD7F6;}\n\t.st2{fill:#FFFFFF;}\n',
                        }}
                    />
                    <path
                        className="st0"
                        d="M25,0h450c13.8,0,25,11.2,25,25v450c0,13.8-11.2,25-25,25H25c-13.8,0-25-11.2-25-25V25C0,11.2,11.2,0,25,0z"
                    />
                    <g>
                        <polygon className="st1" points="103.2,226.5 231.8,96.6 102.5,96.6  " />
                        <path
                            className="st2"
                            d="M364.6,182.7l-50.8,50.8c7.5,8.4,16.4,21.9,16.4,34c0,14.5-5.8,26.6-15.1,36.2c-9,9.3-20.8,13.9-34.7,13.9   H169.9L394.7,96.6H290.9L103.1,283.5v120.7l71.6-0.5h105.5c37.1,0,68-11.5,93.7-34.4c25.1-22.9,37.8-60.4,37.8-96   C411.7,235.8,392.7,204.1,364.6,182.7L364.6,182.7L364.6,182.7z"
                        />
                    </g>
                </svg>
            }
        >
            {/* <ResDimensionsControl
                label={__('Margin', 'zoloblocks')}
                // controlName={globalConfig.margin.prefix || 'mainMargin'}
                // requiredProps={requiredProps}
                forBorderRadius={false}
                max={200}
            /> */}
        </PluginSidebar>
    ),
});
