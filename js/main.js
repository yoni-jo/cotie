//header
//gnb메뉴 호버시 lnb 메뉴가 보이는 이벤트

const gnb_menu = document.querySelectorAll(".gnb__left>.list")
const lnb_box_el = document.querySelectorAll(".lnb_box")
const ON = "on"

gnb_menu.forEach((gnb_menus, index) => {
  lnb_box_el.forEach((lnb_box, num) => {
    gnb_menus.addEventListener("mouseenter", () => {
      lnb_box.classList.remove(ON)
      if (index === num) {
        lnb_box_el[num].classList.add(ON)
        lnb_box_el[num].addEventListener("mouseleave", () => {
          lnb_box_el[num].classList.remove(ON)
        })
      }
    })
  })
})
// FOOTER

// cotieshop 버튼 클릭시 주소보이는 이벤트

const footer_el = document.querySelector("footer")
const Cotieshop_el = footer_el.querySelector(".cotieshop")
const copyright_el = footer_el.querySelector(".copyright")
const SHOW = "show"

Cotieshop_el.addEventListener("click", () => {
  copyright_el.classList.toggle(SHOW)
})
