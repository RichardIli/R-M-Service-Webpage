// Map JS
// Create a map centered at coordinates (51.505, -0.09) with a zoom level of 13
var map = L.map('map').setView([48.8584, 2.2945], 13);

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Add a marker at (51.5, -0.09) with a popup
L.marker([48.8584, 2.2945]).addTo(map)
    .bindPopup("<b>R&M Service Office</b>")
    .openPopup();


// NAvbar JS
// Get the navbar element
const navbar = document.getElementById('navBar');//This is how to make a reference from HTML

// navBar under line design when scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        navbar.style.borderBottom = '1px solid grey'
    } else {
        navbar.style.borderBottom = '1px solid transparent'
    }
});

// Message Sent pop-up
function messageSent() {
    alert("Message Sent");
}