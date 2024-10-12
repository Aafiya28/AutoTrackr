const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.ul-list');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const navLinksItems = document.querySelectorAll('.nav-link');

navLinksItems.forEach((link) => {
    link.addEventListener('click', function() {

    navLinksItems.forEach((item) => item.classList.remove('active'));

    this.classList.add('active');
    });
});

const notificationIcon = document.querySelector('.material-symbols-outlined.notifications');

notificationIcon?.addEventListener('click', () => {
    alert('You have no new notifications.');
});

const profileIcon = document.querySelector('.material-symbols-outlined.account_circle');

profileIcon?.addEventListener('click', () => {
  window.location.href = '/profile'; //
});

// Main

const getStartedBtn = document.querySelector('.btn:nth-child(1)');
const bookServiceBtn = document.querySelector('.btn:nth-child(2)');

getStartedBtn.addEventListener('click', () => {
    window.location.href = '/register';
});


bookServiceBtn.addEventListener('click', () => {
    alert('Redirecting to the service booking page...');
    window.location.href = '/book-service';
});

const pricingBoxes = document.querySelectorAll('.box');

pricingBoxes.forEach((box) => {
    box.addEventListener('click', () => {
        pricingBoxes.forEach((b) => b.classList.remove('selected'));
        box.classList.add('selected');
    });
});

const style = document.createElement('style');
style.innerHTML = `
    .selected {
        border: 3px solid #000; /* Highlight with a bold border */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(1.05); /* Slight zoom effect */
    }
`;
document.head.appendChild(style);

// Footer Part

const thanksHeading = document.querySelector('.heading');
thanksHeading.addEventListener('click', () => {
    alert('Thank you for visiting AutoTrackr! We appreciate your support.');
});

const phoneNumber = '+91-9876543210';
const email = 'support@autotrackr.com';
const contactPhone = document.querySelector('.phone-email p:nth-child(2)');
const contactEmail = document.querySelector('.phone-email p:nth-child(3)');


contactPhone.textContent = `Phone: ${phoneNumber}`;
contactEmail.textContent = `Email: ${email}`;

const mapSection = document.querySelector('.map');
const mapToggleBtn = document.createElement('button');
mapToggleBtn.textContent = 'Toggle Map';
mapToggleBtn.classList.add('btn', 'bg-color1', 'f-family1', 'f-color1');
mapSection.insertAdjacentElement('beforebegin', mapToggleBtn);

mapToggleBtn.addEventListener('click', () => {
    mapSection.classList.toggle('hidden');
});

const style = document.createElement('style');
style.innerHTML = `
    .hidden {
        display: none;
    }
`;
document.head.appendChild(style);
