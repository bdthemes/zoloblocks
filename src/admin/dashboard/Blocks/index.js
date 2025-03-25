import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import categories from './categories';
import SingleBlock from './single-block';
import Notice from '../notice';

const removeChildBlocks = (blocks) => {
    return blocks.filter((block) => !block.is_child);
};

const Blocks = () => {
    const [notice, setNotice] = useState('');
    const [blockStates, setBlockStates] = useState([]);
    const [blocks, setBlocks] = useState([]);
    const [search, setSearch] = useState('');
    const [blockCategory, setCategory] = useState('all');

    const [blocksTobeUpdated, setBlocksTobeUpdated] = useState({}); // Store block changes

    // fetch blocks
    const fetchBlocks = async () => {
        try {
            const response = await apiFetch({
                path: '/zolo/v1/blocks',
                method: 'GET',
            });
            const newBlocks = removeChildBlocks(response);
            setBlocks(newBlocks);
        } catch (error) {
            console.error('API Fetch Error:', error);
        }
    };

    useEffect(() => {
        fetchBlocks();
    }, []);

    // update block setting for all
    const activateAllBlocks = () => {
        const newUpdates = {};
        const updatedBlocks = blocks.map((block) => {
            const shouldActivate =
                blockCategory === 'all' ||
                (blockCategory === 'others' &&
                    !block.categories.some((category) =>
                        ['slider', 'list', 'gallery', 'social', 'review', 'postCategory'].includes(category)
                    )) ||
                block.categories.some((category) => category === blockCategory);

            if (shouldActivate && !block.status) {
                newUpdates[block.name] = true;
                return { ...block, status: true };
            }
            return block;
        });

        setBlocks(updatedBlocks);
        setBlocksTobeUpdated((prev) => ({ ...prev, ...newUpdates }));
    };

    // update block setting for all
    const deactivateAllBlocks = () => {
        const newUpdates = {};
        const updatedBlocks = blocks.map((block) => {
            const shouldDeactivate =
                blockCategory === 'all' ||
                (blockCategory === 'others' &&
                    !block.categories.some((category) =>
                        ['slider', 'list', 'gallery', 'social', 'review', 'postCategory'].includes(category)
                    )) ||
                block.categories.some((category) => category === blockCategory);

            if (shouldDeactivate && block.status) {
                newUpdates[block.name] = false;
                return { ...block, status: false };
            }
            return block;
        });

        setBlocks(updatedBlocks);
        setBlocksTobeUpdated((prev) => ({ ...prev, ...newUpdates }));
    };

    // Handle block click
    const handleBlockClick = (blockName) => {
        setBlocksTobeUpdated((prev) => {
            const currentStatus = prev[blockName] !== undefined ? prev[blockName] : blocks.find((block) => block.name === blockName).status;
            const updatedStatus = !currentStatus;
            setBlocks((prevBlocks) => prevBlocks.map((block) => (block.name === blockName ? { ...block, status: updatedStatus } : block)));
            return {
                ...prev,
                [blockName]: updatedStatus,
            };
        });
    };

    // Save changes
    const saveChanges = () => {
        // Map the blocks to an array of update objects
        const updates = Object.entries(blocksTobeUpdated).map(([name, status]) => ({
            name,
            status,
        }));

        // If there are no updates, return early
        if (updates.length === 0) {
            return;
        }

        // Construct the API call
        apiFetch({
            path: '/zolo/v1/blocks',
            method: 'POST',
            data: {
                zolo_nonce: zoloBlocks?.zolo_nonce,
                updates, // Send the array of updates
            },
        })
            .then((response) => {
                // Update the local blocks state with the fresh data
                setBlocks(removeChildBlocks(response));
                // Clear the blocks to be updated state
                setBlocksTobeUpdated({});
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
                        <button className="zolo-activated-btn" onClick={activateAllBlocks}>
                            {__('Activate All', 'zoloblocks')}
                        </button>
                        <button className="zolo-deactivated-btn" onClick={deactivateAllBlocks}>
                            {__('Deactivate All', 'zoloblocks')}
                        </button>
                        <button className="zolo-activated-btn zolo-save-changes" onClick={saveChanges}>
                            {__('Save Changes', 'zoloblocks')}
                        </button>
                    </div>
                </div>
                <div className="blocks-filter-buttons">
                    {categories &&
                        categories.map((category, index) => {
                            const totalBlocks = blocks.filter((block) => {
                                if (category.value === 'all') {
                                    return true;
                                } else if (category.value === 'others') {
                                    // calculate total blocks for others category (exclude slider, list, gallery, social, review)
                                    return !block.categories.some((category) =>
                                        ['slider', 'list', 'gallery', 'social', 'review', 'postCategory', 'singlePage'].includes(category)
                                    );
                                }
                                return block.categories.some((cat) => cat === category.value);
                            });
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
                                    <span className="total-blocks">{totalBlocks.length}</span>
                                </button>
                            );
                        })}
                </div>
                <div className="zoloblocks-grid">
                    <div className="zoloblocks-inner-grid">
                        {blocks &&
                            blocks
                                .filter((block) => {
                                    if (blockCategory === 'all') {
                                        return true;
                                    }

                                    if (blockCategory === 'others') {
                                        return !block.categories.some((category) =>
                                            ['slider', 'list', 'gallery', 'social', 'review', 'postCategory', 'singlePage'].includes(
                                                category
                                            )
                                        );
                                    }

                                    return block.categories.some((category) => category === blockCategory);
                                })
                                .filter((block) => {
                                    if (search === '') {
                                        return true;
                                    }
                                    return block.title.toLowerCase().includes(search.toLowerCase());
                                })
                                .map((block, index) => {
                                    return (
                                        <SingleBlock
                                            key={index}
                                            icon={block?.name}
                                            title={block?.title}
                                            value={
                                                blocksTobeUpdated[block.name] !== undefined ? blocksTobeUpdated[block.name] : block.status
                                            }
                                            demo={block?.demo || ''}
                                            video={block?.video || ''}
                                            upcoming={block?.upcoming}
                                            onClick={() => {
                                                handleBlockClick(block.name);
                                            }}
                                            {...(block?.is_pro && {
                                                isPro: true,
                                            })}
                                        />
                                    );
                                })}
                    </div>

                    {
                        // check if no block found on search
                        blocks.length > 0 &&
                            blocks
                                .filter((block) => {
                                    if (blockCategory === 'all') {
                                        return true;
                                    }

                                    if (blockCategory === 'others') {
                                        return !block.categories.some((category) =>
                                            ['slider', 'list', 'gallery', 'social', 'review', 'postCategory', 'singlePage'].includes(
                                                category
                                            )
                                        );
                                    }

                                    return block.categories.some((category) => category === blockCategory);
                                })
                                .filter((block) => {
                                    if (search === '') {
                                        return true;
                                    }
                                    return block.title.toLowerCase().includes(search.toLowerCase());
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

export default Blocks;
