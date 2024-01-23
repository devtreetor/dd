// Script to toggle the hamburger menu
document.getElementById('toggleButton').addEventListener('click', function () {
    document.getElementById('hamburgerMenu').classList.toggle('hidden');
});

document.getElementById('closeButton').addEventListener('click', function () {
    document.getElementById('hamburgerMenu').classList.add('hidden');
});

// Close the menu when a menu item is pressed
var menuItems = document.querySelectorAll('#hamburgerMenu a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            document.getElementById('hamburgerMenu').classList.add('hidden');
        });
    });

// Get the screen width
var screenWidth = window.innerWidth;

// Set the conditional ID based on the screen size
var conditionalID = screenWidth > 768 ? 'newsletter' : 'newsletter-mob';

// Get the anchor element by its ID (replace 'myLink' with the actual ID of your anchor element)
var linkElement = document.getElementById('myLink');

// Set the href attribute based on the conditional ID
linkElement.href = 'index.html?id=#' + conditionalID;