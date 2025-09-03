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

// Dynamic testimonial slider
const testimonials = document.querySelectorAll('.service-card');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials.forEach(card => card.style.opacity = '0');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.opacity = '1';
}

// Change testimonial every 2 seconds
setInterval(showNextTestimonial, 2000);

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