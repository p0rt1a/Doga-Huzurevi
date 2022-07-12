let main = document.getElementById("main");

let imageList = [
  "alexandra-gorn-JIUjvqe2ZHg-unsplash.jpg",
  "christopher-jolly-GqbU78bdJFM-unsplash.jpg",
  "vlad-sargu-ItphH2lGzuI-unsplash.jpg",
];

let index = 0;

function changeImage() {
  main.style.backgroundImage = `url(img/${imageList[index]})`;
  index++;
  if (index >= imageList.length) {
    index = 0;
  }
}

function myCoroutine() {
  setTimeout(() => {
    console.log("Coroutine called");
    changeImage();
    myCoroutine();
  }, 5000);
}

window.addEventListener("load", () => {
  myCoroutine();
});
