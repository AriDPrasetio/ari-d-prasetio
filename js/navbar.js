const DESKTOP_MEDIA_QUERY = "(min-width: 48rem)";
// const, tetapkan patokan lebar layar desktop (minimal 48rem / 768px).

function initNavigation() {
  // fungsi utama, inisialisasi seluruh sistem navigasi.
  const navToggleBtn = document.getElementById("nav-toggle");
  // const, ambil id di html dengan nilai "nav-toggle", simpan ke wadah navToggleBtn.
  const primaryNavigation = document.getElementById("primary-navigation");
  // const, ambil id di html dengan nilai "primary-navigation", simpan ke wadah primaryNavigation.
  const siteHeader = document.getElementById("header");
  // const, ambil id di html dengan nilai "header", simpan ke wadah siteHeader.
  if (!navToggleBtn || !primaryNavigation) {
    // if navToggleBtn atau primaryNavigation tidak ditemukan di html:
    console.warn(
      // tampilkan peringatan di konsol browser:
      "Navigasi tidak ditemukan. Pastikan elemen dengan ID 'nav-toggle' dan 'primary-navigation' ada di HTML.",
    );
    return;
    // lalu hentikan eksekusi fungsi.
  }

  function isNavOpen() {
    // fungsi, periksa apakah navigasi sedang terbuka?
    return navToggleBtn.getAttribute("aria-expanded") === "true";
    // getAttribute selalu mengembalikan string (atau null), bukan boolean.
    // perbandingan "=== 'true'" inilah yang mengubahnya jadi boolean asli:
    // true jika atributnya persis string "true", false untuk kondisi lain.
  }

  function setNavState(shouldOpen) {
    // function, set nav state sesuai instruksi yang diberikan.
    navToggleBtn.setAttribute("aria-expanded", String(shouldOpen));
    // ubah nilai attribute "aria-expanded" di navToggleBtn menjadi "true" untuk buka dan "false" untuk tutup.
    const nextAriaLabel = shouldOpen
      ? "Tutup menu navigasi"
      : "Buka menu navigasi";
    // tentukan label aksesibilitas baru untuk pengguna screen reader.
    navToggleBtn.setAttribute("aria-label", nextAriaLabel);
    // pasang label aksesibilitas baru ke atribut "aria-label" tombol.
  }

  function handleToggleClick() {
    // fungsi, tangani aksi saat tombol hamburger diklik.
    const nextState = !isNavOpen();
    // const balikkan status menu saat ini, tutup jika terbuka, buka jika tertutup.
    setNavState(nextState);
    // kirim status baru tersebut ke fungsi "setNavState".
  }

  function handleKeyDown(event) {
    // fungsi, tangani penekanan tombol keyboard oleh pengguna.
    if (event.key === "Escape" && isNavOpen()) {
      // jika tombol yang ditekan adalah Escape dan menu sedang terbuka.
      setNavState(false);
      // tutup menu navigasi.
      navToggleBtn.focus();
      // kembalikan fokus keyboard ke tombol menu hamburger.
    }
  }

  function handleOutSideClick(event) {
    // fungsi, tangani klik di luar area menu.
    if (!siteHeader) return;
    // jika header tidak ada, abaikan event.
    const isClickedInsideHeader = siteHeader.contains(event.target);
    // periksa apakah klik berada di dalam area header.
    if (isNavOpen() && !isClickedInsideHeader) {
      // jika menu terbuka dan klik terjadi di luar area header:
      setNavState(false);
      // tutup menu navigasi secara otomatis.
    }
  }

  function handleViewportResize(event) {
    // fungsi, tangani perubahan status media query (bukan klik, tapi lebar layar).
    if (event.matches && isNavOpen()) {
      // jika layar melebar ke ukuran desktop dan menu mobile masih terbuka:
      setNavState(false);
      // kembalikan status menu mobile ke kondisi tertutup.
    }
  }

  navToggleBtn.addEventListener("click", handleToggleClick);
  // pasang pendengar klik pada tombol hamburger.
  document.addEventListener("keydown", handleKeyDown);
  // pasang pendengar tombol keyboard secara global di seluruh halaman.
  document.addEventListener("click", handleOutSideClick);
  // pasang pendengar untuk SEMUA klik di halaman; penentuan "ini klik di luar
  // header atau tidak" dilakukan di dalam handleOutSideClick, bukan di sini.
  const navLinks = primaryNavigation.querySelectorAll(".c-navigation__link");
  // const, ambil semua elemen link di dalam primaryNavigation yang punya class "c-navigation__link".
  navLinks.forEach(function (link) {
    // untuk setiap link yang ditemukan:
    link.addEventListener("click", function () {
      // pasang pendengar klik pada masing-masing link.
      if (isNavOpen()) {
        // jika menu navigasi sedang terbuka saat link tersebut diklik:
        setNavState(false);
        // tutup menu navigasi (berguna terutama di tampilan mobile).
      }
    });
  });
  const mediaQueryList = window.matchMedia(DESKTOP_MEDIA_QUERY);
  // buat objek MediaQueryList untuk breakpoint desktop.
  // objek ini baru benar-benar "dipantau" setelah listener di bawah dipasang.
  if (mediaQueryList.addEventListener) {
    mediaQueryList.addEventListener("change", handleViewportResize);
    // pasang pendengar perubahan status media query (API modern).
  } else {
    mediaQueryList.addListener(handleViewportResize);
    // fallback untuk browser lawas: method-nya bernama "addListener" (API lama),
    // BUKAN "addEventListener" lagi seperti sebelumnya — beda nama method,
    // dan tanpa argumen "change" karena addListener memang hanya menerima callback.
  }
}

initNavigation();
