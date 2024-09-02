import { useState, useEffect, useCallback } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

import SingleBlock from './single-block';
import extensions from './extensions.json';
import categories from './categories';

import Notice from '../notice';
import { applyFilters } from '@wordpress/hooks';

let zoloExtensionsInitStatus;
apiFetch({
    path: '/wp/v2/settings',
    method: 'GET',
})
    .then((response) => {
        const { zolo_extensions_settings } = response;
        zoloExtensionsInitStatus = zolo_extensions_settings;
    })
    .catch((error) => console.error('API Fetch Error:', error));

const Extensions = () => {
    const [blockStates, setBlockStates] = useState([]);
    const [blockStatus, setBlockStatus] = useState(zoloExtensionsInitStatus || []);
    const [search, setSearch] = useState('');
    const [blockCategory, setCategory] = useState('all');
    const [notice, setNotice] = useState(false);

    // set notice to false after 3 seconds
    useEffect(() => {
        if (notice) {
            setTimeout(() => {
                setNotice(false);
                blockStatus;
            }, 1000);
        }
    }, [notice]);

    // set blocks list
    useEffect(() => {
        if (extensions.length > 0) {
            setBlockStates(applyFilters('zoloblocks.dashboardExtensions', extensions));
        }
    }, [extensions]);

    // update block setting
    const updateStatus = useCallback(
        (status, block) => {
            const blocksToUpdate = blockStatus.map((blockState) => {
                if (blockState.name === block) {
                    return {
                        ...blockState,
                        status,
                    };
                }
                return blockState;
            });

            apiFetch({
                path: '/wp/v2/settings',
                method: 'POST',
                data: {
                    zolo_nonce: zoloBlocks.zolo_nonce,
                    zolo_extensions_settings: blocksToUpdate,
                },
            })
                .then((response) => {
                    setBlockStatus(response.zolo_extensions_settings);
                })
                .catch((error) => console.error('API Fetch Error:', error));
        },
        [blockStatus]
    );

    // update block setting for all
    const updateStatusForCategory = useCallback(
        (status, category) => {
            const blocksToUpdate = blockStatus.map((blockState) => {
                if (category === 'all') {
                    return {
                        ...blockState,
                        status,
                    };
                }
                if (category === 'others') {
                    if (
                        blockState.categories.some((category) =>
                            ['slider', 'list', 'gallery', 'social', 'review', 'postCategory'].includes(category)
                        )
                    ) {
                        return blockState;
                    }
                }

                if (blockState.categories.some((cat) => cat === category)) {
                    return {
                        ...blockState,
                        status,
                    };
                }

                return blockState;
            });

            apiFetch({
                path: '/wp/v2/settings',
                method: 'POST',
                data: {
                    zolo_nonce: zoloBlocks.zolo_nonce,
                    zolo_extensions_settings: blocksToUpdate,
                },
            })
                .then((response) => {
                    setBlockStatus(response.zolo_extensions_settings);
                })
                .catch((error) => console.error('API Fetch Error:', error));
        },
        [blockStatus]
    );

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
                                updateStatusForCategory(true, blockCategory);
                                setNotice(true);
                            }}
                        >
                            {__('Activate All', 'zoloblocks')}
                        </button>
                        <button
                            className="zolo-deactivated-btn"
                            onClick={() => {
                                updateStatusForCategory(false, blockCategory);
                                setNotice(true);
                            }}
                        >
                            {__('Deactivate All', 'zoloblocks')}
                        </button>
                    </div>
                </div>
                <div className="blocks-filter-buttons">
                    {categories &&
                        categories.map((category, index) => {
                            const totalBlocks = blockStates.filter((blockState) => {
                                if (category.value === 'all') {
                                    return true;
                                }
                                // calculate total blocks for others category (exclude slider, list, gallery, social, review)
                                if (category.value === 'others') {
                                    return !blockState.categories.some((category) =>
                                        ['slider', 'list', 'gallery', 'social', 'review', 'postCategory'].includes(category)
                                    );
                                }
                                return blockState.categories.some((cat) => cat === category.value);
                            }).length;

                            return (
                                <button
                                    key={index}
                                    className={blockCategory === category.value ? 'filter-btn active' : 'filter-btn'}
                                    onClick={() => setCategory(category.value)}
                                >
                                    <span className="zolo-category-wrap">
                                        {category.icon && <span className="category-icon">{category.icon}</span>}
                                        <span>{__(category.title, 'zoloblocks')}</span>
                                    </span>
                                    <span className="total-blocks">{totalBlocks}</span>
                                </button>
                            );
                        })}
                </div>
                {/* <div className="zolo-sidebar-and-blocks-wrap"> */}

                <div className="zoloblocks-grid">
                    <div className="zoloblocks-inner-grid">
                        {blockStates &&
                            blockStates
                                .filter((blockState) => {
                                    if (blockCategory === 'all') {
                                        return true;
                                    }

                                    if (blockCategory === 'others') {
                                        return !blockState.categories.some((category) =>
                                            ['slider', 'list', 'gallery', 'social', 'review', 'postCategory'].includes(category)
                                        );
                                    }

                                    return blockState.categories.some((category) => category === blockCategory);
                                })
                                .filter((blockState) => {
                                    if (search === '') {
                                        return true;
                                    }
                                    return blockState.title.toLowerCase().includes(search.toLowerCase());
                                })
                                .map((blockState, index) => {
                                    const status = blockStatus?.filter((block) => {
                                        return block.name === blockState.name;
                                    });
                                    if (status?.length > 0) {
                                        return (
                                            <SingleBlock
                                                key={index}
                                                icon={blockState.icon}
                                                title={blockState.title}
                                                value={status[0].status}
                                                demo={blockState.demo || ''}
                                                video={blockState.video || ''}
                                                released={blockState.released || false}
                                                onClick={() => {
                                                    updateStatus(!status[0].status, blockState.name);
                                                    setNotice(true);
                                                }}
                                                {...(blockState?.isPro && {
                                                    isPro: true,
                                                })}
                                            />
                                        );
                                    }
                                })}
                    </div>

                    {
                        // check if no block found on search
                        blockStates.length > 0 &&
                            blockStates
                                .filter((blockState) => {
                                    if (blockCategory === 'all') {
                                        return true;
                                    }

                                    if (blockCategory === 'others') {
                                        return !blockState.categories.some((category) =>
                                            ['slider', 'list', 'gallery', 'social', 'review', 'postCategory'].includes(category)
                                        );
                                    }

                                    return blockState.categories.some((category) => category === blockCategory);
                                })
                                .filter((blockState) => {
                                    if (search === '') {
                                        return true;
                                    }
                                    return blockState.title.toLowerCase().includes(search.toLowerCase());
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
                {/* </div> */}
            </div>
        </>
    );
};

export default Extensions;
