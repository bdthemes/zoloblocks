const { DisplayZoloIcon } = window.zoloModule;
const previewPaginationNumbers = (
    totalPage,
    itemsBothSides,
    currentPage,
    truncate = false,
    paginationType,
    paginationNextPrevType,
    previousText,
    nextText,
    prevIcon,
    nextIcon
) => {
    const paginationItems = [];
    previousText = paginationNextPrevType?.includes('text') ? previousText : '';
    nextText = paginationNextPrevType?.includes('text') ? nextText : '';

    const createPaginationItem = (content, type, key, props = {}) => {
        return { content, type, key, ...props };
    };

    const addPaginationItem = (pageNumber, active = false) => {
        const type = active ? 'span' : 'a';
        const className = active ? 'page-numbers current' : 'page-numbers';
        paginationItems.push(createPaginationItem(pageNumber, type, pageNumber.toString(), { className }));
    };

    if (totalPage > 1 && paginationType?.includes('previous-next')) {
        paginationItems.push(createPaginationItem(previousText, 'a', 'previous', { className: 'page-numbers prev', children: <DisplayZoloIcon icon={nextIcon} /> }));
    }

    if (paginationType?.includes('number')) {
        addPaginationItem(1, currentPage === 1);
        if (truncate) {
            if (currentPage - itemsBothSides > 2) {
                paginationItems.push(createPaginationItem('...', 'span', 'ellipsis-start', { className: 'page-numbers dots dots-start' }));
            }

            const start = Math.max(2, currentPage - itemsBothSides);
            const end = Math.min(totalPage - 1, currentPage + itemsBothSides);

            for (let i = start; i <= end; i++) {
                addPaginationItem(i, i === currentPage);
            }

            if (currentPage + itemsBothSides < totalPage - 1) {
                paginationItems.push(createPaginationItem('...', 'span', 'ellipsis-end', { className: 'page-numbers dots dots-end' }));
            }
        } else {
            for (let i = 2; i <= totalPage - 1; i++) {
                addPaginationItem(i, i === currentPage);
            }
        }
    }

    if (totalPage > 1 && paginationType !== 'previous-next') {
        addPaginationItem(totalPage, currentPage === totalPage);
    }

    if (totalPage > 1 && paginationType?.includes('previous-next')) {
        paginationItems.push(createPaginationItem(nextText, 'a', 'next', { className: 'page-numbers next', children: <DisplayZoloIcon icon={prevIcon} /> }));
    }

    return (
        <>
            {paginationItems.map(item =>
                <item.type key={item.key} className={item.className}>
                    {item?.key === 'previous' && paginationNextPrevType.includes('icon') ? item.children : ''}
                    {item.content}
                    {item?.key === 'next' && paginationNextPrevType.includes('icon') ? item.children : ''}
                </item.type>
            )}
        </>
    );
};

export default previewPaginationNumbers;