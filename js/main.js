// FOOTER

// cotieshop 버튼 클릭시 주소보이는 이벤트

const footer_el = document.querySelector("footer")
const Cotieshop_el = footer_el.querySelector(".cotieshop")
const copyright_el = footer_el.querySelector(".copyright")
const SHOW = "show"

Cotieshop_el.addEventListener("click", () => {
  copyright_el.classList.toggle(SHOW)
})
