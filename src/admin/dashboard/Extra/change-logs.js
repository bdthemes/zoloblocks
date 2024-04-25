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
              version="1.0.1"
              date={"April 23, 2024"}
              changes={[
                {
                  title: __("Added", "zoloblocks"),
                  list: [
                    __(
                      "Typography control added to Advanced Search block",
                      "zolo-blocks",
                    ),
                    __(
                      "Focus Color control added to Advanced Search block",
                      "zolo-blocks",
                    ),
                  ],
                },
                {
                  title: __("Fixed", "zoloblocks"),
                  list: [
                    __(
                      "Row and column issue fixed to Countdown block",
                      "zolo-blocks",
                    ),
                    __(
                      "Focus color issue fixed to Advanced Search block",
                      "zolo-blocks",
                    ),
                  ],
                },
                {
                  title: __("Improved", "zoloblocks"),
                  list: [
                    __("Controls UI improved", "zolo-blocks"),
                  ],
                },
              ]}
            />
            <SingleLog
              version="1.0.0"
              date={"April 22, 2024"}
              changes={[
                {
                  title: __("Initial Release", "zoloblocks"),
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
