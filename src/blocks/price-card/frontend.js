document.addEventListener('DOMContentLoaded', function () {
    // Find all price cart blocks
    const priceCards = document.querySelectorAll('.zolo-pricing-card');

    priceCards.forEach(function (card) {
        const toggleBtn = card.querySelector('.zolo-switch');
        const priceTitle = card.querySelector('.zolo-price-title');
        const prefix = card.querySelector('.zolo-prefix');
        const priceValue = card.querySelector('.zolo-price-value');
        const suffix = card.querySelector('.zolo-suffix');
        const originalPriceEl = card.querySelector('.zolo-original-value');
        const description = card.querySelector('.zolo-description');
        const toggleLabels = card.querySelectorAll('.zolo-toggle-label');

        if (!toggleBtn || !priceValue || !toggleLabels.length) return;

        // Get data attributes
        const primaryData = {
            priceTitle: card.dataset.primaryPriceTitle || '',
            prefix: card.dataset.primaryPrefix || '',
            price: card.dataset.primaryPrice || '',
            suffix: card.dataset.primarySuffix || '',
            showOriginal: card.dataset.primaryShowOriginal === 'true',
            originalPrice: card.dataset.primaryOriginalPrice || '',
            description: card.dataset.primaryDescription || '',
        };

        const secondaryData = {
            priceTitle: card.dataset.secondaryPriceTitle || '',
            prefix: card.dataset.secondaryPrefix || '',
            price: card.dataset.secondaryPrice || '',
            suffix: card.dataset.secondarySuffix || '',
            showOriginal: card.dataset.secondaryShowOriginal === 'true',
            originalPrice: card.dataset.secondaryOriginalPrice || '',
            description: card.dataset.secondaryDescription || '',
        };

        // Initial state (false = primary, true = secondary)
        let isSecondary = false;

        // Update content function
        function updateContent(data) {
            if (priceTitle) priceTitle.textContent = data.priceTitle;
            if (prefix) prefix.textContent = data.prefix;
            if (priceValue) priceValue.textContent = data.price;
            if (suffix) suffix.textContent = data.suffix;
            if (description) description.textContent = data.description;

            // Handle original price
            if (originalPriceEl) {
                if (data.showOriginal && data.originalPrice) {
                    originalPriceEl.textContent = data.prefix + data.originalPrice;
                    originalPriceEl.style.display = '';
                } else {
                    originalPriceEl.style.display = 'none';
                }
            }
        }

        // Toggle click handler
        toggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            isSecondary = !isSecondary;

            // Update switch state
            toggleBtn.classList.toggle('on');

            // Update active labels
            toggleLabels[0].classList.toggle('zolo-toggle-active');
            toggleLabels[1].classList.toggle('zolo-toggle-active');

            // Update content
            updateContent(isSecondary ? secondaryData : primaryData);
        });
    });
});
