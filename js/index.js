console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let number = 1; number <= filledStars; number++) {
    console.log("filled ", number);
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", "assets/star-filled.svg");
    imageElement.addEventListener("click", () => {
      renderStars(number);
    });
    starContainer.append(imageElement);
  }
  for (let number = filledStars + 1; number <= 5; number++) {
    console.log("empty ", number);
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", "assets/star-empty.svg");
    imageElement.addEventListener("click", () => {
      renderStars(number);
    });
    starContainer.append(imageElement);
  }
  //--^-- your code here --^--
}
renderStars(2);
