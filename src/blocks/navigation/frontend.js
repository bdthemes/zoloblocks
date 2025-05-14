document.addEventListener('DOMContentLoaded', () => {
    const navigations = document.querySelectorAll('.wp-block-zolo-navigation');
    navigations.forEach((navigation) => {
        const hamburger = navigation.querySelector('.zolo-navigation-hamburger');
        const navigationWrapper = navigation.querySelector('.zolo-navigation-wrapper');
        const navigationOverlay = navigation.querySelector('.zolo-navigation-overlay');
        const sidebarClose = navigation.querySelector('.zolo-navigation-sidebar-close');
        let timer;
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                navigationWrapper.classList.add('zolo-navigation-open');
                navigationOverlay.classList.add('zolo-navigation-overlay-open');
                navigationWrapper.classList.add('is-menu-active');
            }, 500);
        });

       const zoloNavigationLink = navigation.querySelectorAll('.zolo-navigation-link');
       const navigationItems = navigation.querySelectorAll('.zolo-navigation-item');
       navigationOverlay.addEventListener('click', () => {
           navigationWrapper.classList.remove('zolo-navigation-open');
           navigationOverlay.classList.remove('zolo-navigation-overlay-open');
           navigationItems.forEach((item) => {
               item.classList.remove('zolo-navigation-submenu-open');
           })
           setTimeout(() => {
               navigationWrapper.classList.remove('is-menu-active');
           }, 700);
       });

    zoloNavigationLink.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const currentItem = this.closest('.zolo-navigation-item');
            currentItem.classList.toggle('zolo-navigation-submenu-open');
            currentItem.classList.toggle('submenu-open');
        })
    });
        sidebarClose.addEventListener('click', () => {
            navigationWrapper.classList.remove('zolo-navigation-open');
            navigationOverlay.classList.remove('zolo-navigation-overlay-open');
            setTimeout(() => {
                navigationWrapper.classList.remove('is-menu-active');
            }, 700);
        });
    });
});
