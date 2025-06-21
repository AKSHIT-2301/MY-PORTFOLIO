<<<<<<< HEAD
function saveEntry(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Message saved successfully!';
            formMessage.style.color = 'green';
            form.reset();
        } else {
            formMessage.textContent = 'Error: Could not save message.';
            formMessage.style.color = 'red';
        }
    })
    .catch(error => {
        formMessage.textContent = 'Error: Please try again later.';
        formMessage.style.color = 'red';
        console.error('Error:', error);
    });
}

function viewEntries() {
    const entriesDiv = document.getElementById('entries');
    entriesDiv.innerHTML = '<p>Messages are sent to the owner via email. Contact the owner for details.</p>';
    entriesDiv.style.display = 'block';
}

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.intro, .project-card, #entries, .clock-calendar').forEach(el => el.classList.toggle('dark-mode'));
    document.querySelector('nav h1').classList.toggle('dark-mode');
    document.querySelectorAll('nav ul li a').forEach(a => a.classList.toggle('dark-mode'));
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('#contact input, #contact textarea').forEach(el => el.classList.toggle('dark-mode'));
});

// Real-time Clock and Calendar (IST)
function updateClock() {
    const clockCalendar = document.getElementById('clock-calendar');
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit', day: '2-digit', month: 'long', year: 'numeric' };
    const time = now.toLocaleString('en-IN', options).replace(',', ' -');
    clockCalendar.textContent = `Current IST: ${time}`;
}
setInterval(updateClock, 1000);
updateClock();

// Electrified Animation on Hover
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('electrified');
    card.addEventListener('mouseover', () => card.classList.add('electrified-hover'));
    card.addEventListener('mouseout', () => card.classList.remove('electrified-hover'));
=======
function saveEntry(event) {
    event.preventDefault();
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Message saved successfully!';
            formMessage.style.color = 'green';
            form.reset();
        } else {
            formMessage.textContent = 'Error: Could not save message.';
            formMessage.style.color = 'red';
        }
    })
    .catch(error => {
        formMessage.textContent = 'Error: Please try again later.';
        formMessage.style.color = 'red';
        console.error('Error:', error);
    });
}

function viewEntries() {
    const entriesDiv = document.getElementById('entries');
    entriesDiv.innerHTML = '<p>Messages are sent to the owner via email. Contact the owner for details.</p>';
    entriesDiv.style.display = 'block';
}

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.intro, .project-card, #entries, .clock-calendar').forEach(el => el.classList.toggle('dark-mode'));
    document.querySelector('nav h1').classList.toggle('dark-mode');
    document.querySelectorAll('nav ul li a').forEach(a => a.classList.toggle('dark-mode'));
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('#contact input, #contact textarea').forEach(el => el.classList.toggle('dark-mode'));
});

// Real-time Clock and Calendar (IST)
function updateClock() {
    const clockCalendar = document.getElementById('clock-calendar');
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit', day: '2-digit', month: 'long', year: 'numeric' };
    const time = now.toLocaleString('en-IN', options).replace(',', ' -');
    clockCalendar.textContent = `Current IST: ${time}`;
}
setInterval(updateClock, 1000);
updateClock();

// Electrified Animation on Hover
document.querySelectorAll('.project-card').forEach(card => {
    card.classList.add('electrified');
    card.addEventListener('mouseover', () => card.classList.add('electrified-hover'));
    card.addEventListener('mouseout', () => card.classList.remove('electrified-hover'));
>>>>>>> b61260b5420e24df710c702a7289b8bb480a7134
});