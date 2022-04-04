let pinkItemOe = document.querySelectorAll(".itemssProvider");
console.log(pinkItemOe);

// function pItemOne(element) {
//     element.style.backgroundColor=' rgba(254, 60, 81, 1 )';
// }

function changeColorProvider(arrayItem) {
  arrayItem.forEach((element, index) => {
    element.style.backgroundColor = "rgba(255, 255, 255, 1)";
    element.children[1].style.color = "black";
    element.children[2].style.color = "black";
  });
}
pinkItemOe.forEach((element, index) => {
  element.addEventListener("click", () => {
    changeColorProvider(pinkItemOe);
    element.style.backgroundColor = " rgba(254, 60, 81, 1 )";
    element.children[1].style.color = "rgba(255, 255, 255, 1)";
    element.children[2].style.color = "rgba(255, 255, 255, 1)";

    console.log(element);
  });
});

let clikedItem = document.querySelector(".liFirst");
let rotatedPic = document.querySelector(".el6img");
let rotate = 360;
clikedItem.addEventListener("click", () => {
  if (rotate == 360) {
    rotate = 0;
  } else {
    rotate = 360;
  }
  rotatedPic.style.transition = "all 5s";
  rotatedPic.style.transform = `rotate(${rotate}deg)`;
});

let circyle = document.querySelectorAll(".menuList");

function changeCircyleColor(itemCircyle) {
  itemCircyle.forEach((element, index) => {
    element.children[0].style.backgroundColor = "rgba(247, 246, 254, 1)";
  });
}
circyle.forEach((element, index) => {
  console.log(element);
  element.addEventListener("click", () => {
    changeCircyleColor(circyle);
    element.children[0].style.backgroundColor = "rgba(254, 60, 81, 1)";
    console.log(element);
  });
});

let sixthItem = document.querySelectorAll(".sixthItemOne");
console.log(sixthItem);
function changeSixthItemColor(item) {
  item.forEach((element, index) => {
    element.style.backgroundColor = "rgba(255, 255, 255,1)";
  });
}
sixthItem.forEach((element, index) => {
  element.addEventListener("click", () => {
    changeSixthItemColor(sixthItem);
    element.style.backgroundColor = " rgba(255, 248, 248, 1)";
  });
});
