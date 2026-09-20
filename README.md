# DerinGPT v0.1 🤖

> **Yapay Zeka Destekli Minimalist Cevap Motoru**  
> Derin ile sohbeti simüle eden, 1 kelimelik cevap uzmanı brutal troll web uygulaması.

![DerinGPT Preview](https://img.shields.io/badge/Durum-Çok_Konuşuyor-emerald?style=for-the-badge)
![He Oranı](https://img.shields.io/badge/'He'_Oranı-%2589-blue?style=for-the-badge)
![Ex Potansiyeli](https://img.shields.io/badge/Kavga_Potansiyeli-%2599-rose?style=for-the-badge)

---

## ⚡ Özellikler

- **Ultra-Clean Minimalist Dark Mode**: Zinc/Slate koyu renk paleti, cam efektleri (glassmorphism) ve Inter tipografisi.
- **Gerçekçi 400ms Gecikme**: Derin'in mesajı okuyup düşünmeden 400 milisaniye içinde yapıştırdığı "yazıyor..." animasyonu.
- **Matematiksel Dağılım (%50 'he')**:
  - `%50` ihtimalle: `he`
  - Kalan `%50` ihtimalle: `heya`, `tabi`, `uok`, `sarjim bitiyo`, `OAYWUAHHA`, `patates kziartmasi`, `eve giroyofum`.
- **Canlı Enerji Tüketim Raporu**:
  - *Harcanan Harf Sayısı* (Canlı sayaç)
  - *'He' Oranı* (Dinamik yüzde)
  - *Sohbeti Ayakta Tutma Çabası* (`%0`)
  - *Ex & Kavga Potansiyeli* (`%99`)
- **Kota Uyarı Bildirimi**: Rapora tıklandığında veya kota dolduğunda bildirim toast'u.
- **Web Audio API**: Dışarıdan dosya yüklemeden çalışan tarayıcı içi nostaljik bildirim sesleri (sessize alma seçeneğiyle).
- **Sıfır Bağımlılık (Zero-Config)**: Tek bir `index.html` dosyası. Node.js, build tool veya bundle gerektirmez.

---

## 🚀 GitHub Pages ile Yayına Alma (2 Adımda)

1. Bu depoyu GitHub'a gönderin (push edin):
   ```bash
   git add .
   git commit -m "feat: DerinGPT v0.1 yayında"
   git push origin main
   ```
2. GitHub deponuzun **Settings > Pages** sekmesine gidin:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `root` seçin ve **Save** butonuna tıklayın.
   - 1-2 dakika içinde `https://<kullanici-adiniz>.github.io/derin/` adresinde canlıya geçecektir!

---

## 💻 Yerelde Çalıştırma

Herhangi bir tarayıcıda doğrudan `index.html` dosyasını açmanız yeterlidir. Ya da yerel bir HTTP sunucusu açmak için:

```bash
# Python ile:
python -m http.server 3000

# Veya npx ile:
npx serve .
```

ve tarayıcınızda `http://localhost:3000` adresine gidin.
