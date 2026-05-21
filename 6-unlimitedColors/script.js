let randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId;

const statusText = document.querySelector(".status");

const startChangingColor = function () {

  if (!intervalId) {

    intervalId = setInterval(changeBgColor, 1000);

    statusText.innerHTML = "Color changing started...";
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {

  clearInterval(intervalId);

  intervalId = null;

  statusText.innerHTML = "Color changing stopped.";
};

document.querySelector("#start")
  .addEventListener("click", startChangingColor);

document.querySelector("#stop")
  .addEventListener("click", stopChangingColor);