import { RichText, useBlockProps } from '@wordpress/block-editor';
const { DynamicTag } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        //settings
        titleText,
        enableTitleLink,
        titleLink,
        titleTagName,
        subTitleText,
        showSubTitle,
        subTitlePosition,
        showSeparator,
        separatorPosition,
        showTransparentTitle,
        transparentTitleText,
        transparentTitleRotateOrigin,
        //styles
        styles,
    } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <div class="zolo-counter-wrap zolo-counter-style-1">
                <div class="zolo-counter-item">
                    <div class="zolo-counter-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-emoji-smile"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
                        </svg>
                    </div>
                    <div class="zolo-counter-inner-content">
                        <div class="zolo-counter-count">
                            <span class="counter">1000</span>
                            <span class="zolo-counter-sub-text">+</span>
                        </div>
                        <div class="zolo-counter-title">Happy Client</div>
                    </div>
                </div>
                <div class="zolo-counter-item">
                    <div class="zolo-counter-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-people"
                            viewBox="0 0 16 16"
                        >
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
                        </svg>
                    </div>
                    <div class="zolo-counter-inner-content">
                        <div class="zolo-counter-count">
                            <span class="counter">150</span>
                            <span class="zolo-counter-sub-text">k</span>
                        </div>
                        <div class="zolo-counter-title">Customers Worldwide</div>
                    </div>
                </div>
                <div class="zolo-counter-item">
                    <div class="zolo-counter-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-check2-square"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"></path>
                            <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"></path>
                        </svg>
                    </div>
                    <div class="zolo-counter-inner-content">
                        <div class="zolo-counter-count">
                            <span class="counter">800</span>
                            <span class="zolo-counter-sub-text">+</span>
                        </div>
                        <div class="zolo-counter-title">Project Done</div>
                    </div>
                </div>
                <div class="zolo-counter-item">
                    <div class="zolo-counter-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-headset"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"></path>
                        </svg>
                    </div>
                    <div class="zolo-counter-inner-content">
                        <div class="zolo-counter-count">
                            <span class="counter">80</span>
                            <span class="zolo-counter-sub-text">k</span>
                        </div>
                        <div class="zolo-counter-title">Support Given</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
