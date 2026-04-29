# FrozzyBite - Digital Storefront & WhatsApp Ordering Web App ❄️

Selamat datang di **FrozzyBite**! Terima kasih telah membeli template website toko online (digital storefront) ini. Website ini dirancang khusus untuk bisnis makanan (terutama frozen food), F&B, atau UMKM yang ingin memiliki katalog produk profesional dengan sistem pemesanan langsung terintegrasi ke WhatsApp.

## ✨ Fitur Utama

- **Desain Modern & Responsif**: Tampilan premium (Glassmorphism, Light/Dark Mode) yang memukau dan dioptimalkan untuk perangkat mobile (Mobile-First).
- **Katalog Produk Dinamis**: Menampilkan daftar produk dengan harga, deskripsi, dan gambar secara menarik.
- **Sistem Keranjang Belanja**: Pengguna dapat menambahkan produk ke keranjang dan melihat total belanja.
- **Integrasi Checkout WhatsApp**: Pesanan langsung diformat dan dikirim ke nomor WhatsApp bisnis Anda secara otomatis.
- **Kustomisasi Mudah (Single Source of Truth)**: Semua data bisnis, produk, dan pengaturan terpusat di satu file, sehingga sangat mudah diubah tanpa perlu mengerti banyak kode.

## 💻 Teknologi yang Digunakan

- **React.js** (Frontend Library)
- **Vite** (Build Tool & Development Server yang sangat cepat)
- **Vanilla CSS** (Desain kustom tanpa dependensi framework CSS yang berat)

---

## 🚀 Panduan Instalasi (Menjalankan di Komputer Anda)

Untuk menjalankan website ini di komputer lokal Anda, ikuti langkah-langkah berikut:

### Prasyarat
Pastikan Anda sudah menginstal **Node.js** di komputer Anda. Anda bisa mengunduhnya di [nodejs.org](https://nodejs.org/).

### Langkah-langkah
1. Ekstrak file zip/folder FrozzyBite yang telah Anda unduh.
2. Buka terminal atau command prompt, lalu arahkan ke folder FrozzyBite tersebut.
3. Instal semua dependensi yang dibutuhkan dengan menjalankan perintah:
   ```bash
   npm install
   ```
4. Setelah proses instalasi selesai, jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
5. Buka browser Anda dan akses URL yang muncul di terminal (biasanya `http://localhost:5173`).

---

## 🛠️ Panduan Kustomisasi (Mengubah Data Bisnis)

Bagian terbaik dari template ini adalah **kemudahan kustomisasi**. Anda TIDAK perlu mengubah banyak file. Semua pengaturan bisnis dan produk berada di satu file yaitu: 

**`src/data/data.js`**

Buka file `src/data/data.js` menggunakan text editor (seperti VS Code atau Notepad++), lalu Anda bisa mengubah data berikut:

### 1. Pengaturan Bisnis (`config`)
```javascript
export const config = {
  businessName: "Nama Bisnis Anda",
  logo: "❄️", // Bisa diganti teks atau emoji
  tagline: "Tagline Bisnis Anda",
  description: "Deskripsi singkat mengenai bisnis Anda.",
  location: "📍 Lokasi Toko Anda",
  whatsappNumber: "628123456789", // PENTING: Ganti dengan nomor WA bisnis Anda (Gunakan format 62...)
  // ... pengaturan lainnya (sosial media, promo, FAQ, testimoni)
};
```
*Pastikan mengubah `whatsappNumber` ke nomor Anda agar pesanan masuk ke WhatsApp Anda.*

### 2. Daftar Produk (`products`)
Anda bisa menambah, menghapus, atau mengubah produk di dalam array `products`:
```javascript
export const products = [
  {
    id: 1,
    name: "Nama Produk",
    price: 25000, // Harga tanpa titik/koma
    image: "URL_GAMBAR_ANDA", // Link gambar produk
    description: "Deskripsi produk...",
    category: "Kategori Produk",
    bestSeller: true, // Ubah jadi false jika bukan produk unggulan
  },
  // ... Tambahkan produk lain di sini
];
```

---

## 🌐 Panduan Deployment (Online-kan Website Anda)

Untuk membuat website Anda bisa diakses secara publik (di internet), Anda bisa menggunakan layanan hosting gratis/berbayar seperti **Vercel**, **Netlify**, atau **GitHub Pages**.

### Deployment mudah via Vercel:
1. Buat akun di [Vercel.com](https://vercel.com/).
2. Anda bisa menghubungkan folder proyek ini ke repository GitHub, lalu mengimpor proyek tersebut ke Vercel.
3. Vercel akan mendeteksi otomatis bahwa ini adalah proyek Vite/React.
4. Klik **Deploy**.
5. Selesai! Website Anda akan mendapatkan link publik (misal: `https://frozzybite.vercel.app`).

---

## 💬 Bantuan & Dukungan

Jika Anda mengalami kesulitan saat menginstal atau memiliki pertanyaan lebih lanjut mengenai template ini, jangan ragu untuk menghubungi kami melalui platform tempat Anda membeli produk ini.

**Selamat berjualan dan semoga sukses selalu! 🚀**
