document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');

    function tabify(tab) {
        const tabList = tab.querySelector('.tab__list');

        if (tabList) {
            const tabItems = [...tabList.children];
            const tabContent = tab.querySelector('.tab__content');
            const tabContentItems = [...tabContent.children];
            let tabIndex = 0;

            tabIndex = tabItems.findIndex((item) => [...item.classList].indexOf('is--active') > -1);

            tabIndex > -1 ? (tabIndex = tabIndex) : (tabIndex = 0);

            function setTab(index) {
                tabItems.forEach((x) => {
                    x.classList.remove('is--active');
                    x.setAttribute('aria-selected', 'false');
                });
                tabContentItems.forEach((x) => {
                    x.classList.remove('is--active');
                    x.setAttribute('aria-hidden', 'true');
                });

                tabItems[index].classList.add('is--active');
                tabItems[index].setAttribute('aria-selected', 'true');
                tabContentItems[index].classList.add('is--active');
                tabContentItems[index].setAttribute('aria-hidden', 'false');
                tabItems[index].focus();
            }

            function focusNextTab() {
                tabIndex = (tabIndex + 1) % tabItems.length;
                setTab(tabIndex);
            }

            function focusPreviousTab() {
                tabIndex = (tabIndex - 1 + tabItems.length) % tabItems.length;
                setTab(tabIndex);
            }

            tabItems.forEach((x, index) => {
                x.addEventListener('click', () => setTab(index));
                x.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                        focusNextTab();
                    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                        focusPreviousTab();
                    }
                });
            });

            setTab(tabIndex);
            tab.querySelectorAll('.tab').forEach((tabContent) => tabify(tabContent));
        }
    }

    tabs.forEach(tabify);
});
