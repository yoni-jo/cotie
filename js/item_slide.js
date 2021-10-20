const showing_el = document.querySelector(".showing")
const arrow_btn = document.querySelector(".arrow_btn")
const best_sellers = document.querySelector(".best_sellers")
const best__item = document.querySelector(".best__item")
const bullet = document.querySelector(".bullet")
const dot = document.querySelectorAll(".dot")
let count = 0
const SHOW = "show"

arrow_btn.addEventListener("click", (e) => {
  //   dot.forEach((dot) => {
  //     dot.classList.remove(SHOW)
  //   })
  const target = e.target

  if (target.className === "prev") {
    console.log(count)
    if (count > 0) {
      count--

      best_sellers.style.transform = `translateX(${
        best__item.clientWidth * -count
      }px)`
      console.log(count)
      //   dot[count].classList.add(SHOW)
    }
    // else {
    //   count = 4
    //   best_sellers.style.transform = `translateX(-${
    //     best__item.clientWidth * count
    //   }px)`
    //   //   dot[count].classList.add(SHOW)
    // }
  } else {
    if (count < 4) {
      count++
      best_sellers.style.transform = `translateX(-${
        best__item.clientWidth * count
      }px)`

      //   dot[count].classList.add(SHOW)
    }
    // else {
    //   count = 0
    //   best_sellers.style.transform = `translateX(-${
    //     best__item.clientWidth * count
    //   }px)`
    //   //   dot[count].classList.add(SHOW)
    // }
  }
})
