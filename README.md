# Portfolio Website — Ari Dwi Prasetio

Website portofolio personal untuk mendemonstrasikan hasil pembelajaran **HTML, CSS, Responsive Web Design (RWD), dan Basic Accessibility** — sekaligus dokumentasi transisi karier dari teknisi Wi-Fi lapangan menuju _Frontend Developer_.

---

## Tentang Project

Ini adalah situs statis (_static website_) satu halaman (_single page_) yang dibangun murni dengan HTML & CSS, tanpa framework — sesuai tujuan pembelajaran di baliknya. Selengkapnya ada di [`PRD.md`](./PRD.md).

**Target pembaca:**

- Diri sendiri, sebagai bukti dan dokumentasi proses belajar.
- Rekruter, mentor, atau sesama developer yang ingin melihat pemahaman dasar web development.

---

## Struktur Halaman

| Section               | Deskripsi                                                                                                  |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Header & Navigasi** | Nama + menu: Home, About, Skills, Projects, Contact                                                        |
| **Hero**              | Statement singkat, deskripsi transisi karier, 2 tombol CTA                                                 |
| **About**             | Latar belakang (SMK Otomotif → Frontend Developer) dan proses belajar otodidak                             |
| **Skills**            | 4 kemampuan dalam format badge: HTML & CSS, Responsive Web Design, AI-Assisted Learning, Debugging Mindset |
| **Projects**          | Kartu proyek (saat ini: website portofolio ini sendiri), layout scalable untuk proyek berikutnya           |
| **Contact**           | Email dan link GitHub                                                                                      |
| **Footer**            | Copyright                                                                                                  |

Detail konten & draf teks lengkap ada di [`design_and_content.md`](./design_and_content.md). Wireframe mobile & desktop ada di [`lofi_wireframe.md`](./lofi_wireframe.md).

---

## Tech Stack

- **HTML5** — semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3** — Flexbox & CSS Grid, CSS Custom Properties, Mobile-First + Media Queries
- **Font:** [Geist](https://fonts.google.com/) (heading), [Inter](https://fonts.google.com/) (body) — dari Google Fonts
- Tanpa framework, tanpa build tool — cukup buka file HTML di browser

---

## Design System

| Peran                  | Warna      | HEX       |
| ---------------------- | ---------- | --------- |
| Background             | Off-white  | `#FAFAFA` |
| Surface / Card         | Light gray | `#F3F4F6` |
| Border / Divider       | Gray-200   | `#E5E7EB` |
| Text — Primary         | Zinc-900   | `#27272A` |
| Text — Muted           | Gray-500   | `#6B7280` |
| Accent — Primary       | Indigo-600 | `#4F46E5` |
| Accent — Primary Hover | Indigo-700 | `#4338CA` |

Detail lengkap (rasio kontras, alasan pemilihan warna, tipografi) ada di [`design_and_content.md`](./design_and_content.md).

---

## Responsive Breakpoints

Didesain **Mobile-First**:

| Breakpoint | Lebar          | Layout                                             |
| ---------- | -------------- | -------------------------------------------------- |
| Mobile     | < 768px        | 1 kolom                                            |
| Tablet     | 768px – 1024px | Transisi spacing & layout parsial                  |
| Desktop    | > 1024px       | 2 kolom (About+Skills berdampingan, Projects grid) |

---

## Aksesibilitas

Project ini menargetkan skor **Lighthouse Accessibility > 90**, dengan checklist:

- [ ] Rasio kontras warna teks-background memenuhi WCAG AA
- [ ] Semua `<img>` punya `alt` text deskriptif
- [ ] Hierarki heading logis (satu `<h1>`, `<h2>` per section utama, tanpa lompat level)
- [ ] Semua elemen interaktif punya `:focus` state yang jelas
- [ ] Halaman bisa dinavigasi penuh dengan keyboard (`Tab` + `Enter`)

---

## Cara Menjalankan

Karena statis dan tanpa build step, cukup:

```bash
git clone https://github.com/<username>/portfolio-aridwi.git
cd portfolio-aridwi
```

Lalu buka `index.html` langsung di browser, atau gunakan live server (misal ekstensi "Live Server" di VS Code) untuk auto-reload saat development.

---

## Project Structure

```text
portfolio-aridwi/
├── index.html
├── css/
│   ├── tokens.css        # CSS Custom Properties (warna, tipografi)
│   ├── style.css         # Style utama (mobile-first)
│   └── responsive.css    # Media queries Tablet & Desktop
├── assets/
│   └── images/
├── README.md
├── PRD.md
├── design_and_content.md
├── lofi_wireframe.md
└── .gitignore

---

## Development Workflow

Project ini dikerjakan mengikuti workflow Git/GitHub berbasis Issue → Branch → PR, dengan 6 milestone (Persiapan → HTML → Styling Mobile → RWD Tablet → RWD Desktop → Audit Aksesibilitas). Detail lengkap alur kerja, daftar Issue, dan konvensi commit ada di [`Project_Workflow_Portfolio_AriDwi.md`](./Project_Workflow_Portfolio_AriDwi.md), dengan draf Issue siap pakai di [`Issue_Drafts_Full.md`](./Issue_Drafts_Full.md).

---

## Roadmap

- [x] Fase 1 — Persiapan (design token, palet warna final)
- [ ] Fase 2 — Struktur HTML semantic
- [ ] Fase 3 — Styling mobile
- [ ] Fase 4 — RWD Tablet
- [ ] Fase 4 — RWD Desktop
- [ ] Fase 5 — Audit aksesibilitas & finishing

---

## Kontak

- **Email:** `[Email Anda]`
- **GitHub:** `[Link GitHub]`

Baik Anda seorang rekruter, sesama _career-switcher_, atau sekadar ingin mengobrol seputar _web development_ (atau diskusi meta karakter _Genshin Impact_ & _Wuthering Waves_), jangan ragu untuk menyapa!

---

© 2026 Ari Dwi Prasetio.
```
