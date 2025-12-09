/* --- LOGIN MODAL İŞLEMLERİ --- */

// Modalı Aç
function openModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Modalı Kapat
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Modal dışına tıklayınca kapatma
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// GİRİŞ SİMÜLASYONU
const loginForm = document.getElementById('loginForm');
if(loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const user = document.getElementById('loginUser').value;
        const pass = document.getElementById('loginPass').value;
        const msg = document.getElementById('loginMsg');

        // Basit bir kontrol (Gerçek projede veritabanı olur)
        if (user === "admin" && pass === "1234") {
            // Başarılı Giriş
            msg.style.display = "block";
            msg.style.color = "var(--gold)";
            msg.innerText = "Giriş Başarılı! Yönlendiriliyorsunuz...";
            
            setTimeout(() => {
                alert("Hoşgeldin Komutan " + user);
                closeModal();
                // Menüdeki GİRİŞ butonunu değiştirelim
                document.querySelector('.btn-login-nav').innerHTML = '<i class="fas fa-user-check"></i> ' + user.toUpperCase();
            }, 1500);
            
        } else {
            // Hatalı Giriş
            msg.style.display = "block";
            msg.innerText = "Hatalı kullanıcı adı veya şifre!";
            
            // Animasyon efekti (sallanma)
            document.querySelector('.modal-box').style.animation = "shake 0.3s";
            setTimeout(() => { document.querySelector('.modal-box').style.animation = "none"; }, 300);
        }
    });
}

// CSS'e shake animasyonu eklemek için JS ile stil enjekte ediyoruz
const style = document.createElement('style');
style.innerHTML = `
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}`;
document.head.appendChild(style);