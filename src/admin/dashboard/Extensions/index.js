import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import SingleExtension from './single-extension';

import Notice from '../notice';

const Extensions = () => {
    const [extensions, setExtensions] = useState([]);
    const [search, setSearch] = useState('');
    const [blockCategory, setCategory] = useState('all');
    const [notice, setNotice] = useState(false);

    const fetchExtensions = async () => {
        try {
            const response = await apiFetch({
                path: '/zolo/v1/extensions',
                method: 'GET',
            });
            setExtensions(response);
        } catch (error) {
            console.error('API Fetch Error:', error);
        }
    };

    useEffect(() => {
        fetchExtensions();
    }, []);

    // set notice to false after 3 seconds
    useEffect(() => {
        if (notice) {
            setTimeout(() => {
                setNotice(false);
            }, 1000);
        }
    }, [notice]);

    // update block setting
    const updateExtensionStatus = (extensionName) => {
        const extension = extensions.find((ext) => ext.name === extensionName);
        const status = !extension.status;

        apiFetch({
            path: '/zolo/v1/extensions',
            method: 'POST',
            data: {
                zolo_nonce: zoloBlocks.zolo_nonce,
                name: extensionName,
                status,
            },
        })
            .then((response) => {
                setExtensions(response);
                setNotice(true);
            })
            .catch((error) => console.error('API Fetch Error:', error));
    };

    // activate all extensions
    const activateAllExtensions = (status) => {
        const inactiveExtensions = extensions.filter((extension) => extension.status === false);

        if (inactiveExtensions.length === 0) {
            return;
        }

        const extensionNames = inactiveExtensions.map((extension) => extension.name);

        apiFetch({
            path: '/zolo/v1/extensions',
            method: 'POST',
            data: {
                zolo_nonce: zoloBlocks.zolo_nonce,
                names: extensionNames,
                status: true,
            },
        })
            .then((response) => {
                setExtensions(response);
            })
            .catch((error) => console.error('API Fetch Error:', error));
    };

    // deactivate all extensions
    const deactivateAllExtensions = (status) => {
        const activeExtensions = extensions.filter((extension) => extension.status === true);

        if (activeExtensions.length === 0) {
            return;
        }

        const extensionNames = activeExtensions.map((extension) => extension.name);

        apiFetch({
            path: '/zolo/v1/extensions',
            method: 'POST',
            data: {
                zolo_nonce: zoloBlocks.zolo_nonce,
                names: extensionNames,
                status: false,
            },
        })
            .then((response) => {
                setExtensions(response);
            })
            .catch((error) => console.error('API Fetch Error:', error));
    };

    return (
        <>
            {notice && <Notice notice={notice} message={__('Data updated successfully.', 'zoloblocks')} />}
            <div className="zoloblocks-list-tab">
                <div className="zolo-settings-actions">
                    <div className="zolo-settings-head-content zolo-dash-flex-center">
                        <h2 className="zolo-settings-title">{__('Extensions', 'zoloblocks')}</h2>
                        <div className="zolo-settings-type-badge zolo-dash-flex-center">
                            <button className="zolo-settings-type-btn active">{__('Free', 'zoloblocks')}</button>
                            <button className="zolo-settings-type-btn">{__('Pro', 'zoloblocks')}</button>
                        </div>

                        <div className="search-field">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                className="zolo-search-icon"
                            >
                                <path
                                    d="M14.75 14.75L12.1251 12.125M14 7.625C14 11.1458 11.1458 14 7.625 14C4.10418 14 1.25 11.1458 1.25 7.625C1.25 4.10418 4.10418 1.25 7.625 1.25C11.1458 1.25 14 4.10418 14 7.625Z"
                                    stroke="#7E8383"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <input
                                type="text"
                                className="zoloblocks-search"
                                placeholder={__('search block...', 'zoloblocks')}
                                onChange={(event) => setSearch(event.target.value)}
                                value={search}
                            />
                            {
                                // if search is not empty then show clear button
                                search !== '' && (
                                    <button
                                        className="clear-search"
                                        onClick={() => {
                                            setSearch('');
                                        }}
                                    >
                                        <span className="dashicons dashicons-no-alt"></span>
                                    </button>
                                )
                            }
                        </div>
                    </div>

                    <div className="zoloblocks-actions-btn">
                        <button
                            className="zolo-activated-btn"
                            onClick={() => {
                                activateAllExtensions(true);
                                setNotice(true);
                            }}
                        >
                            {__('Activate All', 'zoloblocks')}
                        </button>
                        <button
                            className="zolo-deactivated-btn"
                            onClick={() => {
                                deactivateAllExtensions(false);
                                setNotice(true);
                            }}
                        >
                            {__('Deactivate All', 'zoloblocks')}
                        </button>
                    </div>
                </div>
                <div className="zoloblocks-grid">
                    <div className="zoloblocks-inner-grid">
                        {extensions &&
                            extensions
                                .filter((extension) => {
                                    if (search === '') {
                                        return true;
                                    }
                                    return extension.title.toLowerCase().includes(search.toLowerCase());
                                })
                                .map((extension, index) => {
                                    return (
                                        <SingleExtension
                                            key={index}
                                            icon={extension?.name}
                                            title={extension?.title}
                                            value={extension?.status}
                                            demo={extension?.demo || ''}
                                            video={extension?.video || ''}
                                            released={extension?.released}
                                            onClick={() => {
                                                updateExtensionStatus(extension?.name);
                                            }}
                                            {...(extension?.is_pro && {
                                                isPro: true,
                                            })}
                                        />
                                    );
                                })}
                    </div>

                    {
                        // check if no block found on search
                        extensions.length > 0 &&
                            extensions.filter((extension) => {
                                if (search === '') {
                                    return true;
                                }
                                return extension.title.toLowerCase().includes(search.toLowerCase());
                            }).length === 0 && (
                                <div className="zolo-no-block-found">
                                    <img src={zoloBlocks.oops} alt="no zoloblocks found" />

                                    <h2 className="zolo-wrong-title">{__('Ops! Wrong Search', 'zoloblocks')}</h2>
                                    <p className="zolo-wrong-text">
                                        {__(
                                            'Did you spell it right? Please use search again. In case the searched feature is missing, you can let us know.',
                                            'zoloblocks'
                                        )}
                                    </p>
                                    <a
                                        className="zolo-welcome-page-btn zolo-primary-btn button-primary"
                                        href="https://feedback.zoloblocks.com/b/dvdyy2v9/feature-ideas/idea/new"
                                        target="_blank"
                                    >
                                        {__('Make Feature Request', 'zoloblocks')}
                                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    );
};

export default Extensions;
