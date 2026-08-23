# Design System & Content (Copywriting)

Dokumen ini berisi panduan visual (warna dan font) serta draf teks (copywriting) yang akan digunakan di dalam website portofolio Ari Dwi Prasetio.

---

## 1. Design System (Sistem Desain)

### A. Palet Warna (Color Palette)

| Peran | Warna | HEX | Catatan |
|---|---|---|---|
| Background | Off-white | `#FAFAFA` | Latar utama, lembut di mata |
| Surface / Card | Light gray | `#F3F4F6` | Latar kartu proyek, footer |
| Border / Divider | Gray-200 | `#E5E7EB` | Garis pemisah tipis, outline card |
| Text — Primary | Zinc-900 | `#27272A` | Teks utama, sedikit lebih lunak dari hitam pekat |
| Text — Muted | Gray-500 | `#6B7280` | Sub-teks, caption, deskripsi sekunder |
| Accent — Primary | Indigo-600 | `#4F46E5` | Tombol, link aktif, highlight |
| Accent — Primary Hover | Indigo-700 | `#4338CA` | State hover/active tombol |

**Kenapa indigo, bukan biru standar?** Warnanya tetap terasa profesional seperti biru pada umumnya, tapi sedikit lebih berkarakter dan jarang dipakai di portofolio pemula — bikin tampilan tidak generik. Rasio kontras `#4F46E5` di atas `#FAFAFA` maupun sebagai background tombol dengan teks putih sudah di atas ambang WCAG AA, tapi tetap cek ulang dengan [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) saat implementasi final, terutama jika warnanya sedikit disesuaikan.

*(Catatan: warna primer ini tetap bisa diganti nanti lewat CSS Custom Properties tanpa mengubah struktur.)*

### B. Tipografi (Typography)
- **Heading (H1–H6):** `Geist` — geometris, modern, cocok dengan citra *frontend developer*.
- **Body Text (Paragraf):** `Inter` — sangat terbaca untuk teks panjang, standar industri.
- Keduanya tersedia gratis di [Google Fonts](https://fonts.google.com/).

---

## 2. Copywriting (Draf Konten Teks)

Berikut adalah draf teks untuk setiap bagian website. Anda bisa mengedit bagian yang dikurung siku `[...]` sesuai dengan data asli Anda.

### A. Bagian Navigasi (Header)
- **Logo/Nama:** Ari Dwi Prasetio
- **Menu:** Home | About | Skills | Projects | Contact

### B. Hero Section (Halaman Depan)
- **Statement Utama:** "Mencari kejelasan dalam logika, satu baris kode di setiap waktunya."
- **Deskripsi:** Berawal dari niat sederhana untuk melatih cara berpikir, saya menemukan ketenangan dalam menyusun struktur kode. Website ini adalah rekam jejak transisi saya — dari teknisi lapangan menuju *Frontend Developer*.
- **Tombol (CTA):**
  - Tombol 1: `Lihat Proyek Saya`
  - Tombol 2: `Mari Terhubung`

### C. About Section (Tentang Saya)
- **Judul:** Latar Belakang & Motivasi
- **Paragraf 1 (Latar Belakang):**
  "Perjalanan saya mungkin sedikit berbeda. Saya lulusan SMK jurusan Otomotif (Teknik Kendaraan Ringan) yang saat ini bekerja sebagai teknisi Wi-Fi lapangan. Rasa penasaran untuk melatih cara berpikir yang lebih runtut kemudian membawa saya memutar arah, mencoba peruntungan di dunia *Frontend Web Development*."
- **Paragraf 2 (Proses Belajar):**
  "Saya belajar secara otodidak lewat kurikulum *freeCodeCamp*, dengan AI berperan sebagai mentor, *code reviewer*, sekaligus teman diskusi sehari-hari. Dari sana saya sadar, kebiasaan saya memikirkan sesuatu sampai detail terkecil — yang dulu sering terasa berlebihan — justru jadi modal yang pas untuk menulis kode: rapi, terstruktur, dan enak dipandang."

### D. Skills Section (Alat & Pemahaman)
- **Judul:** Bekal yang Sedang Diasah
- **Daftar Kemampuan** (format badge/tag pendek + satu baris keterangan):
  - **HTML & CSS** — Markah semantik dan layout dengan Flexbox/Grid, dengan pendekatan desain yang minimalis.
  - **Responsive Web Design** — Tata letak yang tetap rapi di berbagai ukuran layar, mobile-first.
  - **AI-Assisted Learning** — Terbiasa memakai AI untuk riset materi, review kode, dan mempercepat proses belajar.
  - **Debugging Mindset** — Ketelitian visual ala desainer, dipadu kesabaran teknisi lapangan dalam mencari akar masalah.

### E. Projects Section (Rekam Jejak)
- **Judul:** Ruang Eksperimen
- **Proyek 1:**
  - **Nama:** Personal Web Portfolio
  - **Deskripsi:** Proyek perdana untuk memvalidasi fondasi HTML, CSS, dan aksesibilitas dasar — dirancang mandiri dengan pendekatan visual minimalis yang sesuai selera personal saya.
  - **Link:** `[Link Preview]` | `[Source Code]`

### F. Contact Section (Kontak)
- **Judul:** Mari Terhubung
- **Deskripsi:** Baik Anda seorang rekruter, sesama *career-switcher*, atau sekadar ingin mengobrol seputar *web development* (atau diskusi meta karakter *Genshin Impact* & *Wuthering Waves*), jangan ragu untuk menyapa saya!
- **Email:** `[Email Anda]`
- **LinkedIn:** `[Link LinkedIn]`
- **GitHub:** `[Link GitHub]`
- **Teks Tombol:** `Kirim Pesan`

### G. Footer
- **Teks:** Dirancang dan dibangun dengan penuh perhatian oleh Ari Dwi Prasetio. © 2026.

---

## 3. Riwayat Perubahan (Changelog)

| # | Perubahan | Alasan |
|---|---|---|
| 1 | Ditambahkan baris **LinkedIn** `[Link LinkedIn]` di bagian F (Contact Section), diletakkan antara Email dan GitHub | PRD.md poin 3.1 mewajibkan tautan ke **LinkedIn dan GitHub** di Contact, tapi draf sebelumnya hanya menyediakan Email + GitHub. Urutan Email → LinkedIn → GitHub disamakan dengan urutan slot yang sudah ada di `lofi_wireframe.md` agar tidak ada drift antar dokumen. |
| 2 | Dikonfirmasi: palet di Bagian 1.A sengaja single-accent (1 warna accent + hover state, bukan primer+sekunder terpisah) | PRD.md Section 4 sempat minta "1 warna primer, 1 warna sekunder" — sudah direvisi di PRD supaya cocok dengan palet minimalis yang memang sudah final di dokumen ini |
| 3 | Dikonfirmasi: teks footer di Bagian 2.G ("Dirancang dan dibangun dengan penuh perhatian...") adalah versi final tunggal | Sempat ada versi berbeda di `lofi_wireframe.md` (desktop); versi di dokumen ini yang dipakai. Kalau wireframe masih beda, wireframe yang perlu diupdate menyusul teks ini |
