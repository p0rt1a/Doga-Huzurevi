let main = document.getElementById("main");
let sliderPointers = document.querySelector(".slider-pointers");
let pointerList = [];

let imageList = [
  "alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg",
  "christopher-jolly-GqbU78bdJFM-unsplash.jpg",
  "vlad-sargu-ItphH2lGzuI-unsplash.jpg",
];

let index = -1;

function slide(ind) {
  main.style.backgroundImage = `url(img/${imageList[ind]})`;
  clearSelectedPointer();
  sliderPointers.children[ind].classList.add("selected");
}

function clearSelectedPointer() {
  for (let i = 0; i < pointerList.length; i++) {
    sliderPointers.children[i].classList.remove("selected");
  }
}

function myCoroutine() {
  setTimeout(() => {
    index++;
    if (index >= imageList.length) {
      index = 0;
    }
    slide(index);
    myCoroutine();
  }, 5000);
}

window.addEventListener("load", () => {
  for (let i = 0; i < imageList.length; i++) {
    let html = `
        <a class="pointer"></a>
    `;
    sliderPointers.insertAdjacentHTML("beforeend", html);
  }
  pointerList = document.querySelectorAll(".pointer");
  createPointerEvents();
  myCoroutine();
});

function createPointerEvents() {
  for (let i = 0; i < pointerList.length; i++) {
    pointerList[i].addEventListener("click", () => {
      let pointerIndex = i;
      slide(pointerIndex);
      index = pointerIndex;
    });
  }
}
