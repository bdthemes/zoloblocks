import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

import SingleLog from "./log";

const ChangeLogs = () => {
  const [logsPanel, setLogsPanel] = useState(false);
  return (
    <div className="zolo-changes-logs single-info">
      <button
        className="logos-panel-btn"
        onClick={() => {
          setLogsPanel(true);
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.16667 3.90182V15.0335C8.16667 15.8434 7.51008 16.5 6.70015 16.5C6.08038 16.5 5.52752 16.1104 5.31907 15.5267L3.53039 10.4024M14 9.83333C15.3807 9.83333 16.5 8.71404 16.5 7.33333C16.5 5.95262 15.3807 4.83333 14 4.83333M3.53039 10.4024C2.33691 9.89508 1.5 8.71194 1.5 7.33333C1.5 5.49238 2.99238 4 4.83333 4H6.36007C9.77727 4 12.7141 2.97159 14 1.5L14 13.1667C12.7141 11.6951 9.77727 10.6667 6.36007 10.6667L4.83331 10.6667C4.37098 10.6667 3.93064 10.5725 3.53039 10.4024Z"
            stroke="#adadad"
            stroke-width="1.4"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>

      {logsPanel && (
        <div className="logos-panel">
          <div className="logos-panel-header">
            <h3>{__("What's New", "zolo-blocks")}</h3>
            <button
              onClick={() => setLogsPanel(false)}
              className="logos-panel-close-btn"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L11 11M11 1L1 11L11 1Z"
                  stroke="#475569"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div className="logos-panel-body">
            <SingleLog
              version="1.0.0-RC7"
              date={"April 04, 2024"}
              changes={[
                {
                  title: __("Added", "zolo-blocks"),
                  list: [
                    __("Charts block added", "zolo-blocks"),
                    __("Business hours block added", "zolo-blocks"),
                    __("Google recaptcha added to Form block", "zolo-blocks"),
                    __(
                      "Image height control added to Image gallery block",
                      "zolo-blocks",
                    ),
                    __(
                      "Masonary grid features added to Review Grid block",
                      "zolo-blocks",
                    ),
                    __("Icon Option added to Star Rating block", "zolo-blocks"),
                    __(
                      "Icon Alignment control added to tabs block",
                      "zolo-blocks",
                    ),
                  ],
                },
                {
                  title: __("Improved", "zolo-blocks"),
                  list: [
                    __(
                      "Viewport with & height units added to each range control",
                      "zolo-blocks",
                    ),
                    __("Controls UI improved", "zolo-blocks"),
                  ],
                },
                {
                  title: __("Fixed", "zolo-blocks"),
                  list: [
                    __("Flipbox block back icon issue fixed", "zolo-blocks"),
                    __("Star Rating Alignment issue fixed", "zolo-blocks"),
                  ],
                },
              ]}
            />

            <SingleLog
              version="1.0.0-RC6"
              date={"March 21, 2024"}
              changes={[
                {
                  title: __("Added", "zolo-blocks"),
                  list: [
                    __("Tabs block added", "zolo-blocks"),
                    __("Image Compare block added", "zolo-blocks"),
                    __("Essential filter hooks added ", "zolo-blocks"),
                  ],
                },
                {
                  title: __("Updated", "zolo-blocks"),
                  list: [
                    __(
                      "Border radius control added in Google Maps block",
                      "zolo-blocks",
                    ),
                    __(
                      "Image Height control added in Image gallery block",
                      "zolo-blocks",
                    ),
                    __("Focus style added in Form block", "zolo-blocks"),
                  ],
                },
                {
                  title: __("Fixed", "zolo-blocks"),
                  list: [
                    __("Slider block issue fixed", "zolo-blocks"),
                    __("Flipbox back icon issue fixed", "zolo-blocks"),
                  ],
                },
              ]}
            />

            <SingleLog
              version="1.0.0-RC5"
              date={"March 10, 2024"}
              changes={[
                {
                  title: __("Added", "zolo-blocks"),
                  list: [
                    __("Form block added", "zolo-blocks"),
                    __("List block added", "zolo-blocks"),
                    __("Floating animation features added", "zolo-blocks"),
                    __("Transform features added", "zolo-blocks"),
                  ],
                },
                // {
                //     title: __('Updated', 'zolo-blocks'),
                //     list: [
                //         __('Carousel portion removed from Slider block', 'zolo-blocks'),
                //         __('Advanced Button & Post List block style improved', 'zolo-blocks'),
                //         __('Accessibility improved', 'zolo-blocks'),
                //         __('Image Gallery block Lightbox improved', 'zolo-blocks'),
                //     ],
                // },
                {
                  title: __("Fixed", "zolo-blocks"),
                  list: [
                    __(
                      "Advanced icon box block css overwriting issue fixed",
                      "zolo-blocks",
                    ),
                    __(
                      "Social share block icon size issue fixed",
                      "zolo-blocks",
                    ),
                    __(
                      "Social links block icon size issue fixed",
                      "zolo-blocks",
                    ),
                    __(
                      "Flipbox block hover background label issue fixed",
                      "zolo-blocks",
                    ),
                    __(
                      "Advanced heading preset-3 background image replacing issue fixed",
                      "zolo-blocks",
                    ),
                    __(
                      "Image gallery block move horizontal control spelling mistake issue fixed",
                      "zolo-blocks",
                    ),
                  ],
                },
              ]}
            />
            <SingleLog
              version="1.0.0"
              date={"January 23, 2024"}
              changes={[
                {
                  title: __("Added", "zolo-blocks"),
                  list: [
                    __("Admin Dashboard added", "zolo-blocks"),
                    __("Progressbar block added", "zolo-blocks"),
                    __("Flipbox block added", "zolo-blocks"),
                    __("Google Map block added", "zolo-blocks"),
                    __("Post Carousel block added", "zolo-blocks"),
                    __("Global overflow control added", "zolo-blocks"),
                    __("Object fit control added", "zolo-blocks"),
                    __("Image resolution control added", "zolo-blocks"),
                    __("Lightbox animation style added", "zolo-blocks"),
                  ],
                },
                {
                  title: __("Updated", "zolo-blocks"),
                  list: [
                    __(
                      "Carousel portion removed from Slider block",
                      "zolo-blocks",
                    ),
                    __(
                      "Advanced Button & Post List block style improved",
                      "zolo-blocks",
                    ),
                    __("Accessibility improved", "zolo-blocks"),
                    __("Image Gallery block Lightbox improved", "zolo-blocks"),
                  ],
                },
                {
                  title: __("Fixed", "zolo-blocks"),
                  list: [
                    __(
                      "Fixed several issues as per testing team feedback",
                      "zolo-blocks",
                    ),
                    __("Overflow hidded issue fixed", "zolo-blocks"),
                    __("Slider issue fixed", "zolo-blocks"),
                  ],
                },
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeLogs;
