// Removed form validation and submission code

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Separate animations for Skills and Education sections

// Skills section animation
const skillsCards = document.querySelectorAll('.services-sub-cont-1 .service-card');
let currentSkillCard = 0;

function showNextSkillCard() {
    if (skillsCards.length > 0) {
        skillsCards.forEach(card => card.style.opacity = '0');
        currentSkillCard = (currentSkillCard + 1) % skillsCards.length;
        skillsCards[currentSkillCard].style.opacity = '1';
    }
}

// Education section animation
const educationCards = document.querySelectorAll('.services-sub-cont .service-card');
let currentEducationCard = 0;

function showNextEducationCard() {
    if (educationCards.length > 0) {
        educationCards.forEach(card => card.style.opacity = '0');
        currentEducationCard = (currentEducationCard + 1) % educationCards.length;
        educationCards[currentEducationCard].style.opacity = '1';
    }
}

// Initialize animations - start with first card visible in each section
function initializeAnimations() {
    // Skills section
    if (skillsCards.length > 0) {
        skillsCards.forEach((card, index) => {
            card.style.opacity = index === 0 ? '1' : '0';
        });
    }
    
    // Education section
    if (educationCards.length > 0) {
        educationCards.forEach((card, index) => {
            card.style.opacity = index === 0 ? '1' : '0';
        });
    }
}

// Start separate animations only if elements exist
if (skillsCards.length > 0) {
    initializeAnimations();
    setInterval(showNextSkillCard, 2000);
}

if (educationCards.length > 0) {
    setInterval(showNextEducationCard, 2000);
}

// Get the audio element
const bgAudio = document.getElementById('bgAudio');

// Set up the audio but don't autoplay
bgAudio.load();
bgAudio.volume = 0.09; // Set a comfortable low volume
bgAudio.pause(); // Ensure audio is paused initially

// Ensure audio plays when page becomes visible (only if already playing)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && !bgAudio.paused) {
        bgAudio.play().catch(function(error) {
            console.log("Audio resume failed:", error);
        });
    }
});

// Audio toggle functionality
const audioToggle = document.getElementById('audioToggle');
let isPlaying = false;

function toggleAudio() {
    if (!isPlaying) {
        bgAudio.muted = false; // Ensure audio is not muted
        bgAudio.play().then(() => {
            console.log("Audio started successfully");
            audioToggle.textContent = 'Pause Background Music';
            isPlaying = true;
        }).catch(error => {
            console.log("Audio play failed:", error);
        });
    } else {
        bgAudio.pause();
        console.log("Audio paused successfully");
        audioToggle.textContent = 'Play Background Music';
        isPlaying = false;
    }
}

// Add click event listener to the audio toggle button
audioToggle.addEventListener('click', toggleAudio);