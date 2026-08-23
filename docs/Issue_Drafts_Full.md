# Draf Issue Lengkap — Portfolio Website Ari Dwi Prasetio

> **Status: DRAF, belum di-approve.** Setiap Issue di bawah disusun AI berdasarkan `PRD.md`, `design_and_content.md`, dan `lofi_wireframe.md`. Review dengan checklist di `Project_Workflow_Portfolio_AriDwi.md` Bagian 0.1 sebelum dibuat di GitHub. Beri tanda pada baris `Review:` tiap Issue setelah dicek.
>
> **Revisi:** total sekarang 30 Issue (sebelumnya 29). Issue #18 (toggle menu mobile, JavaScript) ditambahkan di M3, Issue #18–#29 versi lama di-renumber jadi #19–#30. Issue #9 (footer) sudah tidak lagi jadi blocker — teks final dikonfirmasi pakai versi `design_and_content.md`. Lihat changelog lengkap di `Project_Workflow_Portfolio_AriDwi.md` Bagian 8.

---

## M1 — Persiapan

### Issue #1 — Setup repository, Project board, Labels, Milestones

```
Milestone: M1 — Persiapan
Labels: type:docs
Review: [ ] belum
```

**Objective**
Menyiapkan infrastruktur GitHub sebelum development dimulai, supaya semua Issue berikutnya bisa langsung tertaut ke Project/Milestone/Label yang benar.

**Requirements**

- Buat repository dan push initial commit (termasuk `.gitignore`).
- Buat Project board dengan kolom Backlog/Todo/In Progress/In Review/Done.
- Buat 6 Milestone (M1–M6) sesuai Fase di PRD.
- Buat label `type:*`, `area:*`, `priority:*` sesuai daftar di workflow.

**Acceptance Criteria**

- [ ] Repository ada di GitHub dengan `main` sebagai default branch.
- [ ] Project board terlihat dengan 5 kolom status.
- [ ] 6 Milestone dan seluruh label sudah dibuat dan bisa dipilih saat membuat Issue baru.

---

### Issue #2 — Setup CSS Custom Properties untuk warna & tipografi

```
Milestone: M1 — Persiapan
Labels: type:feature, area:css
Review: [ ] belum
```

**Objective**
Mendefinisikan design token (warna & font) sebagai CSS Custom Properties, sesuai palet final di `design_and_content.md`, supaya section-section berikutnya tinggal memakai variabel — bukan hardcode warna.

**Requirements**

- Definisikan variabel warna di `:root`: background, surface, border, text-primary, text-muted, accent-primary, accent-primary-hover — dengan nilai HEX sesuai tabel palet.
- Import font `Geist` (heading) dan `Inter` (body) dari Google Fonts, lalu definisikan sebagai variabel (`--font-heading`, `--font-body`).
- File CSS ini menjadi dasar yang di-import di semua file CSS lain.

**Acceptance Criteria**

- [ ] Semua 7 warna di tabel palet punya variabel CSS masing-masing.
- [ ] `--font-heading` dan `--font-body` terpasang dan bisa dipakai elemen lain.
- [ ] Tidak ada warna atau font hardcode di file token ini (semua lewat Google Fonts + variabel).

---

## M2 — Struktur HTML (Semantic HTML5)

### Issue #3 — Build markup Header & Navigation

```
Milestone: M2 — Struktur HTML
Labels: type:feature, area:html
Review: [ ] belum
```

**Objective**
Membuat struktur `<header>` dan `<nav>` semantic yang menampung logo/nama dan menu navigasi, sesuai wireframe mobile (nama + tombol menu ☰) dan desktop (nama + menu horizontal).

**Requirements**

- Gunakan `<header>` berisi nama "Ari Dwi Prasetio" dan `<nav>` dengan daftar `<ul><li><a>` untuk menu: Home, About, Skills, Projects, Contact.
- Sertakan elemen `<button>` untuk toggle menu di mobile, dengan `aria-label` (mis. "Buka menu navigasi") dan `aria-expanded="false"` sebagai state awal — belum ada style/behavior interaktif di Issue ini, itu dikerjakan di Issue #18 (JS toggle) setelah Issue #11 (style mobile) selesai.
- Link menu mengarah ke anchor section yang sesuai (`#about`, `#skills`, dst).

**Acceptance Criteria**

- [ ] Struktur `<header>` dan `<nav>` valid semantic HTML5.
- [ ] Semua 5 menu ada dan link-nya mengarah ke id section yang benar.
- [ ] Tombol menu mobile punya `aria-label` dan `aria-expanded="false"` di markup awal.

---

### Issue #4 — Build markup Hero Section

```
Milestone: M2 — Struktur HTML
Labels: type:feature, area:html
Review: [ ] belum
```

_(Lihat contoh lengkap di `Project_Workflow_Portfolio_AriDwi.md` Bagian 4 — sudah direview sebagai contoh template.)_

---

### Issue #5 — Build markup About Section

```
Milestone: M2 — Struktur HTML
Labels: type:feature, area:html
Review: [ ] belum
```

**Objective**
Membuat struktur About Section dengan satu H2 dan dua paragraf sesuai draf di `design_and_content.md` Bagian C.

**Requirements**

- Gunakan `<section id="about">` dengan `<h2>Latar Belakang & Motivasi</h2>`.
- Dua `<p>` berisi Paragraf 1 (Latar Belakang) dan Paragraf 2 (Proses Belajar) persis sesuai draf.
- Section ini harus bisa berdiri sebagai kolom kiri saat layout desktop 2 kolom (lihat wireframe desktop).

**Acceptance Criteria**

- [ ] Hanya satu `<h2>` di section ini.
- [ ] Isi paragraf sama persis dengan `design_and_content.md`, tidak diringkas atau diubah.
- [ ] Section punya `id="about"` yang cocok dengan link nav Issue #3.

---

### Issue #6 — Build markup Skills Section

```
Milestone: M2 — Struktur HTML
Labels: type:feature, area:html
Review: [ ] belum
```

**Objective**
Membuat struktur daftar skill dalam format badge/tag pendek + satu baris keterangan, sesuai 4 item di `design_and_content.md` Bagian D.

**Requirements**

- `<section id="skills">` dengan `<h2>Bekal yang Sedang Diasah</h2>`.
- List (`<ul>` atau elemen berulang lain) berisi 4 skill: HTML & CSS, Responsive Web Design, AI-Assisted Learning, Debugging Mindset — masing-masing dengan nama singkat + satu baris keterangan.
- Markup harus mendukung tampilan badge (bukan paragraf panjang) saat di-style nanti.

**Acceptance Criteria**

- [ ] Semua 4 skill ada dengan teks keterangan persis sesuai draf.
- [ ] Struktur list semantic (bukan `<div>` bertumpuk tanpa makna).
- [ ] Section punya `id="skills"`.

---

### Issue #7 — Build markup Projects Section

```
Milestone: M2 — Struktur HTML
Labels: type:feature, area:html
Review: [ ] belum
```

**Objective**
Membuat struktur kartu proyek yang scalable (mudah ditambah proyek baru), diawali dengan 1 proyek: Personal Web Portfolio.

**Requirements**

- `<section id="projects">` dengan `<h2>Ruang Eksperimen</h2>`.
- Tiap proyek dibungkus `<article>` berisi: thumbnail (`<img>` dengan `alt` deskriptif — boleh placeholder dulu), judul proyek, deskripsi singkat, dan dua link (Link Preview, Source Code).
- Container proyek harus siap jadi grid 2 kolom di desktop tanpa perlu restrukturisasi HTML (lihat wireframe desktop: Card 1 + Card 2 placeholder).

**Acceptance Criteria**

- [ ] Satu `<article>` untuk proyek "Personal Web Portfolio" dengan semua elemen di atas terisi.
- [ ] `<img>` punya `alt` text deskriptif (bukan kosong/nama file).
- [ ] Struktur container mendukung penambahan `<article>` lain tanpa ubah markup existing.

---

### Issue #8 — Build markup Contact Section

```
Milestone: M2 — Struktur HTML
Labels: type:feature, area:html
Review: [ ] belum
```

**Objective**
Membuat struktur Contact Section berisi ajakan menghubungi, email, dan link GitHub, sesuai `design_and_content.md` Bagian F.

**Requirements**

- `<section id="contact">` dengan `<h2>Mari Terhubung</h2>` dan paragraf ajakan (termasuk mention Genshin Impact & Wuthering Waves sesuai draf).
- Link email menggunakan `mailto:`, link GitHub menggunakan `<a href>` ke profil GitHub.
- Tombol "Kirim Pesan" sebagai elemen interaktif (link ke email, bukan form — PRD tidak mewajibkan form untuk versi ini).

**Acceptance Criteria**

- [ ] Section punya `id="contact"`.
- [ ] Link email dan GitHub ada dan formatnya valid (`mailto:`, URL absolut).
- [ ] Teks ajakan sesuai draf, tidak diringkas.

---

### Issue #9 — Build markup Footer

```
Milestone: M2 — Struktur HTML
Labels: type:feature, area:html
Review: [x] sudah — teks footer dikonfirmasi pakai versi design_and_content.md
```

**Objective**
Membuat `<footer>` berisi teks copyright sesuai `design_and_content.md` Bagian G.

**Requirements**

- `<footer>` dengan teks: "Dirancang dan dibangun dengan penuh perhatian oleh Ari Dwi Prasetio. © 2026." — ini acuan tunggal dan final.
- Kalau `lofi_wireframe.md` (versi desktop) masih menampilkan teks lain (mis. "Didesain dengan perfeksionisme..."), itu dianggap draft lama; update wireframe menyusul teks ini, bukan sebaliknya.

**Acceptance Criteria**

- [ ] `<footer>` ada di luar `<main>`.
- [ ] Teks persis: "Dirancang dan dibangun dengan penuh perhatian oleh Ari Dwi Prasetio. © 2026."

---

### Issue #10 — Isi konten sesuai design_and_content.md ke semua section

```
Milestone: M2 — Struktur HTML
Labels: type:feature, area:content
Review: [ ] belum
```

**Objective**
Memastikan seluruh teks final (bukan placeholder) sudah terpasang di semua section setelah Issue #3–#9 selesai.

**Requirements**

- Cross-check setiap section terhadap `design_and_content.md` satu per satu.
- Ganti sisa placeholder `[...]` (mis. `[Email Anda]`, `[Link GitHub]`, `[Link Preview]`) dengan data asli.

**Acceptance Criteria**

- [ ] Tidak ada lagi teks placeholder bertanda `[...]` di HTML.
- [ ] Semua teks cocok kata-per-kata dengan draf final (kecuali placeholder yang memang perlu data asli dari pengguna).

---

## M3 — Styling Mobile (Mobile-First, < 768px)

### Issue #11 — Style Header & Nav mobile

```
Milestone: M3 — Styling Mobile
Labels: type:feature, area:css
Review: [ ] belum
```

**Objective**
Menata Header agar nama dan tombol menu sejajar kiri-kanan (Flexbox space-between) sesuai wireframe mobile.

**Requirements**

- Gunakan `display: flex; justify-content: space-between; align-items: center;` pada header.
- Gunakan variabel warna dari Issue #2 (background header, warna teks).
- Sembunyikan daftar menu nav secara default di mobile (`display: none`), dan tambahkan style untuk state terbuka lewat class `.nav-menu.is-open { display: flex; flex-direction: column; }` — class `is-open` ini yang nanti ditambah/dihapus oleh JS di Issue #18, jadi kontrak nama class ini jangan diubah tanpa update Issue #18 juga.

**Acceptance Criteria**

- [ ] Nama dan tombol menu tampil sejajar horizontal di lebar < 768px.
- [ ] Menu nav hilang secara default, dan tampil (stack vertikal) saat class `.is-open` ditambahkan manual lewat DevTools (simulasi sebelum JS-nya ada).
- [ ] Warna menggunakan variabel CSS, bukan hardcode.
- [ ] Tidak ada horizontal scroll akibat header.

---

### Issue #12 — Style Hero Section mobile + CTA buttons

```
Milestone: M3 — Styling Mobile
Labels: type:feature, area:css
Review: [ ] belum
```

**Objective**
Menata Hero Section jadi satu kolom rapi dengan dua tombol CTA yang bisa wrap ke baris baru di layar sempit.

**Requirements**

- Heading dan deskripsi center atau left-align (pilih salah satu, konsisten dengan tema "clean & profesional" di PRD).
- Dua tombol CTA pakai `display: flex; gap: <value>; flex-wrap: wrap;`.
- Tombol accent-primary pakai warna dari Issue #2, dengan hover state `accent-primary-hover`.

**Acceptance Criteria**

- [ ] Kedua tombol tidak overlap atau terpotong di lebar 320px (device terkecil umum).
- [ ] Hover state tombol berubah warna sesuai token.
- [ ] Kontras teks tombol vs background sudah diperkirakan memenuhi AA (audit detail ada di M6).

---

### Issue #13 — Style About Section mobile

```
Milestone: M3 — Styling Mobile
Labels: type:feature, area:css
Review: [ ] belum
```

**Objective**
Menata About Section agar teks nyaman dibaca dalam satu kolom di mobile.

**Requirements**

- Batasi line-length paragraf secukupnya (mis. `max-width` dalam unit `ch` atau `%`) agar tidak terlalu lebar walau layar sempit umumnya sudah pas.
- Spacing antar paragraf konsisten dengan section lain.

**Acceptance Criteria**

- [ ] Teks tidak menyentuh tepi layar (ada padding horizontal konsisten dengan section lain).
- [ ] Spacing atas/bawah section konsisten dengan pola spacing global.

---

### Issue #14 — Style Skills badges mobile

```
Milestone: M3 — Styling Mobile
Labels: type:feature, area:css
Review: [ ] belum
```

**Objective**
Menata 4 skill sebagai badge/tag visual, bukan list polos, sesuai deskripsi PRD ("format badge/tag singkat").

**Requirements**

- Tiap skill: nama sebagai badge (background surface/border, rounded), keterangan sebagai teks kecil di bawah/sampingnya.
- Gunakan Flexbox `flex-wrap: wrap` agar badge rapi di berbagai lebar.

**Acceptance Criteria**

- [ ] 4 badge tampil rapi tanpa overflow horizontal di mobile.
- [ ] Border/background badge memakai variabel warna surface/border dari Issue #2.

---

### Issue #15 — Style Projects card mobile

```
Milestone: M3 — Styling Mobile
Labels: type:feature, area:css
Review: [ ] belum
```

**Objective**
Menata kartu proyek agar terlihat seperti card (border/shadow ringan) sesuai wireframe mobile.

**Requirements**

- Card pakai `background: var(--surface)`, `border: 1px solid var(--border)`, padding, dan border-radius.
- Thumbnail image full-width di dalam card dengan `object-fit: cover`.
- Link "Link Preview" dan "Source Code" tampil jelas sebagai link/tombol kecil.

**Acceptance Criteria**

- [ ] Card tidak overflow keluar container di lebar 320px.
- [ ] Thumbnail tidak gepeng/distorsi (pakai `object-fit`).
- [ ] Kedua link mudah di-tap (target area cukup besar untuk mobile).

---

### Issue #16 — Style Contact Section mobile

```
Milestone: M3 — Styling Mobile
Labels: type:feature, area:css
Review: [ ] belum
```

**Objective**
Menata Contact Section agar ajakan dan link kontak terlihat jelas dan mudah diakses di mobile.

**Requirements**

- Teks ajakan dan tombol/link kontak disusun vertikal dengan spacing jelas.
- Tombol "Kirim Pesan" jadi elemen paling menonjol (pakai warna accent-primary).

**Acceptance Criteria**

- [ ] Tombol dan link kontak mudah dibedakan satu sama lain secara visual.
- [ ] Tidak ada elemen yang terpotong di lebar 320px.

---

### Issue #17 — Style Footer mobile

```
Milestone: M3 — Styling Mobile
Labels: type:feature, area:css
Review: [ ] belum
```

**Objective**
Menata footer sederhana, teks center, sesuai wireframe mobile.

**Requirements**

- `text-align: center`, padding vertikal secukupnya, warna teks pakai `--text-muted`.

**Acceptance Criteria**

- [ ] Teks footer center dan tidak menempel ke tepi layar.
- [ ] Warna teks sesuai token `--text-muted`.

---

### Issue #18 — Implementasi toggle menu mobile (JavaScript)

```
Milestone: M3 — Styling Mobile
Labels: type:feature, area:js
Review: [ ] belum
```

**Objective**
Membuat menu navigasi mobile bisa dibuka/ditutup lewat klik tombol hamburger memakai vanilla JavaScript, supaya tombol yang dibuat di Issue #3 dan disembunyikan secara default di Issue #11 benar-benar berfungsi.

**Requirements**

- Tambahkan event listener `click` pada tombol menu (dari Issue #3) yang toggle class `is-open` pada elemen menu (kontrak class sama seperti di Issue #11).
- Setiap toggle, update atribut `aria-expanded` tombol jadi `"true"` (menu terbuka) atau `"false"` (menu tertutup), sinkron dengan visibilitas menu.
- (Opsional, kalau sempat) Tutup menu otomatis saat salah satu link menu di-klik, supaya tidak perlu klik hamburger lagi setelah pindah section.
- File JS taruh terpisah (mis. `script.js`), di-load lewat `<script src="script.js" defer></script>` di akhir `<body>`.

**Acceptance Criteria**

- [ ] Klik tombol hamburger membuka menu (class `is-open` muncul), klik lagi menutup (class hilang).
- [ ] `aria-expanded` berubah `"false"` ↔ `"true"` mengikuti state menu, bisa dicek lewat DevTools.
- [ ] Tombol bisa di-trigger lewat keyboard (fokus ke tombol lalu tekan `Enter`/`Space`) tanpa handler tambahan — pastikan tidak ada `preventDefault()` yang mengganggu ini.
- [ ] Di lebar Desktop (>1024px, setelah Issue #23 selesai), tombol hamburger disembunyikan lewat CSS dan JS tetap tidak error di console meski elemen tersembunyi.

---

## M4 — RWD Tablet (768–1024px)

### Issue #19 — Media query Tablet: spacing & layout 2 kolom parsial

```
Milestone: M4 — RWD Tablet
Labels: type:feature, area:rwd
Review: [ ] belum
```

**Objective**
Menyesuaikan spacing dan mulai memperkenalkan layout sedikit lebih lebar di breakpoint Tablet, tanpa langsung lompat ke layout desktop penuh.

**Requirements**

- Tambahkan `@media (min-width: 768px)` di file CSS.
- Perbesar padding/margin section secukupnya agar tidak terlihat "renggang tapi kosong" di lebar tablet.
- Evaluasi apakah About+Skills sudah pantas 2 kolom di lebar ini, atau tetap 1 kolom sampai Desktop (sesuai judgment terhadap konten, bukan aturan kaku).

**Acceptance Criteria**

- [ ] Tidak ada horizontal scroll di rentang 768–1024px.
- [ ] Spacing terasa proporsional (diverifikasi visual, bukan angka pasti).

---

### Issue #20 — Terapkan max-width pada container mulai breakpoint Tablet

```
Milestone: M4 — RWD Tablet
Labels: type:refactor, area:rwd
Review: [ ] belum
```

**Objective**
Mencegah konten melebar penuh tanpa batas begitu layar mulai membesar, dengan menetapkan `max-width` pada container utama.

**Requirements**

- Tetapkan `max-width` (mis. `1200px`) pada wrapper utama, dengan `margin: 0 auto`.
- Berlaku mulai breakpoint Tablet dan diteruskan ke Desktop (Issue #21–#23 tinggal pakai container ini).

**Acceptance Criteria**

- [ ] Konten tidak menyentuh tepi viewport di layar lebar (ada padding/container).
- [ ] Container tetap center secara horizontal di berbagai lebar layar.

---

## M5 — RWD Desktop (>1024px)

### Issue #21 — Media query Desktop: About+Skills 2 kolom via Flexbox

```
Milestone: M5 — RWD Desktop
Labels: type:feature, area:rwd
Review: [ ] belum
```

**Objective**
Menggabungkan About dan Skills jadi satu baris 2 kolom di Desktop, sesuai wireframe desktop.

**Requirements**

- `@media (min-width: 1024px)`: bungkus About+Skills dalam satu flex container, `flex-direction: row`, masing-masing ~50% width.
- Pastikan urutan HTML (About lalu Skills) tidak perlu diubah, cukup diatur lewat CSS.

**Acceptance Criteria**

- [ ] About di kiri, Skills di kanan, sejajar dalam satu baris di lebar > 1024px.
- [ ] Di bawah 1024px, keduanya kembali ke 1 kolom (tidak merusak tampilan Tablet/Mobile).

---

### Issue #22 — Media query Desktop: Projects grid

```
Milestone: M5 — RWD Desktop
Labels: type:feature, area:rwd
Review: [ ] belum
```

**Objective**
Menampilkan kartu proyek dalam grid 2 kolom di Desktop menggunakan CSS Grid.

**Requirements**

- `@media (min-width: 1024px)`: `display: grid; grid-template-columns: 1fr 1fr; gap: <value>;` pada container project cards.
- Struktur harus tetap bekerja baik hanya ada 1 project card saat ini (tidak boleh ada gap kosong yang aneh).

**Acceptance Criteria**

- [ ] Card tersusun grid di Desktop, kembali 1 kolom di bawah 1024px.
- [ ] Tampilan tetap rapi meski baru ada 1 card (tidak "pincang" secara visual).

---

### Issue #23 — Nav Desktop: horizontal menu

```
Milestone: M5 — RWD Desktop
Labels: type:feature, area:rwd
Review: [ ] belum
```

**Objective**
Mengganti tampilan menu dari hamburger (mobile/tablet) ke menu horizontal penuh di Desktop, sesuai wireframe desktop.

**Requirements**

- `@media (min-width: 1024px)`: sembunyikan tombol hamburger, tampilkan `<ul>` menu sebagai flex row.
- Pastikan seluruh 5 menu tetap mengarah ke anchor yang sama seperti Issue #3.

**Acceptance Criteria**

- [ ] Di Desktop, menu tampil horizontal tanpa tombol hamburger.
- [ ] Di bawah 1024px, perilaku toggle mobile/tablet tidak berubah/rusak.

---

## M6 — Audit Aksesibilitas & Finishing

### Issue #24 — Audit rasio kontras warna (WCAG AA)

```
Milestone: M6 — Audit & Finishing
Labels: type:bug, area:accessibility
Review: [ ] belum
```

**Objective**
Memverifikasi seluruh kombinasi warna teks/background memenuhi WCAG AA, khususnya karena palet baru saja diverifikasi asumsi awal di `design_and_content.md`, bukan pengujian aktual per elemen.

**Requirements**

- Cek semua kombinasi teks-background yang benar-benar dipakai (bukan cuma primary/background) memakai WebAIM Contrast Checker.
- Perhatikan khusus: teks di atas tombol accent-primary, `--text-muted` di atas card surface.

**Acceptance Criteria**

- [ ] Semua kombinasi teks normal size ≥ 4.5:1.
- [ ] Semua kombinasi teks besar/heading ≥ 3:1.
- [ ] Kombinasi yang gagal dicatat dan diperbaiki (warna disesuaikan lewat variabel CSS, bukan override lokal).

---

### Issue #25 — Audit & lengkapi alt text

```
Milestone: M6 — Audit & Finishing
Labels: type:bug, area:accessibility
Review: [ ] belum
```

**Objective**
Memastikan setiap `<img>` (termasuk thumbnail project dan foto profil di Hero jika ada) punya `alt` yang deskriptif, bukan kosong atau nama file.

**Requirements**

- List semua elemen `<img>` di seluruh halaman.
- Tulis ulang `alt` yang deskriptif dan kontekstual (bukan generik seperti "gambar").

**Acceptance Criteria**

- [ ] Tidak ada `<img>` tanpa atribut `alt`.
- [ ] Tidak ada `alt` kosong kecuali untuk gambar dekoratif murni (jika ada, gunakan `alt=""` secara sengaja).

---

### Issue #26 — Audit hierarki heading

```
Milestone: M6 — Audit & Finishing
Labels: type:refactor, area:accessibility
Review: [ ] belum
```

**Objective**
Memastikan struktur heading logis: satu `<h1>` di Hero, `<h2>` di tiap section utama, tanpa lompat level (mis. h2 langsung ke h4).

**Requirements**

- Susuri seluruh halaman top-to-bottom, catat urutan heading yang ada.
- Perbaiki level yang salah tanpa mengubah tampilan visual heading (styling tetap bisa beda dari level semantic lewat CSS class kalau perlu).

**Acceptance Criteria**

- [ ] Hanya ada satu `<h1>`.
- [ ] Setiap section utama (About, Skills, Projects, Contact) pakai `<h2>`.
- [ ] Tidak ada level heading yang dilompati.

---

### Issue #27 — Tambahkan :focus state

```
Milestone: M6 — Audit & Finishing
Labels: type:feature, area:accessibility
Review: [ ] belum
```

**Objective**
Memastikan semua elemen interaktif (link nav, tombol CTA, link project, link kontak) punya indikator focus yang jelas saat dinavigasi keyboard.

**Requirements**

- Definisikan style `:focus` atau `:focus-visible` global (mis. outline dengan warna accent-primary) alih-alih menghapus outline default tanpa pengganti.
- Cek satu per satu lewat `Tab` di browser.

**Acceptance Criteria**

- [ ] Semua elemen interaktif menunjukkan indikator visual jelas saat fokus via `Tab`.
- [ ] Urutan `Tab` mengikuti urutan visual/logis halaman.

---

### Issue #28 — Validasi HTML di W3C Markup Validator

```
Milestone: M6 — Audit & Finishing
Labels: type:bug, area:html
Review: [ ] belum
```

**Objective**
Memastikan HTML lolos validasi struktural sesuai Acceptance Criteria PRD.

**Requirements**

- Jalankan halaman lewat validator.w3.org (upload file atau paste kode).
- Perbaiki semua error (bukan sekadar warning jika waktu terbatas, tapi error wajib nol).

**Acceptance Criteria**

- [ ] 0 error di W3C Markup Validation Service.

---

### Issue #29 — Lighthouse Accessibility > 90

```
Milestone: M6 — Audit & Finishing
Labels: type:bug, area:accessibility
Review: [ ] belum
```

**Objective**
Mencapai skor Accessibility Lighthouse di atas 90 sebagai kriteria penerimaan PRD.

**Requirements**

- Jalankan Lighthouse (Chrome DevTools) di halaman final.
- Perbaiki temuan yang muncul, prioritaskan yang berdampak skor besar dulu.

**Acceptance Criteria**

- [ ] Skor Accessibility Lighthouse > 90.
- [ ] Tidak ada regresi pada skor Performance/Best Practices akibat perbaikan ini (dicek sepintas, bukan target utama Issue ini).

---

### Issue #30 — QA lintas perangkat

```
Milestone: M6 — Audit & Finishing
Labels: type:bug, area:rwd
Review: [ ] belum
```

**Objective**
Verifikasi akhir bahwa tidak ada horizontal scroll tidak disengaja di ketiga breakpoint (Mobile/Tablet/Desktop), sebagai penutup sebelum project dianggap selesai.

**Requirements**

- Test manual di lebar < 768px, 768–1024px, dan > 1024px (browser resize atau device emulation).
- Cek juga di device fisik jika memungkinkan.

**Acceptance Criteria**

- [ ] Tidak ada horizontal scroll di ketiga breakpoint.
- [ ] Semua section tampil sesuai wireframe masing-masing breakpoint.
