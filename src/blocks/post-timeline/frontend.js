document.addEventListener('DOMContentLoaded', () => {
    // Declare globally
    const pageContentCache = new Map();
    const PAGINATION_WRAP_CLASS = 'zolo-pagination-wrap';
    let paginationType = null;
    let blockName = null;
    let isLoading = false;

    const createPreloader = () => {
        const preloader = document.createElement('div');
        preloader.classList.add('preloader');
        preloader.innerHTML = `<div class="container"><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>`;
        return preloader;
    };

    const fetchContent = async (wrapper, pageNumber, settings, useCache = false) => {
        if (useCache && pageContentCache.has(pageNumber)) {
            const cachedContent = pageContentCache.get(pageNumber);
            wrapper.innerHTML = '';
            wrapper.insertAdjacentHTML('beforeend', cachedContent);
            reinitPaginationListeners();
            return;
        }

        const preloader = createPreloader();
        const itemWrapper = wrapper.querySelector('.zolo-post-timeline-grid');
        const paginationWrap = wrapper.querySelector(`.${PAGINATION_WRAP_CLASS}`);

        if (itemWrapper) {
            itemWrapper.appendChild(preloader);
        }

        try {
            const formData = new FormData();
            formData.append('action', 'zolo_ajax_post_pagination');
            formData.append('pageNumber', pageNumber);
            formData.append('settings', settings);
            formData.append('zolo_nonce', zoloSettings.zolo_nonce);

            const response = await fetch(zoloSettings.ajaxurl, {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                if (useCache) {
                    pageContentCache.set(pageNumber, result.data); // Cache the content
                }

                if (paginationType === 'number') {
                    wrapper.innerHTML = '';
                    wrapper.insertAdjacentHTML('beforeend', result.data);
                    reinitPaginationListeners();
                }

                if (paginationType === 'button' || paginationType === 'scroll') {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = result.data;
                    const postItems = tempDiv.querySelectorAll('.zolo-item');
                    if (postItems.length > 0) {
                        postItems.forEach((postItem) => {
                            itemWrapper.appendChild(postItem);
                        });
                    } else {
                        paginationWrap.innerHTML = '';
                    }
                }
            } else {
                console.error('Failed to fetch content:', result);
            }
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            if (itemWrapper) {
                itemWrapper.removeChild(preloader); // Remove the preloader
            }

            isLoading = false;
        }
    };

    const getPageLink = (href) =>
        href.includes('admin-ajax.php') ? href.match(/admin-ajax.*/)?.[0] || '' : href.match(/\/page\/\d+\//)?.[0] || '';

    const getPageNumber = (link) => {
        const match = link.match(/\d+/);
        return match ? parseInt(match[0], 10) : 1;
    };

    const reinitPaginationListeners = () => {
        const updatedPaginationElements = document.querySelectorAll(`.${PAGINATION_WRAP_CLASS}`);
        updatedPaginationElements.forEach(initPaginationListeners);
    };

    //only form ajax number pagination
    const handlePaginationClick = async (event) => {
        event.preventDefault();

        // Prevent multiple requests when already loading
        if (isLoading) return;

        isLoading = true;

        const href = event.target.getAttribute('href');
        if (!href) return;

        const pageLink = getPageLink(href);
        const pageNumber = getPageNumber(pageLink);

        blockName = event.target.closest(`.${PAGINATION_WRAP_CLASS}`).dataset.blockname;
        paginationType = event.target.closest(`.${PAGINATION_WRAP_CLASS}`).dataset.paginationtype;
        const blockWrapper = event.target.closest(`.wp-block-zolo-${blockName}`);

        if (blockWrapper) {
            const blockSettings = blockWrapper.dataset.attributes;
            await fetchContent(blockWrapper, pageNumber, blockSettings, true);
            isLoading = false;
        }
    };

    const addClickListeners = (elements, handler) => {
        elements.forEach((element) => element.addEventListener('click', handler));
    };

    //only for ajax load more on click pagination
    const handleButtonPagination = (paginationElement) => {
        const button = paginationElement.querySelector('.zolo-pagination-button');

        if (button) {
            let pageNumber = parseInt(button.dataset.pagenumber, 10) || 1;
            button.addEventListener('click', async (event) => {
                event.preventDefault();

                // Prevent multiple requests when already loading
                if (isLoading) return;

                // Set loading state
                isLoading = true;
                button.classList.add('loading');

                pageNumber += 1;

                paginationType = paginationElement.dataset.paginationtype;
                blockName = paginationElement.dataset.blockname;
                const blockWrapper = event.target.closest(`.wp-block-zolo-${blockName}`);

                if (blockWrapper) {
                    const blockSettings = blockWrapper.dataset.attributes;
                    await fetchContent(blockWrapper, pageNumber, blockSettings);
                    // Remove loading state after fetching content
                    isLoading = false;
                    button.classList.remove('loading');
                }
            });
        }
    };
    //only for ajax scroll pagination
    const handleScrollPagination = (paginationElement) => {
        let pageNumber = parseInt(paginationElement.dataset.pagenumber, 10) || 1;
        paginationType = paginationElement.dataset.paginationtype;
        blockName = paginationElement.dataset.blockname;
        const totalPage = paginationElement.dataset.totalpage;

        window.addEventListener('scroll', () => {
            // Prevent multiple requests when already loading
            if (isLoading) return;

            const scrollPosition = window.scrollY + window.innerHeight;
            const documentHeight = document.documentElement.offsetHeight;

            if (scrollPosition >= documentHeight - 200) {
                const blockWrapper = paginationElement.closest(`.wp-block-zolo-${blockName}`);
                if (blockWrapper) {
                    const blockSettings = blockWrapper.dataset.attributes;
                    pageNumber += 1;
                    isLoading = true;
                    if (totalPage >= pageNumber) {
                        fetchContent(blockWrapper, pageNumber, blockSettings);
                    }
                }
            }
        });
    };

    function initPaginationListeners(paginationElement) {
        paginationType = paginationElement.dataset.paginationtype;
        blockName = paginationElement.dataset.blockname;
        switch (paginationType) {
            case 'normal':
                break;
            case 'number':
                addClickListeners(paginationElement.querySelectorAll('a'), handlePaginationClick);
                break;
            case 'button':
                handleButtonPagination(paginationElement);
                break;
            case 'scroll':
                handleScrollPagination(paginationElement);
                break;
        }
    }

    const paginationElements = document.querySelectorAll(`.${PAGINATION_WRAP_CLASS}`);
    paginationElements.forEach(initPaginationListeners);
});
