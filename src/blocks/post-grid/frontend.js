document.addEventListener('DOMContentLoaded', () => {
  const pageContentCache = new Map();
  const fetchContent = async (wrapper, pageNumber, settings,useCache=false) => {

    if (useCache && pageContentCache.has(pageNumber)) {
      const cachedContent = pageContentCache.get(pageNumber);
      wrapper.innerHTML = '';
      wrapper.insertAdjacentHTML('beforeend', cachedContent);
      reinitPaginationListeners();
      return;
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

        if(useCache){
          // Cache the content for this page number
          pageContentCache.set(pageNumber, result.data);
        }

        wrapper.innerHTML = '';
        wrapper.insertAdjacentHTML('beforeend', result.data);
        reinitPaginationListeners();
      } else {
        console.error('Failed to fetch content:', result);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const getPageLink = href => href.includes('admin-ajax.php') ? href.match(/admin-ajax.*/)?.[0] || '' : href.match(/\/page\/\d+\//)?.[0] || '';

  const getPageNumber = link => {
    const match = link.match(/\d+/);
    return match ? parseInt(match[0], 10) : 1;
  };

  const reinitPaginationListeners = () => {
    const updatedPaginationElements = document.querySelectorAll('.zolo-pagination-wrap');
    updatedPaginationElements.forEach(initPaginationListeners);
  };

  //for only number pagination
  const handlePaginationClick = event => {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    if (!href) return;

    const pageLink = getPageLink(href);
    const pageNumber = getPageNumber(pageLink);
    const blockWrapper = event.target.closest('.wp-block-zolo-post-grid');

    if (blockWrapper) {
      const blockSettings = blockWrapper.dataset.attributes;
      fetchContent(blockWrapper, pageNumber, blockSettings,true);
    }
  };

  // Define addClickListeners before using it
  const addClickListeners = (elements, handler) => {
    elements.forEach(element => element.addEventListener('click', handler));
  };

  // Regular function to handle button-based pagination (Load More button)
  const handleButtonPagination = paginationElement => {
    const button = paginationElement.querySelector('.zolo-pagination-button');
    if (button) {
      let pageNumber = parseInt(button.dataset.pagenumber, 10) || 1;
      button.addEventListener('click', event => {
        pageNumber += 1;
        const blockWrapper = event.target.closest('.wp-block-zolo-post-grid');
        if (blockWrapper) {
          const blockSettings = blockWrapper.dataset.attributes;
          fetchContent(blockWrapper, pageNumber, blockSettings);
        }
      });
    }
  };

  function initPaginationListeners(paginationElement) {
    const paginationType = paginationElement.dataset.paginationtype;
    switch (paginationType) {
      case 'number':
        addClickListeners(paginationElement.querySelectorAll('a'), handlePaginationClick);
        break;
      case 'button':
        handleButtonPagination(paginationElement);
        break;
    }
  }

  const paginationElements = document.querySelectorAll('.zolo-pagination-wrap');
  paginationElements.forEach(initPaginationListeners);
});
