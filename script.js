const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  const link = item.querySelector("a");
  const img = item.querySelector("img");

  if (!link || !img) return;

  const originalSrc = img.getAttribute("src");
  const hoverSrc = img.getAttribute("data-hover");

  if (!hoverSrc) return;

  function activate() {
    img.setAttribute("src", hoverSrc);
    item.classList.add("active");
  }

  function deactivate() {
    img.setAttribute("src", originalSrc);
    item.classList.remove("active");
  }

  item.addEventListener("mouseenter", activate);
  item.addEventListener("mouseleave", deactivate);

  img.addEventListener("mouseenter", activate);
  img.addEventListener("mouseleave", deactivate);

  img.addEventListener("click", () => {
    window.location.href = link.getAttribute("href");
  });
});