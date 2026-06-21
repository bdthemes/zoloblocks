import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import Notice from '../notice';

import SingleExtension from './single-extension';

const Extensions = () => {
    const [notice, setNotice] = useState('');
    const [extensions, setExtensions] = useState([]);
    const [search, setSearch] = useState('');
    const [blockCategory, setCategory] = useState('all');

    const [extensionsTobeUpdated, setExtensionsTobeUpdated] = useState({}); // Store extensions changes

    // Fetch extensions
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

    // activate / deactivate all extensions
    const toggleAllExtensions = (status) => {
        const cannotActivatePremium = status && zoloBlocks?.has_pro !== '1';
        setExtensions((prevExtensions) =>
            prevExtensions.map((extension) => {
                if (cannotActivatePremium && extension.is_pro) {
                    return extension;
                }
                if (extension.status !== status) {
                    setExtensionsTobeUpdated((prev) => ({
                        ...prev,
                        [extension.name]: status,
                    }));
                    return { ...extension, status };
                }
                return extension;
            })
        );
    };

    // Handle block click
    const handleExtensionClick = (extensionName) => {
        setExtensions((prevExtensions) =>
            prevExtensions.map((extension) => {
                if (extension.name === extensionName) {
                    const newStatus = !extension.status;
                    if (extension.is_pro && zoloBlocks?.has_pro !== '1' && newStatus) {
                        return extension;
                    }
                    setExtensionsTobeUpdated((prev) => ({
                        ...prev,
                        [extension.name]: newStatus,
                    }));
                    return { ...extension, status: newStatus };
                }
                return extension;
            })
        );
    };

    // Save changes
    const saveChanges = () => {
        // Map the blocks to an array of update objects
        const updates = Object.entries(extensionsTobeUpdated).map(([name, status]) => ({
            name,
            status,
        }));

        // If there are no updates, return early
        if (updates.length === 0) {
            return;
        }

        // Construct the API call
        apiFetch({
            path: '/zolo/v1/extensions',
            method: 'POST',
            data: {
                zolo_nonce: zoloBlocks?.zolo_nonce,
                updates, // Send the array of updates
            },
        })
            .then((response) => {
                // Update the local extensions state with the fresh data
                setExtensions(response);
                // Clear the extensions to be updated state
                setExtensionsTobeUpdated({});
                // reload the page
                // window.location.reload();
                setNotice(true);

                setTimeout(() => {
                    setNotice(false);
                }, 1000);
            })
            .catch((error) => {
                console.error('API Fetch Error:', error);
            });
    };

    return (
        <>
            {notice && <Notice notice={notice} message={__('Data updated successfully.', 'zoloblocks')} />}
            <div className="zoloblocks-list-tab">
                <div className="zolo-settings-actions">
                    <div className="zolo-settings-head-content zolo-dash-flex-center">
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
                                placeholder={__('Search block', 'zoloblocks')}
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
                                toggleAllExtensions(true);
                            }}
                        >
                            {__('Activate All', 'zoloblocks')}
                        </button>
                        <button
                            className="zolo-deactivated-btn"
                            onClick={() => {
                                toggleAllExtensions(false);
                            }}
                        >
                            {__('Deactivate All', 'zoloblocks')}
                        </button>
                        <button className="zolo-activated-btn zolo-save-changes" onClick={saveChanges}>
                            {__('Save Changes', 'zoloblocks')}
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
                                .sort((a, b) => a.title.localeCompare(b.title))
                                .map((extension, index) => {
                                    return (
                                        <SingleExtension
                                            key={index}
                                            icon={extension?.name}
                                            title={extension?.title}
                                            value={
                                                // extension?.status
                                                extensionsTobeUpdated[extension.name] !== undefined
                                                    ? extensionsTobeUpdated[extension.name]
                                                    : extension.status
                                            }
                                            demo={extension?.demo || ''}
                                            video={extension?.video || ''}
                                            released={extension?.released}
                                            isPro={!!extension?.is_pro}
                                            onClick={() => {
                                                handleExtensionClick(extension.name);
                                            }}
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
                <div className="zolo-settings-footer">
                    <div className="zolo-settings-footer-inner">
                        <button className="zolo-activated-btn zolo-save-changes" onClick={saveChanges}>
                            {__('Save Changes', 'zoloblocks')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Extensions;
