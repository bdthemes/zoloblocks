import { useState, useEffect, useCallback } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { __ } from '@wordpress/i18n';

import SingleBlock from './single-block';
import blocks from './blocks.json';
import categories from './categories';

import Notice from '../notice';

let zoloBlocksInitStatus;
apiFetch({
    path: '/wp/v2/settings',
    method: 'GET',
})
    .then((response) => {
        const { zolo_blocks_settings } = response;
        zoloBlocksInitStatus = zolo_blocks_settings;
    })
    .catch((error) => console.error('API Fetch Error:', error));

const Blocks = () => {
    const [blockStates, setBlockStates] = useState([]);
    const [blockStatus, setBlockStatus] = useState(zoloBlocksInitStatus || []);
    const [search, setSearch] = useState('');
    const [blockCategory, setCategory] = useState('all');
    const [notice, setNotice] = useState(false);

    // set notice to false after 3 seconds
    useEffect(() => {
        if (notice) {
            setTimeout(() => {
                setNotice(false);
            }, 1000);
        }
    }, [notice]);

    // set blocks list
    useEffect(() => {
        if (blocks.length > 0) {
            blocks.sort((a, b) => a.title.localeCompare(b.title));
            setBlockStates(blocks);
        }
    }, [blocks]);

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
                    zolo_blocks_settings: blocksToUpdate,
                },
            })
                .then((response) => {
                    setBlockStatus(response.zolo_blocks_settings);
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
                    zolo_blocks_settings: blocksToUpdate,
                },
            })
                .then((response) => {
                    setBlockStatus(response.zolo_blocks_settings);
                })
                .catch((error) => console.error('API Fetch Error:', error));
        },
        [blockStatus]
    );

    return (
        <>
            {notice && <Notice notice={notice} message={__('Data updated successfully.', 'zoloblocks')} />}
            <div className="zoloblocks-list-tab">
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
                <div className="zolo-sidebar-and-blocks-wrap">
                    <div className="zolo-settings-actions">
                        <div className="search-field">
                            <svg
                                className="zolo-serach-icon"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
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
                                                    onClick={() => {
                                                        updateStatus(!status[0].status, blockState.name);
                                                        setNotice(true);
                                                    }}
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
                                            className="zolo-welcome-page-btn zolo-primary-btn"
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
            </div>
        </>
    );
};

export default Blocks;
