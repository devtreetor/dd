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


//Setting up the Google Sheets url
const scriptURL = 'https://script.google.com/macros/s/AKfycbyMgwq3IdK8F9lZcAK7-WLZTr5DiZ0HjzmahTFOnoL_b8IdVL_K1nl5cidr-Hb32WrFaw/exec';
const scriptURL2 = 'https://script.google.com/macros/s/AKfycbyMDoHo06zAYvp-O4UAWhcvVWj5d7gCdENa1wxMbVvQnik5AUJBIXh_73MQdp-xKO7ssw/exec';

//Targeting the form name
const form1 = document.forms["newsletter-form"]
const form2 = document.forms["newsletter-form2"]
const form3 = document.forms["contact-form1"]
const form4 = document.forms["contact-form2"]

//Adding event listeners to all forms
form1.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form1)})
        .then(response => alert("Form Submitted"))
        .then(() => {window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form2)})
        .then(response => alert("Form Submitted"))
        .then(() => {window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

form3.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form3)})
        .then(response => alert("Form Submitted"))
        .then(() => {window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

form4.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form4)})
        .then(response => alert("Form Submitted"))
        .then(() => {window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})