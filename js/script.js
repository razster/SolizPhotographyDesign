// Listen for the 'DOMContentLoaded' event to ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all list items within a 'nav' and 'ul' element, assuming these are your menu items
    const menuItems = document.querySelectorAll('nav ul li');
    
    // Iterate over each menu item
    menuItems.forEach(item => {
        // Add an event listener for 'mouseleave' event to hide the submenu
        item.addEventListener('mouseleave', function() {
            // Select the submenu with specific classes within the current item
            const submenu = this.querySelector('.photography-submenu, .design-submenu');
            if (submenu) {
                // Set the submenu's opacity to 0, move it off-screen, and hide it
                submenu.style.opacity = '0';
                submenu.style.transform = 'translateY(100%)';
                submenu.style.visibility = 'hidden';
            }
        });

        // Add an event listener for 'mouseenter' event to show the submenu
        item.addEventListener('mouseenter', function() {
            // Select the submenu with specific classes within the current item
            const submenu = this.querySelector('.photography-submenu, .design-submenu');
            if (submenu) {
                // Set the submenu's opacity to 1, align it properly, and make it visible
                submenu.style.opacity = '1';
                submenu.style.transform = 'translateY(0)';
                submenu.style.visibility = 'visible';
            }
        });
    });

    // Initialize animation for a button with 'animatedButton' ID
    const animatedButton = document.getElementById('animatedButton');
    const image = animatedButton.querySelector('img');
    let currentFrame = 1;
    const totalFrames = 60; // Total number of image frames for the animation
    const frameRate = 30; // Time in milliseconds between frame changes
    let animation;

    // Add mouseover event to start the button animation
    animatedButton.addEventListener('mouseover', () => {
        clearInterval(animation); // Clear any existing animation intervals
        animation = setInterval(() => {
            // Increment the frame count and update the image source accordingly
            if (currentFrame >= totalFrames) {
                clearInterval(animation); // Stop animation if the last frame is reached
            } else {
                currentFrame++;
                image.src = `/assets/images/frame${currentFrame}.png`;
            }
        }, frameRate);
    });

    // Add mouseout event to reverse the button animation
    animatedButton.addEventListener('mouseout', () => {
        clearInterval(animation); // Clear any existing animation intervals
        animation = setInterval(() => {
            // Decrement the frame count and update the image source accordingly
            if (currentFrame <= 1) {
                clearInterval(animation); // Stop animation if the first frame is reached
            } else {
                currentFrame--;
                image.src = `/assets/images/frame${currentFrame}.png`;
            }
        }, frameRate);
    });

    // Initialize animation for a banner linked to an 'about' page
    const aboutLink = document.querySelector('li a[href="about.html"]');
    const banner = document.querySelector('.banner');
    let bannerFrame = 1;
    let fpsFolder = "60fps"; // Folder containing the frames based on screen refresh rate
    let animationFrameRate = 1000 / 60; // Animation frame rate based on screen refresh rate
    let bannerAnimation;
    const bannerTotalFrames = 60; // Total number of image frames for the banner animation
   
    // Adjust animation parameters based on the screen's refresh rate
    function adjustForRefreshRate() {
        const refreshRate = window.screen.refreshRate || 60; // Default to 60 if refresh rate is not detected
        if (refreshRate >= 120) {
            fpsFolder = "120fps";
            animationFrameRate = 1000 / 120;
        } else {
            fpsFolder = "60fps";
            animationFrameRate = 1000 / 60;
        }
    }
   
    adjustForRefreshRate();
   
    // Update banner image based on the current frame
    function updateBannerImage(increment) {
        bannerFrame += increment;
        if (bannerFrame < 1) bannerFrame = 1;
        if (bannerFrame > bannerTotalFrames) bannerFrame = bannerTotalFrames;
        banner.src = `/assets/images/banner/${fpsFolder}/banner${bannerFrame}.png`;
    }
   
    // Start banner animation on mouseover
    aboutLink.addEventListener('mouseover', () => {
        clearInterval(bannerAnimation); // Clear any existing animation intervals
        bannerAnimation = setInterval(() => {
            // Increment the frame and update the banner image
            if (bannerFrame >= bannerTotalFrames) {
                clearInterval(bannerAnimation); // Stop animation if the last frame is reached
            } else {
                updateBannerImage(1);
            }
        }, animationFrameRate);
    });

    // Reverse banner animation on mouseout
    aboutLink.addEventListener('mouseout', () => {
        clearInterval(bannerAnimation); // Clear any existing animation intervals
        bannerAnimation = setInterval(() => {
            // Decrement the frame and update the banner image
            if (bannerFrame <= 1) {
                clearInterval(bannerAnimation); // Stop animation if the first frame is reached
            } else {
                updateBannerImage(-1);
            }
        }, animationFrameRate);
    });
});
