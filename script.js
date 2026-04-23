document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const screen1 = document.getElementById('screen-1');
    const screen2 = document.getElementById('screen-2');
    const screen3 = document.getElementById('screen-3');
    
    const startBtn = document.getElementById('start-btn');
    const nextMsgBtn = document.getElementById('next-message-btn');
    
    const messageText = document.getElementById('message-text');
    const dots = document.querySelectorAll('.dot');
    
    // --- Messages for the flow ---
    const messages = [
        "Aramızda mesafeler olsa da...",
        "Gözlerimi kapattığımda hep yanımdasın.",
        "Seninle geçirdiğim her an çok kıymetli.",
        "Seni çok seviyorum."
    ];
    let currentMessageIndex = 0;

    // --- State Transitions ---
    function switchScreen(fromScreen, toScreen) {
        fromScreen.classList.add('fadeOut');
        setTimeout(() => {
            fromScreen.classList.remove('active', 'fadeOut');
            toScreen.classList.add('active');
            
            // Re-trigger animations if needed
            const texts = toScreen.querySelectorAll('h1, h2, p, .gallery');
            texts.forEach(el => {
                el.style.animation = 'none';
                el.offsetHeight; // trigger reflow
                el.style.animation = null;
                el.classList.add('fadeIn');
            });
            
            // If we're on the final screen, spawn hearts
            if (toScreen === screen3) {
                startHeartParade();
            }
            
        }, 800); // Wait for fadeOut animation
    }

    // Update messages in Screen 2
    function showMessage(index) {
        // Fade out text softly
        messageText.style.opacity = '0';
        messageText.style.transform = 'translateY(10px)';
        messageText.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            messageText.textContent = `"${messages[index]}"`;
            messageText.style.opacity = '1';
            messageText.style.transform = 'translateY(0)';
            
            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }, 500);
    }

    // --- Events ---
    startBtn.addEventListener('click', () => {
        switchScreen(screen1, screen2);
        showMessage(currentMessageIndex);
    });

    nextMsgBtn.addEventListener('click', () => {
        currentMessageIndex++;
        if (currentMessageIndex < messages.length) {
            showMessage(currentMessageIndex);
            if (currentMessageIndex === messages.length - 1) {
                nextMsgBtn.textContent = "Sürprizi Gör";
            }
        } else {
            // Move to Screen 3
            switchScreen(screen2, screen3);
        }
    });

    // --- Background Hearts Animation ---
    function createHeart() {
        const heartContainer = document.getElementById('heart-container');
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        // Random shapes/icons
        const icons = ['❤️', '✨', '💖', '💕'];
        heart.innerText = icons[Math.floor(Math.random() * icons.length)];
        
        // Random position, speed, and size
        const left = Math.random() * 100;
        const duration = 5 + Math.random() * 10; // 5s to 15s
        const scale = 0.5 + Math.random() * 1; // 0.5 to 1.5
        
        heart.style.left = `${left}%`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.transform = `scale(${scale})`; // Initial scale
        
        heartContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // Spawn some initial hearts slowly
    setInterval(createHeart, 2000);
    
    // Faster spawn rate for the final screen
    function startHeartParade() {
        setInterval(createHeart, 600);
    }
});
