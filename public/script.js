let main = document.getElementById("main");
let sliderPointers = document.querySelector(".slider-pointers");

let imageList = [
  "alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg",
  "christopher-jolly-GqbU78bdJFM-unsplash.jpg",
  "vlad-sargu-ItphH2lGzuI-unsplash.jpg",
];

let imageIndex = 0;
let sliderIndex = -1;

function changeImage() {
  main.style.backgroundImage = `url(img/${imageList[imageIndex]})`;
  imageIndex++;
  if (imageIndex >= imageList.length) {
    imageIndex = 0;
  }
}

function changeSliderPointer() {
  if (sliderIndex >= 0) {
    sliderPointers.children[sliderIndex].classList.remove("selected");
  }
  sliderIndex++;
  if (sliderIndex >= imageList.length) {
    sliderIndex = 0;
  }
  sliderPointers.children[sliderIndex].classList.add("selected");
}

function myCoroutine() {
  setTimeout(() => {
    console.log("Coroutine called");
    changeImage();
    changeSliderPointer();
    myCoroutine();
  }, 5000);
}

window.addEventListener("load", () => {
  myCoroutine();
  for (let i = 0; i < imageList.length; i++) {
    let html = `
        <a class="pointer"></a>
    `;
    sliderPointers.insertAdjacentHTML("beforeend", html);
  }
});
