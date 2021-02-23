const dots = document.querySelectorAll(".dot");
const imgs = document.querySelectorAll("img");
let i = 0;

const showMenu = (() => {
  const menus = document.querySelectorAll(".menu");

  menus.forEach((element) => {
    element.addEventListener("click", () => {
      let hidden = element.querySelector(".hideMenu");
      if (hidden === null) {
        hidden = element.querySelector(".showMenu");
        hidden.className = "hideMenu";
      } else {
        hidden.className = "showMenu";
      }
    });
  });
});
showMenu();

const showImg = () => {
  imgs.forEach((element) => {
    element.className = "";
  });
  dots.forEach((dot) => {
    dot.className = "dot";
  });
  imgs[i].className = "activeImg";
  dots[i].classList.add("activeDot");
};
showImg();

const countUp = ()=> {
  if (i === 3) {
  i = 0;
} else {
  i++;
}};

const countDown = () => {
  if (i === 0) {
  i = 3;
} else {
  i--;
}};

const dotChangeImg = (()=>{
  const clickDots = Array.from(dots);
  clickDots.forEach((dot)=>{
    dot.addEventListener("click", ()=>{
      i = clickDots.indexOf(dot);
      showImg();
      countUp();
    });
  })
  
  });
dotChangeImg();

const previousChange = (()=> {
  const prvsBtn = document.querySelector(".prev");
  prvsBtn.addEventListener("click",()=>{
    countDown();
    showImg();
  })
});
previousChange();

const nextChange = (()=> {
  const nextBtn = document.querySelector(".next");
  nextBtn.addEventListener("click",()=>{
    countUp();
    showImg();
  })
});
nextChange();

const setDelay = (() =>  {
  setInterval(() => {
    showImg();
    countUp();
}, 2000)});
setDelay();