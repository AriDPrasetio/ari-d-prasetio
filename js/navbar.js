const DESKTOP_MEDIA_QUERY = "(min-width: 48rem)";

document.documentElement.classList.add("js");

function initNavigation() {
  const navToggleBtn = document.getElementById("nav-toggle");
  const primaryNavigation = document.getElementById("primary-navigation");
  const siteHeader = document.getElementById("header");
  const siteMain = document.getElementById("main-content");
  const siteFooter = document.getElementById("footer");
  const skipLink = document.querySelector(".c-skip-link");

  if (!navToggleBtn || !primaryNavigation) {
    console.warn(
      "Navigasi tidak ditemukan. Pastikan elemen dengan ID 'nav-toggle' dan 'primary-navigation' ada di HTML.",
    );
    return;
  }

  function isNavOpen() {
    return navToggleBtn.getAttribute("aria-expanded") === "true";
  }

  function getFocusableNavElements() {
    const navLinks = primaryNavigation.querySelectorAll(".c-navigation__link");
    return [navToggleBtn].concat(Array.from(navLinks));
  }

  function setBackgroundInert(shouldInert) {
    if (siteMain) {
      siteMain.inert = shouldInert;
    }
    if (siteFooter) {
      siteFooter.inert = shouldInert;
    }
    if (skipLink) {
      skipLink.inert = shouldInert;
    }
  }

  function setNavState(shouldOpen) {
    navToggleBtn.setAttribute("aria-expanded", String(shouldOpen));
    const nextAriaLabel = shouldOpen
      ? "Tutup menu navigasi"
      : "Buka menu navigasi";
    navToggleBtn.setAttribute("aria-label", nextAriaLabel);
    setBackgroundInert(shouldOpen);
  }

  function handleToggleClick() {
    setNavState(!isNavOpen());
  }

  function handleKeyDown(event) {
    if (!isNavOpen()) {
      return;
    }

    if (event.key === "Escape") {
      setNavState(false);
      navToggleBtn.focus();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = getFocusableNavElements();
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  function handleOutSideClick(event) {
    if (!siteHeader) return;
    const isClickedInsideHeader = siteHeader.contains(event.target);
    if (isNavOpen() && !isClickedInsideHeader) {
      setNavState(false);
    }
  }

  function handleViewportResize(event) {
    if (event.matches && isNavOpen()) {
      setNavState(false);
    }
  }

  navToggleBtn.addEventListener("click", handleToggleClick);
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("click", handleOutSideClick);

  const navLinks = primaryNavigation.querySelectorAll(".c-navigation__link");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (isNavOpen()) {
        setNavState(false);
      }
    });
  });

  const mediaQueryList = window.matchMedia(DESKTOP_MEDIA_QUERY);
  if (mediaQueryList.addEventListener) {
    mediaQueryList.addEventListener("change", handleViewportResize);
  } else {
    mediaQueryList.addListener(handleViewportResize);
  }
}

initNavigation();
