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

// 첫번째 세션 하단부분까지 스크롤 했을경우
//top버튼이 나오게
const top_el = document.querySelector(".top")
const first_section = document.querySelector(".visual").offsetHeight
window.addEventListener("scroll", () => {
  if (window.scrollY > first_section) {
    top_el.style.display = "block"
  } else {
    top_el.style.display = "none"
  }
})
// top버튼 클릭시 상위로 올라가는 이벤트

const top_btn = document.querySelector(".top--btn")
const header = document.querySelector("header").offsetTop
top_btn.addEventListener("click", () => {
  window.scrollTo({
    top: header,
    behavior: "smooth",
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
