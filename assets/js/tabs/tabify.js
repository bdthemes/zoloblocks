document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.zolo-tabs');

    function tabify(tab) {
        const tabList = tab.querySelector('.tab__list');
        const activeIndex = parseInt(tab.dataset.activeindex, 10) || 0;
        let isInitialSetup = true; // Flag to track if initial setup is complete

        if (tabList) {
            const tabItems = [...tabList.children];
            const tabContent = tab.querySelector('.tab__content');
            const tabContentItems = [...tabContent.children];
            let tabIndex = activeIndex;

            function setTab(index, focus = false) {
                tabItems.forEach((x) => {
                    x.classList.remove('active');
                    x.setAttribute('aria-selected', 'false');
                });
                tabContentItems.forEach((x) => {
                    x.classList.remove('active');
                    x.setAttribute('aria-hidden', 'true');
                });

                tabItems[index].classList.add('active');
                tabItems[index].setAttribute('aria-selected', 'true');
                tabContentItems[index].classList.add('active');
                tabContentItems[index].setAttribute('aria-hidden', 'false');

                if (!isInitialSetup && focus) {
                    tabItems[index].focus();
                }
            }

            function focusNextTab() {
                tabIndex = (tabIndex + 1) % tabItems.length;
                setTab(tabIndex, true);
            }

            function focusPreviousTab() {
                tabIndex = (tabIndex - 1 + tabItems.length) % tabItems.length;
                setTab(tabIndex, true);
            }

            tabItems.forEach((x, index) => {
                x.addEventListener('click', () => setTab(index, true));
                x.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                        focusNextTab();
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                        focusPreviousTab();
                    }
                });
            });

            setTab(tabIndex);
            isInitialSetup = false; // Initial setup complete
            tab.querySelectorAll('.zolo-tabs').forEach((tabContent) => tabify(tabContent));
        }
    }

    tabs.forEach(tabify);
});
