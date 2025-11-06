import { ZoloBaseControl, ZoloSelectControl } from '../../../controls/core-controls';
import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import classNames from 'classnames';
import InnerTemplate from '../../inner-template';
import InnerPageTemplate from '../../page-templates/inner-page-template';
import PreLoader from '../../preloader';
import { STORE_NAME } from '../../store';
import { useRecords, useTags } from '../../utils';
const Content = ({ handleImportTemplate, isLoading }) => {
    const { setFilters } = useDispatch(STORE_NAME);
    const { activeTab, filters } = useSelect((select) => {
        return {
            activeTab: select(STORE_NAME).getActiveTab(),
            filters: select(STORE_NAME).getFilters(),
        };
    }, []);
    const { tags, isResolving, hasResolved, startResolution } = useTags([activeTab]);

    const {
        records,
        isResolving: isResolvingRecords,
        hasResolved: hasResolvedRecords,
        startResolution: startResolutionRecords,
    } = useRecords([
        {
            ...filters,
            per_page: filters?.per_page || 20,
        },
        activeTab,
    ]);

    return (
        <div className="zolo-template-library-content">
            {records && records.length > 0 && (
                <div className="zolo-secondary-head">
                    <div className="secondary-header-item">
                        <div className="secondary-item">
                            <ZoloSelectControl
                                label={__('Sort By :', 'zoloblocks')}
                                options={[
                                    { label: __('Newest', 'zoloblocks'), value: 'DESC' },
                                    { label: __('Oldest', 'zoloblocks'), value: 'ASC' },
                                ]}
                                onChange={(v) => {
                                    setFilters({
                                        order: v,
                                    });
                                }}
                                value={filters?.order || 'DESC'}
                            />
                        </div>

                        <div className="secondary-item zolo-tp-tags-item">
                            <ZoloBaseControl label={__('Popular Tags :', 'zoloblocks')} className="zolo-tags">
                                <div className="tags-wrap">
                                    <div className="tags-btn-wrap">
                                        {tags &&
                                            tags.length > 0 &&
                                            tags.map((tag) => (
                                                <button
                                                    key={tag.slug}
                                                    className={classNames('single-tag', `${filters?.tags === tag?.slug ? 'active' : ''}`)}
                                                    onClick={() => {
                                                        setFilters({
                                                            tags: tag?.slug,
                                                            package_type: '',
                                                            categories: '',
                                                        });
                                                    }}
                                                >
                                                    {tag?.label}
                                                </button>
                                            ))}
                                    </div>
                                    <button
                                        className={classNames('clear-tag', `${filters?.tags !== '' ? 'active' : ''}`)}
                                        onClick={() => {
                                            setFilters({
                                                tags: '',
                                            });
                                        }}
                                    >
                                        <svg
                                            width="64px"
                                            height="64px"
                                            viewBox="0 0 21 21"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#2483ff"
                                            stroke="#2483ff"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                            <g id="SVGRepo_iconCarrier">
                                                <g
                                                    fill="none"
                                                    fillRule="evenodd"
                                                    stroke="#000000"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    transform="matrix(0 1 1 0 2.5 2.5)"
                                                >
                                                    <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />
                                                    <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </ZoloBaseControl>
                        </div>
                    </div>
                </div>
            )}

            {records && records.length > 0 && activeTab !== 'templates' && (
                <InnerTemplate
                    templates={records}
                    handleImportTemplate={handleImportTemplate}
                    type={activeTab}
                    // favIds={favIds}
                    // handleFavTemplate={handleFavTemplate}
                />
            )}
            {records && records.length > 0 && activeTab === 'templates' && (
                <InnerPageTemplate
                    templates={records}
                    handleImportTemplate={handleImportTemplate}
                    type={activeTab}
                    // favIds={favIds}
                    // handleFavTemplate={handleFavTemplate}
                />
            )}

            {records && records?.length >= 20 && (
                <div className="load-more-btn-wrapper">
                    <button
                        className="load-more-btn"
                        onClick={() => {
                            setFilters({
                                ...filters,
                                page: (filters?.page ?? 1) + 1,
                            });
                        }}
                    >
                        {__('Load More', 'zoloblocks')}
                    </button>
                </div>
            )}

            {records && records?.length === undefined && (
                <div className="no-found-item">
                    <h2>{__(`${records?.message}`, 'zoloblocks')}</h2>
                </div>
            )}
            {(isResolvingRecords || isLoading) && <PreLoader />}
        </div>
    );
};

export default Content;
