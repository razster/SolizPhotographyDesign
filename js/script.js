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

   //Button Animation Start (Version 1) by Nathan Soliz.
   const animatedButton = document.getElementById('animatedButton');
   const image = animatedButton.querySelector('img');
   let currentFrame = 1;
   const totalFrames = 60; // Adjust based on your frame count
   const frameRate = 30; // Frame rate in milliseconds
   let animation;

   animatedButton.addEventListener('mouseover', () => {
       clearInterval(animation); // Clear existing interval to restart the animation
       animation = setInterval(() => {
           if (currentFrame >= totalFrames) {
               clearInterval(animation);
           } else {
               currentFrame++;
               image.src = `/assets/images/frame${currentFrame}.png`;
           }
       }, frameRate);
   });

   animatedButton.addEventListener('mouseout', () => {
       clearInterval(animation); // Clear existing interval to reverse the animation
       animation = setInterval(() => {
           if (currentFrame <= 1) {
               clearInterval(animation);
           } else {
               currentFrame--;
               image.src = `/assets/images/frame${currentFrame}.png`;
           }
       }, frameRate);
   });
    
    const aboutLink = document.querySelector('li a[href="about.html"]');
    const banner = document.querySelector('.banner');
    let bannerFrame = 1;
    const bannerTotalFrames = 60; // Adjust based on your frame count for the banner
    let bannerAnimation;

    aboutLink.addEventListener('mouseover', () => {
        clearInterval(bannerAnimation);
        bannerAnimation = setInterval(() => {
            if (bannerFrame >= bannerTotalFrames) {
                clearInterval(bannerAnimation);
            } else {
                bannerFrame++;
                banner.src = `/assets/images/banner/banner${bannerFrame}.png`;
            }
        }, frameRate);
    });

    aboutLink.addEventListener('mouseout', () => {
        clearInterval(bannerAnimation);
        bannerAnimation = setInterval(() => {
            if (bannerFrame <= 1) {
                clearInterval(bannerAnimation);
            } else {
                bannerFrame--;
                banner.src = `/assets/images/banner/banner${bannerFrame}.png`;
            }
        }, frameRate);
    });
});
