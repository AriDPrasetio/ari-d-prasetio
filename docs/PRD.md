# Product Requirements Document (PRD)

## 1. Ringkasan Proyek (Project Overview)

- **Nama Proyek:** Ari Dwi Prasetio — Portfolio Website
- **Jenis:** Website (Portofolio/Profil Personal)
- **Tujuan Utama:** Mengaplikasikan dan mendemonstrasikan hasil pembelajaran dari materi HTML, CSS, Basic Accessibility (Aksesibilitas Dasar), Basic RWD (Responsive Web Design), dan JavaScript dasar (interaktivitas UI).

## 2. Target Pengguna (Target Audience)

- Diri sendiri (sebagai dokumentasi dan bukti pembelajaran).
- Rekruter, mentor, atau sesama developer yang ingin melihat portofolio dan pemahaman dasar mengenai _web development_.

## 3. Ruang Lingkup & Fitur Utama (Scope & Key Features)

Website ini akan berupa situs statis (_static website_ — HTML & CSS, tanpa backend/framework) dengan sedikit _vanilla JavaScript_ untuk satu interaksi UI (toggle menu mobile). Bagian-bagian (seksi) yang dimiliki:

### 3.1. Struktur Konten (Halaman/Seksi)

- **Header & Navigasi:** Menampilkan nama/logo "Ari Dwi Prasetio" dan menu navigasi: **Home, About, Skills, Projects, Contact**.
- **Hero Section:** Area sambutan dengan foto profil, statement singkat & padat, deskripsi transisi karier ringkas, dan tombol _Call to Action_ (CTA) menuju bagian proyek dan kontak.
- **About (Tentang Saya):** Latar belakang, motivasi _switch-career_, dan proses belajar — ditulis lebih detail dibanding Hero.
- **Skills:** Daftar keahlian teknis disajikan dalam format _badge/tag_ singkat + satu baris keterangan, bukan paragraf panjang.
- **Projects (Portofolio):** Daftar proyek atau latihan yang telah dikerjakan, ditampilkan dalam bentuk kartu (_card_) berisi gambar _thumbnail_, judul, deskripsi singkat, dan link.
  - Catatan: saat ini baru tersedia 1 proyek (portofolio ini sendiri). Layout kartu dirancang agar mudah ditambah proyek baru ke depannya (grid/flex yang scalable).
- **Contact:** Area yang berisi informasi kontak (Email) dan tautan ke media sosial (LinkedIn, GitHub).
- **Footer:** Informasi hak cipta (_copyright_).

### 3.2. Persyaratan Teknis (Technical Requirements)

- **HTML:**
  - Wajib menggunakan elemen _Semantic HTML5_ (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, dll).
- **CSS & RWD (Responsive Web Design):**
  - Menerapkan pendekatan _Mobile-First Design_ (mendesain untuk layar kecil terlebih dahulu, lalu menggunakan _media queries_ untuk layar yang lebih besar).
  - Tata letak (_layout_) harus menggunakan **Flexbox** dan/atau **CSS Grid**.
  - Responsif di minimal 3 ukuran layar: _Mobile_ (< 768px), _Tablet_ (768px – 1024px), dan _Desktop_ (> 1024px).
  - Menggunakan _CSS Custom Properties_ (variabel CSS) untuk mengelola warna dan tipografi secara konsisten (lihat `design_and_content.md` untuk nilai final).
- **JavaScript (Interaktivitas):**
  - Vanilla JS (tanpa library/framework), lingkupnya dibatasi hanya untuk toggle menu navigasi di Mobile & Tablet (buka/tutup saat tombol hamburger di-klik/di-tap).
  - Tombol toggle wajib punya atribut `aria-expanded` yang di-update lewat JS (`true`/`false`) sesuai state menu, supaya tetap konsisten dengan persyaratan aksesibilitas di bawah.
  - Menu tetap harus bisa dibuka lewat keyboard (tombol native `<button>` sudah otomatis bisa di-trigger dengan `Enter`/`Space`, tidak perlu handler tambahan untuk ini).
- **Aksesibilitas Dasar (Basic Accessibility):**
  - **Kontras Warna:** Memastikan rasio kontras warna antara teks dan latar belakang memenuhi standar WCAG (minimal AA).
  - **Teks Alternatif (Alt Text):** Semua tag `<img>` harus memiliki atribut `alt` yang deskriptif.
  - **Hierarki Heading:** Menggunakan struktur heading (`<h1>` hingga `<h6>`) secara berurutan dan logis tanpa melompati level. H1 hanya dipakai satu kali (di Hero); tiap section utama (About, Skills, Projects, Contact) memakai H2.
  - **Navigasi Keyboard:** Elemen interaktif (link, tombol) harus memiliki _state_ `:focus` yang jelas saat dinavigasi menggunakan tombol `Tab`.
  - **Form Label:** Jika ada form, pastikan input memiliki `<label>` yang terhubung.

## 4. Panduan Desain (Design Guidelines)

- **Tema:** Bersih (_clean_), profesional, dan mudah dibaca.
- **Skema Warna:** 1 warna accent (primary, dengan 1 hover state), warna latar belakang, warna surface/border, dan warna teks (primary + muted) — pendekatan single-accent minimalis, bukan primer+sekunder terpisah. Lihat `design_and_content.md` untuk palet final beserta kode HEX.
- **Tipografi:** 2 jenis font dari Google Fonts — **Geist** untuk _heading_, **Inter** untuk teks _body_.

## 5. Kriteria Penerimaan (Acceptance Criteria)

- [ ] Website dapat dibuka di browser tanpa error.
- [ ] Website dapat menyesuaikan ukuran dengan baik saat diakses dari HP, Tablet, maupun PC (tidak ada _horizontal scroll_ yang tidak disengaja).
- [ ] Struktur HTML lolos validasi [W3C Markup Validation Service](https://validator.w3.org/).
- [ ] Website mendapatkan skor _Accessibility_ di atas 90 saat dites menggunakan Lighthouse (Chrome DevTools).
- [ ] Website dapat dinavigasi sepenuhnya menggunakan _keyboard_ (tombol `Tab` dan `Enter`).
- [ ] Menu mobile (hamburger) dapat dibuka dan ditutup lewat klik/tap maupun keyboard, dan atribut `aria-expanded` ter-update sesuai state-nya.
- [ ] Penamaan menu, logo, dan section konsisten antara HTML, CSS, dan dokumen konten (tidak ada perbedaan seperti "Projects" vs "Works").

## 6. Fase Pengerjaan (Milestones)

- **Fase 1:** Persiapan (Wireframing sederhana & penentuan skema warna/font — sudah final: Geist + Inter, palet indigo-netral).
- **Fase 2:** Pembuatan kerangka HTML (Semantic HTML).
- **Fase 3:** Styling dasar & layouting dengan CSS (Mobile version), termasuk interaktivitas toggle menu mobile (vanilla JavaScript).
- **Fase 4:** Penerapan RWD (_Media queries_ untuk Tablet & Desktop).
- **Fase 5:** Audit aksesibilitas & _finishing_ (tes kontras warna, navigasi keyboard, Lighthouse).
