# Workflow Project — Portfolio Website Ari Dwi Prasetio

Dokumen ini adalah penerapan konkret dari `Git_GitHub_Workflow_Template.md` untuk project **Ari Dwi Prasetio — Portfolio Website**, mengacu pada `PRD.md`, `design_and_content.md`, dan `lofi_wireframe.md`.

Tujuan: memberi urutan kerja siap pakai dari nol (setup repo) sampai project selesai (Lighthouse Accessibility > 90).

---

## 0. Setup Awal (One-time, sebelum Issue #1)

```bash
# Buat folder & init repo
mkdir portfolio-aridwi && cd portfolio-aridwi
git init
git branch -M main

# Buat repo di GitHub, lalu hubungkan
git remote add origin https://github.com/<username>/portfolio-aridwi.git

# Buat .gitignore
cat > .gitignore << 'EOF'
# OS
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/

# Kalau nanti pakai npm (misal build/minify CSS)
node_modules/
dist/
EOF

# Commit awal
echo "# Portfolio — Ari Dwi Prasetio" > README.md
git add README.md .gitignore
git commit -m "chore: initial commit dengan .gitignore"
git push -u origin main
```

Di GitHub, siapkan sekali di awal:

1. **Project (board)** dengan kolom: `Backlog | Todo | In Progress | In Review | Done`
2. **Milestones** — 6 milestone (M1–M6) diturunkan dari 5 Fase di PRD Section 6 — Fase 4 sengaja dipecah jadi M4 (Tablet) dan M5 (Desktop) (lihat Bagian 1 di bawah)
3. **Labels**:

```text
type:feature
type:docs
type:refactor
type:bug

area:html
area:css
area:rwd
area:accessibility
area:content
area:js

priority:high     (opsional, hanya kalau ada beberapa issue TODO bersaing)
priority:medium
priority:low
```

---

## 0.1 AI sebagai Issue Generator

Alih-alih menulis 30 Issue satu per satu secara manual, AI (mis. Claude) bisa dipakai untuk **menyusun draf Issue** — Objective, Requirements, Acceptance Criteria — langsung dari `PRD.md`, `design_and_content.md`, dan `lofi_wireframe.md`. Manusia tetap memegang keputusan akhir.

Pembagian peran:

```text
AI                                    MANUSIA
├── Baca PRD/design/wireframe         ├── Tentukan urutan & prioritas
├── Susun draf Issue per section      ├── Review scope tiap draf
│   (Objective/Requirements/AC)       ├── Edit/potong/gabung jika perlu
└── Sarankan label & milestone        └── Approve → buat Issue di GitHub
```

**Kenapa AI tidak langsung membuat Issue di GitHub tanpa review:** AI bisa salah menebak scope (misal Requirements kebablasan atau Acceptance Criteria tidak actionable). Issue yang scope-nya salah sejak awal akan menular ke branch, commit, dan PR yang menunjuk ke Issue tersebut — jauh lebih mahal diperbaiki belakangan daripada dikoreksi sebelum Issue dibuat.

Checklist review sebelum draf AI di-approve:

- [ ] Objective sesuai satu section/fitur di wireframe atau PRD, bukan gabungan beberapa hal (lihat Rule 1 template: "satu Issue = satu pekerjaan yang jelas")
- [ ] Requirements bisa dikerjakan dalam satu branch tanpa menyentuh section lain
- [ ] Acceptance Criteria bisa dicek objektif (bukan "terlihat bagus", tapi "ada atribut alt di semua img")
- [ ] Label & milestone yang disarankan AI cocok dengan sistem label di Bagian 0 (Setup Awal)

Draf lengkap untuk 30 Issue di project ini sudah disusun dan tersedia di file terpisah: **`Issue_Drafts_Full.md`**. Alur pakainya:

```bash
# Setelah draf di-review dan disetujui, buat Issue lewat GitHub CLI
gh issue create \
  --title "Build markup Hero Section (Semantic HTML)" \
  --body-file issue-04-body.md \
  --milestone "M2 — Struktur HTML" \
  --label "type:feature,area:html"
```

Atau paste manual ke form "New Issue" di GitHub kalau lebih nyaman tanpa CLI.

---

| Milestone                  | Sumber PRD | Fokus                                                                                                  |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| **M1 — Persiapan**         | Fase 1     | Setup repo, project board, finalisasi design token (warna/font sudah final di `design_and_content.md`) |
| **M2 — Struktur HTML**     | Fase 2     | Semantic HTML5 untuk semua section                                                                     |
| **M3 — Styling Mobile**    | Fase 3     | CSS mobile-first (belum ada media query) + interaktivitas toggle menu mobile (vanilla JS)              |
| **M4 — RWD Tablet**        | Fase 4     | Media query Tablet (768–1024px)                                                                        |
| **M5 — RWD Desktop**       | Fase 4     | Media query Desktop (>1024px)                                                                          |
| **M6 — Audit & Finishing** | Fase 5     | Kontras warna, alt text, heading hierarchy, keyboard nav, Lighthouse                                   |

> Catatan: M4 dan M5 sama-sama berasal dari Fase 4 di PRD, sengaja dipecah jadi dua milestone terpisah agar progress Tablet dan Desktop bisa dilacak independen — tidak menunggu keduanya selesai baru terlihat progress.

Progress tiap milestone otomatis terlihat di GitHub dari Issue/PR yang tertaut ke milestone tersebut.

---

## 2. Daftar Issue per Milestone

> Setiap Issue di bawah mengikuti format Section 5 template (`Objective / Requirements / Acceptance Criteria`). Contoh lengkap satu Issue ada di Bagian 4.

### M1 — Persiapan

| #   | Judul Issue                                                                        | Labels                     |
| --- | ---------------------------------------------------------------------------------- | -------------------------- |
| 1   | Setup repository, Project board, Labels, Milestones                                | `type:docs`                |
| 2   | Setup CSS Custom Properties untuk warna & tipografi (dari `design_and_content.md`) | `type:feature`, `area:css` |

### M2 — Struktur HTML (Semantic HTML5)

| #   | Judul Issue                                                | Labels                         |
| --- | ---------------------------------------------------------- | ------------------------------ |
| 3   | Build markup Header & Navigation (`<header>`, `<nav>`)     | `type:feature`, `area:html`    |
| 4   | Build markup Hero Section (`<section>` + H1)               | `type:feature`, `area:html`    |
| 5   | Build markup About Section (H2 + 2 paragraf)               | `type:feature`, `area:html`    |
| 6   | Build markup Skills Section (badge list)                   | `type:feature`, `area:html`    |
| 7   | Build markup Projects Section (`<article>` per card)       | `type:feature`, `area:html`    |
| 8   | Build markup Contact Section                               | `type:feature`, `area:html`    |
| 9   | Build markup Footer                                        | `type:feature`, `area:html`    |
| 10  | Isi konten sesuai `design_and_content.md` ke semua section | `type:feature`, `area:content` |

### M3 — Styling Mobile (Mobile-First, < 768px)

| #   | Judul Issue                                                 | Labels                     |
| --- | ----------------------------------------------------------- | -------------------------- |
| 11  | Style Header & Nav mobile (Flexbox space-between + menu ☰) | `type:feature`, `area:css` |
| 12  | Style Hero Section mobile + CTA buttons (flex-wrap)         | `type:feature`, `area:css` |
| 13  | Style About Section mobile                                  | `type:feature`, `area:css` |
| 14  | Style Skills badges mobile                                  | `type:feature`, `area:css` |
| 15  | Style Projects card mobile                                  | `type:feature`, `area:css` |
| 16  | Style Contact Section mobile                                | `type:feature`, `area:css` |
| 17  | Style Footer mobile (text-center)                           | `type:feature`, `area:css` |
| 18  | Implementasi toggle menu mobile (vanilla JavaScript)        | `type:feature`, `area:js`  |

### M4 — RWD Tablet (768–1024px)

| #   | Judul Issue                                                                               | Labels                      |
| --- | ----------------------------------------------------------------------------------------- | --------------------------- |
| 19  | Media query Tablet (768–1024px): sesuaikan spacing & layout 2 kolom parsial               | `type:feature`, `area:rwd`  |
| 20  | Terapkan `max-width` pada container agar tidak melebar berlebihan mulai breakpoint Tablet | `type:refactor`, `area:rwd` |

### M5 — RWD Desktop (>1024px)

| #   | Judul Issue                                                         | Labels                     |
| --- | ------------------------------------------------------------------- | -------------------------- |
| 21  | Media query Desktop: About+Skills 2 kolom via Flexbox               | `type:feature`, `area:rwd` |
| 22  | Media query Desktop: Projects grid `grid-template-columns: 1fr 1fr` | `type:feature`, `area:rwd` |
| 23  | Nav Desktop: ganti hamburger jadi horizontal menu                   | `type:feature`, `area:rwd` |

### M6 — Audit Aksesibilitas & Finishing

| #   | Judul Issue                                                            | Labels                                           |
| --- | ---------------------------------------------------------------------- | ------------------------------------------------ |
| 24  | Audit rasio kontras warna (WCAG AA) — cek via WebAIM Contrast Checker  | `type:bug`/`type:refactor`, `area:accessibility` |
| 25  | Audit & lengkapi `alt` text di semua `<img>`                           | `type:bug`, `area:accessibility`                 |
| 26  | Audit hierarki heading (H1 sekali, H2 per section, tanpa lompat level) | `type:refactor`, `area:accessibility`            |
| 27  | Tambahkan `:focus` state jelas untuk semua elemen interaktif           | `type:feature`, `area:accessibility`             |
| 28  | Validasi HTML di W3C Markup Validation Service                         | `type:bug`, `area:html`                          |
| 29  | Jalankan Lighthouse Accessibility, perbaiki sampai skor > 90           | `type:bug`, `area:accessibility`                 |
| 30  | QA lintas perangkat (no horizontal scroll di Mobile/Tablet/Desktop)    | `type:bug`, `area:rwd`                           |

---

## 3. Konvensi Branch & Commit untuk Project Ini

Branch:

```text
feat/header-nav-markup
feat/hero-section-markup
feat/skills-badges-mobile-style
feat/rwd-desktop-grid
feat/mobile-nav-toggle-js
fix/contrast-ratio-cta-button
docs/setup-repo-board
```

Commit (mengikuti Conventional Commit seperti di template):

```bash
git commit -m "feat(html): tambah markup header dan nav semantic"
git commit -m "feat(css): style hero section mobile-first"
git commit -m "fix(a11y): perbaiki kontras warna teks muted"
git commit -m "docs: setup project board dan milestone"
```

---

## 4. Contoh Issue Lengkap (Issue #4 — Hero Section)

```text
Issue #4

Title:
Build markup Hero Section (Semantic HTML)

Milestone:
M2 — Struktur HTML

Labels:
type:feature
area:html
```

```markdown
## Objective

Membuat struktur HTML semantic untuk Hero Section sesuai wireframe mobile & desktop.

## Requirements

- Gunakan `<section>` dengan satu `<h1>` berisi statement utama:
  "Mencari kejelasan dalam logika, satu baris kode di setiap waktunya."
- Tambahkan paragraf deskripsi transisi karier (dari design_and_content.md Bagian B).
- Tambahkan 2 tombol CTA: "Lihat Proyek Saya" dan "Mari Terhubung", masing-masing
  sebagai elemen interaktif yang bisa diberi style :focus nanti.
- Struktur harus valid untuk layout mobile (1 kolom) maupun desktop (max-width, center).

## Acceptance Criteria

- [ ] Hanya ada satu `<h1>` di seluruh halaman, dan berada di Hero Section ini.
- [ ] Statement dan deskripsi sesuai persis dengan draf di design_and_content.md.
- [ ] Dua tombol CTA ada di markup dengan `href`/`type` yang benar (mengarah ke #projects dan #contact).
- [ ] Markup lolos validasi struktural dasar (tidak ada tag tidak tertutup).
```

Branch: `feat/hero-section-markup`
PR: `Closes #4`

---

## 5. Urutan Kerja End-to-End (Contoh Issue #4)

```bash
# 1. Mulai dari main terbaru
git switch main
git pull origin main

# 2. Buat branch
git switch -c feat/hero-section-markup

# 3. Update status di Project: TODO → IN PROGRESS

# 4. Implement markup Hero Section

# 5. Commit
git add .
git commit -m "feat(html): tambah markup hero section semantic"

# 6. Push
git push -u origin feat/hero-section-markup

# 7. Buat Pull Request
#    Title: feat: hero section markup
#    Body:
#      ## Summary
#      - Tambah <section> hero dengan h1, deskripsi, dan 2 CTA
#      ## Testing
#      - [x] Cek visual di browser (belum ada style)
#      - [x] Cek hanya ada satu h1 di halaman
#      Closes #4

# 8. Self-review checklist:
#    - Baca ulang diff dari awal
#    - Cek acceptance criteria Issue #4 terpenuhi
#    - (opsional) minta AI code review

# 9. Squash and merge ke main

# 10. Cleanup
git switch main
git pull origin main
git branch -d feat/hero-section-markup

# 11. Issue #4 otomatis CLOSED, Project → DONE, Milestone M2 progress +1
```

Ulangi pola yang sama untuk Issue #5–#30, satu branch per Issue, satu PR per Issue.

---

## 6. Urutan Milestone yang Disarankan

```text
M1 Persiapan
   ↓
M2 Struktur HTML   (Issue #3–#10, boleh diselesaikan berurutan sesuai urutan section di wireframe)
   ↓
M3 Styling Mobile  (Issue #11–#18, ikuti urutan section yang sama, toggle JS di akhir setelah nav mobile ter-style)
   ↓
M4 RWD Tablet   (Issue #19–#20)
   ↓
M5 RWD Desktop  (Issue #21–#23)
   ↓
M6 Audit & Finishing (Issue #24–#30)
```

Alasan urutan ini: HTML dulu (agar konten & struktur benar sebelum di-style), lalu mobile dulu (sesuai prinsip mobile-first di PRD), baru breakpoint Tablet, lalu Desktop (mengikuti arah mobile-first: makin lebar layar dikerjakan makin belakangan), dan aksesibilitas di akhir sebagai audit menyeluruh — meskipun praktik baik seperti alt text dan heading hierarchy sebaiknya sudah benar sejak Issue #3–#10, bukan ditunda total ke M6.

M4 dan M5 dipisah supaya progress bisa dilaporkan dan ditutup (`CLOSED`) secara independen — kamu bisa selesai dan "merayakan" Tablet selesai tanpa menunggu Desktop, dan sebaliknya jika Desktop lebih dulu selesai karena alasan tertentu.

---

## 7. Definition of Done — Project Selesai

Diambil langsung dari PRD Section 5 (Acceptance Criteria), gunakan sebagai checklist final sebelum Milestone M6 ditutup:

- [ ] Website dapat dibuka di browser tanpa error.
- [ ] Responsif rapi di Mobile, Tablet, dan Desktop — tanpa horizontal scroll tidak disengaja.
- [ ] Struktur HTML lolos W3C Markup Validation Service.
- [ ] Skor Lighthouse Accessibility > 90.
- [ ] Website dapat dinavigasi penuh dengan keyboard (`Tab` dan `Enter`).
- [ ] Menu mobile (hamburger) dapat dibuka/ditutup dan `aria-expanded` ter-update sesuai state-nya.
- [ ] Penamaan menu/logo/section konsisten antara HTML, CSS, dan dokumen konten.

Ketika semua Issue M1–M6 closed dan checklist di atas terpenuhi, seluruh 6 milestone menjadi `CLOSED` dan project berstatus selesai.

---

## 8. Riwayat Revisi (Changelog)

| #   | Perubahan                                                                                                                          | Alasan                                                                                                                                                                                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Jumlah milestone di Bagian 0 dikoreksi dari "5" jadi "6 (M1–M6)"                                                                   | Teks lama gak sinkron dengan tabel milestone dan Issue #1 yang sudah benar pakai 6                                                                                                                                                                       |
| 2   | Tambah label `area:js`                                                                                                             | Scope proyek nambah 1 fitur JS (toggle menu mobile) — lihat perubahan #3                                                                                                                                                                                 |
| 3   | Tambah Issue #18 "Implementasi toggle menu mobile (vanilla JavaScript)" di M3, seluruh Issue #18–#29 lama di-renumber jadi #19–#30 | Issue #3 dan #11 (draf lama) menunda logic toggle tanpa ada Issue yang benar-benar mengerjakannya — nav mobile jadi gak berfungsi tanpa ini. Diletakkan di akhir M3 karena baru bisa dikerjakan setelah header + nav mobile selesai di-style (Issue #11) |
| 4   | Label Issue #10 diperjelas jadi `type:feature`, `area:content`                                                                     | Versi lama ("`type:content` → gunakan `area:content`") ambigu dan `type:content` gak ada di daftar label resmi                                                                                                                                           |
| 5   | Fokus M3 di tabel Bagian 1 ditambah keterangan toggle JS                                                                           | Supaya konsisten dengan Issue #18 yang baru                                                                                                                                                                                                              |
