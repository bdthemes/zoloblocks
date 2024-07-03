import React, { useEffect } from 'react';

const FrillWidget = React.memo(() => {
    useEffect(() => {
        let widget;

        const config = {
            key: '9e16ac2c-32ed-4383-b5b2-1e502cfc74c0', // Widget key
            callbacks: {
                onReady: (frillWidget) => {
                    widget = frillWidget;
                },
            },
        };

        if ('Frill' in window) {
            widget = window.Frill.widget(config);
        } else {
            window.Frill_Config = window.Frill_Config || [];
            window.Frill_Config.push(config);
        }

        return () => {
            if (widget) {
                widget.destroy();
            }
            if (window.Frill_Config) {
                window.Frill_Config = window.Frill_Config.filter((c) => c !== config);
            }
        };
    }, []);

    return (
        <div className="zolo-changes-logs single-info">
            <button className="logos-panel-btn changelog-popup-btn" type="button">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.16667 3.90182V15.0335C8.16667 15.8434 7.51008 16.5 6.70015 16.5C6.08038 16.5 5.52752 16.1104 5.31907 15.5267L3.53039 10.4024M14 9.83333C15.3807 9.83333 16.5 8.71404 16.5 7.33333C16.5 5.95262 15.3807 4.83333 14 4.83333M3.53039 10.4024C2.33691 9.89508 1.5 8.71194 1.5 7.33333C1.5 5.49238 2.99238 4 4.83333 4H6.36007C9.77727 4 12.7141 2.97159 14 1.5L14 13.1667C12.7141 11.6951 9.77727 10.6667 6.36007 10.6667L4.83331 10.6667C4.37098 10.6667 3.93064 10.5725 3.53039 10.4024Z"
                        stroke="#adadad"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </button>
        </div>
    );
});

export default FrillWidget;
