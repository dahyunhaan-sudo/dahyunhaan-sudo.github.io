/* =========================
menu hover + external links
========================= */

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {

  const link = item.querySelector("a");
  const img = item.querySelector("img");

  if (!img) return;

  const originalSrc = img.getAttribute("src");
  const hoverSrc = img.getAttribute("data-hover");

  /* =====================
  hover effect
  ===================== */

  function activate() {
    if (hoverSrc) img.setAttribute("src", hoverSrc);
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


  /* =====================
  클릭 시 github pages 이동
  ===================== */

  img.addEventListener("click", () => {

    /* menu-item 클래스 중 menu- 로 시작하는 거 찾기 */
    const menuClass = [...item.classList].find(cls =>
      cls.startsWith("menu-")
    );

    if (!menuClass) return;

    /* menu-answeringmachine -> answeringmachine */
    const pageName = menuClass.replace("menu-", "");

    /* 이동 주소 */
    const url =
      "https://dahyunhaan-sudo.github.io/" + pageName;

    window.location.href = url;

  });

});