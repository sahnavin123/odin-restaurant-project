const menu = () => {
  const content = document.getElementById("content");
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const teaContainer = document.createElement("div");
  teaContainer.classList.add("child-container");
  const teaDescContainer = document.createElement("div");
  teaDescContainer.classList.add("desc-container");
  const honeyTea = document.createElement("h4");
  honeyTea.classList.add("sub-heading");
  honeyTea.innerText = "Honey Tea";
  const honeyTeaDesc = document.createElement("p");
  honeyTeaDesc.classList.add("text");
  honeyTeaDesc.innerText =
    "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
  const honeyTeaPrice = document.createElement("p");
  honeyTeaPrice.classList.add("text");
  honeyTeaPrice.innerText = "$2";
  const honeyTeaImg = document.createElement("img");
  honeyTeaImg.src =
    "https://www.niir.org/blog/wp-content/uploads/2021/05/gc-200x300.png";
  honeyTeaImg.alt = "honeyTea - Image";
  honeyTeaImg.style.height = "200px";

  teaContainer.appendChild(honeyTeaImg);
  teaDescContainer.appendChild(honeyTea);
  teaDescContainer.appendChild(honeyTeaDesc);
  teaDescContainer.appendChild(honeyTeaPrice);
  teaContainer.appendChild(teaDescContainer);
  mainContainer.appendChild(teaContainer);

  const fruitContainer = document.createElement("div");
  fruitContainer.classList.add("child-container");
  const fruitDescContainer = document.createElement("div");
  fruitDescContainer.classList.add("desc-container");
  const fruitSalad = document.createElement("h4");
  fruitSalad.classList.add("sub-heading");
  fruitSalad.innerText = "Fresh Fruit";
  const fruitSaladDesc = document.createElement("p");
  fruitSaladDesc.classList.add("text");
  fruitSaladDesc.innerText =
    "A small bowl of fresh fruit, whatever we find at the market for the day.";
  const fruitSaladPrice = document.createElement("p");
  fruitSaladPrice.classList.add("text");
  fruitSaladPrice.innerText = "$4";
  const fruitSaladImg = document.createElement("img");
  fruitSaladImg.src =
    "https://www.californiastrawberries.com/wp-content/uploads/2021/05/Rainbow-Fruit-Salad-1024-500x500.jpg";
  fruitSaladImg.alt = "fruit salad img";
  fruitSaladImg.style.height = "200px";

  fruitContainer.appendChild(fruitSaladImg);
  fruitDescContainer.appendChild(fruitSalad);
  fruitDescContainer.appendChild(fruitSaladDesc);
  fruitDescContainer.appendChild(fruitSaladPrice);
  fruitContainer.appendChild(fruitDescContainer);
  mainContainer.appendChild(fruitContainer);

  content.appendChild(mainContainer);
};

export default menu;
