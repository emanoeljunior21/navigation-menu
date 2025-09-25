document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".tab-container");
  const offset = nav.offsetTop;
  const links = document.querySelectorAll(".tab-container a");
  const sections = document.querySelectorAll(".secao");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("menu", window.scrollY >= offset);

    let scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach((sec, index) => {
      if (
        scrollPos >= sec.offsetTop &&
        scrollPos < sec.offsetTop + sec.offsetHeight
      ) {
        links.forEach((link) => link.classList.remove("active"));
        links[index].classList.add("active");
      }
    });
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
