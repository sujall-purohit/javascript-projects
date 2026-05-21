const colors = [
  "gray",
  "white",
  "blue",
  "yellow",
  "red",
  "black",
  "green",
  "orange",
  "purple",
  "pink",
];

const body = document.body;
const container = document.querySelector(".buttons-container");

//Dynamically create buttons for each color in the colors array
colors.forEach((color) => {
  const button = document.createElement("span");

  button.className = "button";
  button.id = color;
  button.style.backgroundColor = color;

  container.appendChild(button);
  button.addEventListener("click", () => {
    changeBackgroundColor(color);
  });
});

//Chnage Color
const changeBackgroundColor = (color) => {
  body.style.backgroundColor = color;

  //Save Color
  localStorage.setItem("bgColor", color);

  //Change Text Color
  const darkColor = ["black", "blue", "purple", "green", "grey"];
  if (darkColor.includes(color)) {
    body.style.color = "white";
  } else {
    body.style.color = "black";
  }
};

//Load  Saved Color
const savedColor = localStorage.getItem("bgColor");
if (savedColor) {
  changeBackgroundColor(savedColor);
}
