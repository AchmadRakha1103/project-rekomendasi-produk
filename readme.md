# Project Rekomendasi Produk

## 📌 Deskripsi Aplikasi

Project Rekomendasi Produk adalah aplikasi berbasis **Node.js + Express + Sequelize (SQLite)** yang bertujuan untuk membantu pengguna mendapatkan **rekomendasi produk terbaik** berdasarkan beberapa kriteria utama, yaitu **harga, kualitas, dan stok**.

Aplikasi ini menerapkan konsep:

* **Object-Oriented Programming (OOP)**
* **Relational Database** menggunakan Sequelize ORM
* **Web Application sederhana** dengan tampilan HTML (EJS)

Aplikasi dibuat sebagai **Final Project / Project UAS**.

---

## 🛠️ Teknologi yang Digunakan

* **Node.js**
* **Express.js**
* **Sequelize ORM**
* **SQLite** (database)
* **EJS (Embedded JavaScript Templates)**
* **HTML & CSS**
* **Git & GitHub**

---

## 📂 Struktur Folder

```
project-rekomendasi-produk/
│
├── app.js                 # Entry point aplikasi
├── package.json           # Konfigurasi project & dependencies
├── package-lock.json
├── readme.md              # Dokumentasi project
├── .gitignore
│
├── config/                # Konfigurasi database Sequelize
│   └── config.json
│
├── migrations/            # File migrasi database
├── models/                # Model Sequelize (Product, Recommendation)
│   └── index.js
│
├── oop/                   # Class OOP (Product, RecommendedProduct)
├── playground/            # File uji coba / testing logika
│
├── public/
│   └── css/
│       └── style.css      # Styling tampilan web
│
├── views/                 # Template EJS
│   ├── home.ejs
│   ├── form.ejs
│   ├── result.ejs
│   └── layout.ejs
```

---

## ⚙️ Cara Menjalankan Aplikasi

Ikuti langkah-langkah berikut untuk menjalankan aplikasi di komputer Anda.

### 1️⃣ Clone Repository

```bash
git clone https://github.com/AchmadRakha1103/project-rekomendasi-produk.git
cd project-rekomendasi-produk
```

---

### 2️⃣ Install Dependencies

Pastikan Node.js sudah terinstall, lalu jalankan:

```bash
npm install
```

---

### 3️⃣ Migrasi Database

Database **tidak disertakan** di dalam repository.
Gunakan perintah berikut untuk membuat database dan tabel secara otomatis:

```bash
npx sequelize db:migrate
```

Perintah ini akan menghasilkan file `database.sqlite` secara otomatis.

---

### 4️⃣ Menjalankan Aplikasi

Jalankan server dengan perintah:

```bash
node app.js
```

Jika berhasil, akan muncul pesan bahwa server berjalan.

---

### 5️⃣ Akses Aplikasi

Buka browser dan akses:

```
http://localhost:3000
```

---

## 📊 Fitur Utama Aplikasi

* Menampilkan daftar produk
* Input data produk (harga, kualitas, stok)
* Perhitungan skor rekomendasi produk
* Menentukan produk terbaik berdasarkan skor
* Menyimpan data produk & rekomendasi ke database

---

## 🧠 Konsep OOP yang Diterapkan

* **Class Product** sebagai representasi data produk
* **Class RecommendedProduct** sebagai turunan (inheritance) dari Product
* Method `calculateScore()` untuk menghitung skor rekomendasi

---

## 🗄️ Struktur Database

### Tabel `Products`

* id (PK)
* name
* price
* quality
* stock
* createdAt
* updatedAt

### Tabel `Recommendations`

* id (PK)
* productId (FK)
* score
* createdAt
* updatedAt

Relasi:

* **Satu Product dapat memiliki satu atau lebih Recommendation**

---

## 👥 Anggota Kelompok

* (Isi nama anggota kelompok di sini)

---

## 📌 Catatan Tambahan

* Folder `node_modules` dan file `database.sqlite` **tidak diunggah ke GitHub**
* Database dibuat otomatis melalui migrasi Sequelize
* Aplikasi ini ditujukan untuk keperluan pembelajaran dan akademik
