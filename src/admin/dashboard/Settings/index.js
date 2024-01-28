const Settings = () => {
    return (
        <div className="zolo-settings">

            <div id="tabs" className="zolo-settings-tabs-wrap">
                <div className="zolo-settings-tab-button">
                    <div className="zolo-tab-button-item">
                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M21 13v-2a1 1 0 0 0-1-1h-.8l-.7-1.7.6-.5a1 1 0 0 0 0-1.5L17.7 5a1 1 0 0 0-1.5 0l-.5.6-1.7-.7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.8l-1.7.7-.5-.6a1 1 0 0 0-1.5 0L5 6.3a1 1 0 0 0 0 1.5l.6.5-.7 1.7H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.8l.7 1.7-.6.5a1 1 0 0 0 0 1.5L6.3 19a1 1 0 0 0 1.5 0l.5-.6 1.7.7v.8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.8l1.7-.7.5.6a1 1 0 0 0 1.5 0l1.4-1.4a1 1 0 0 0 0-1.5l-.6-.5.7-1.7h.8a1 1 0 0 0 1-1Z"
                            />
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            />
                        </svg>
                        <span>Editor Options</span>
                    </div>
                    <div className="zolo-tab-button-item">zolo-tab-button-item 2</div>
                    <div className="zolo-tab-button-item">Tab 3</div>
                </div>

                <div className="zolo-settings-tab-content">
                    <div className="zolo-tab-content-item">1</div>
                    <div className="zolo-tab-content-item">2</div>
                    <div className="zolo-tab-content-item">3</div>
                </div>
            </div>
        </div>
    );
};

export default Settings;

