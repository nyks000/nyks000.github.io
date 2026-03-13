document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const mainImage = document.getElementById("mainImage");
    const questionText = document.getElementById("questionText");
    const buttonsContainer = document.getElementById("buttonsContainer");

    // Hayır butonuna basıldıkça değişecek metinler
    const noTexts = [
        "Emin misin?",
        "Gerçekten mi?",
        "Bir daha düşün...",
        "Lütfen 🥺",
        "Ama çok tatlıyız...",
        "Kalbimi kırıyorsun 💔",
        "İnsafsızlık bu...",
        "Son kararın mı?",
        "Ağlıyorum şu an 😭",
        "Şans bile vermeyecek misin?"
    ];

    let noCount = 0;

    // "Hayır" butonuna basınca olacaklar
    noBtn.addEventListener("click", () => {
        noCount++;
        
        // Hayır butonunun metnini sırayla değiştir
        noBtn.innerText = noTexts[Math.min(noCount - 1, noTexts.length - 1)];
        
        // Evet butonunu %30 büyüt
        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        const newSize = currentSize * 1.3;
        
        const currentPaddingY = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
        const currentPaddingX = parseFloat(window.getComputedStyle(yesBtn).paddingLeft);
        
        yesBtn.style.fontSize = `${newSize}px`;
        yesBtn.style.padding = `${currentPaddingY * 1.2}px ${currentPaddingX * 1.2}px`;
        
        // Belirli bir tıklamadan sonra "Hayır" butonunu tamamen yok et (Tatlı bir mızıkçılık)
        if (noCount > 9) {
            noBtn.style.display = "none";
        }
    });

    // "Evet" butonuna basınca olacaklar
    yesBtn.addEventListener("click", (e) => {
        // Metni güncelle
        questionText.innerHTML = `<span class="highlight" style="font-size:2.5rem;">Yeeey! 🎉</span><br><br><span style="font-size: 1.2rem; font-weight: 600;">O zaman Instagram DM'den mesajını bekliyorum 😊</span>`;
        
        // Butonları gizle
        buttonsContainer.style.display = "none";
        
        // Kutlama Emojileri Fırlat
        createCelebrationHearts(e.clientX, e.clientY);
    });

    // --- Arka Plan Kalpleri Fonksiyonları ---
    
    // 1. Sürekli arkada süzülen kalpler
    function createFloatingHearts() {
        const container = document.getElementById("floatingHearts");
        const emojis = ['❤️', '💖', '💕', '🌸', '✨'];
        
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement("div");
            heart.classList.add("heart-emoji");
            heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Rastgele konum ve animasyon süreleri
            heart.style.left = Math.random() * 100 + "%";
            heart.style.animationDuration = (Math.random() * 5 + 6) + "s";
            heart.style.animationDelay = (Math.random() * 5) + "s";
            heart.style.fontSize = (Math.random() * 15 + 15) + "px";
            
            container.appendChild(heart);
        }
    }

    // 2. Evet'e basılınca Tıklanan Yerden Patlayan Kalpler
    function createCelebrationHearts(x, y) {
        const emojis = ['❤️', '💖', '🥰', '🎉', '✨'];
        
        for (let i = 0; i < 40; i++) {
            const heart = document.createElement("div");
            heart.classList.add("celebration-heart");
            heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            heart.style.left = x + "px";
            heart.style.top = y + "px";
            heart.style.fontSize = (Math.random() * 20 + 20) + "px";
            
            // Rastgele fırlama matematiği
            const angle = Math.random() * Math.PI * 2;
            const velocity = 50 + Math.random() * 300; 
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity - 100;
            
            heart.animate([
                { transform: `translate(0, 0) scale(1)`, opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000 + Math.random() * 1000, // 1-2 saniye arası
                easing: "cubic-bezier(0, .9, .57, 1)",
                fill: "forwards"
            });
            
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2500); // Temizlik
        }
    }

    // Sayfa açıldığında yüzen kalpleri başlat
    createFloatingHearts();
});
