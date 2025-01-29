// SlideShow
const slideShowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    const div = document.createElement("div");

    div.style.backgroundImage = `url("./images/slideshow/section-1-bg-${i}.jpg")`;
    1 === i && div.classList.add("change");
    document.querySelector(".slideshow").appendChild(div);
  }
};
slideShowDivs();
const divs = document.querySelectorAll(".slideshow div");
let a = 1;
const slideshow = () => {
  setInterval(() => {
    a++;

    const div = document.querySelector(".slideshow .change");
    div.classList.remove("change");
    if (a < divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      a = 1;
    }
  }, 20000);
};
slideshow();
// End Of SlideShow
