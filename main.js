/* lear */
/* Random Color Palette Generator */

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("blurred");

  const switchBtn = document.querySelector(".switch-btn");

  const refreshBtn = document.querySelector(".refresh-btn");
  const colorSpaces = document.querySelectorAll(".color-space");
  const textSpaces = document.querySelectorAll(".text-space");

  const hexColorCodes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let colorList = [];

  switchBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-body");
    switchBtn.innerHTML =
      switchBtn.innerHTML == '<i class="fa fa-sun-o"></i>'
        ? '<i class="fa fa-moon-o"></i>'
        : '<i class="fa fa-sun-o"></i>';
  });

  refreshBtn.addEventListener("click", () => {
    colorList = [];

    for (let i = 0; i < 10; i++) {
      let colorText = "#";
      for (let j = 0; j < 6; j++) {
        colorText +=
          hexColorCodes[Math.floor(hexColorCodes.length * Math.random())];
      }
      colorList.push(colorText);
    }

    for (let i = 0; i < 10; i++) {
      colorSpaces[i].style.backgroundColor = colorList[i];
      textSpaces[i].innerHTML = colorList[i];
    }
  });
});
