// body
const body_el = document.querySelector("body")
//header
const header_el = document.querySelector("header")
const header_height = header_el.offsetTop
const gnb_menu = document.querySelectorAll(".gnb__left>.list")
const lnb_box_el = document.querySelectorAll(".lnb_box")
// search
const search_btn = header_el.querySelector("li.search")
const search__area = document.querySelector(".search__area")
const close_btn = search__area.querySelector(".close--btn")

// top BUTTON
const top_el = document.querySelector(".top")
const top_btn = document.querySelector(".top--btn")
const first_section = document.querySelector(".visual").offsetHeight
// FOOTER
const footer_el = document.querySelector("footer")
const cotieshop_el = footer_el.querySelector(".cotieshop")
const copyright_el = footer_el.querySelector(".copyright")

// EVENT CLASS NAME
const ON = "on"
const SHOW = "show"

//gnb메뉴 호버시 lnb 메뉴가 보이는 이벤트

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

// search버튼 클릭시 숨겨진 메뉴 보이는 이벤트

search_btn.addEventListener("click", () => {
  body_el.style.overflow = "hidden"
  search__area.classList.add(SHOW)

  close_btn.addEventListener("click", () => {
    body_el.style.overflow = "auto" //스크롤 활성화
    search__area.classList.remove(SHOW)
  })
})
// 첫번째 세션 하단부분까지 스크롤 했을경우
// top버튼이 나오게
window.addEventListener("scroll", () => {
  if (window.scrollY > first_section) {
    top_el.style.display = "block"
  } else {
    top_el.style.display = "none"
  }
})
// top버튼 클릭시 상위로 올라가는 이벤트
top_btn.addEventListener("click", () => {
  window.scrollTo({
    top: header_height,
    behavior: "smooth",
  })
})

// cotieshop 버튼 클릭시 주소보이는 이벤트

cotieshop_el.addEventListener("click", () => {
  copyright_el.classList.toggle(SHOW)
})
