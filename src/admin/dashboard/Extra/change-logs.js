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
            <h3>{__("What's New", "zoloblocks")}</h3>
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
                  title: __("Added", "zoloblocks"),
                  list: [
                    __("Charts block added", "zoloblocks"),
                    __("Business hours block added", "zoloblocks"),
                    __("Google recaptcha added to Form block", "zoloblocks"),
                    __(
                      "Image height control added to Image gallery block",
                      "zoloblocks",
                    ),
                    __(
                      "Masonary grid features added to Review Grid block",
                      "zoloblocks",
                    ),
                    __("Icon Option added to Star Rating block", "zoloblocks"),
                    __(
                      "Icon Alignment control added to tabs block",
                      "zoloblocks",
                    ),
                  ],
                },
                {
                  title: __("Improved", "zoloblocks"),
                  list: [
                    __(
                      "Viewport with & height units added to each range control",
                      "zoloblocks",
                    ),
                    __("Controls UI improved", "zoloblocks"),
                  ],
                },
                {
                  title: __("Fixed", "zoloblocks"),
                  list: [
                    __("Flipbox block back icon issue fixed", "zoloblocks"),
                    __("Star Rating Alignment issue fixed", "zoloblocks"),
                  ],
                },
              ]}
            />

            <SingleLog
              version="1.0.0-RC6"
              date={"March 21, 2024"}
              changes={[
                {
                  title: __("Added", "zoloblocks"),
                  list: [
                    __("Tabs block added", "zoloblocks"),
                    __("Image Compare block added", "zoloblocks"),
                    __("Essential filter hooks added ", "zoloblocks"),
                  ],
                },
                {
                  title: __("Updated", "zoloblocks"),
                  list: [
                    __(
                      "Border radius control added in Google Maps block",
                      "zoloblocks",
                    ),
                    __(
                      "Image Height control added in Image gallery block",
                      "zoloblocks",
                    ),
                    __("Focus style added in Form block", "zoloblocks"),
                  ],
                },
                {
                  title: __("Fixed", "zoloblocks"),
                  list: [
                    __("Slider block issue fixed", "zoloblocks"),
                    __("Flipbox back icon issue fixed", "zoloblocks"),
                  ],
                },
              ]}
            />

            <SingleLog
              version="1.0.0-RC5"
              date={"March 10, 2024"}
              changes={[
                {
                  title: __("Added", "zoloblocks"),
                  list: [
                    __("Form block added", "zoloblocks"),
                    __("List block added", "zoloblocks"),
                    __("Floating animation features added", "zoloblocks"),
                    __("Transform features added", "zoloblocks"),
                  ],
                },
                // {
                //     title: __('Updated', 'zoloblocks'),
                //     list: [
                //         __('Carousel portion removed from Slider block', 'zoloblocks'),
                //         __('Advanced Button & Post List block style improved', 'zoloblocks'),
                //         __('Accessibility improved', 'zoloblocks'),
                //         __('Image Gallery block Lightbox improved', 'zoloblocks'),
                //     ],
                // },
                {
                  title: __("Fixed", "zoloblocks"),
                  list: [
                    __(
                      "Advanced icon box block css overwriting issue fixed",
                      "zoloblocks",
                    ),
                    __(
                      "Social share block icon size issue fixed",
                      "zoloblocks",
                    ),
                    __(
                      "Social links block icon size issue fixed",
                      "zoloblocks",
                    ),
                    __(
                      "Flipbox block hover background label issue fixed",
                      "zoloblocks",
                    ),
                    __(
                      "Advanced heading preset-3 background image replacing issue fixed",
                      "zoloblocks",
                    ),
                    __(
                      "Image gallery block move horizontal control spelling mistake issue fixed",
                      "zoloblocks",
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
                  title: __("Added", "zoloblocks"),
                  list: [
                    __("Admin Dashboard added", "zoloblocks"),
                    __("Progressbar block added", "zoloblocks"),
                    __("Flipbox block added", "zoloblocks"),
                    __("Google Map block added", "zoloblocks"),
                    __("Post Carousel block added", "zoloblocks"),
                    __("Global overflow control added", "zoloblocks"),
                    __("Object fit control added", "zoloblocks"),
                    __("Image resolution control added", "zoloblocks"),
                    __("Lightbox animation style added", "zoloblocks"),
                  ],
                },
                {
                  title: __("Updated", "zoloblocks"),
                  list: [
                    __(
                      "Carousel portion removed from Slider block",
                      "zoloblocks",
                    ),
                    __(
                      "Advanced Button & Post List block style improved",
                      "zoloblocks",
                    ),
                    __("Accessibility improved", "zoloblocks"),
                    __("Image Gallery block Lightbox improved", "zoloblocks"),
                  ],
                },
                {
                  title: __("Fixed", "zoloblocks"),
                  list: [
                    __(
                      "Fixed several issues as per testing team feedback",
                      "zoloblocks",
                    ),
                    __("Overflow hidded issue fixed", "zoloblocks"),
                    __("Slider issue fixed", "zoloblocks"),
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
