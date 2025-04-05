const button = document.querySelector('button'); // Select the button
const popup = document.getElementsByClassName('popup-container')[0]; // Get the first element with the class 'popup'
const closeIcon = document.getElementsByClassName('close-icon')[0]; // Get the first element with the class 'close-icon'
const overlay = document.getElementsByClassName('overlay')[0]; // Get the first element with the class 'close-icon'

// Add click event to the button to show the popup
button.addEventListener('click', () => {
    if (popup) {
        popup.classList.add('popup-open'); // Add the 'open' class
    } else {
        console.error('Popup element not found!');
    }
});

// Add click event to the close icon to hide the popup
closeIcon.addEventListener('click', () => {
    if (popup) {
        popup.classList.remove('popup-open'); // Remove the 'open' class
    } else {
        console.error('Popup element not found!');
    }
});

overlay.addEventListener('click', () => {
    if (popup) {
        popup.classList.remove('popup-open'); // Remove the 'open' class
    } else {
        console.error('Popup element not found!');
    }
});

