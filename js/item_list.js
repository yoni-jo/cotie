"use strict"
//상품리스트 이미지
const item = [
  {
    img: "아티멍후디1.jpg",
    hover: "아티멍후디.jpg",
  },
  {
    img: "크리스찬 코완1.png",
    hover: "크리스찬 코완.png",
  },
  {
    img: "타이니트점퍼1.jpg",
    hover: "타이니트점퍼.jpg",
  },
  {
    img: "루키후디1.jpg",
    hover: "루키후디.jpg",
  },
  {
    img: "패딩자켓Red레드1.jpg",
    hover: "패딩자켓Red레드.jpg",
  },
  {
    img: "몽고후디1.jpg",
    hover: "몽고후디.jpg",
  },
]

const new_el = document.querySelector("section.new")
const best_sellers = new_el.querySelector(".best_sellers")
const best__item_img = best_sellers.querySelectorAll("img")

// 이미지파일 자동등록
item.forEach((list, index) => {
  const img = item[index].img
  const hover = item[index].hover
  const figure_El = best__item_img[index].parentNode

  best__item_img[index].setAttribute("src", `./new/${img}`)
  figure_El.style["background-image"] = `url(./new/${hover})`
})
