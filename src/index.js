const sourceImage = [
  "https://i.pinimg.com/originals/8a/0a/86/8a0a866740699aa2b050cb5bdc276764.jpg",
  "https://i.pinimg.com/originals/7c/9d/8d/7c9d8d7de0e98e9e32b977956233d801.jpg",
  "https://i.pinimg.com/originals/22/b1/87/22b1879f82d6255bf65c5855598d1e2d.jpg",
  "https://i.pinimg.com/originals/57/43/34/5743343d80dfe78c32aa8c388b8d8126.png",
  "https://i.pinimg.com/originals/81/bd/06/81bd06557f88db90d1e4a541491efef4.jpg",
  "https://i.pinimg.com/originals/99/df/af/99dfafca350e95b9a5a2a0448ab9f50b.jpg",
  "https://i.pinimg.com/originals/7f/10/60/7f10604885be56e6fcaaf49f13f57354.jpg",
  "https://i.pinimg.com/originals/ee/6f/34/ee6f3466215006ec663b03dc21d31458.jpg",
];

function createImageTag(source) {
  const container = document.getElementById("container");
  source.forEach((element) => {
    let tagDiv = document.createElement("div");
    let tagChildImage = document.createElement("img");
    let tagFrontImage = document.createElement("div");

    tagDiv.className = "cursor-pointer flipper relative";

    tagFrontImage.className = "w-full h-full front bg-slate-100 absolute";

    tagChildImage.className = "w-full h-full back absolute";
    tagChildImage.src = element;
    tagChildImage.alt = "image";

    tagDiv.appendChild(tagChildImage);
    tagDiv.appendChild(tagFrontImage);

    tagDiv.addEventListener("click", handleClickImage);
    container.appendChild(tagDiv);
  });
}

function suffleArray(arr) {
  const n = arr.length;
  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function handleClickImage(element) {
  const classList = element.currentTarget.classList;
  classList.toggle("flipped");
  const isCorrect = false;
  if (isCorrect) {
    element.currentTarget.removeEventListener("click", handleClickImage);
  } else {
    setTimeout(() => {
      classList.remove("flipped");
    }, 2000);
  }
}

function run() {
  const listImage = suffleArray([...sourceImage, ...sourceImage]);
  createImageTag(listImage);
}
run();
