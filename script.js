document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    startBackgroundMusic();
});

function startBackgroundMusic() {
    const bgMusic = document.getElementById('backgroundMusic');
    bgMusic.volume = 0.5; // Set volume to 50%
    
    // Try to autoplay music (might require user interaction in some browsers)
    const playMusic = () => {
        bgMusic.play().catch(error => {
            console.log('Autoplay prevented - waiting for user interaction');
        });
    };
    
    // Try initial play
    playMusic();
    
    // Enable music on first user interaction
    document.addEventListener('click', function firstClick() {
        playMusic();
        document.removeEventListener('click', firstClick);
    });
}

function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    for (let i = 0; i < 150; i++) { // Create 30 hearts for the explosion effect
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%'; // Random horizontal position
        heart.style.top = Math.random() * 100 + '%'; // Random vertical position
        heart.style.animationDelay = Math.random() * 2 + 's'; // Random delay for each heart
        document.body.appendChild(heart); // Append to body instead of heartsContainer
        
        // Remove heart after 3 seconds
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

const messages = [
    "Belated Happy Birthday! 🎉 I hope your day was as special as you are! 💖",
    "Sorry I missed your special day! You deserve all the love and happiness! 🌟",
    "Happy Belated Birthday! May this year bring you even more joy! 🎂",
    "Wishing you a wonderful year ahead, even if I'm a bit late! 🎈",
    "Belated wishes for a fabulous birthday! You are amazing! 🌹",
    "I hope your birthday was filled with love and laughter! Happy Belated Birthday! 🎊",
    "Though I'm late, my wishes for you are always on time! Happy Belated Birthday! 💕",
    "You deserve to be celebrated every day! Belated Happy Birthday! 🎁",
    "I may be late, but my love for you is always on time! Happy Belated Birthday! 💞",
    "Cheers to you and all the wonderful things this year will bring! Belated Happy Birthday! 🥳"
];

function showLove() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    const randomIndex = Math.floor(Math.random() * messages.length);
    hiddenMessage.innerHTML = messages[randomIndex]; // Set a random message
    hiddenMessage.classList.add('show'); // Add class to trigger fade-in
    
    // Create confetti effect
    createConfetti();
    
    // Create heart pop-ups
    createHearts();
}

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.classList.add('confetti');
    document.body.appendChild(confettiContainer);

    // Increase the number of confetti pieces
    for (let i = 0; i < 150; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        // Randomize colors for confetti pieces
        const colors = ['#ff4081', '#ff5a5a', '#ff8e8e', '#ffb3b3', '#ffcccb', '#ffcc00', '#ff6600', '#ff3399'];
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Randomize position and animation duration for a more dynamic effect
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.animationDuration = (Math.random() * 2 + 2) + 's'; // Random duration between 2s and 4s
        confettiContainer.appendChild(confettiPiece);
    }

    // Remove confetti after a few seconds
    setTimeout(() => {
        confettiContainer.remove();
    }, 3000);
}

function setupEventListeners() {
    const surpriseButton = document.getElementById('surpriseButton');
    
    surpriseButton.addEventListener('click', showLove);
    
    // Volume control
    document.getElementById('volume').addEventListener('input', function() {
        const bgMusic = document.getElementById('backgroundMusic');
        bgMusic.volume = this.value;
    });
}