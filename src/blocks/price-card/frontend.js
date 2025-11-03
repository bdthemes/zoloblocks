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
        const footerText = card.querySelector('.zolo-note');
        const button = card.querySelector('.zolo-button');

        if (!toggleBtn || !priceValue || !toggleLabels.length) return;

        // Get toggle style from data attribute
        const toggleStyle = card.dataset.toggleStyle || 'classicToggle';

        // Apply toggle style class if not already present
        if (!toggleBtn.classList.contains(`zolo-switch-${toggleStyle}`)) {
            toggleBtn.className = `zolo-switch zolo-switch-${toggleStyle}`;
        }

        // Get data attributes including button toggle
        const buttonToggle = card.dataset.buttonToggle === 'true';
        
        const primaryData = {
            priceTitle: card.dataset.primaryPriceTitle || '',
            prefix: card.dataset.primaryPrefix || '',
            price: card.dataset.primaryPrice || '',
            suffix: card.dataset.primarySuffix || '',
            showOriginal: card.dataset.primaryShowOriginal === 'true',
            originalPrice: card.dataset.primaryOriginalPrice || '',
            description: card.dataset.primaryDescription || '',
            footerText: card.dataset.primaryFooterText || '',
            buttonText: buttonToggle ? (card.dataset.primaryButtonText || '') : (card.dataset.buttonText || ''),
            buttonUrl: buttonToggle ? (card.dataset.primaryButtonUrl || '#') : (card.dataset.buttonUrl || '#'),
            buttonNewTab: buttonToggle ? (card.dataset.primaryButtonNewTab === 'true') : (card.dataset.buttonNewTab === 'true'),
        };

        const secondaryData = {
            priceTitle: card.dataset.secondaryPriceTitle || '',
            prefix: card.dataset.secondaryPrefix || '',
            price: card.dataset.secondaryPrice || '',
            suffix: card.dataset.secondarySuffix || '',
            showOriginal: card.dataset.secondaryShowOriginal === 'true',
            originalPrice: card.dataset.secondaryOriginalPrice || '',
            description: card.dataset.secondaryDescription || '',
            footerText: card.dataset.secondaryFooterText || '',
            buttonText: buttonToggle ? (card.dataset.secondaryButtonText || '') : (card.dataset.buttonText || ''),
            buttonUrl: buttonToggle ? (card.dataset.secondaryButtonUrl || '#') : (card.dataset.buttonUrl || '#'),
            buttonNewTab: buttonToggle ? (card.dataset.secondaryButtonNewTab === 'true') : (card.dataset.buttonNewTab === 'true'),
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
            if (footerText) footerText.textContent = data.footerText;

            // Handle original price
            if (originalPriceEl) {
                if (data.showOriginal && data.originalPrice) {
                    originalPriceEl.textContent = data.prefix + data.originalPrice;
                    originalPriceEl.style.display = '';
                } else {
                    originalPriceEl.style.display = 'none';
                }
            }

            // Handle button updates
            if (button) {
                button.textContent = data.buttonText;
                button.href = data.buttonUrl;
                button.target = data.buttonNewTab ? '_blank' : '_self';
                button.rel = data.buttonNewTab ? 'noopener noreferrer' : '';
            }
        }

        // Toggle click handler
        toggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            isSecondary = !isSecondary;

            // Update switch state
            toggleBtn.classList.toggle('on');

            // Toggle secondary-active class for styling
            card.classList.toggle('secondary-active');

            // Update active labels
            toggleLabels[0].classList.toggle('zolo-toggle-active');
            toggleLabels[1].classList.toggle('zolo-toggle-active');

            // Update content
            updateContent(isSecondary ? secondaryData : primaryData);
        });
    });
});
