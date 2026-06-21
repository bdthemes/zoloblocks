import apiFetch from '@wordpress/api-fetch';
import { useEffect, useMemo, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Upgrade tab — Free vs Pro comparison table and CTA.
 */

/** Stable empty list so hooks that depend on Pro arrays do not invalidate every render. */
const EMPTY_PRO_LIST = [];

const sortByTitle = (a, b) => String(a.title || '').localeCompare(String(b.title || ''), undefined, { sensitivity: 'base' });

const removeChildBlocks = (blocks) => (Array.isArray(blocks) ? blocks.filter((block) => !block.is_child) : []);

/** One list: free + Pro-only items, sorted A–Z (not two separate queues). */
const mergeCompareRows = (freeItems, proItems, freeKeyPrefix, proKeyPrefix) => {
    const rows = [];
    (freeItems || []).forEach((item) => {
        rows.push({
            key: `${freeKeyPrefix}-${item.name}`,
            label: item.title || item.name,
            inFree: true,
            inPro: true,
        });
    });
    (proItems || []).forEach((item) => {
        rows.push({
            key: `${proKeyPrefix}-${item.name}`,
            label: item.title || item.name,
            inFree: false,
            inPro: true,
        });
    });
    rows.sort((a, b) => String(a.label || '').localeCompare(String(b.label || ''), undefined, { sensitivity: 'base' }));
    return rows;
};

/** Included — solid green with white check (pricing-table style). */
const IconYes = () => (
    <svg className="zolo-upgrade-compare-svg zolo-upgrade-compare-svg--yes" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="11" fill="#22c55e" />
        <path d="M6.5 11.25l2.75 2.75L15.65 7.9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/** Not included — red circle + white X (pairs with green IconYes). */
const IconNo = () => (
    <svg className="zolo-upgrade-compare-svg zolo-upgrade-compare-svg--no" xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="11" fill="#ef4444" />
        <path d="M7.25 7.25l7.5 7.5M14.75 7.25l-7.5 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const ComparisonSectionRow = ({ title, meta }) => (
    <tr className="zolo-upgrade-comparison-tr-section">
        <th colSpan={3} scope="colgroup" className="zolo-upgrade-comparison-section-th">
            <span className="zolo-upgrade-comparison-section-title">{title}</span>
            {meta ? <span className="zolo-upgrade-comparison-section-meta">{meta}</span> : null}
        </th>
    </tr>
);

const ComparisonItemRow = ({ label, free, pro, freeLabel, proLabel }) => (
    <tr>
        <th scope="row" className="zolo-upgrade-comparison-feature zolo-upgrade-comparison-item-name">
            {label}
        </th>
        <td className={`zolo-upgrade-comparison-cell ${free ? 'is-yes' : 'is-no'}`}>
            <span className="zolo-upgrade-compare-cell-inner">
                {free ? <IconYes /> : <IconNo />}
                {freeLabel ? <span className="zolo-upgrade-comparison-note">{freeLabel}</span> : null}
                <span className="screen-reader-text">{free ? __('Yes', 'zoloblocks') : __('No', 'zoloblocks')}</span>
            </span>
        </td>
        <td className={`zolo-upgrade-comparison-cell ${pro ? 'is-yes' : 'is-no'}`}>
            <span className="zolo-upgrade-compare-cell-inner">
                {pro ? <IconYes /> : <IconNo />}
                {proLabel ? <span className="zolo-upgrade-comparison-note">{proLabel}</span> : null}
                <span className="screen-reader-text">{pro ? __('Yes', 'zoloblocks') : __('No', 'zoloblocks')}</span>
            </span>
        </td>
    </tr>
);

const ComparisonSpanRow = ({ colSpan, className, children }) => (
    <tr className={className || ''}>
        <td colSpan={colSpan} className="zolo-upgrade-comparison-placeholder-cell">
            {children}
        </td>
    </tr>
);

/**
 * Free vs Pro: one table row per block/extension (long table is OK). Counts on first row of each group.
 */
const UpgradeComparisonTable = ({
    proBlockCount,
    proExtensionCount,
    freeBlockCount,
    freeExtensionCount,
    freeBlocks,
    freeExtensions,
    proBlocks,
    proExtensions,
    listsStatus,
}) => {
    const freeBlocksNote =
        freeBlockCount > 0
            ? sprintf(
                  /* translators: %d: number of parent (non-child) blocks in the free plugin. */
                  __('%d blocks', 'zoloblocks'),
                  freeBlockCount
              )
            : null;
    const freeExtNote =
        freeExtensionCount > 0
            ? sprintf(
                  /* translators: %d: number of extensions registered in the free plugin. */
                  __('%d extensions', 'zoloblocks'),
                  freeExtensionCount
              )
            : null;
    const proCoreNote =
        freeBlockCount > 0 && proBlockCount > 0
            ? sprintf(
                  /* translators: 1: number of free blocks, 2: number of Pro-only blocks. */
                  __('All %1$d free + %2$d Pro blocks', 'zoloblocks'),
                  freeBlockCount,
                  proBlockCount
              )
            : freeBlockCount > 0
              ? sprintf(
                    /* translators: %d: number of free blocks. */
                    __('All %d free blocks', 'zoloblocks'),
                    freeBlockCount
                )
              : proBlockCount > 0
                ? sprintf(
                      /* translators: %d: number of Pro-only blocks. */
                      __('All %d Pro blocks', 'zoloblocks'),
                      proBlockCount
                  )
                : null;
    const proFreeExtNote =
        freeExtensionCount > 0 && proExtensionCount > 0
            ? sprintf(
                  /* translators: 1: free extensions count, 2: Pro-only extensions count. */
                  __('All %1$d free + %2$d Pro extensions', 'zoloblocks'),
                  freeExtensionCount,
                  proExtensionCount
              )
            : freeExtensionCount > 0
              ? sprintf(
                    /* translators: %d: number of free extensions. */
                    __('All %d free extensions', 'zoloblocks'),
                    freeExtensionCount
                )
              : proExtensionCount > 0
                ? sprintf(
                      /* translators: %d: number of Pro-only extensions. */
                      __('All %d Pro extensions', 'zoloblocks'),
                      proExtensionCount
                  )
                : null;
    const simpleRows = [
        {
            key: 'patterns',
            label: __('Patterns, templates & full site editing support', 'zoloblocks'),
            free: true,
            pro: true,
        },
        {
            key: 'updates',
            label: __('Regular plugin updates', 'zoloblocks'),
            free: true,
            pro: true,
        },
        {
            key: 'support',
            label: __('Priority support from the team', 'zoloblocks'),
            free: false,
            pro: true,
        },
    ];

    const mergedBlocks = listsStatus === 'ready' ? mergeCompareRows(freeBlocks, proBlocks, 'b-f', 'b-p') : [];
    const mergedExtensions = listsStatus === 'ready' ? mergeCompareRows(freeExtensions, proExtensions, 'e-f', 'e-p') : [];

    const tbodyNodes = [];

    tbodyNodes.push(
        <ComparisonSectionRow
            key="sec-blocks"
            title={__('Blocks', 'zoloblocks')}
            meta={__('Free and Pro-only blocks in one list, sorted A–Z.', 'zoloblocks')}
        />
    );
    if (listsStatus === 'loading') {
        tbodyNodes.push(
            <ComparisonSpanRow key="blocks-loading" colSpan={3}>
                {__('Loading block names…', 'zoloblocks')}
            </ComparisonSpanRow>
        );
    } else if (listsStatus === 'error') {
        tbodyNodes.push(
            <ComparisonSpanRow key="blocks-err" colSpan={3}>
                {__('Could not load free blocks. Refresh the page or open the Blocks tab.', 'zoloblocks')}
            </ComparisonSpanRow>
        );
    } else if (mergedBlocks.length === 0) {
        tbodyNodes.push(
            <ComparisonSpanRow key="blocks-empty" colSpan={3}>
                {__('No blocks to list.', 'zoloblocks')}
            </ComparisonSpanRow>
        );
    } else {
        mergedBlocks.forEach((row, index) => {
            tbodyNodes.push(
                <ComparisonItemRow
                    key={row.key}
                    label={row.label}
                    free={row.inFree}
                    pro={row.inPro}
                    freeLabel={index === 0 ? freeBlocksNote : null}
                    proLabel={index === 0 ? proCoreNote : null}
                />
            );
        });
    }

    tbodyNodes.push(
        <ComparisonSectionRow
            key="sec-extensions"
            title={__('Extensions', 'zoloblocks')}
            meta={__('Free and Pro-only extensions in one list, sorted A–Z.', 'zoloblocks')}
        />
    );
    if (listsStatus === 'loading') {
        tbodyNodes.push(
            <ComparisonSpanRow key="ext-loading" colSpan={3}>
                {__('Loading extension names…', 'zoloblocks')}
            </ComparisonSpanRow>
        );
    } else if (listsStatus === 'error') {
        tbodyNodes.push(
            <ComparisonSpanRow key="ext-err" colSpan={3}>
                {__('Could not load free extensions. Refresh the page or open the Extensions tab.', 'zoloblocks')}
            </ComparisonSpanRow>
        );
    } else if (mergedExtensions.length === 0) {
        tbodyNodes.push(
            <ComparisonSpanRow key="ext-empty" colSpan={3}>
                {__('No extensions to list.', 'zoloblocks')}
            </ComparisonSpanRow>
        );
    } else {
        mergedExtensions.forEach((row, index) => {
            tbodyNodes.push(
                <ComparisonItemRow
                    key={row.key}
                    label={row.label}
                    free={row.inFree}
                    pro={row.inPro}
                    freeLabel={index === 0 ? freeExtNote : null}
                    proLabel={index === 0 ? proFreeExtNote : null}
                />
            );
        });
    }

    tbodyNodes.push(<ComparisonSectionRow key="sec-other" title={__('Other', 'zoloblocks')} />);
    simpleRows.forEach((row) => {
        tbodyNodes.push(
            <ComparisonItemRow
                key={row.key}
                label={row.label}
                free={row.free}
                pro={row.pro}
                freeLabel={null}
                proLabel={null}
            />
        );
    });

    return (
        <div className="zolo-upgrade-comparison-section">
            <div className="zolo-upgrade-comparison-card">
                <div className="zolo-upgrade-comparison-scroll" role="region" aria-label={__('Feature comparison', 'zoloblocks')}>
                    <table className="zolo-upgrade-comparison-table">
                        <thead>
                            <tr>
                                <th scope="col" className="zolo-upgrade-comparison-th zolo-upgrade-comparison-th--feature">
                                    <span className="zolo-upgrade-comparison-features-label">{__('Features', 'zoloblocks')}</span>
                                </th>
                                <th scope="col" className="zolo-upgrade-comparison-th zolo-upgrade-comparison-th--free">
                                    {__('Free', 'zoloblocks')}
                                </th>
                                <th scope="col" className="zolo-upgrade-comparison-th zolo-upgrade-comparison-th--pro">
                                    <span className="zolo-upgrade-comparison-th-pro-badge">{__('Pro', 'zoloblocks')}</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>{tbodyNodes}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const Upgrade = () => {
    const rawProExt = window?.zoloBlocks?.pro_features?.extensions;
    const rawProBlocks = window?.zoloBlocks?.pro_features?.blocks;
    const proExtensions = Array.isArray(rawProExt) ? rawProExt : EMPTY_PRO_LIST;
    const proBlocks = Array.isArray(rawProBlocks) ? rawProBlocks : EMPTY_PRO_LIST;
    const counter = window?.zoloBlocks?.zolo_counter || {};
    const freeBlockCount = parseInt(counter.total_blocks, 10) || 0;
    const freeExtensionCount = parseInt(counter.total_extensions, 10) || 0;

    const [compareLists, setCompareLists] = useState({ freeBlocks: [], freeExtensions: [] });
    const [listsStatus, setListsStatus] = useState('loading');

    useEffect(() => {
        let cancelled = false;
        const load = async () => {
            setListsStatus('loading');
            try {
                const [blocksRes, extRes] = await Promise.all([
                    apiFetch({ path: '/zolo/v1/blocks', method: 'GET' }),
                    apiFetch({ path: '/zolo/v1/extensions', method: 'GET' }),
                ]);
                if (cancelled) {
                    return;
                }
                const fb = removeChildBlocks(blocksRes).sort(sortByTitle);
                const fe = Array.isArray(extRes) ? [...extRes].sort(sortByTitle) : [];
                setCompareLists({ freeBlocks: fb, freeExtensions: fe });
                setListsStatus('ready');
            } catch (e) {
                if (!cancelled) {
                    setCompareLists({ freeBlocks: [], freeExtensions: [] });
                    setListsStatus('error');
                }
            }
        };
        load();
        return () => {
            cancelled = true;
        };
    }, []);

    const proBlocksSorted = useMemo(() => [...proBlocks].sort(sortByTitle), [proBlocks]);
    const proExtensionsSorted = useMemo(() => [...proExtensions].sort(sortByTitle), [proExtensions]);

    return (
        <div className="zolo-welcome-page-wrap zolo-upgrade-tab">
            <UpgradeComparisonTable
                proBlockCount={proBlocks.length}
                proExtensionCount={proExtensions.length}
                freeBlockCount={freeBlockCount}
                freeExtensionCount={freeExtensionCount}
                freeBlocks={compareLists.freeBlocks}
                freeExtensions={compareLists.freeExtensions}
                proBlocks={proBlocksSorted}
                proExtensions={proExtensionsSorted}
                listsStatus={listsStatus}
            />

            <div className="zolo-welcome-s-k-item support zolo-upgrade-footer-cta" aria-label={__('Call to action', 'zoloblocks')}>
                <div className="zolo-welcome-s-k-inner-item zolo-upgrade-footer-inner">
                    <div className="zolo-welcome-s-k-content">
                        <h2 className="zolo-welcome-s-k-title zolo-upgrade-footer-h">{__('Ready to upgrade?', 'zoloblocks')}</h2>
                        <p className="zolo-welcome-s-k-text">
                            {__('Choose a plan that fits your project and start building today.', 'zoloblocks')}
                        </p>
                    </div>
                </div>
                <div className="zolo-welcome-s-k-btns zolo-upgrade-footer-btns">
                    <a
                        className="zolo-welcome-page-btn zolo-secondary-btn support"
                        href="https://zoloblocks.com/pricing/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {__('Get ZoloBlocks Pro', 'zoloblocks')}
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
            </div>
        </div>
    );
};

export default Upgrade;
