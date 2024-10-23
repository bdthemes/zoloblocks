document.addEventListener('DOMContentLoaded', () => {
   const navmenus = document.querySelectorAll('.wp-block-zolo-navmenu');
   navmenus.forEach((navmenu) => {
       const hamburger = navmenu.querySelector('.zolo-nav-menu-hamburger');
       const navmenuWrapper = navmenu.querySelector('.zolo-navmenu-wrapper');
       const navmenuOverlay = navmenu.querySelector('.zolo-navmenu-overlay');
       const sidebarClose = navmenu.querySelector('.zolo-nav-menu-sidebar-close');
       let timer;
       hamburger.addEventListener('click', (e) => {
           e.preventDefault();
           if(timer) clearTimeout(timer);
           timer = setTimeout(() => {
               navmenuWrapper.classList.add('zolo-nav-menu-open');
               navmenuOverlay.classList.add('zolo-nav-menu-overlay-open');
               navmenuWrapper.classList.add('is-menu-active');
           }, 500);
       });

       const submenuArrow = navmenu.querySelectorAll('.zolo-submenu-arrow');
       const navmenuItems = navmenu.querySelectorAll('.zolo-navmenu-item');
       navmenuOverlay.addEventListener('click', () => {
           navmenuWrapper.classList.remove('zolo-nav-menu-open');
           navmenuOverlay.classList.remove('zolo-nav-menu-overlay-open');
           navmenuItems.forEach((item) => {
               item.classList.remove('zolo-navmenu-submenu-open');
           })
           setTimeout(() => {
               navmenuWrapper.classList.remove('is-menu-active');
           }, 700);
       });

       submenuArrow.forEach((arrow) => {
           arrow.addEventListener('click', function (e) {
               e.preventDefault();
               const currentItem = this.closest('.zolo-navmenu-item');
               currentItem.classList.toggle('zolo-navmenu-submenu-open');
           })
       });

       sidebarClose.addEventListener('click', () => {
           navmenuWrapper.classList.remove('zolo-nav-menu-open');
           navmenuOverlay.classList.remove('zolo-nav-menu-overlay-open');
           setTimeout(() => {
               navmenuWrapper.classList.remove('is-menu-active');
           }, 700);
       })
   });
});
