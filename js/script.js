document.addEventListener('DOMContentLoaded', () => {
    // Get all the main menu items that have a submenu
    const menuItems = document.querySelectorAll('nav ul li');

    menuItems.forEach(item => {
        item.addEventListener('mouseleave', function() {
            // Get the submenu
            const submenu = this.querySelector('.photography-submenu, .design-submenu');
            if (submenu) {
                submenu.style.opacity = '0'; // Set opacity to 0
                submenu.style.transform = 'translateY(100%)'; // Move submenu off-screen
                submenu.style.visibility = 'hidden';
            }
        });

        item.addEventListener('mouseenter', function() {
            // Get the submenu
            const submenu = this.querySelector('.photography-submenu, .design-submenu');
            if (submenu) {
                submenu.style.opacity = '1'; // Set opacity to 1
                submenu.style.transform = 'translateY(0)'; // Animate submenu sliding up
                submenu.style.visibility = 'visible';
            }
        });
    });
});
